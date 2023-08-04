import { Modal } from 'bootstrap';

import sendFormDataPOST from '../../../helpers/sendFormDataPOST';

const myModal = new Modal(document.getElementById('exampleModal'));

// id-questions-form

const $buttonCallbackSubmit = document.getElementById('callback-form-submit');

const addLoading = () => {
  if (!$buttonCallbackSubmit?.classList.contains('loading')) {
    $buttonCallbackSubmit?.classList.add('loading');
  }
};

const removeLoading = () => {
  if ($buttonCallbackSubmit?.classList.contains('loading')) {
    $buttonCallbackSubmit?.classList.remove('loading');
  }
};

const resultPOST = () => {
  removeLoading();
  myModal.hide();
};

sendFormDataPOST(
  'id-callback-form',
  'https://httpbin.org/post',
  addLoading,
  resultPOST
);
