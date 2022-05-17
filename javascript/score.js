score ={
	x:30,
	y:68,
	color: "#000",
	font: "50px Arial",
	value:0,

	desenha:function(){
		ctx.fillStyle = this.color
		ctx.font      = this.font
		ctx.fillText(this.value, this.x, this.y)
	},

	translate:function(){
		ctx.save()
		ctx.translate(LARGURA/2, ALTURA/2)
		ctx.fillStyle = this.color
		ctx.fillText("Pontuação:"+this.value, -120, -150)
		ctx.restore()
	},

	alteraVelocidade:function(){
		if(score.value % 12 == 0 && velocidade == 9 ) velocidade=15
		else if(score.value % 12 == 0 && velocidade != 9 ) velocidade=9
	}
}