const btn = document.getElementById('btn');
const strelka = document.getElementById('sd');
const timeDiv  = document.getElementById('time');
let time = '';
let sizeClock = ''

let rotateI = 0;

window.addEventListener('load', () =>{
    time = new Date()
    document.getElementById('time').innerHTML = time.toLocaleTimeString()
})

window.setInterval(() => {
    time = new Date;
    document.getElementById('time').innerHTML = time.toLocaleTimeString()
},1000)




btn.addEventListener('click', () => {
    sizeClock = document.getElementById('input').value;

    if (sizeClock < 200){
        sizeClock = 200;
    }
    if (sizeClock > 800){
        sizeClock = 800
    }


    document.getElementById('space').style.display = 'block';
    document.getElementById('clock').style.width = sizeClock + 'px'
    document.getElementById('clock').style.height = sizeClock + 'px'
    // rotateI += 30
    // strelka.style.transform = `rotate(${rotateI}deg)`
})