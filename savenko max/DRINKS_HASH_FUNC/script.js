function HashStorageFunc() {
    let drinks = []

    this.addValue = function (key, value) {
        let glass = {
            name: key,
            isAlcohol: value
        }
        drinks.push(glass)
    }
    this.show = function () {
        console.log(drinks)
    }
    this.getValue = function (key) {
        const val = key
        drinks.forEach(i => {
            for (key in i) {
                if (i.name === val) {
                    return console.log(i.isAlcohol)

                }
                else {
                    return console.log(undefined)
                }
            }
        })
    }
    this.deleteValue = function (key) {
        const v = key
        drinks.forEach(i => {
            for (key in i) {
                if (i.name == v) {
                    drinks.splice(i, 1)
                    return console.log('элемент удалеен'), true
                }
                else {
                    break
                }
            }
        })
    }
    this.getKeys = function () {
        drinks.forEach(i => {
            for(key in i){
                console.log(i[key])
            }
        })
    }
}
let drinkStorage = new HashStorageFunc();
drinkStorage.addValue('margarita', true)
drinkStorage.addValue('cola', false)
drinkStorage.show()
drinkStorage.getValue('margarita')
drinkStorage.deleteValue('margarita')
drinkStorage.show()
drinkStorage.getKeys()


