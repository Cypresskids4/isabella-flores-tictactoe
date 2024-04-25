let currentTurn = 0;
let gameOver = false;

   //Player turns: 0, 2, 4, 6, 8...
   //AI turns: 1, 3, 5, 7, 9...

const button1 = document.getElementById("sq0");
const button2 = document.getElementById("sq1");
const button3 = document.getElementById("sq2");
const button4 = document.getElementById("sq3");
const button5 = document.getElementById("sq4");
const button6 = document.getElementById("sq5");
const button7 = document.getElementById("sq6");
const button8 = document.getElementById("sq7");
const button9 = document.getElementById("sq8")

const box = document.querySelector(".box");   //function call

let buttonList = [   //array
    button1, button2, button3, button4, button5, button6, button7, button8, button9, 
];

gameplay();

function gameplay(){   //function defenition
    buttonList.forEach(button => {   //arrow function
        button.onclick = () => {
            let pTag = button.children[0];
            if(currentTurn % 2 == 0){
                currentTurn++;   //iterator, adds 1
                pTag.innerHTML = "X";   //changes the text
                button.disabled = true;
                buttonList.splice(buttonList.indexOf(button),1);
                checkWin();
                if(gameOver == false){
                    AITurn(buttonList);
                }
            }
        };

    });
}

function AITurn(list){
    if(list.length > 0){
        let random = Math.floor(Math.random() * list.length);
        let aiChoice = list[random];
        aiChoice.disabled = true;
        list.splice(buttonList.indexOf(aiChoice),1);
        let pTag = aiChoice.children[0];
        pTag.innerHTML = "O";
        currentTurn++;
        checkWin();
    }
}

function checkWin(){

}