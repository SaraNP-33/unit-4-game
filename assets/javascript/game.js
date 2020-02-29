$(document).ready(function(){
// set my global variables
//variable for the score the player wants to reach
var targetScore=0;

//variable for the players score
var gameScore=0;

//variables for the wins and losses
var wins=0;
var losses=0;

//Functions to assign a random number as the target score
function randomNumber() {
    var randomNum = Math.floor((Math.random()*100)+ 1 ); 
    return randomNum
}
function randomCrystal(){ 
    var randomvalue = Math.floor((Math.random()*12)+1);
return randomvalue;
}

//create an object with the crystals in them and their values

var crystals={
    blue:{
        name:"blue",
        value: 0
    },
    yellow: {
        name:"yellow",
        value: 0
    },
    red: {
        name:"red",
        value: 0
    },
    purple:{
        name:"purple",
        value:0
    }
};



// set up my game functions

//the game function
function  gameStart ( ){
     gameScore=0
     console.log(gameScore);

     targetScore = randomNumber();
     console.log(targetScore);

     //fetch the id's of the divs
     $("#yourscore").text(gameScore);
     $("#randomNumber").text(targetScore);

     //give the crystals their values
     crystals.blue.value = randomCrystal ();
     console.log(crystals.blue.value);

     crystals.yellow.value = randomCrystal ();
     console.log(crystals.yellow.value);

     crystals.red.value = randomCrystal ();
     console.log(crystals.red.value);

     crystals.purple.value = randomCrystal ();
     console.log(crystals.purple.value);

     
 };
 

 // set up a function that equate the current score to the crystals values
   function values (number) {
      gameScore+= number;

      $("#yourscore").text(gameScore);
      
      winsLosses();
  };

  //set up function with if and elses statements that check wins and losses

    function winsLosses() {
        console.log("game Score", gameScore);
        console.log("target score", targetScore);

      if(gameScore === targetScore){
          alert ("Yay you did it!!");
        console.log("you won");

          wins++;
          console.log(wins);
      $("#wins").text("Wins: " + wins);


      gameStart();

      }
      
      else if(gameScore > targetScore) {
          alert ("Oops...Better Luck Next Time!");
        console.log("you loose");

          losses++;
          $("#losses").text("Losses: " + losses);
      
     gameStart();

    }
  };
// make the crystals be clickable and be assigned their values. 
gameStart();

$("#blue").click( function(){
    values(crystals.blue.value);
    console.log("button click");
   
});


$("#yellow").click( function(){
    values(crystals.yellow.value);
   
   
});


$("#red").click( function(){
    values(crystals.red.value);  
 
    
});


$("#purple").click( function(){
    values(crystals.purple.value);
   
  
});
});