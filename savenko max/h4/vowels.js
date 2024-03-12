let userString = prompt('Введите строку');
userString.split('').forEach(f);
f (v => {
    const vowels = ['а','у','о','ы','э','я','ю','ё','и','е'];
    let result
    if(!vowels.includes(v)){
        result += 1
    }
    return result
}
)

console.log(result)