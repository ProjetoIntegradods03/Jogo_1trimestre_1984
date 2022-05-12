var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext("2d");
var LEFT = 65, UP = 87, RIGHT = 68, DOWN = 83;


//Criação dos elementos do cenário
c.fillStyle = '#565656';
c.fillRect(0,640,5000,100);
c.fillRect(0,0,10,1000);
c.fillRect(0,290,140,30);
c.fillRect(0,0,2000,10);
c.fillRect(1357,0,10,1000);
c.fillRect(290,290,1100,30);
c.fillRect(600,150,350,20);
c.fillRect(1150,190,100,20)
c.fillStyle = '#8C7853';
c.fillRect(600,460,350,20);
c.fillStyle = '#d3d3d3';
c.fillRect(730,360,80,100);
c.fillRect(730,50,80,100);


//Criação dos personagens
c.fillStyle = 'blue';
c.fillRect(550,550,50,90);
c.fillRect(955,550,50,90);
c.fillStyle = 'red';
c.fillRect(40,220,40,70);
animate();