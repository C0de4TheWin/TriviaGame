var counter = 0;
var time = 0;
var timerCounter = 30;
//var empireQ = ["array"]

//first we have to call the function on click event
//so upon click, the questions are displayed with timer
$("#startGame").on("click", function(event) {

$("#startGame").hide();

var musicQuestion = [ {
     question: "How many Stormtroopers died in the Death Star Explosion?",
     answers: ["20,000", "30,000", "40,000", "50,000"],
     rightAnswer: 1

}, {

    question: "Why was the clone trooper program phased out for Stormtroopers?",
    answers: ["Cost", "Loyalty", "Better Armor", "low on recruits"],


}, {
    question: "How many years of training does it take at the Carida Acadamy to become a Stormtrooper?",
    answers: ["1.5", "3", "5", "2"],


}, {
    question: "How many blas resistant pieces make up Stormtrooper armor?",

    answers: ["12", "18", "55", "25"]



}
    



}






$("#quiz-area").html("<h2> </h2>");
       $("#trivia").html("<h2>QUESTIONS GO HERE</h2>");
    clock();
    generateHTML();

});

//Upon start of game we must set the timer countdown here


//upon completion of survay or timer expiration

//results are displayed correct/incorrec and prompt is given
