const form_1 = document.forms.form_1;
const form_2 = document.forms.form_2;

const formDef1 = [
  { label: "Название сайта:", kind: "longtext", name: "sitename" },
  { label: "URL сайта:", kind: "longtext", name: "siteurl" },
  { label: "Посетителей в сутки:", kind: "number", name: "visitors" },
  { label: "E-mail для связи:", kind: "shorttext", name: "email" },
  {
    label: "Рубрика каталога:",
    kind: "combo",
    name: "division",
    variants: [
      { text: "здоровье", value: 1 },
      { text: "домашний уют", value: 2 },
      { text: "бытовая техника", value: 3 },
    ],
  },
  {
    label: "Размещение:",
    kind: "radio",
    name: "payment",
    variants: [
      { text: "бесплатное", value: 1 },
      { text: "платное", value: 2 },
      { text: "VIP", value: 3 },
    ],
  },
  { label: "Разрешить отзывы:", kind: "check", name: "votes" },
  { label: "Описание сайта:", kind: "memo", name: "description" },
  { caption: "Опубликовать", kind: "submit" },
];

const formDef2 = [
  { label: "Фамилия:", kind: "longtext", name: "lastname" },
  { label: "Имя:", kind: "longtext", name: "firstname" },
  { label: "Отчество:", kind: "longtext", name: "secondname" },
  { label: "Возраст:", kind: "number", name: "age" },
  { caption: "Зарегистрироваться", kind: "submit" },
];
function getForm(form, arr) {
  for(let key of arr) {
    const label = document.createElement("label");
    label.className = "lab";
    const input = document.createElement("input");
    input.className = "inp";
    const textarea = document.createElement("textarea");
    textarea.className = "area";
    const select = document.createElement("select");
    select.className = "sel";

    label.innerHTML = key.label || "";
    form.appendChild(label);

    switch (key.kind) {
      case "longtext": {
        input.type = "text";
        input.name = key.name;
        label.appendChild(input);
        break;
      }
      case "number": {
        input.type = "number";
        input.name = key.name;
        label.appendChild(input);
        break;
      }
      case "shorttext": {
        input.type = "email";
        input.name = key.name;
        label.appendChild(input);
        break;
      }
  
      case "combo": {
        select.name = key.name;
        label.appendChild(select);
        key.variants.forEach((element) => {
          const option = document.createElement("option");
          option.name = element.name;
          option.value = element.value;
          option.innerHTML = element.text;
          select.appendChild(option);
          for (let i = 0; i < select.length; i++) {
            if (select[i].value == '3')
              select[i].selected = true;
          }
        });
        break;
      }
      case "radio": {
        key.variants.forEach((element) => {
          const p = document.createElement("p");
          p.className = "p";
          const input_radio = document.createElement("input");
          input_radio.type = "radio";
          input_radio.name = "radio";
          p.innerHTML = element.text;
          label.appendChild(input_radio);
          label.appendChild(p);
        });
        break;
      }
      case "check": {
        input.type = "checkbox";
        input.checked = true;
        input.name = key.name;
        label.appendChild(input);
        break;
      }
      case "memo": {
        textarea.name = key.name;
        label.appendChild(textarea);
        break;
      }
      case "submit": {
        input.type = "submit";
        input.value = key.caption;
        input.className = "button";
        label.appendChild(input);
        break;
      }
    }
  };

getForm(form_1, formDef1);
getForm(form_2, formDef2);
