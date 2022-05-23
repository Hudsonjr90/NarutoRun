
/*
    x, y -> a partir de que ponto devo pegar a imagem
*/
function Sprite(x, y, largura, altura, srcImg){
    this.x = x
    this.y = y 
    this.largura = largura
    this.altura  = altura

    this.desenha = function(xCanvas, yCanvas){
        img = new Image()
        img.src=srcImg
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }
}

inicio = new Sprite(0, 0, 200, 205)
spriteGameover = new Sprite(0, 0, 256, 256, "img/gameover.png")
bg = new Sprite(0, 0, window.innerWidth, window.innerHeight, "img/konoha.png")
spritePedras = new Sprite(10, 1, 145, 107, "img/orochimaru.png")
tutorial = new Sprite(0,0,500,300, "img/tutorial.png")

runBoneco = [
    new Sprite(44, 30, 145, 185,  "img/naruto.png"),
    new Sprite(190, 47, 145, 185, "img/naruto.png"),
    new Sprite(371, 55, 145, 185, "img/naruto.png"),
    new Sprite(568, 44, 145, 185, "img/naruto.png"),
    new Sprite(736, 55, 145, 185, "img/naruto.png")
]
