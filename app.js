const red_score = document.getElementById("red_score");
const blue_score = document.getElementById("blue_score");
const red_img = document.getElementById("red");
const blue_img = document.getElementById("blue");

let red_points = 0;
let blue_points = 0;

red_img.onclick = function(){
    red_points++;
    red_score.innerHTML = red_points;
}

blue_img.onclick = function(){
    blue_points++;
    blue_score.innerHTML = blue_points;
}