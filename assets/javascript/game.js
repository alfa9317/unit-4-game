//Cristals between 1-12. Target number between 19-120.

var targetNumber = 0;
var scoreNumber = 0;
var numberOptions = [];
var win=0;
var lose=0;

$("#losses").text(0);
$("#wins").text(0);
$("#scoreValue").text(targetNumber);

reset();

$("#crystal1").click(function(){
scoreNumber+=numberOptions[0];
$("#scoreValue").text(scoreNumber);
check();
});

$("#crystal2").click(function(){
scoreNumber+=numberOptions[1];
$("#scoreValue").text(scoreNumber);
check();
});

$("#crystal3").click(function(){
scoreNumber+=numberOptions[2];
$("#scoreValue").text(scoreNumber);
check();
});

$("#crystal4").click(function(){
scoreNumber+=numberOptions[3];
$("#scoreValue").text(scoreNumber);
check();
});

function check(){
    if(scoreNumber===targetNumber){
        win++;
        $("#wins").text(win);
        $("#status").text("You did it! 😃")
        reset();
    } else if (scoreNumber>targetNumber){
        lose++
        $("#losses").text(lose);
        $("#status").text("You lost! 😞")
        reset();
    }
}


function reset(){
    scoreNumber = 0;
    $("#scoreValue").text(scoreNumber);
    targetNumber = Math.floor((Math.random()*101)+20);
    for(var i = 0;i<4;i++){
        var randNum = Math.floor((Math.random()*12)+1);
        numberOptions[i]=randNum;
    }
    console.log(numberOptions);
    $("#target").text(targetNumber);
}

