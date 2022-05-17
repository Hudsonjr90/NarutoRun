chao = {
	y: window.innerHeight,
	altura: 5,
	cor:"#F5F5DC",

	desenha:function(){
		if(score.value > 10) this.cor="#5e9bf9"

		ctx.fillStyle = this.cor
		ctx.fillRect(0, this.y - this.altura, LARGURA, this.altura)

	}
}