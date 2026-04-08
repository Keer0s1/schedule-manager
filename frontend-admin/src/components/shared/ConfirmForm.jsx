import { registerHandler } from '../../core/handlers'
import styles from './ConfirmForm.module.css'

export default function ConfirmForm({ message, onConfirm }) {
  const id = registerHandler(onConfirm)
  
  return (
    <form class={styles.confirmForm} data-id={id} id="confirmForm">
      <p class={styles.message}>{message}</p>
      <div class={styles.actions}>
        <button type="submit" class={styles.submitBtn}>ОК</button>
        <button type="button" class={styles.cancelBtn}>Отмена</button>
      </div>
    </form>
  )
}