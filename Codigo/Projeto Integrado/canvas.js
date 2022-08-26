var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext("2d");
var LEFT = 65, UP = 87, RIGHT = 68, DOWN = 83;
var moveLeft = false, moveUp = false ,moveRight = false , moveDown = false;
var posX = 20, posY = 180;
var posXenemy1=750, posXenemy2=300, posXenemy3=960;

 update();

window.addEventListener("keydown",keydownHandler)
window.addEventListener("keyup",keyupHandler)

function keydownHandler(e){
    var key = e.keyCode;

    if(key === LEFT && key !== RIGHT){
        moveLeft = true;
    }
    if(key === RIGHT && key !== LEFT){
        moveRight = true;
    }
    if(key === UP && key !== DOWN){
        moveUp = true;
    }
    if(key === DOWN && key !== UP){
        moveDown = true;
    }
}

function keyupHandler(e){
    var key = e.keyCode;
    
    if(key === LEFT && key !== RIGHT){
        moveLeft = false;
    }
    if(key === RIGHT && key !== LEFT){
        moveRight = false;
    }
    if(key === UP && key !== DOWN){
        moveUp = false;
    }
    if(key === DOWN && key  !== UP){
        moveDown = false;
    }
}

function move(){
  if(moveLeft){
   posX --;
  }
  if(moveRight){
   posX ++;
  }
  if(moveUp){
    posY --;
  }
  if(moveDown){
    posY ++;
  }
}

function render(){
//Criando elementos do cenário
c.clearRect(0,0,canvas.width,canvas.height)
 c.fillStyle = '#565656'
 c.fillRect(0,250,100,20)
 c.fillRect(240,250,1500,20)
 c.fillRect(0,630,2000,30)
 c.fillRect(1200,105,200,20)
 c.fillRect(1000,150,100,20)
 c.fillRect(0,460,100,30)
 c.fillStyle = '#606d79'
 c.fillRect(580,540,90,90)
 c.fillStyle = 'black'
 c.fillRect(1260,35,50,70)
 c.fillRect(20,390,50,70)
 c.fillRect(1320,560,50,70)
 c.fillStyle = '#841b2d'
 c.fillRect(posX,posY,40,70)
 c.fillStyle = '#67832e'
 c.fillRect(posXenemy1,170,50,80)
 c.fillRect(posXenemy2,550,50,80)
 c.fillRect(posXenemy3,550,50,80)
}


function update(){
  requestAnimationFrame(update,c)
  move()
  render() 

}
