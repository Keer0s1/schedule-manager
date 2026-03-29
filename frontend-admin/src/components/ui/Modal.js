export default function Modal(form) {
  return `
    <div class="modal-overlay hidden">
      <div class="modal">
        <button data-id="closeModal" class="modal-close" type="button" aria-label="Закрыть">&times;</button>
        ${form}
      </div>
    </div>
  `
}
