let userString = prompt('Введите строку');
const vowels = ['а','у','о','ы','э','я','ю','ё','и','е'];
let result = 0
let summ = 0
let conc = 0
userString.split('').forEach(f => {
    if(vowels.includes(f)){
        summ += 1
    }
    return summ
});


console.log(summ)


userString.split('').reduce((acc, value) =>{
    if(vowels.includes(value)){
        acc = 1;
        result += acc
    } 
    
    return result
},1)
console.log(result)

userString.split('').filter(value => {
    if(vowels.includes(value)){
        conc += 1;
    };
    return conc;

})
console.log(conc)