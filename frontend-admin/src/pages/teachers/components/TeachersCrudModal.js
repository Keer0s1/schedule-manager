import Modal from '../../../components/ui/Modal'
import styles from './TeachersCrudModal.module.css'
import { registerHandler } from '../../../core/init'

export default function TeachersCrudModal() {
  const onSubmit = (e) => {
    console.log(1, e)
  }

  const id = registerHandler(onSubmit)

  const form = `
  <form class="${styles.modal}" data-id="${id}">
    <h3>Добавить преподавателя</h3>
    <input type="text" id="fio" placeholder="ФИО" />
    <input type="text" id="abbr" placeholder="Сокращение" />
    <input type="text" id="position" placeholder="Должность" />
    <button type="submit">Добавить</button>
  </form>
  `

  return `${Modal(form)}`
}
