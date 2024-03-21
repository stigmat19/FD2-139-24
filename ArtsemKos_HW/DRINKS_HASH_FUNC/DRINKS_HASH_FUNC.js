
function DrinksHashFunc() {

    let = listDrinks = {

    }
    this.addValue = function (key, value) {
        listDrinks[key] = value

    }
    this.getValue = function (key) {
        if (key in listDrinks) {
            return listDrinks[key]
        }
        else
            return undefined
    }
    this.deleteValue = function (key) {
        if (key in listDrinks) {
            delete listDrinks[key];
            return true
        }
        else
            return false
    }
    this.getKeys = function () {

        return Object.keys(listDrinks)
    }

}
const drinkStorage = new DrinksHashFunc;
drinkStorage.addValue('akak','bgbfb');
drinkStorage.addValue('adcs','bvfvf');
console.log(drinkStorage.getValue('akak'))
console.log(drinkStorage.getKeys())
console.log(drinkStorage.deleteValue('adcs'))
console.log(drinkStorage.getKeys())

