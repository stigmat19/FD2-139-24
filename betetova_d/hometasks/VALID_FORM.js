const form = document.forms.formValidation;

function focus() {
  if (!developersValidation()) {
    developers.focus();
  } else if (!nazvaniyesaytaValidation()) {
    nazvaniyesayta.focus();
  } else if (!urlValidation()) {
    url.focus();
  } else if (!datasiteValidation()) {
    datasite.focus();
  } else if (!visitorsValidation()) {
    visitors.focus();
  } else if (!onInput()) {
    email.focus();
  } else if (!checkValidation()) {
    check.focus();
  } else if (!descrValidation()) {
    descr.focus();
  }
}

form.addEventListener(
  "submit",
  function (event) {
    if (
      !developersValidation() |
      !nazvaniyesaytaValidation() |
      !urlValidation() |
      !datasiteValidation() |
      !visitorsValidation() |
      !onInput() |
      !radioValidation() |
      !checkValidation() |
      !descrValidation()
    ) {
      focus();
      event.preventDefault();
    }
  },
  false
);

const developersError = document.getElementById("developers_error");
const developers = form.elements.developers;
developers.onblur = developersValidation;
developers.onfocus = developersReset;
function developersValidation() {
  const developersValue = developers.value;

  if (!developersValue) {
    developers.classList.add("invalid");
    developersError.innerHTML = "Поле заполнено неверно";
    return false;
  } else if (developersValue.search(/\d/) != -1) {
    developers.classList.add("invalid");
    developersError.innerHTML = "Имя не может содержать цифры";
    return false;
  } else if (developersValue.length > 10) {
    developers.classList.add("invalid");
    developersError.innerHTML = "Имя не должно содержать более 10 символов";
    return false;
  }
  return true;
}
function developersReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    developersError.innerHTML = "";
  }
}

const nazvaniyesaytaError = document.getElementById("nazvaniyesayta_error");
const nazvaniyesayta = form.elements.nazvaniyesayta;
nazvaniyesayta.onblur = nazvaniyesaytaValidation;
nazvaniyesayta.onfocus = nazvaniyesaytaReset;
function nazvaniyesaytaValidation() {
  const nazvaniyesaytaValue = nazvaniyesayta.value;

  if (!nazvaniyesaytaValue) {
    nazvaniyesayta.classList.add("invalid");
    nazvaniyesaytaError.innerHTML = "Поле заполнено неверно";
    return false;
  } else if (nazvaniyesaytaValue.length > 10) {
    nazvaniyesayta.classList.add("invalid");
    nazvaniyesaytaError.innerHTML =
      "Название сайта не должно содержать более 10 символов";
    return false;
  }
  return true;
}
function nazvaniyesaytaReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    nazvaniyesaytaError.innerHTML = "";
  }
}

const urlError = document.getElementById("url_error");
const url = form.elements.url;
const pattern = new URLPattern({ protocol: "(https?)" });
url.onblur = urlValidation;
url.onfocus = urlReset;
function urlValidation() {
  const urlVsalue = url.value;
  if (!urlVsalue) {
    url.classList.add("invalid");
    urlError.innerHTML = "Поле заполнено неверно";
    return false;
  } else if (!pattern.test(urlVsalue)) {
    url.classList.add("invalid");
    urlError.innerHTML = "Поле не содержит URL адреса";
    return false;
  }
  return true;
}
function urlReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    urlError.innerHTML = "";
  }
}

const datasiteError = document.getElementById("datasite_error");
const datasite = form.elements.datasite;
datasite.onblur = datasiteValidation;
datasite.onfocus = datasiteReset;
function datasiteValidation() {
  const datasiteValue = datasite.value;
  if (!datasiteValue) {
    datasite.classList.add("invalid");
    datasiteError.innerHTML = "Поле заполнено неверно";
    return false;
  }
  return true;
}
function datasiteReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    datasiteError.innerHTML = "";
  }
}

const visitorsError = document.getElementById("visitors_error");
const visitors = form.elements.visitors;
visitors.addEventListener("keydown", function (event) {
  if (
    (event.keyCode < 48 || event.keyCode > 57) &&
    (event.keyCode < 96 || event.keyCode > 105)
  ) {
    event.preventDefault();
  }
});
visitors.onblur = visitorsValidation;
visitors.onfocus = visitorsReset;
function visitorsValidation() {
  const visitorsValue = visitors.value;
  if (!visitorsValue) {
    visitors.classList.add("invalid");
    visitorsError.innerHTML = "Поле заполнено неверно";
    return false;
  }
  return true;
}
function visitorsReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    visitorsError.innerHTML = "";
  }
}

const emailError = document.getElementById("email_error");
const email = form.elements.email;
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
email.onblur = onInput;
email.onfocus = emailReset;
function onInput() {
  if (!email.value) {
    email.classList.add("invalid");
    emailError.innerHTML = "Поле заполнено неверно";
    return false;
  } else if (!isEmailValid(email.value)) {
    email.classList.add("invalid");
    emailError.innerHTML = "Поле должно содержать @";
    return false;
  }
  return true;
}
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
function emailReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    emailError.innerHTML = "";
  }
}

const vipError = document.getElementById("VIP_error");
const radioBtn = document.getElementsByClassName("radio");
radioBtn[0].onchange = radioReset;
radioBtn[1].onchange = radioReset;
radioBtn[2].onchange = radioValidation;
function radioValidation() {
  const radioValue = form.elements.radio.value;
  if (
    radioBtn[0].checked == false &&
    radioBtn[1].checked == false &&
    radioBtn[2].checked == false
  ) {
    vipError.innerHTML = "Выберите один из вариантов";
    return false;
  } else if (radioValue == "3") {
    vipError.innerHTML = "VIP размещение недоступно. Выберите другое";
    return false;
  }
  return true;
}
function radioReset() {
  for (let but of radioBtn) {
    if (but.checked == true) {
      but.checked = true;
      vipError.innerHTML = "";
    }
  }
}

const checkError = document.getElementById("check_error");
const check = form.elements.check;
function checkValidation() {
  const check = form.elements.check.checked;
  if (!check) {
    checkError.innerHTML = "Проверьте наличие галочки";
    return false;
  }
  return true;
}

const descrError = document.getElementById("descr_error");
const descr = form.elements.descr;
descr.onblur = descrValidation;
descr.onfocus = descrReset;
function descrValidation() {
  const descrVsalue = descr.value;
  if (!descrVsalue) {
    descrError.innerHTML = "Поле заполнено неверно";
    descr.classList.add("invalid");
    return false;
  }
  return true;
}
function descrReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    descrError.innerHTML = "";
  }
}
