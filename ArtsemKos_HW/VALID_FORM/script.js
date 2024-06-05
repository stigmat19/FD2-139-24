const form = document.forms.web;
form.addEventListener('submit', validateInfoForm, false);

form.elements.dev.addEventListener('keydown',delError,false);
function delError(eo){
    eo = eo || window.event;
   if(form.elements.dev.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.dev.nextSibling.textContent = ''
   }
}

form.elements.nameweb.addEventListener('keydown',delError1,false);
function delError1(eo){
    eo = eo || window.event;
   if(form.elements.nameweb.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.nameweb.nextSibling.textContent = ''
   }
}

form.elements.url.addEventListener('keydown',delError2,false);
function delError2(eo){
    eo = eo || window.event;
   if(form.elements.url.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.url.nextSibling.textContent = ''
   }
}

form.elements.data.addEventListener('mousedown',delError3,false);
function delError3(eo){
    eo = eo || window.event;
   if(form.elements.data.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.data.nextSibling.textContent = ''
   }
}

form.elements.data.addEventListener('keydown',delError31,false);
function delError31(eo){
    eo = eo || window.event;
   if(form.elements.data.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.data.nextSibling.textContent = ''
   }
}

form.elements.pers.addEventListener('keydown',delError4,false);
function delError4(eo){
    eo = eo || window.event;
   if(form.elements.pers.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.pers.nextSibling.textContent = ''
   }
}

form.elements.pers.addEventListener('mousedown',delError5,false);
function delError5(eo){
    eo = eo || window.event;
   if(form.elements.pers.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.pers.nextSibling.textContent = ''
   }
}

form.elements.mail.addEventListener('keydown',delError6,false);
function delError6(eo){
    eo = eo || window.event;
   if(form.elements.mail.nextSibling.textContent === ' Поле не заполненео!' ){
    form.elements.mail.nextSibling.textContent = ''
   }
}

form.elements.mail.addEventListener('keydown',delError7,false);
function delError7(eo){
    eo = eo || window.event;
   if(form.elements.mail.nextSibling.textContent === ' В адресе должен быть символ "@"' ){
    form.elements.mail.nextSibling.textContent = ''
   }
}

function validateInfoForm(eo) {
    eo = eo || window.event;
    try {
        const form = document.forms.web;
        const error = document.createElement('span');
        error.style.color = 'red';
        error.innerHTML = ' Поле не заполненео!';

        const error1 = document.createElement('span');
        error1.style.color = 'red';
        error1.innerHTML = ' В адресе должен быть символ "@"';

        const error2 = document.createElement('span');
        error2.style.color = 'red';
        error2.innerHTML = '  Сделайте выбор!';

        const devField = form.elements.dev;
        const devValue = devField.value;

        const namewebField = form.elements.nameweb;
        const namewebValue = namewebField.value;

        const urlField = form.elements.url;
        const urlValue = urlField.value;

        const dataField = form.elements.data;
        const dataValue = dataField.value;

        const persField = form.elements.pers;
        const persValue = persField.value;

        const mailField = form.elements.mail;
        const mailValue = mailField.value;
        const splitMail = mailValue.split('');

        const accomField = form.elements.accom;
        const accomValue = accomField.value;
        
        if (!devValue) {
            eo.preventDefault();
            const next = devField.nextSibling.textContent;
            if (next !== ' Поле не заполненео!') {
                devField.after(error);
            }
            devField.focus();
            return;
        }

        if (!namewebValue) {
            eo.preventDefault();
            const next = namewebField.nextSibling.textContent;
            if (next !== ' Поле не заполненео!') {
                namewebField.after(error);
            }
            namewebField.focus();
            return;
        }

        if (!urlValue) {
            eo.preventDefault();
            const next = urlField.nextSibling.textContent;
            if (next !== ' Поле не заполненео!') {
                urlField.after(error);
            }
            urlField.focus();
            return;
        }

        if (!dataValue) {
            eo.preventDefault();
            const next = dataField.nextSibling.textContent;
            if (next !== ' Поле не заполненео!') {
                dataField.after(error);
            }
            dataField.focus();
            return;
        }

        if (!persValue) {
            eo.preventDefault();
            const next = persField.nextSibling.textContent;
            if (next !== ' Поле не заполненео!') {
                persField.after(error);
            }
            persField.focus();
            return;
        }

        if (!mailValue) {
            eo.preventDefault();
            const next = mailField.nextSibling.textContent;
            if (next !== ' Поле не заполненео!') {
                mailField.after(error);
            }
            mailField.focus();
            return;
        }

        if(!splitMail.includes('@')){
           eo.preventDefault();
           const next = mailField.nextSibling.textContent;
           if (next !== ' В адресе должен быть символ "@"') {
                mailField.after(error1);
            }
            mailField.focus();
            return;
        }

        if (accomValue==='') {
            eo.preventDefault();
            const inp = document.getElementById('accom1');
            const next = inp.nextSibling.textContent;
            
            if (next !== '  Сделайте выбор!') {
                inp.after(error2);
            }
            return;
        }
    }

    catch (ex) {
        console.log(ex);
        alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
        eo.preventDefault();
    }
}