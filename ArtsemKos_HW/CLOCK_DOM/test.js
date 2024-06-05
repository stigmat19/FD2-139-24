
// function test() {
//     const strv = document.getElementById('rot');
//     const styles = window.getComputedStyle(strv);
//     let rotate = parseInt(styles.rotate);
//     strv.style.rotate = `${rotate+30}deg`
// }
function test() {
    const items = [];
    const div = document.getElementById('wrap');

    if (items.length < 12) {
        const item = document.createElement('div');
        item.style.width = '50px';
        item.style.height = '50px';
        item.style.backgroundColor = 'red';
        div.append(item);
        items.push(item);
        console.log(items);
        
    }
    return 


}
test()