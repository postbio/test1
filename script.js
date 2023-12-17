let score = 0;

function generateNumbers() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById('numberDisplay').innerText = `${num1} + ${num2}`;
    return num1 + num2;
}

let correctAnswer = generateNumbers();

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('userAnswer').value);
    if (userAnswer === correctAnswer) {
        score++;
    } else {
        score--;
    }
    document.getElementById('scoreCounter').innerText = score;
    correctAnswer = generateNumbers();
    document.getElementById('userAnswer').value = ''; // Clear the input field
}

// Add event listener for the Enter key
document.getElementById('userAnswer').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) { // 13 is the key code for Enter
        checkAnswer();
    }
});

// Generate new numbers every time the page is reloaded
window.onload = generateNumbers;
