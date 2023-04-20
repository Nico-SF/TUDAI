const refreshButton = document.getElementById('refreshCaptcha');
const sendButton = document.getElementById('sendCaptcha');
const captchaLength = 5;
let captcha = "";
generateCaptcha(); 

function generateCaptcha() {
  document.getElementById("validation").innerHTML = "<h2></h2>";
  captcha = "";
  let characters = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ1234567890!#$%&/()=?¡¿*]";
  for (let i = 0; i <= captchaLength; i++) {
    captcha += characters[Math.floor(Math.random() * (characters.length - 1))];
  }
  document.getElementById("captcha").innerHTML = captcha;
}

function validateCaptcha() {
  let enteredValue = document.getElementById("enteredCaptcha").value;
  let validation = "";
  if (captcha === enteredValue) {
    validation = "<h2> ¡Enviado! </h2>"
  } else {
    validation = "<h2> Incorrecto </h2>";
  }
  document.getElementById("validation").innerHTML = validation;
}

refreshButton.addEventListener('click', generateCaptcha);
sendButton.addEventListener('click', validateCaptcha);