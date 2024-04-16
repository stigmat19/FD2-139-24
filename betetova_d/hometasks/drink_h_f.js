function HashStorageFunc() {
  const self = this;
  const list = {};
  self.addValue = function (key, value) {
    list[key] = value;
    return self;
  };
  self.getValue = function (key) {
    if (key in list) {
      return list[key];
    } else return false;
  };
  self.deleteValue = function (key) {
    if (key in list) {
      delete list[key];
      return true;
    } else return false;
  };
  self.getKeys = function () {
    let result = "";
    for (let key in list) result += key;
    return result;
  };
}
const drinkStorage = new HashStorageFunc();

function add() {
  const _key = prompt("Введите название напитка");
  const _value = prompt("Введите рецепт напитка");
  let alc = confirm("Напиток алкогольный?");
  if (alc == true) alc = "алкогольный";
  else alc = "безалкогольный";
  drinkStorage.addValue(_key, { _alc: alc, rec: _value });
  alert(`Напиток ${_key} успешно добавлен`);
}
function get() {
  const _key = prompt(
    "Введите название напитка для получения информации о нем"
  );
  const drinkH = drinkStorage.getValue(_key);
  if (drinkStorage.getValue(_key) == false) alert("Нет информации о напитке");
  else
    alert(
      `Напиток: ${_key},\nалкогольный ли: ${drinkH._alc},\nрецепт: ${drinkH.rec}`
    );
}
function del() {
  const _key = prompt("Введите напиток для удаления");
  if (drinkStorage.deleteValue(_key) == true) alert("Напиток успешно удален");
  else alert("Нет информации о напитке");
}
function listDrinks() {
  const arr = drinkStorage.getKeys();
  if (arr.length == 0) alert("Нет ни одного напитка");
  else alert(`${arr}`);
}
