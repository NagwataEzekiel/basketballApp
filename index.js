let homeBox = document.getElementById('homeBox')

let homePoint = homeBox.textContent = 0;

function homeAddOneBtn(){
    homePoint += 1;
    homeBox.textContent = homePoint;
}

function homeAddTwoBtn(){
    homePoint += 2;
    homeBox.textContent = homePoint;
}

function homeAddThreeBtn(){
    homePoint += 3;
    homeBox.textContent = homePoint;
}


let questBox = document.getElementById('questBox')

let questPoint = questBox.textContent = 0;

function questAddOneBtn(){
    questPoint += 1;
    questBox.textContent = questPoint;
}

function questAddTwoBtn(){
    questPoint += 2;
    questBox.textContent = questPoint;
}

function questAddThreeBtn(){
    questPoint += 3;
    questBox.textContent = questPoint;
}

function newGame(){
    questBox.textContent = 0;
    questPoint = 0;
     homeBox.textContent = 0;
    homePoint = 0;
}


function leadDrawGame(){
    if(homeBox.textContent > questBox.textContent){
        homeBox.classList.add("winnerClass")
        questBox.classList.remove("winnerClass")
    } else if(homeBox.textContent < questBox.textContent){
        questBox.classList.add("winnerClass")
        homeBox.classList.remove("winnerClass")
    } else{
        questBox.classList.add("drawClass")
        homeBox.classList.add("drawClass")
    }
}

//leadDrawGame();

