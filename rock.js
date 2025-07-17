console.log("welcome to rock paper scissor game-------->");

let rockBtn = document.getElementById("btn1");
let paperBtn = document.getElementById("btn2");
let scissorBtn = document.getElementById("btn3");

let humanAction = document.querySelector(".humanAction");
let humanAction_p = document.querySelector(".humanAction_p");
let aiAction = document.querySelector(".aiAction");
let aiAction_p = document.querySelector(".aiAction_p");

let result = document.querySelector("#result-show");

let humanScore = document.querySelector(".humanScore");
let aiScore = document.querySelector(".aiScore");

let resetBtn = document.querySelector("#resetBtn");

rockBtn.addEventListener("click", input_Rock);
paperBtn.addEventListener("click", input_Paper);
scissorBtn.addEventListener("click", input_Scissor);


let final_result;
let humanCount = 0;
let aiCount = 0;



function input_Rock(){
    let humanMove = "Rock"
    humanAction.style.backgroundImage = "url('./assets/h_rock2.png')";
    humanAction_p.innerText = `Rock`;

    let aiMove = randomAiMove();
    console.log(aiMove);

    result_calc(aiMove, humanMove);

    
    console.log(final_result);

    if(final_result == "Won"){
        humanScore.innerText = `${++humanCount}`;
      }

    if(final_result == "Lost"){
        aiScore.innerText = `${++aiCount}`;
      }

    
}

function input_Paper(){
    let humanMove = "Paper"
    humanAction.style.backgroundImage = "url('./assets/h_paper.png')";
    humanAction_p.innerText = `Paper`;
    let aiMove = randomAiMove();
    console.log(aiMove);

    result_calc(aiMove, humanMove);

    console.log(final_result)

    if(final_result == "Won"){
        humanScore.innerText = `${++humanCount}`;
      }

    if(final_result == "Lost"){
        aiScore.innerText = `${++aiCount}`;
      }

   

}

function input_Scissor(){
    let humanMove = "Scissor";
    humanAction.style.backgroundImage = "url('./assets/h_sccisor.png')";
    humanAction_p.innerText = `Scissor`;
    let aiMove = randomAiMove();
    console.log(aiMove);

    result_calc(aiMove, humanMove);

    console.log(final_result);

    if(final_result == "Won"){
        humanScore.innerText = `${++humanCount}`;
      }

    if(final_result == "Lost"){
        aiScore.innerText = `${++aiCount}`;
      }


    

    


}



// ---------------- random move ai ---------------


function randomAiMove() {
    let randMove = Math.floor((Math.random() * 9)) + 1;
    console.log(randMove);

    if((randMove >= 1) && (randMove <= 3)) {
        aiAction.style.backgroundImage = "url('./assets/ai_scissor.png')";
        aiAction_p.innerText = `Scissor`;
        
        return "Scissor";
    }

    if((randMove >= 4) && (randMove <= 6)) {
        aiAction.style.backgroundImage = "url('./assets/ai_rock.png')";
        aiAction_p.innerText = `Rock`;

        return "Rock";
    }

    if((randMove >= 7 ) && (randMove <= 9)) {
        aiAction.style.backgroundImage = "url('./assets/ai_paper.png')";
        aiAction_p.innerText = `Paper`;

        return "Paper";
    }
}



function result_calc(ai_chal, humanchal) {
    if(humanchal == "Rock"){

        if(humanchal == "Rock" && ai_chal == "Scissor"){
            result.innerText = "Won"
    
            final_result = "Won";
            return final_result;
        }
    
        if(humanchal == "Rock" && ai_chal == "Rock"){
            result.innerText = `Tie`;
    
            final_result = "Tie";
            return final_result;
        }
    
        if(humanchal == "Rock" && ai_chal == "Paper"){
            result.innerText = `Lost`;
    
            final_result = "Lost"
            return final_result;;
        }
    }
    else if(humanchal == "Paper"){

        if(humanchal == "Paper" && ai_chal == "Rock"){
            result.innerText = "Won"
    
            final_result = "Won";
            return final_result;
        }
    
        if(humanchal == "Paper" && ai_chal == "Paper"){
            result.innerText = `Tie`;
    
            final_result = "Tie";
            return final_result;
        }
    
        if(humanchal == "Paper" && ai_chal == "Scissor"){
            result.innerText = `Lost`;
    
            final_result = "Lost"
            return final_result;;
        }
    }
    else if(humanchal == "Scissor"){

        if(humanchal == "Scissor" && ai_chal == "Paper"){
            result.innerText = "Won"
    
            final_result = "Won";
            return final_result;
        }
    
        if(humanchal == "Scissor" && ai_chal == "Scissor"){
            result.innerText = `Tie`;
    
            final_result = "Tie";
            return final_result;
        }
    
        if(humanchal == "Scissor" && ai_chal == "Rock"){
            result.innerText = `Lost`;
    
            final_result = "Lost"
            return final_result;;
        }
    }
}




// ---------------reset btn-------------------

resetBtn.addEventListener("click", reset_score);

function reset_score() {
    console.log("reset karo madhrchod");

    humanScore.innerText = `0`;
    aiScore.innerText = `0`;

};


