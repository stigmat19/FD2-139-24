
function buildWrapper(teg) {
  let wrapfunc = function (str, obj) {
    _teg = teg;
    str = str
      .replaceAll("<", "$lt;")
      .replaceAll(">", "$gt;")
      .replaceAll("'", "$apos;")
      .replaceAll('"', "$qout;")
      .replaceAll("&", "$amp;");
    let objstr = "";
    for (let key in obj) {
      objstr += ` ${key} = '${obj[key]
        .replaceAll("<", "$lt;")
        .replaceAll(">", "$gt;")
        .replaceAll("'", "$apos;")
        .replaceAll('"', "$qout;")
        .replaceAll("&", "$amp;")}'`;
    }
    return `<${_teg}${objstr}>${str}</${_teg}>`;
  };
  return wrapfunc;
}
const wrapH1 = buildWrapper("H1");
console.log(wrapH1("СТИХИ"));
var wrapP = buildWrapper("P");
console.log(wrapP("Однажды в студёную зимнюю пору"));
console.log(wrapP("Вкусные M&M's"));
console.log(wrapP("Однажды в <студёную> зимнюю пору"));
console.log(wrapH1("СТИХИ", { align: "center", title: "M&M's" }));
