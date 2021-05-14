//wk1-2 countdown timer should ran 10....1 then blastoff
function startCountdown(){
    var count = 10;

    document.getElementById("countdownTimer").innerHTML= count;
    count = count - 1;

    setTimeout(function () {
    //after 1 sec, will run code in here
    //the countdowntimer should display 10
    document.getElementById("countdownTimer").innerHTML = count; 
    //decrese the count by 1
    count = count - 1;
}, 1000); //set the time as 1 sec
//the countdown should display 10
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1; 
}, 2000); //set the time as 2 sec
//the countdown should display 9
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
}, 3000); //set the time as 3 sec
//the countdown should display 8
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
}, 4000); //set the time as 4 sec
//the countdown should display 7
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
}, 5000); //set the time as 5 sec
//the countdown should display 6

setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
}, 6000); //set the time as 6 sec
//the countdown should display 5
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
}, 7000); //set the time as 7 sec
//the countdown should display 4
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
 }, 8000); //set the time as 8 sec
//the countdown should display 3
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
 }, 9000); //set the time as 9 sec
//the countdown should display 2
setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
 }, 10000); //set the time as 10 sec
 //the countdown should display 1

setTimeout(function() {
    document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);
} //the final were it shows Blastoff!!!

