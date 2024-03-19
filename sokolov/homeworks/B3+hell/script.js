function math(str) {
    str = (str + '').replaceAll(' ', '');
    return Number(calc(str));
}

function calc(str) {
    while (true) {
        if (str.indexOf('(') != -1) {
            //если нахожу скобку
            let counter = 0;
            let firstIndex = str.indexOf('(');
            let lastIndex;
            for (let i = firstIndex; i < str.length; i++) {
                //нахожу где заканчивается скобка
                if (str[i] == '(') counter += 1;
                //добавляю внутренние скобки, чтобы найти где конец от первой скобки
                if (str[i] == ')') counter -= 1;
                if (counter == 0) {
                    //когда все внутренние скобки закрыты - получаю позицию закрывающей скобки
                    lastIndex = i;
                    break;
                }
            }
            str = str.replace(str.slice(firstIndex, lastIndex + 1), calc(str.slice(firstIndex + 1, lastIndex)));
            //заменяю часть строки в которой находится скобка(вместе со скобками) на результат этой скобки(в функцию попадет строка без скобок)
            //*рекурсия! будет заходить в скобки(пока не закончатся) -> вычислять результат -> возвращать результат в виде строки 
        }
        else {
            for (let i = 0; i < str.length; i++) {
                //прохожусь по строке(без скобок) и ищю умножение и деление(действия первой важности)
                if (str[i] == '*') {
                    //если нахожу умножение -> нахожу числа, которые будут участвовать в умножении
                    str = searchAction(str, '*', i);
                    i = 0;
                }
                if (str[i] == '/') {
                    //тоже самое с делением
                    str = searchAction(str, '/', i);
                    i = 0;
                }
            }
            for (let i = 0; i < str.length; i++) {
                //еще раз прохожусь по строке, теперь ищю сложение и вычитание
                if (str[i] == '+') {
                    //тоже самое со сложением
                    str = searchAction(str, '+', i);
                    i = 0;
                }
                if (str[i] == '-' && i != 0) {
                    //тоже самое с вычитанием(если оно не в начале строки, тогда оно относится к числу)
                    str = searchAction(str, '-', i);
                    i = 0;
                }
            }
            return str;
            //возвращаю результат скобки/всего выражения
        }
    }
}

function searchAction(str, act, i) {
    let pos1 = 0;
    let pos2 = str.length;
    let reversFlag = false;
    for (let j = i - 1; j >= 0; j--) {
        //двигаюсь от знака выражения назад, нахожу где начинается первое число
        if (isNaN(str[j])) {
            //если нахожу не число
            //если ни разу не найду не числовое значение, точка останется на начале строки
            if (str[j] == '.') {
                //находя точку ищю дальше(точка включается в число)
                continue;
            }
            if (str[j] == '-' && j == 0) {
                //находя минус, проверяю находится ли он в конце строки(тогда это просто отрицательное число)
                //оставляю точку в нуле и выхожу из поиска(цикла)
                break;
            }
            //находя не точку и не минус, привязанный к числу, ставлю точку на начале числа и выхожу из поиска(цикла)
            pos1 = j + 1;
            break;
        }
    }
    for (let j = i + 1; j < str.length; j++) {
        //двигаюсь от знака выражения вперед, нахожу где заканчивается второе число...
        if (isNaN(str[j])) {
            //если нахожу не число
            //если ни разу не найду не числовое значение, точка останется на последнем элементе + 1(чтобы вырезать с последним символом) 
            if (str[j] == '.') {
                //находя точку ищю дальше(точка включается в число)
                continue;
            }
            if (str[j] == '-' && j == i + 1) {
                //находя минус, который стоит сразу после знака выражения
                if (act == '-' || act == '+') {
                    //если знак выражения плюс или минус, ставлю reversFlag в true, чтобы функция action перевернула знак выражения
                    //если нет, минус просто войдет в число
                    reversFlag = true;
                }
                //продолжаю поиск конца выражения(включая минус в число)
                continue;
            }
            // находя не точку и не минус, привязанный к числу, ставлю точку на этом символе, чтобы вырезать все число, без этого символа
            pos2 = j;
            break;
        }
    }
    str = str.replace(str.slice(pos1, pos2), action(str.slice(pos1, pos2), act, reversFlag));
    //заменяю часть строки с выражением на ее результат и возвращаю его
    return str;
}

function action(str, act, reversFlag) {
    if (reversFlag) {
        //если нужно поменять знак выражения
        if (act == '+') {
            //если знак изначально плюс
            str.replace(str[str.indexOf(act) + 1], '');
            //сначала убираю минус
            str[str.indexOf(act)] = '-';
            //потом меняю действие на минус
            act = '-';
        }
        if (act == '-') {
            //если знак изначально -
            str[str.indexOf(act)] = '+';
            //сначала меняю знак на плюс(чтобы replace не удалил нужный мне знак)
            act = '+';
            str.replace(str[str.indexOf(act) + 1], '');
            //потом удаляю минус
        }
    }

    let answ = str.split(act);
    //делю строку по знаку выражения, получая массив из 2 элементов(числа выражения)
    switch (act) {
        //вычисляю в зависимости от знака выражение и возвращаю его в исходную строку
        case '*':
            return `${Number(answ[0]) * Number(answ[1])}`;
        case '/':
            return `${Number(answ[0]) / Number(answ[1])}`;
        case '+':
            return `${Number(answ[0]) + Number(answ[1])}`;
        case '-':
            return `${Number(answ[0]) - Number(answ[1])}`;
    }
}

console.log(`-1.1+123-22/11+(-22+(11*2)/2)+(1-1) = ${math('-1.1+123-22/11+(-22+(11*2)/2)+(1-1)')}`)


/*
-1.1+123-22/11+(-22+(11*2)/2)+(1-1)
(
-22+(11*2)/2
(
11*2
11*2->22
)
-22+22/2
22/2 -> 11
-22+11 -> -11
)
-1.1+123-22/11+-11+(1-1)
(
1-1 -> 0
)
-1.1+123-22/11+-11+0
22/11 -> 2
-1.1+123-2+-11+0
-1.1+123 -> 121.9
121.9-2+-11+0
121.9-2 -> 119.9
119.9+-22+0
119.9+-11
119.9-11 -> 108.9
108.9+0 -> 108.0
108.9*/