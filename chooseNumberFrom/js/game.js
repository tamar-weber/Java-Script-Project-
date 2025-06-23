// let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
// let chooseNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
// const grid = document.getElementById('number-grid');
// let colors = ['#ff4081', '#00e676', '#ffeb3b', '#2196f3', '#f50057', '#3f51b5', '#ff9800', '#009688', '#cddc39', '#9c27b0'];
// let scoreValue = document.getElementById('score-value');
// const numberToClick = document.getElementById('number-to-click');
// const timeLeftDisplay = document.getElementById('time-left');
// const timerElement = document.getElementById('timer');
// let score = 0;
// let timer;

// function generateNumbers() {
//     grid.innerHTML = ''; // לנקות את התוכן הקיים
//     let numbersCopy = [...numbers]; // לעשות עותק של המספרים
//     for (let index = 0; index < 100; index++) {
//         let randomIndex = Math.floor(Math.random() * numbersCopy.length);
//         let selectedNumber = numbersCopy[randomIndex];
//         numbersCopy.splice(randomIndex, 1);
//         let div = document.createElement('div');
//         div.classList.add('number');
//         div.textContent = selectedNumber;
//         div.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
//         div.style.color = colors[Math.floor(Math.random() * colors.length)];
//         div.addEventListener('click', () => handleNumberClick(selectedNumber, div));
//         grid.appendChild(div);
//     }
// }

// function handleNumberClick(selectedNumber, element) {
//     if (selectedNumber == numberToClick.textContent) {
//         score++;
//         scoreValue.textContent = score;
//         if (score==100) {
//             window.location.href = `end.html?score=${score}`;
//         }
//         resetTimer();
//         setNewTargetNumber();
//         element.classList.add('correct');
//         element.style.pointerEvents = 'none'; // לא ניתן ללחוץ עליו
//     } else {
//         element.classList.add('wrong');
//         setTimeout(() => {
//             element.classList.remove('wrong');
//         }, 300);
//     }
// }

// function setNewTargetNumber() {
//     let randomChooseIndex = Math.floor(Math.random() * chooseNumbers.length);
//     numberToClick.textContent = chooseNumbers[randomChooseIndex];
//     chooseNumbers.splice(randomChooseIndex, 1);
// }

// function startTimer(duration) {
//     clearInterval(timer);
//     timerElement.style.borderColor = '#ff4081'; // צבע התחלתי של הקו
//     timeLeft = duration;
//     timeLeftDisplay.textContent = timeLeft;
//     timer = setInterval(() => {
//         timeLeft--;
//         timeLeftDisplay.textContent = timeLeft;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             endGame();
//         } else if (timeLeft <= duration / 2) {
//             timerElement.style.borderColor = '#ffeb3b'; // צבע ביניים
//         } else if (timeLeft <= duration / 4) {
//             timerElement.style.borderColor = '#f50057'; // צבע אזהרה
//         }
//     }, 1000);
// }

// function resetTimer() {
//     clearInterval(timer);
//     startTimer(parseInt(duration));
// }

// function endGame() {
//     // העברת המשתמש לדף התוצאה
//     window.location.href = `end.html?score=${score}`;
// }

// // התחלת המשחק

//     const duration = localStorage.getItem('gameDuration');
//     if (duration) {
//         startTimer(parseInt(duration));
//         generateNumbers();
//         setNewTargetNumber();
//     } else {
//         window.location.href = 'choose.html';
//     }

    
let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
let chooseNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
const grid = document.getElementById('number-grid');
let colors = ['#ff4081', '#00e676', '#ffeb3b', '#2196f3', '#f50057', '#3f51b5', '#ff9800', '#009688', '#cddc39', '#9c27b0'];
let scoreValue = document.getElementById('score-value');
const numberToClick = document.getElementById('number-to-click');
const timeLeftDisplay = document.getElementById('time-left');
const timerElement = document.getElementById('timer');
let score = 0;
let timer;

function generateNumbers() {
    grid.innerHTML = ''; // לנקות את התוכן הקיים
    let numbersCopy = [...numbers]; // לעשות עותק של המספרים
    for (let index = 0; index < 100; index++) {
        let randomIndex = Math.floor(Math.random() * numbersCopy.length);
        let selectedNumber = numbersCopy[randomIndex];
        numbersCopy.splice(randomIndex, 1);
        let div = document.createElement('div');
        div.classList.add('number');
        div.textContent = selectedNumber;
        div.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        div.style.color = colors[Math.floor(Math.random() * colors.length)];
        div.setAttribute('data-value', selectedNumber); // שימוש ב-setAttribute
        div.addEventListener('click', () => handleNumberClick(selectedNumber, div));
        grid.appendChild(div);
    }
}

function handleNumberClick(selectedNumber, element) {
    if (selectedNumber == numberToClick.textContent) {
        score++;
        scoreValue.textContent = score;
        if (score == 100) {
            window.location.href = `end.html?score=${score}`;
        }
        resetTimer();
        setNewTargetNumber();
        element.classList.add('correct');
        element.style.pointerEvents = 'none'; // לא ניתן ללחוץ עליו
        element.removeAttribute('data-value'); // שימוש ב-removeAttribute
    } else {
        element.classList.add('wrong');
        setTimeout(() => {
            element.classList.remove('wrong');
        }, 300);
    }
}

function setNewTargetNumber() {
    let randomChooseIndex = Math.floor(Math.random() * chooseNumbers.length);
    numberToClick.textContent = chooseNumbers[randomChooseIndex];
    chooseNumbers.splice(randomChooseIndex, 1);
}

function startTimer(duration) {
    clearInterval(timer);
    timerElement.style.borderColor = '#ff4081'; // צבע התחלתי של הקו
    timeLeft = duration;
    timeLeftDisplay.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        } else if (timeLeft <= duration / 2) {
            timerElement.style.borderColor = '#ffeb3b'; // צבע ביניים
        } else if (timeLeft <= duration / 4) {
            timerElement.style.borderColor = '#f50057'; // צבע אזהרה
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer(parseInt(duration));
}

function endGame() {
    // שימוש ב-getElementsByClassName כדי להסיר את כל מאזיני הקליק
    let numberElements = document.getElementsByClassName('number');
    for (let i = 0; i < numberElements.length; i++) {
        let element = numberElements[i];
        element.removeEventListener('click', handleNumberClick); // שימוש ב-removeEventListener
    }

    // העברת המשתמש לדף התוצאה
    window.location.href = `end.html?score=${score}`;
}

// התחלת המשחק
const duration = localStorage.getItem('gameDuration');
if (duration) {
    startTimer(parseInt(duration));
    generateNumbers();
    setNewTargetNumber();
} else {
    window.location.href = 'choose.html';
}

// שימוש ב-querySelector כדי לבחור אלמנט מסוים ולבצע פעולה עליו
let firstNumberElement = document.querySelector('.number');
if (firstNumberElement) {
    firstNumberElement.setAttribute('data-initial', 'true'); // סימון האלמנט הראשון
    console.log('First number element:', firstNumberElement.textContent);
}
