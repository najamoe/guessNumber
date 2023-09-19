console.log("Jeg er i guessnumber");

const lblMessage = document.querySelector(".message")
console.log("lblMessage")
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number")
console.log("lblNumber")

const lblScore = document.querySelector(".score")
console.log("lblScore")

const inpGuess = document.querySelector(".guess")
console.log(inpGuess)

function checkNumber(btn) {
    console.log("check number")
    let guess = inpGuess.value;
    console.log("Guess= " + guess)
    if (guess > secretNumber) {
        lblMessage.textContent = "Value is to high"
    } else {
        if (guess < secretNumber) {
            lblMessage.textContent = "Value is to low"
        } else {
            lblMessage.textContent = "You guessed the number 🍟"
        }
    }
}

let secretNumber = 0;
function getSecretNumber(btn) {
    console.log("start secret")
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log("Secret number =" + secretNumber)
}

const pbCheck = document.querySelector(".check")
pbCheck.addEventListener('click', checkNumber)
const pbAgain = document.querySelector(".again")
pbAgain.addEventListener('click', getSecretNumber)

getSecretNumber();