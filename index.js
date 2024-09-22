var randNumber1 = Math.random();
randNumber1 = randNumber1 * 6;
randNumber1 = Math.floor(randNumber1) + 1;

var randNumber2 = Math.random();
randNumber2 = randNumber2 * 6;
randNumber2 = Math.floor(randNumber2) + 1;

var imageUrl1 = "";
imageUrl1 = "./images/dice" + randNumber1 + ".png"; 

var imageUrl2 = "";
imageUrl2 = "./images/dice" + randNumber2 + ".png"; 


document.querySelector(".img1").setAttribute("src",imageUrl1);
document.querySelector(".img2").setAttribute("src",imageUrl2);

if (randNumber1 === randNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randNumber1 > randNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 wins!";
}
