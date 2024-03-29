const uStr = prompt('Введите строку')
function disemVowels(str){
    const vowels = ['а','у','о','ы','э','я','ю','ё','и','е'];
    let result = '';
    for (let i = 0; i<str.length; i++){
        if(!vowels.includes(str[i])){
            result += str[i];
        };
    };
    return result;
}

console.log(disemVowels(uStr))
