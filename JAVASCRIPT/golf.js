/*Strokes         Return
1               "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2         "Double Bogey"
>= par + 3      "Go Home!"
*/


var names=["Hole-in-one!",
"Eagle",
"Birdie",
"Par",
"Bogey",
"Double Bogey",
"Go Home!"];

function golfscore(par,score){
    if (score==1){
        return "Hole-in-one!";
    }
    else if(score<=par-2){
        return "Eagle";
    }
    else if (score==par-1){
        return "Birdie";
    }
    else if (score==par){
        return "Par";
    }
    else if (score==par+1){
        return "Bogey";
    }
    else if (score==par+2){
        return "Double Bogey!";
    }
    else if (score >= par+3){
        return "Go Home!"
    }
}

console.log(golfscore(5,8));




