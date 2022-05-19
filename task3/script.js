let transf1 = document.querySelector('#div1');

let tran2 = document.querySelector('#div2');

let tran3 = document.querySelector('#div3');

let transf4 = document.querySelector('#divoll');

function makeGreen() {
    tran3.style.background = ('black');
    transf1.style.background = ('green');
    transf4.removeEventListener('click', makeGreen);
    transf4.addEventListener('click', makeYellow);
}

function makeYellow() {
    transf1.style.background = ('black');
    tran2.style.background = ('yellow');
    transf4.removeEventListener('click', makeYellow);
    transf4.addEventListener('click', makeRed);
}

function makeRed() {
    tran2.style.background = ('black');
    tran3.style.background = ('red');
    transf4.removeEventListener('click', makeRed);
    transf4.addEventListener('click', makeGreen);
}

transf4.addEventListener('click',makeGreen);