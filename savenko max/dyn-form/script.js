
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

function createForm(formNum, element) {
    const form = document.getElementById(formNum)
    element.forEach(elem => {

        if (elem.kind == 'longtext'|| elem.kind == 'shorttext' ||elem.kind == 'number') {
            const label = document.createElement('label');
            label.textContent = elem.label + ':';
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', elem.name)
            label.appendChild(input)
            form.appendChild(label)
        }
    
        else if (elem.kind == 'combo') {
            const label = document.createElement('label');
            label.textContent = elem.label + ':';
            const select = document.createElement('select');
            select.setAttribute('name', elem.name)
            elem.variants.forEach(el => {
                const option = document.createElement('option');
                option.textContent = el.text
                option.setAttribute('value', el.value)
                select.appendChild(option)
            })
            label.appendChild(select)
            form.appendChild(label)
        }
        else if (elem.kind == 'radio') {
            const label = document.createElement('label');
            label.textContent = elem.label + ':';
            label.setAttribute('display', 'flex')
            elem.variants.forEach(element => {
                const input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', element.name);
                input.setAttribute('value', element.value);
                input.textContent = element.text
                label.appendChild(input)
            })
            form.appendChild(label)
        }
        else if(elem.kind == 'check'){
            const label = document.createElement('label');
            label.textContent = elem.label + ':';
            const input = document.createElement('input');
            input.setAttribute('type','checkbox');
            input.setAttribute('name', elem.name)
            label.appendChild(input)
            form.appendChild(label)
        }
        else if(elem.kind == 'memo'){
            const label = document.createElement('label');
            label.textContent = elem.label + ':';
            const input = document.createElement('input');
            input.setAttribute('type', 'textarea');
            label.appendChild(input)
            form.appendChild(label)
        }
        else if(elem.kind == 'submit'){
            const btn = document.createElement('button');
            btn.setAttribute('type', 'submit');
            btn.setAttribute('class', 'btn')
            btn.textContent = elem.caption
            form.appendChild(btn)
        }
    })
}
createForm('form1',formDef1 );
createForm('form2',formDef2 )
