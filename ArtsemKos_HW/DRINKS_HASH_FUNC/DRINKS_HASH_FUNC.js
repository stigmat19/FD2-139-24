
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

      let arrlist =   Object.keys(listDrinks);
      let res = arrlist.join();
      return res
        
    }

}
const drinkStorage = new DrinksHashFunc;

function add () {
    const name = prompt('Введите название напитка');
    const recipe  = prompt('опишите рецепт');
    drinkStorage.addValue(name,recipe)
    alert(`Напиток ${name} добавлен`)
}

function get(){
    const name2 = prompt('Введите название напитка');
  alert( drinkStorage.getValue(name2));
}

function del(){
    const name3 = prompt('Введите название напитка');
    alert(drinkStorage.deleteValue(name3))
}

function alll(){
   alert(drinkStorage.getKeys())
}

