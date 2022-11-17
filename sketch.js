var fundo1
var playerImg,player
var chao1, chao2, chao3, chao4, chao5;
var portalImg,portal;
var lever,leverAnim1,leverAnim2

function preload(){
fundo1 = loadImage("fundinho jogo.png")
playerImg = loadAnimation("1sprite.png","2sprite.png","3sprite.png");
portalImg = loadImage("portal.gif");
leverAnim1 = loadAnimation("anim1.png","anim2.png","anim3.png");
leverAnim2 = loadAnimation("anim1.png");
leverAnim1.looping=false
}

function setup(){
createCanvas(1920,1080);

chao1= new Chao(600,666,1250,20);
chao2= new Chao(1050,420,669,20);
chao3= new Chao(1735,666,255,20);
chao4= new Chao(1621,860,255,20);
chao5= new Chao(1200,197,390,20);

player = createSprite(150,605,20,20);
player.addAnimation("player",playerImg)
player.scale=0.5

portal = createSprite(1360,112,5,5);
portal.addImage(portalImg);
portal.scale=0.4

lever = createSprite(1246,335,20,20)
lever.addAnimation("lever",leverAnim2);
lever.addAnimation("alavanca",leverAnim1);
lever.scale = 0.14
}

function draw() {
    image(fundo1,0,0,1920,1080);
    controle()
  chao1.desenhar()
  chao2.desenhar()
  chao3.desenhar()
  chao4.desenhar()
  chao5.desenhar()
    fill("green")
    if(player.y>=1080){
        player.x=150
        player.y=605
    }
    if(player.isTouching(lever)){
        lever.changeAnimation("alavanca");
    }
    textSize(25)
    text(mouseX+","+mouseY,mouseX,mouseY)
    drawSprites()
}


function controle(){
    //gravidade😎
    player.velocityY += 1

    if(player.collide(chao1.sprite)||player.collide(chao2.sprite)||player.collide(chao3.sprite)||player.collide(chao4.sprite)||player.collide(chao5.sprite)){
        if(keyDown("SPACE" )){
            player.velocityY =  -20
        }
    }


    if(keyDown("A")){
        player.mirrorX(-1)
        player.x -= 15
    }else if(keyDown("D")){
        player.mirrorX(+1)
        player.x += 15
    }

}


