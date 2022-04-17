var rannadomnumber1 = Math.floor(Math.random() * 6) + 1;//1-6
var randaamdiceimg = "dice" + rannadomnumber1 + ".png";//dice1.png-dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randaamdiceimg);
var rannadomnumber2 = Math.floor(Math.random() * 6) + 1;
var randaamdiceimg1 = "dice" + rannadomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randaamdiceimg1)
if (rannadomnumber1 > rannadomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";

}
else if (rannadomnumber1 == rannadomnumber2) {

}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}