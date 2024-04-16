"use strict";
class HashStorageClass {
  constructor() {
    this.list = {};
    this.result = "";
  }
  addValue(key, value) {
    this.list[key] = value;
  }
  getValue(key) {
    if (key in this.list) {
      return this.list[key];
    } else return false;
  }
  deleteValue(key) {
    if (key in this.list) {
      delete this.list[key];
      return true;
    } else return false;
  }
  getKeys() {
    for (let key in this.list) this.result += key;
    return this.result;
  }
}
const drinkStorage = new HashStorageClass();

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
