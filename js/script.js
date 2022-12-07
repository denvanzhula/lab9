const cards = {
    ".\\heart_6.png": 6,
    ".\\heart_7.png": 7,
    ".\\heart_8.png": 8,
    ".\\heart_9.png": 9,
    ".\\heart_10.png": 10,
    ".\\heart_J.png": 2,
    ".\\heart_Q.png": 3,
    ".\\heart_K.png": 4,
    ".\\heart_A.png": 11,

    ".\\clubs_6.png": 6, 
    ".\\clubs_7.png": 7, 
    ".\\clubs_8.png": 8, 
    ".\\clubs_9.png": 9, 
    ".\\clubs_10.png": 10, 
    ".\\clubs_J.png": 2, 
    ".\\clubs_Q.png": 3, 
    ".\\clubs_K.png": 4, 
    ".\\clubs_A.png": 11 
};  

let username = prompt("Enter your name: ");
if (username != '') {
    document.getElementById('username').textContent = username;
} 
else {
    document.getElementById('username').textContent = "Human";
}

const button = document.querySelector('#button');
let usernumber = document.getElementById('usernumber');
let compnumber = document.getElementById('compnumber');

let attempts = 0;
let a = 0;
let b = 0;
usernumber = 0;
compnumber = 0;

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', () => {

    attempts++;
    document.getElementById('sproba').textContent = "Attempts " + attempts + " / 3";
    button.style.background = 'rgb(228, 222, 203)';
    usercards.style = 'display: inline-block';
    compcards.style = 'display: inline-block';
    a = Random(0, 17);
    b = Random(0, 17);
    document.getElementById('usercards').setAttribute("src", Object.keys(cards)[a]);
    document.getElementById('compcards').setAttribute("src", Object.keys(cards)[b]);
    usernumber += Object.values(cards)[a];
    compnumber += Object.values(cards)[b];
    document.getElementById('usernumber').textContent = usernumber;
    document.getElementById('compnumber').textContent = compnumber;
    
    if (attempts == 3)
    {
    document.getElementById('button').textContent = 'Again!';
    if (usernumber > compnumber)
    {
    document.getElementById('winner').textContent = "You are winner! Try again!";
    button.style.background = 'rgb(140, 231, 107)';
    winner.style.color = 'rgb(12, 211, 88)';
    }
    else if (usernumber < compnumber)
    {
    document.getElementById('winner').textContent = "You are loser! Try again!";
    button.style.background = 'rgb(245, 127, 127)';
    winner.style.color = 'rgb(211, 51, 12)';
    }
    else if (usernumber == compnumber)
    {
    document.getElementById('winner').textContent = "Draw! Try again!";
    button.style.background = 'rgb(164, 197, 244)';
    winner.style.color = 'rgb(86, 4, 174)';
    }
    }
    else if (attempts >= 4)
    {
    attempts = 0;
    usercards.style = 'display: none';
    compcards.style = 'display: none';
    usernumber = 0;
    compnumber = 0;
    document.getElementById('usernumber').textContent = usernumber;
    document.getElementById('compnumber').textContent = compnumber;
    document.getElementById('sproba').textContent = "Attempts " + attempts + " / 3";
    document.getElementById('button').textContent = 'Generate!';
    document.getElementById('winner').textContent = ' ';
    }
});





