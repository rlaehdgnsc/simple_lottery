var draws = [];
var result;
var candidates = Array(45)
    .fill()
    .map((element, index) => {
        return index + 1;
    });
function selectColor(val){
    if(val<=10){
        return 'red';
    }else if(val<=20){
        return 'orange';
    }else if(val<=30){
        return 'yellow';
    }else if(val<=40){
        return 'blue';
    }else{
        return 'green';
    }
}
function ballStyle(index) { // setting css by js
    let Lotto = document.getElementById('Lotto'); // document.querySelector('#Lotto');
    let ball = document.createElement('div');

    ball.textContent = result[index];
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.style.margin='1em';

    ball.id = 'ball'+index;
    ball.className = 'ballClass'+index;

    let color = selectColor(result[index]);
    ball.style.backgroundColor = color;

    Lotto.appendChild(ball);
}

function bonusStyle(val) {
    let Bonus = document.getElementsByClassName('BonusBall')[0]; // document.querySelector('.BonusBall');
    let text = document.createElement('div');
    let bonus_ball = document.createElement('div');

    text.textContent = "BONUS!";

    bonus_ball.textContent = val;
    bonus_ball.style.display = 'inline-block';
    bonus_ball.style.border = '1px solid black';
    bonus_ball.style.borderRadius = '10px';
    bonus_ball.style.width = '20px';
    bonus_ball.style.height = '20px';
    bonus_ball.style.textAlign = 'center';
    bonus_ball.style.margin='1em';

    Bonus.appendChild(text);
    Bonus.appendChild(bonus_ball);
}

function Lottery() {
    // shuffle numbers
    while (candidates.length > 0) {
        let target = candidates.splice(Math.floor(Math.random() * (candidates.length)), 1)[0];
        draws.push(target);
    }

    // pick random numbers
    let index = Math.floor(Math.random() * (draws.length - 6));
    let bonus = draws[draws.length - 1];
    result = draws.slice(index, index + 6);
    result.sort((p, c) => {
        return p - c;
    });

    // enroll balls on the document
    for (let i = 0; i < result.length; i++) {
        (function (j) {
            setTimeout(function () {
                ballStyle(j)
            }, 1000 * (j+1));
            if (j === result.length-1) {
                setTimeout(function () {
                    bonusStyle(bonus)
                }, 1000 * (result.length+1));
            }
        })(i);
    }
}

Lottery();