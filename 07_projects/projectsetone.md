# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1

```javascript
console.log("vishal")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2 solution

```javascript

  const form = document.querySelector('form');
// this usecase will give you empty
// const height =  parseInt(document.querySelector('#height').value)
// })
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const weightGuide = document.querySelector('#weight-guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

     results.innerHTML = `<span>${bmi}</span>`;

    // if (bmi < 18.6) {
    //   results.innerHTML = `${bmi} under wight`;
    // } else if (bmi === 18.6 || bmi === 24.9) {
    //   results.innerHTML = `${bmi}Normal Range`;
    // }
    // if (bmi > 24.9) {
    //   results.innerHTML = `${bmi}over weight`;
    // }
  }
});

```

## project 3 solution code
```javascript

const clock = document.getElementById('clock');
// document.querySelector('clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution code

```javascript

const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

function validateGuess(guess) {
  //
}

function checkGuess(guess) {
  //
}

function displayGuess(guess) {
  //
}

function displayMessage(message) {
  //
}

function endGame() {
  //
}

function newGame() {
  //
}

```