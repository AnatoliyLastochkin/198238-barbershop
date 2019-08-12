'use strict';
function loginPopup() {

const loginLink = document.querySelector('.login-link');
const popupLogin = document.querySelector('.modal-login');
const closeButton = popupLogin.querySelector('.modal-close');
const loginForm = popupLogin.querySelector('form')
const loginField = popupLogin.querySelector('[name=login]');
const passwordField = popupLogin.querySelector('[name=password]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false
}


loginLink.addEventListener('click', evt => {
  evt.preventDefault();

  popupLogin.classList.add('modal-show');

  if (storage) {
    loginField.value = storage;
    passwordField.focus();
  } else {
    loginField.focus();
  }
});

closeButton.addEventListener('click', evt => {
  evt.preventDefault();

  popupLogin.classList.remove('modal-show');
  popupLogin.classList.remove('modal-error');
});

loginForm.addEventListener('submit', evt => {
  if (!loginField.value || !passwordField.value) {
    evt.preventDefault();
    popupLogin.classList.add('modal-error')
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', loginField.value);
    }
  }
});

window.addEventListener('keydown', evt => {
  if (evt.keyCode === 27) {
    evt.preventDefault()
    if (popupLogin.classList.contains('modal-show')) {
      popupLogin.classList.remove('modal-show');
      popupLogin.classList.remove('modal-error');
    }
  }
});

}
loginPopup();

function mapPopup() {
  const mapLink = document.querySelector('.button-map');
  const mapPopup = document.querySelector('.modal-map');
  const mapClose = mapPopup.querySelector('.modal-close');

  mapLink.addEventListener('click', evt => {
    evt.preventDefault();
    mapPopup.classList.add('modal-show')
  });

  mapClose.addEventListener('click', evt => {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', evt => {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        mapPopup.classList.remove('modal-show');
      }
    }
  });
}
mapPopup();
