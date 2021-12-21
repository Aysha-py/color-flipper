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
    s = document.getElementById("flip-body").style
      f = false;
    c1= "yellow"
    c2= "black"

  
      
    setInterval(function() {
        s.backgroundColor = f ? c1 : c2;
        s.color = f ? c2 : c1;
        f = !f;
  }, 1000);

    
}
function plainButton(){
    document.body.style.backgroundColor = "white"
}