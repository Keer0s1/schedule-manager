import styles from './UpsertTeacherForm.module.css'
import { handlers, registerHandler } from '../../../core/handlers'
import { createTeacher } from '../../../lib/actions'
import render from '../../../core/render'
import Page from '../Page'

export default function TeachersCrudModal() {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      fio: formData.get('fio'),
      abbr: formData.get('abbr'),
      position: formData.get('position'),
    }
    const result = await createTeacher(data)
    handlers.closeModal('upsertTeacher')
    handlers.showFlashMessage(result)
    render('#main', <Page />)
  }

  const formId = registerHandler(onSubmit)

  return (
    <form class={styles.modal} data-id={formId}>
      <h3>Добавить преподавателя</h3>
      <input type="text" name="fio" placeholder="ФИО" required />
      <input type="text" name="abbr" placeholder="Сокращение" required />
      <input type="text" name="position" placeholder="Должность" />
      <button type="submit">Добавить</button>
    </form>
  )
}