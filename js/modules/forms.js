import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
  // Forms
  const forms = document.querySelectorAll(formSelector);
      
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы в сами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img'),
            dataJson = formToJSON(form);

      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      postData('http://localhost:3000/requests', dataJson)
      .then(data => {
          console.log(data); //ответ
          showThanksModal(message.success);
          statusMessage.remove();
      }).catch((e) => {
          console.log(e);
          showThanksModal(message.failure);
      }).finally(() => {
          form.reset();
      });
    });
  }


  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal('.modal', modalTimerId);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
          <div class="modal__close" data-close>×</div>
          <div class="modal__title">${message}</div>
      </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal('.modal');
    }, 4000);
  }

  function formToJSON(elem) {
    const formData = new FormData(elem),
          json = JSON.stringify(Object.fromEntries(formData.entries()));

    return json;
  }
}

export default forms;