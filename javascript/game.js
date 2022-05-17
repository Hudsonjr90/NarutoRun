var canvas, ctx, ALTURA, LARGURA, velocidade=9, estadoAtual,record, vidas = 3,colidindo = false

			let estados ={
				jogar:0,
				jogando:1,
				perdeu:2
			}

			function clique(event)
			{
				if(estadoAtual == estados.jogando){
					naruto.pula()
				}
				else if(estadoAtual == estados.jogar){
					estadoAtual = estados.jogando
				}
				else if(estadoAtual == estados.perdeu){
					estadoAtual = estados.jogar
					pedras.limpa()
					naruto.reset()
					score.value=0
					vidas = 3
				}
			}



			function createCanvas()
			{
				canvas = document.createElement("canvas")
				canvas.width = LARGURA
				canvas.height = ALTURA
				ctx = canvas.getContext("2d")
				document.body.appendChild(canvas)
				canvas.addEventListener("mousedown", clique)
			}


			function main()
			{
				LARGURA = window.innerWidth
				ALTURA = window.innerHeight
				createCanvas()
				estadoAtual = estados.jogar
				record = localStorage.getItem("record")
				vidas = 3
				colidindo = false
				if(record == null)
					record = 0;

				roda()
			}

			function roda()
			{
				atualiza()
				desenha()
				window.requestAnimationFrame(roda)
			}


			/*
				método que aciona mudanças de status nos objetos
			*/
			function atualiza()
			{
				naruto.atualiza()
				if(estadoAtual == estados.jogando) {
					pedras.atualiza()
					score.alteraVelocidade()
				}
			}



			function desenha()
			{
				bg.desenha(0,0)
				score.desenha()
				ctx.fillStyle = "#000"
				ctx.font = "50px Arial"
				ctx.fillText("Record:"+record, 30, 130)
				ctx.fillText("Vidas:"+vidas, 30, 190)
				if(estadoAtual == estados.jogar){
					inicio.desenha(LARGURA/2 - (inicio.largura/2), ALTURA/2 - (inicio.altura/2));
					tutorial.desenha(700,100);
				}
				else if(estadoAtual == estados.perdeu){
					spriteGameover.desenha(LARGURA/2 - (spriteGameover.largura/2), ALTURA/2 - (spriteGameover.altura/2))
					if(score.value > this.record){
						localStorage.setItem("record",score.value)
						record = score.value
					}
					score.translate()
				}
				else if(estadoAtual == estados.jogando){
					pedras.desenha()
				}

				chao.desenha()
				naruto.desenha()
			}
			main()