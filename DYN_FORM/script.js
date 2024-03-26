const formDef1 =
  [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
    {
      label: 'Рубрика каталога:', kind: 'combo', name: 'division',
      variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
    },
    {
      label: 'Размещение:', kind: 'radio', name: 'payment',
      variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
    },
    { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { caption: 'Опубликовать', kind: 'submit' },
  ];

const formDef2 =
  [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { caption: 'Зарегистрироваться', kind: 'submit' },
  ];


function createForm(name, arr) {
  arr.forEach(element => {
    
      const lab = document.createElement('label');
      lab.innerHTML = element.label||'';

      name.appendChild(lab);
    
    const br = document.createElement('br');
    const inp = document.createElement('input');
    switch (element.kind) {
      case 'longtext':
        inp.type = 'text';
        inp.size = '50';
        lab.appendChild(inp);
        lab.appendChild(br);
        break;
      case 'number':
        inp.type = 'number';
        inp.size = '10';
        lab.appendChild(inp);
        lab.appendChild(br);
        break;
      case 'submit':
        inp.type = 'submit';
        inp.value = element.caption;
        lab.appendChild(inp);
        lab.appendChild(br);
        break;
    }


  });


}
createForm(document.forms.form2, formDef1)