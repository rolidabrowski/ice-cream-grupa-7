(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-contacts__modal-open-fr]'),
      closeModalBtn: document.querySelector('[data-contacts__modal-close-fr]'),
      modal: document.querySelector('[data-contacts__modal-fr]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();