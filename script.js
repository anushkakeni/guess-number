let min=1, max=10 , attempt=3, totalAttempts= attempt, original;

let inputValue= document.getElementById("inputValue").value ;
let rangeHeading= document.getElementById("range-heading");
let resultElement= document.getElementById("result-element");
let resultStatement= document.getElementById("result-statement");
let attemptElement= document.getElementById("attempt-element");


function newGame(){
    attempt= totalAttempts;
    //  original= Math.floor(Math.random() * max-min)+min;
    original =3;

    rangeHeading.innerHTML= " Guess the number between " + min + " - " + max;


    resultElement.innerHTML= "Your Guess is : " + inputValue ;
    resultStatement.innerHTML= " ";
    attemptElement.innerHTML= "no.of Attempt : " + attempt;

    return newGame;
}

function showResult(){
  
    let inputValue= document.getElementById("inputValue").value ;

    if(inputValue == null)
    {
        alert("Enter a number");
        newGame();
    }
    else if(inputValue >= min || inputValue <=max)
    {
        alert("Enter a valid number");
        newGame();
    }

    // console.log(inputValue);
    resultElement.innerHTML= "Your Guess is : " + inputValue;



    if(inputValue == original)
    {
        alert("YOU GOT THE NUMBER");
        newGame();
    }
    else{

        resultStatement.innerHTML= "Your Guess is wrong ";

    }

    if(attempt >= 1)
     {
        attempt--;
        attemptElement.innerHTML= "no.of Attempt : " + attempt;    
     }
     else{
         newGame();
     }

}


newGame()