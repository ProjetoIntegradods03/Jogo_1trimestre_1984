var UP = 38;  //variável e código da tecla
var DOWN = 40;  //variável e código da tecla 
var LEFT = 37;  //variável e código da tecla
var RIGHT= 39;  //variável e código da tecla 

var moveEsquerda = false;  //variável de movimentação pra esquerda
var moveDireita = false;  //variável de movimentação pra direita
var moveCima = false;  //variável de movimentação pra cima
var moveBaixo = false;  //variável de movimentação pra baixo

var cnv = document.querySelector("canvas"); //seleciona o elemento canvas no HTML

var ctx = cnv.getContext("2d");  //cria um objeto 2d(bidimensional) na área do canvas

var p1 = {  //variável do objeto no canvas e seu posicionamento nos eixos x e y
    x:10,
    y:10
};

update();  //início do loop de animação

window.addEventListener("keydown", keydownHandler)  //executa alguma coisa sempre que uma tecla for pressionada

window.addEventListener("keyup", keyupHandler)  //executa alguma coisa sempre que uma tecla for liberada

function keydownHandler(e){   //executa a função sempre que a tecla for pressionada
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT){  //esquerda
        moveEsquerda = true;
    }

    if(key === RIGHT && key !== LEFT){  //direita
        moveDireita = true;
    }

    if(key === UP && key !== DOWN){  //cima
        moveCima = true;
    }

    if(key === DOWN && key !== UP){  //baixo
        moveBaixo = true;
    }
}

function keyupHandler(e){  //executa a função sempre que a tecla for liberada
    var key = e.keyCode;
    if(key === LEFT && key !== RIGHT){  //esquerda
        moveEsquerda = false;
    }

    if(key === RIGHT && key !== LEFT){  //direita
        moveDireita = false;
    }

    if(key === UP && key !== DOWN){  //cima
        moveCima = false;
    }

    if(key === DOWN && key !== UP){  //baixo
        moveBaixo = false;
    }
}

function move(){  //atualiza a posição do objeto nos eixos x e y

    if(moveEsquerda){  //move pra esquerda
        p1.x--;
    }

    if(moveDireita){  //move pra direita
        p1.x++;
    }

    if(moveCima){  //move pra cima
        p1.y--;
    }

    if(moveBaixo){  //move pra baixo
        p1.y++;
    }
}

function render(){  //desenha o objeto de acordo com o posicionamento nos eixos x e y
    ctx.clearRect(0, 0, cnv.width, cnv.height);  //limpa a tela
    ctx.fillRect(p1.x, p1.y, 50, 50);  //desenha o objeto em função de p1.x e p1.y
}

function update(){  //loop de animação
    move();  //atualiza as infos do objeto

    render();  //desenha o objeto atualizado
}
setInterval(update, 10);  //executa  a função update em um determinado intervalo