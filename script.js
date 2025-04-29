let min=1, max=10 , attempt=3, original;

let input= document.getElementById("input").value ;
let rangeHeading= document.getElementById("range-heading");
let resultElement= document.getElementById("result-element");
let attemptElement= document.getElementById("attempt-element");

function newGame(){
     original= Math.floor((Math.random() * max-min)+min);


    rangeHeading.innerHTML= " Guess the number between " + min + " - " + max;


    resultElement.innerHTML= "Your Guess is : " + input;
    attemptElement.innerHTML= "no.of Attempt : " + attempt;

    // return newGame();
}

function showResult(){
    // if (input == original)
    //     alert("You got it");
    // else{
    //     attempt--;

    // }
    attempt--;

}


newGame()