import ContextMenu from './../ui/ContextMenu'

export const ui = {
  openModal: (modalId) => {
    document.getElementById(modalId).classList.add('show');
  },

  closeModal: () => {
    document.querySelector('.show').classList.remove('show');
  },

  showFlashMessage: ({ type, message }) => {
    const flashContainer = document.querySelector('.flash-message');
    if (!flashContainer) return;

    flashContainer.innerHTML = message;
    flashContainer.classList.add('show', type);

    setTimeout(() => {
      flashContainer.classList.remove('show', type);
      flashContainer.innerHTML = '';
    }, 3000);
  },

  showCustomMenu: (x, y, lesson) => {
    const contextMenu = document.querySelector('#contextMenu');

    if (contextMenu.classList.contains('show')) {
      contextMenu.classList.remove('show');
    }

    contextMenu.style.cssText = `
    position: fixed;
    top: ${y}px;
    left: ${x}px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
  `;

    contextMenu.classList.add('show');

    const closeMenu = (e) => {
      if (!contextMenu.contains(e.target)) {
        contextMenu.classList.remove('show');
        document.removeEventListener('click', closeMenu);
      }
    };

    document.addEventListener('click', closeMenu);
  },
};
