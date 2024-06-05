function HashStorageFunc() {
    this.drinks = {};
    this.addValue = function(key, value) {
        this.drinks[key] = value;
    };

    this.getValue = function(key) {
        return this.drinks[key];
    };
    this.deleteValue = function(key) {
        if (key in this.drinks) {
            delete this.drinks[key];
            return true;
        }
        else {
            return false;
        }
    };
    this.getKeys = function() {
        return Object.keys(this.drinks);
    }
}
const drinkStorage = new HashStorageFunc;
function addValue() {
    let drinkName = prompt("Введите название напитка", " ");
    let alc = confirm("Напиток алкогольный?");
    if (alc) {
        alc = "Да";
    }
    else {
        alco = "Нет";
    }
    let recipe = prompt("Введите рецепт напитка", " ");
    drinkStorage.addValue(drinkName, {a:alc, r:recipe});
}
function  getValue() {
    let drinkName = prompt("Введите название напитка", " ");
    let info = drinkStorage.getValue(drinkName);
    if (info) {
        alert("Название напитка: "+ drinkName +"\n\r " + "Алкогольный: " + info.a + '\n\r '
            + "Рецепт приготовления: " + info.r);
    }
    else {
        alert("Напиток отсутствует.");
    }
}
function deleteValue(){
    let drinkName = prompt("Введите название напитка", " ");
    let del = drinkStorage.deleteValue(drinkName);
    if (del) {
        alert("Информация о напитке " + "'" + drinkName + "'" + " удалена.");
    }
    else {
        alert("Напиток " + "'" + drinkName + "'" + " в списке отсутствует.")
    }
}
function getKeys(){
    let drinks = drinkStorage.getKeys();
    if (drinks.length > 0) {
    alert(drinks);}
    else {
        alert("Напитки отсутствуют.")
    }
}