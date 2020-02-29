$(document).ready(function(){
// set my global variables
//variable for the score the player wants to reach
var targetScore=0;

//variable for the players score
var gameScore=0;

//variables for the wins and losses
var wins=0;
var losses=0;

//variable to assign a random number as the target score
var randomNumber= function() {
    Math.floor((Math.random()*100)+ 1 ); 
};
var randomCrystal = function() {
   Math.floor((Math.random()*10)+1);
};
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
 var gameStart = function(){
     gameScore=0
     targetScore = randomNumber;

     //fetch the id's of the divs
     $("#yourscore").text(gameScore);
     $("#randomNumber").text(targetScore);

     //give the crystals their values
     crystals.blue.value = randomCrystal
     crystals.yellow.value = randomCrystal
     crystals.red.value = randomCrystal
     crystals.purple.value = randomCrystal

     
 };
 

 // set up a function that equate the current score to the crystals values
  var values = function () {
      gameScore+= crystals.value;

      $("#yourscore").text(gameScore);
      winsLosses();
  };

  //set up function with if and elses statements that check wins and losses

  var winsLosses = function() {
      if(gameScore === targetScore){
          alert ("Yay you did it!!");
        console.log("you won");

          wins++;
      $("wins").html(wins);

      gameStart();

      }
      
      else if(gameScore > targetScore) {
          alert ("Oops...Better Luck Next Time!");
        console.log("you loose");

          losses++;
          $("losses").html(losses);
      
     gameStart();

    }
  };



$("blue").click( function(){
    values(crystal.blue);
   
});


$("yellow").click( function(){
    values(crystal.yellow);
   
   
});


$("red").click( function(){
    values(crystal.red);  
   
    
});


$("purple").click( function(){
    values(crystal.purple);
 
  
});
});