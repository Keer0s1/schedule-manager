import { handlers, registerHandler } from "../../core/handlers"

export default function Modal({ modalId, children }) {
  const onClose = () => {
    handlers.closeModal(modalId)  
  }

  const closeBtnId = registerHandler(onClose)
  
  return (
    <div id={modalId} class='modal-overlay hidden'>
      <div class="modal">
      <button data-id={closeBtnId} class="modal-close" type="button" aria-label="Закрыть">&times;</button>
        {children}
      </div>
    </div>)
}
