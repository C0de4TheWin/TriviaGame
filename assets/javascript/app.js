$(document).ready(onReady);

var counter = 0;
var userPick
var wrongAnswer
var rightAnswer = 0;  //global variables
var timeClock = 0;
var currentQuestion = 0;


var empireQuestion = [{
    question: "How many Stormtroopers died in the Death Star Explosion?",
    answers: ["20,000", "30,000", "40,000", "50,000"],
    rightAnswer: 1,

}, {

    question: "Why was the clone trooper program phased out for Stormtroopers?",
    answers: ["Cost", "Loyalty", "Better Armor", "low on recruits"],
    rightAnswer: 1,


}, {
    question: "How many years of training does it take at the Carida Acadamy to become a Stormtrooper?",
    answers: ["1.5", "3", "5", "2"],
    rightAnswer: 3,


}, {
    question: "How many blast resistant pieces make up Stormtrooper armor?",

    answers: ["12", "18", "55", "25"],
    rightAnswer: 1.



}, {
    question: "How many colonies are within the control of the Empire?",

    answers: ["69 million", "50 million", "25 million", "35 million"],
    rightAnswer: 0,

},
//Upon start of game we must set the timer countdown here

