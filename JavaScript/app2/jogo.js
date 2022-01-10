	
var altura = 0
var largra = 0

function ajustaTamanhoPalcoJogo () {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var posicaoX = Math.floor (Math.random() * largura)
var posicaoY = Math.floor (Math.random() * altura)

console.log(posicaoX, posicaoY)


//criar o elemento html
var mosquito = document.creatElement('img')

document.body.appendChild()