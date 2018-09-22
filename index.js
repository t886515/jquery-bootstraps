
window.onload = () => {
  this.init();
}

function init() {
  // register event listeners for click event
  this.addEventListeners();
}

function addEventListeners() {

  document.getElementById('submit-selection').addEventListener('click', () => {
    // check for input to ensure it's a valid email
    this.validateEmail();
    // if valid -> swap out another div

    // if invalid -> another div to ask users to try again
  })
};

function validateEmail() {
  console.log("in validate email");

  //TODO sanitize input

  return true; // validate
}

function onSuccessEmailSubmit() {
  // select the outer div
  // remove it
  // append another new div says thank you
}

function onFailEmailSubmit() {

  // select the outer div
  // append another div to the existing div

}
