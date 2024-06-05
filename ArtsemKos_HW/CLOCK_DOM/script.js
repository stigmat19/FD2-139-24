function buildClock() {
    const inp = document.getElementById('inp');
    inp.style.display = 'none';
    const button = document.getElementById('button');
    button.style.display = 'none';
    const size = document.getElementById('diameter').value;
    const ground = document.createElement('div');
    ground.style.backgroundColor = '#c3c33a';
    ground.style.position = 'relative';
    ground.style.height = `${size}px`;
    ground.style.width = `${size}px`;
    ground.style.borderRadius = '50%';
    ground.style.margin = '50px';
    document.body.append(ground);

    function  buildNumbers (pX,pY,N){
        const number = document.createElement('div');
        number.style.backgroundColor = '#178d1b';
        number.style.height = `${size/8}px`;
        number.style.width = `${size/8}px`;
        number.style.borderRadius = '50%';
        number.style.display = 'flex';
        number.style.justifyContent = 'center';
        number.style.alignItems = 'center';
        number.style.position = 'absolute';
        number.style.left = pX+'%';
        number.style.top = pY+'%';

        ground.append(number);
        const span = document.createElement('span');
        span.textContent = N;
        span.style.fontSize = (Math.round(size/15)+'px');
        number.append(span);

    }
    buildNumbers(44,2,12);
    buildNumbers(65,8,1);
    buildNumbers(80,24,2);
    buildNumbers(85,44,3);
    buildNumbers(80,64,4);
    buildNumbers(65,79,5);
    buildNumbers(44,85,6);
    buildNumbers(24,79,7);
    buildNumbers(8,64,8);
    buildNumbers(2,44,9);
    buildNumbers(8,24,10);
    buildNumbers(24,8,11);

    function clockHands(color,h,w,x,y,id,deg){
        const hand = document.createElement('div');
        hand.id = id;
        hand.style.rotate = deg+'deg';
        hand.style.transformOrigin =  '50% 80%';
        hand.style.backgroundColor = color;
        hand.style.height = `${size/h}px`;
        hand.style.width = `${size/w}px`;
        hand.style.position = 'absolute';
        hand.style.left = x+'%';
        hand.style.top = y+'%';
        ground.append(hand);
    }
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * 6;
    const ss = day.getSeconds() * 6;
    clockHands('red',2,100,50,10,'sec',ss);
    clockHands('black',2.5,100,50,18,'min',mm);
    clockHands('black',3.5,70,50,27,'hour',hh);

    function moveSec(){
        let sec = document.getElementById('sec');
        let styles = window.getComputedStyle(sec);
        let rotate = parseInt(styles.rotate);
        sec.style.rotate = `${rotate+6}deg`
    }
    setInterval(moveSec,1000);
    function moveMin(){
        let min = document.getElementById('min');
        let styles = window.getComputedStyle(min);
        let rotate = parseInt(styles.rotate);
        min.style.rotate = `${rotate+6}deg`
    }
    setInterval(moveMin,60000);
    function moveHour(){
        let hour = document.getElementById('hour');
        let styles = window.getComputedStyle(hour);
        let rotate = parseInt(styles.rotate);
        hour.style.rotate = `${rotate+30}deg`
    }
    setInterval(moveMin,3600000);
    
}

function start(){
    const size = document.getElementById('diameter').value;
    const sizqq = parseInt(size);
    if(199 < sizqq && 801 > sizqq){
        buildClock();
    }
    else{
        alert('Введите значение от 200рх до 800рх')
    }
    
}
