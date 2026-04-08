import styles from './Page.module.css'
import { fetchTeachers } from '../../lib/data'
import UpsertTeacherForm from './components/UpsertTeacherForm'
import { handlers, registerSubmit, registerClick } from '../../core/handlers'
import { deleteTeacher } from '../../lib/actions'
import render from '../../core/render'
import Modal from '../../components/shared/Modal'
import ConfirmForm from '../../components/shared/ConfirmForm'

export default async function Page() {
  const teachers = await fetchTeachers()
  const showModalUpsertTeacher = () => {
    handlers.openModal('createTeacher')
  }
  const showModalDeleteTeacher = (e) => {
    const confirmForm = document.querySelector('#confirmForm')
    const teacherid = e.target.attributes.getNamedItem('teacherid').value
    confirmForm.dataset.teacherid = teacherid
    handlers.openModal('deleteTeacher')
  }
  const idUpsert = registerClick(showModalUpsertTeacher)
  const idDelete = registerClick(showModalDeleteTeacher)

  const onConfirm = async () => {
    const confirmForm = document.querySelector('#confirmForm')
    const teacherId = confirmForm.dataset.teacherid
    const result = await deleteTeacher(teacherId)
    handlers.closeModal('deleteTeacher')
    handlers.showFlashMessage(result)
    render('#main', <Page />)
  }

  return (
    <div>
      <h1 class={styles.title}>Преподаватели</h1>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Преподаватель</th>
            <th>Сокращение</th>
            <th>Должность</th>
            <th>Цвет</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr>
              <td>{teacher.name}</td>
              <td>{teacher.fio}</td>
              <td>{teacher.position}</td>
              <td>{teacher.color}</td>
              <td><button teacherId={teacher.id} data-id={idDelete}>Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button data-id={idUpsert}>Добавить преподавателя</button>
      <Modal modalId="createTeacher">
        <UpsertTeacherForm closeId="createTeacher"/>
      </Modal>
      <Modal modalId="deleteTeacher">
        <ConfirmForm message="Подтвердите удаление преподавателя" onConfirm={onConfirm}/>
      </Modal>
    </div>
  )
}