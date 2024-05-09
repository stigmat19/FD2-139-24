function createForm(name, arr) {
    arr.forEach(element => {
  
      const lab = document.createElement('label');
      lab.innerHTML = element.label || '';
  
      name.appendChild(lab);
  
      const br = document.createElement('br');
      const inp = document.createElement('input');
      const sel = document.createElement('select');
      const text = document.createElement('textarea');
  
  
      switch (element.kind) {
        case 'longtext':
          inp.type = 'text';
          inp.name = element.name;
          inp.size = '50';
          lab.appendChild(inp);
          lab.appendChild(br);
          break;
        case 'number':
          inp.type = 'number';
          inp.name = element.name;
          inp.size = '10';
          lab.appendChild(inp);
          lab.appendChild(br);
          break;
        case 'submit':
          inp.type = 'submit';
          inp.name = element.name;
          inp.value = element.caption;
          lab.appendChild(inp);
          lab.appendChild(br);
          break;
        case 'shorttext':
          inp.type = 'email';
          inp.name = element.name;
          inp.size = '10';
          lab.appendChild(inp);
          lab.appendChild(br);
          break;
  
        case 'combo':
          sel.name = lab.name
          lab.appendChild(sel);
          element.variants.forEach(elements => {
            const opt = document.createElement('option');
            opt.name = elements.name;
            opt.innerHTML = elements.text
            opt.value = elements.value;
            sel.appendChild(opt);
          })
          lab.appendChild(br);
          break;
  
        case 'radio':
          element.variants.forEach(elements => {
            const radio = document.createElement('input');
            const span = document.createElement('span')
  
            radio.type = 'radio';
            radio.name = 'radio';
            span.innerHTML = elements.text;
  
            lab.appendChild(radio);
            lab.appendChild(span)
          })
          lab.appendChild(br);
          break;
  
        case 'check':
          inp.type = 'checkbox';
          inp.name = element.name;
          lab.appendChild(inp);
          lab.appendChild(br);
          break;
  
        case 'memo':
         text.name = element.name;
          lab.appendChild(text);
          // lab.insertBefore(br,text)
          lab.appendChild(br);
          break;
      }
    });
  
  }
  const formDef1 =
  [
    { label: 'Разработчики', kind: 'longtext', name: 'dew' },
    { label: 'Название сайта:', kind: 'longtext', name: 'siteName' },
    { label: 'URL сайта:', kind: 'longtext', name: 'URL' },
    { label: 'Дата запуска сайта:', kind: 'number', name: 'dataStart' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'personDay' },
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


  createForm(document.forms.form1, formDef1);