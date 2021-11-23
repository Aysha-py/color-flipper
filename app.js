const colors = ["red","yellow","blue","green","purple","brown"]

const button = document.getElementById("btn");


button.addEventListener("click",function(){
    
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

function colorsButton(){


    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
}
function plainButton(){
    document.body.style.backgroundColor = "white"
}