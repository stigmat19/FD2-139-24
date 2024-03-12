const name = prompt ('Введите ваше имя');
const secondName = prompt('Введите фамилию');
const fatherName = prompt ('Введите отчество');
console.log('Ваше ФИО:' ,name , secondName , fatherName);


const ageYears = prompt('Введите возраст в годах');
console.log('Ваш возраст в годах:', parseInt(ageYears));


const ageDays = prompt('Ведите возраст в днях');
console.log('Ваш возраст в днях:', parseInt(ageDays));
console.log('Ваш возраст через 5 лет: ',parseInt(ageYears) + 5 );


const gender = confirm ('Вы мужчина?');

if (gender === true){
    console.log ('Ваш пол: мужской');
    if(parseInt(ageYears) < 63){
        console.log ('Вы на пенсии: нет ');
    }
    else{
        console.log('Вы на пенсии: да');
    }
}
else{
    console.log ('Ваш пол: женский');

    if (parseInt(ageYears) < 58){
        console.log('Вы на пенсии: нет');
    }
    else{
        console.log('Вы на пенсии: да ');
    }
}