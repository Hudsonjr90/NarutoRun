ranking ={
	x:500,
	y:68,
	color: "#000",
	font: "50px Arial",
	value:0,

	desenha:function(){
		ctx.fillStyle = this.color
		ctx.font      = this.font
		ctx.fillText(this.value, this.x, this.y)
	},

}