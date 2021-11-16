

let myCircle = document.querySelector('.cls-1');


window.addEventListener('mousemove', mouseMove);


let circleX =0; //x
let circleY =0; //y
let circleS =1; //scale
let tx = 0;  // target mouseX
let ty=0; //target mouseY
let cWidth, cHeight; 
let ts = 1;

cWidth = myCircle.getClientRects();
console.log(myCircle.clientWidth);

let deg = 0;
let  myAni = requestAnimationFrame(makeCircleMove);
function mouseMove(e)
{
    tx = e.pageX;
    ty =  e.pageY;
}

function makeCircleMove()
{
    circleX += (tx-circleX) *0.03;
    circleY += (ty-circleY) *0.03;
    
    deg+= 0.2;
    deg%= 360;

    targetScale();
    circleS += (ts-circleS)*0.005;

    myCircle.style.transform = 'translate('+ (circleX-200) +'px,' + (circleY-200) +'px) rotate(' + deg + 'deg) scale('+circleS + ')';

    requestAnimationFrame(makeCircleMove);
}

/* 화면 높이에 따른 크기 변화 */
function targetScale()
{
    if(ty < 800)
    {
        ts = 1;
    }
    else if(ty >=800 && ty < 1200)
    {
        ts = 2;
    }
    else if(ty >=1200 && ty < 1600)
    {
        ts = 1.4;
    }
    else
    {
        ts =1;
    }
}