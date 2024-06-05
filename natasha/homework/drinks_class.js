class HashStorageClass {
    constructor() {
        this.storage = {};
    }
    addValue(key, value) {
        this.storage[key] = value;
    }
    getValue(key) {
        return this.storage[key];
    }
    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        }
        else {
            return false;
        }
    }
    getKeys() {
        return Object.keys(this.storage);
    }
}
const drinkStorage = new HashStorageClass();
function addValue() {
    let drinkName = prompt("Введите название напитка", " ");
    let alc = confirm("Напиток алкогольный?");
    if (alc) {
        alc = "Да";
    }
    else {
        alc = "Нет";
    }
    let recipe = prompt("Введите рецепт напитка", " ");
    drinkStorage.addValue(drinkName, { a: alc, r: recipe });
}
function getValue() {
    let drinkName = prompt("Введите название напитка", " ");
    let info = drinkStorage.getValue(drinkName);
    if (info) {
        alert("Название напитка: " + drinkName + "\n\r " + "Алкогольный: " + info.a + '\n\r ' +
            "Рецепт приготовления: " + info.r);
    }
    else {
        alert("Напиток отсутствует.");
    }
}
function deleteValue() {
    let drinkName = prompt("Введите название напитка", " ");
    let del = drinkStorage.deleteValue(drinkName);
    if (del) {
        alert("Информация о напитке " + "'" + drinkName + "'" + " удалена.");
    }
    else {
        alert("Напиток " + "'" + drinkName + "'" + " в списке отсутствует.")
    }
}
function getKeys() {
    let drinks = drinkStorage.getKeys();
    if (drinks.length > 0) {
        alert(drinks);
    }
    else {
        alert("Напитки отсутствуют.")
    }
}