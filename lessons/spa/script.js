"use strict";

// в закладке УРЛа будем хранить разделённые подчёркиваниями слова
// #Main - главная
// #Photo_55 - отобразить фото 55
// #About - о нас

// отслеживаем изменение закладки в УРЛе
// оно происходит при любом виде навигации
// в т.ч. при нажатии кнопок браузера ВПЕРЁД/НАЗАД
window.onhashchange = switchToStateFromURLHash;

// текущее состояние приложения
// это Model из MVC
var SPAState = {};

// фотографии, которые можно просмотреть


// вызывается при изменении закладки УРЛа
// а также при первом открытии страницы
// читает новое состояние приложения из закладки УРЛа
// и обновляет ВСЮ вариабельную часть веб-страницы
// соответственно этому состоянию
// это упрощённая реализация РОУТИНГА - автоматического выполнения нужных
// частей кода в зависимости от формы URLа
// "роутинг" и есть "контроллер" из MVC - управление приложением через URL
function switchToStateFromURLHash() {
    var URLHash = window.location.hash;

    // убираем из закладки УРЛа решётку
    // (по-хорошему надо ещё убирать восклицательный знак, если есть)
    var stateStr = URLHash.substr(1);

    if (stateStr != "") { // если закладка непустая, читаем из неё состояние и отображаем
        var parts = stateStr.split("_")
        SPAState = { pagename: parts[0] }; // первая часть закладки - номер страницы
        if (SPAState.pagename == 'Photo')
            SPAState.photoid = parts[1]; // для фото нужна ещё вторая часть закладки - номер фото
    }
    else
        SPAState = { pagename: 'Main' }; // иначе показываем главную страницу

    console.log('Новое состояние приложения:');
    console.log(SPAState);

    // обновляем вариабельную часть страницы под текущее состояние
    // это реализация View из MVC - отображение состояния модели в HTML-код
    var pageHTML = "";
    switch (SPAState.pagename) {
        case 'Main':
            pageHTML += renderAboutPage();
            break;
        case 'Photo':
            var photo = photos[SPAState.photoid];
            pageHTML += "<h3>Фото</h3>";
            pageHTML += "<img src='" + photo.image + "'>";
            pageHTML += "<p><i>" + photo.comment + "</i></p>";
            break;
        case 'About':
            pageHTML += "<h3>О нас</h3>";
            pageHTML += "<p>Мы круты!</p>";
            break;
    }
    document.getElementById('IPage').innerHTML = pageHTML;

}

// устанавливает в закладке УРЛа новое состояние приложения
// и затем устанавливает+отображает это состояние
function switchToState(newState) {
    // устанавливаем закладку УРЛа
    // нужно для правильной работы кнопок навигации браузера
    // (т.к. записывается новый элемент истории просмотренных страниц)
    // и для возможности передачи УРЛа другим лицам
    var stateStr = newState.pagename;
    if (newState.pagename == 'Photo')
        stateStr += "_" + newState.photoid;
    location.hash = stateStr;

    // АВТОМАТИЧЕСКИ вызовется switchToStateFromURLHash()
    // т.к. закладка УРЛа изменилась (ЕСЛИ она действительно изменилась)
}

function switchToMainPage() {
    switchToState({ pagename: 'Main' });
}

function switchToPhotoPage(photoId) {
    switchToState({ pagename: 'Photo', photoid: photoId });
}

function switchToAboutPage() {
    switchToState({ pagename: 'About' });
}

// переключаемся в состояние, которое сейчас прописано в закладке УРЛ
switchToStateFromURLHash();
