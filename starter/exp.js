'use strict';

// Selecting elements
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceDisplay = document.querySelector('.display-dice-rolled');
const player1CurrentScoreEl = document.getElementById('current--0');
const player2CurrentScoreEl = document.getElementById('current--1');
const signsEl = document.querySelectorAll('.allsign');

let currentScore;
let active;
let scores;
let playing;

function generalStart() {
  currentScore = 0;
  active = 0;
  scores = [0, 0];
  playing = true;
  // Starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  signsEl[0].classList.add('display');

  score0El.textContent = 0;
  score1El.textContent = 0;
  player1CurrentScoreEl.textContent = 0;
  player2CurrentScoreEl.textContent = 0;
  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');
}

generalStart();

const spaceBarCall = function (e) {
  if (e.key === 'space') {
    if (diceRolled === 1) {
      gsap.to('.dice', {
        y: 0,
        duration: 1,
        x: 0,
      });
    } else if (diceRolled === 2) {
      gsap.to('.dice', {
        y: -90,
        duration: 1,
        x: -80,
      });
    } else if (diceRolled === 3) {
      gsap.to('.dice', {
        y: -90,
        duration: 1,
        x: 80,
      });
    } else if (diceRolled === 4) {
      gsap.to('.dice', {
        y: 90,
        duration: 1,
        x: -80,
      });
    } else if (diceRolled === 5) {
      gsap.to('.dice', {
        y: 90,
        duration: 1,
        x: 80,
      });
    } else if (diceRolled === 6) {
      gsap.to('.dice', {
        y: 0,
        duration: 1,
        x: 0,
      });
    }
    diceDisplay.textContent = `${diceRolled}`;
  }
};

const swtichPlayers = function () {
  if (active === 0) {
    active = 1;
    player1CurrentScoreEl.textContent = 0;
    player2CurrentScoreEl.textContent = 0;
    currentScore = 0;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
    signsEl[0].classList.toggle('top-sign');
    signsEl[1].classList.toggle('top-sign');
  } else if (active === 1) {
    active = 0;
    player1CurrentScoreEl.textContent = 0;
    player2CurrentScoreEl.textContent = 0;
    currentScore = 0;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
    signsEl[0].classList.toggle('top-sign');
    signsEl[1].classList.toggle('top-sign');
  }
};

// Rolling dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const diceRolled = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice roll result generated
    diceEl.classList.remove('hidden');
    diceEl.src = `figma-${diceRolled}.svg`;
    diceDisplay.textContent = `${diceRolled}`;
    gsap.fromTo(
      '.display-dice-rolled',
      { opacity: 1, duration: 60 },
      { opacity: 1 }
    );

    if (diceRolled === 1) {
      gsap.to('.dice', {
        y: 90,
        duration: 1,
        x: 0,
      });
    } else if (diceRolled === 2) {
      gsap.to('.dice', {
        y: -90,
        duration: 1,
        x: -80,
      });
    } else if (diceRolled === 3) {
      gsap.to('.dice', {
        y: -90,
        duration: 1,
        x: 80,
      });
    } else if (diceRolled === 4) {
      gsap.to('.dice', {
        y: 90,
        duration: 1,
        x: -80,
      });
    } else if (diceRolled === 5) {
      gsap.to('.dice', {
        y: 90,
        duration: 1,
        x: 80,
      });
    } else if (diceRolled === 6) {
      gsap.to('.dice', {
        y: -90,
        duration: 1,
        x: 0,
      });
    }

    // 3. check for if 1 is rolled

    if (diceRolled !== 1) {
      currentScore += diceRolled;
      document.getElementById(`current--${active}`).textContent = currentScore;

      // 4. Switch to next player
    } else {
      swtichPlayers();
      // active = active === 0 ? 1 : 0;
      // currentScore = 0;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[active] += currentScore;
    document.getElementById(`score--${active}`).textContent = scores[active];
    if (scores[active] >= 200) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--active');
    }
    swtichPlayers();
  }
});

btnNew.addEventListener('click', generalStart);

document.addEventListener('keypress', spaceBarCall);
