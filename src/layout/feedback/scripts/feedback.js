import sendFormDataPOST from '../../../helpers/sendFormDataPOST';
// id-questions-form

const $buttonFeedbackSubmit = document.getElementById('questions-form-submit');

const addLoading = () => {
  if (!$buttonFeedbackSubmit?.classList.contains('loading')) {
    $buttonFeedbackSubmit?.classList.add('loading');
  }
};

const removeLoading = () => {
  if ($buttonFeedbackSubmit?.classList.contains('loading')) {
    $buttonFeedbackSubmit?.classList.remove('loading');
  }
};

sendFormDataPOST(
  'id-questions-form',
  'https://httpbin.org/post',
  addLoading,
  removeLoading
);
