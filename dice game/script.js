'use strict'

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');

const p1score = document.getElementById('current--0');
const p2score = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.palyer--1');


let activePlayer = 0;
let playing = true;
score0.textContent = "0";
score1.textContent = "0";
diceEl.classList.add('hidden');
let currentScore = 0;
let scores = [0, 0];


//Swictch Player function
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`  ).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

//Starting Condition

//Array to store hold values



btnRoll.addEventListener('click', function () {

    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');

        diceEl.src = `dice-${dice}.jpg`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =currentScore;

            // p1score.textContent = currentScore;

        }
        //Switch to other player
        else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {


        scores[activePlayer] += currentScore;
        // scores[1] = scores[1]+ currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 40) {
            playing = false;


            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');


            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            diceEl.classList.add('hidden');

        }
        else {
            switchPlayer();
        }
    }

})

btnNew.addEventListener('click', function () {

scores[0]=0;
scores[1]=0;

    currentScore = 0;
    document.querySelector('.current-score').textContent = "0";
    diceEl.classList.add('hidden');

    score0.textContent = scores[0];
    score1.textContent = scores[1];
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    if(activePlayer===1)
    {
        switchPlayer();
    }



})