let computer = '';
function choice(choice) {
    computerChoice();
    if (choice === 'rock' && computer === 'rock') {
        document.getElementById('displayPlayer').innerHTML = 'Rock';
        document.getElementById('displayComputer').innerHTML = 'Rock';
        document.getElementById('displayResult').innerHTML = 'Tie';
    }
    if (choice === 'rock' && computer === 'paper') {
        document.getElementById('displayPlayer').innerHTML = 'Rock';
        document.getElementById('displayComputer').innerHTML = 'Paper';
        document.getElementById('displayResult').innerHTML = 'Computer Wins';
    }
    if (choice === 'rock' && computer === 'scissors') {
        document.getElementById('displayPlayer').innerHTML = 'Rock';
        document.getElementById('displayComputer').innerHTML = 'Scissors';
        document.getElementById('displayResult').innerHTML = 'Player Wins';
    }
    if (choice === 'scissors' && computer === 'scissors') {
        document.getElementById('displayPlayer').innerHTML = 'Scissors';
        document.getElementById('displayComputer').innerHTML = 'Scissors';
        document.getElementById('displayResult').innerHTML = 'Tie';
    }
    if (choice === 'scissors' && computer === 'rock') {
        document.getElementById('displayPlayer').innerHTML = 'Scissors';
        document.getElementById('displayComputer').innerHTML = 'Rock';
        document.getElementById('displayResult').innerHTML = 'Computer Wins';
    }
    if (choice === 'scissors' && computer === 'paper') {
        document.getElementById('displayPlayer').innerHTML = 'Scissors';
        document.getElementById('displayComputer').innerHTML = 'Paper';
        document.getElementById('displayResult').innerHTML = 'Player Wins';
    }
    if (choice === 'paper' && computer === 'paper') {
        document.getElementById('displayPlayer').innerHTML = 'Paper';
        document.getElementById('displayComputer').innerHTML = 'Paper';
        document.getElementById('displayResult').innerHTML = 'Tie';
    }
    if (choice === 'paper' && computer === 'scissors') {
        document.getElementById('displayPlayer').innerHTML = 'Paper';
        document.getElementById('displayComputer').innerHTML = 'Scissors';
        document.getElementById('displayResult').innerHTML = 'Computer Wins';
    }
    if (choice === 'paper' && computer === 'rock') {
        document.getElementById('displayPlayer').innerHTML = 'Paper';
        document.getElementById('displayComputer').innerHTML = 'Rock';
        document.getElementById('displayResult').innerHTML = 'Player Wins';
    }




}

function computerChoice() {
    let int;

    int = Math.floor(Math.random() * 3) + 1;
    if(int === 1){
        computer = 'rock';
    }

    else if(int === 2){
        computer = 'paper';
    }
    else if(int === 3){
        computer = 'scissors';
    }


}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
