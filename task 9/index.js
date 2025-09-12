function diceBattle() {
    let computerChoice = Math.floor(Math.random() * 6) + 1;
    let playerChoice = Number(prompt('Choose a number from 1 to 6'));

     if (playerChoice > 6) {
        alert('Number is greater than 6, try again!');
        return diceBattle();
    }
    alert("Computer chose: " + computerChoice);
    alert("Player chose: " + playerChoice);

    if (playerChoice === computerChoice) {
        alert("It's a tie!");
    } else if (playerChoice > computerChoice) {
        alert("Player wins!");
    } else {
        alert("Computer wins!");
    }
}

diceBattle();


function checkNumber() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    let playerGuess = prompt('Enter your guess: type "even" or "odd"');

    if (randomNumber % 2 === 0 && playerGuess.toLowerCase() === "even") {
        alert('Number is even');
        alert('Player wins!!');
    } else if (randomNumber % 2 !== 0 && playerGuess.toLowerCase() === "odd") {
        alert('Number is odd');
        alert('Player wins!!');
    } else {
        if (randomNumber % 2 === 0) {
            alert('Number was even (' + randomNumber + ')');
        } else {
            alert('Number was odd (' + randomNumber + ')');
        }
        alert('Player loses!');
    }
}

checkNumber();

function checkCoupon() {
    let price = 200;
    let enterValue = prompt('Enter your coupon:');
    let couponCode = 'wellcome';

    if (enterValue === couponCode) {
        price = price - (price * 20 / 100); 
        alert('Coupon is right' + price);
    } else {
        alert('Wrong coupon.' + price);
    }
}

checkCoupon();

function monsterKnight() {
    let playerChoice = prompt('Choose "attack" or "defend":').toLowerCase();
    let options = ['attack', 'defend'];
    let computerChoice = options[Math.floor(Math.random() * options.length)];

    alert('Computer chose: ' + computerChoice);

    if (playerChoice === computerChoice) {
        alert("It's a tie!");
    } else if (playerChoice === 'attack' && computerChoice === 'defend') {
        alert("Player loses!");
    } else if (playerChoice === 'defend' && computerChoice === 'attack') {
        alert("Player wins!");
    }
}

monsterKnight();

function mathQuiz() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    let playerAnswer = Number(prompt(`What is ${num1} + ${num2}?`));
    let correctAnswer = num1 + num2;

    if (playerAnswer === correctAnswer) {
        alert('Correct! You win!');
    } else {
        alert(`Wrong! The correct answer was ${correctAnswer}`);
    }
}

mathQuiz();
