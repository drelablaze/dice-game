'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const diceRolled = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice roll result generated
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRolled}.png`;

  // 3. check for if 1 is rolled

  // 4. Switch to next player
});
