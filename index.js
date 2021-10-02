"use script";

// generating the random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

// storing the score value
let score = 20;

// storing the value of the highscore
let highScore = 0;

// DRYING THE CODDE
// creating a display message function that displays the message
// during the game operations
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
  return message;
};

// creating a display score function that takes a score a parameter
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
  return score;
};

// creating an event listerner for the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);

  //   what happens when there is mo input from the user when check is clicked
  //   the explanation for the this goes as follows:
  // when guess  = " " or 0, it is falsy so negating it will give a true condition
  // but if guessis a number it is truthy and negating will give
  //   a falsy value thus making the condition not true

  if (!guess) {
    //   this displays the message if no value was given
    displayMessage(` ⚠️ Not a number`);
  }
  //   what happens when guess === secretNumber
  if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage(` 🏆 You won the game`);
    document.querySelector("body").style.backgroundColor = `green`;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  }
  //   when guess is not same as secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? ` 📉Too Low` : ` 📈Too High`);
      score--;
      displayScore(score);
    } else {
      displayMessage(` ☹️ GAME OVER`);
      displayScore(0);
    }
  }

  //   //   what happens when guess < secretNumber
  //   else if (guess  <secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = ` 📉Too Low`;
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = ` ☹️ GAME OVER`;
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     // let score = document.querySelector(".score").textContent;
  //     // score--;
  //     // document.querySelector(".score").textContent = score;
  //   }
  //   //   what happens when guess > secretNumber
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = ` 📈Too High`;
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = ` ☹️ GAME OVER`;
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

// creating an event listerner for the again button
document.querySelector(".again").addEventListener("click", function () {
  displayMessage(`Start guessing...`);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayScore(score);
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".guess").value = ``;
  document.querySelector("body").style.backgroundColor = `#222`;
});
