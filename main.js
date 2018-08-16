let ctx;
let canvas;
let radio = 10;
let bolax = 100;
let bolay = 100;
let dx = 4;
let dy = 4;
let ancho, largo;
let limiteDerecha, limiteIzquierda, limiteArriba, limiteAbajo;

window.onload = function() {
	canvas = document.getElementById('miCanvas');
	if(canvas && canvas.getContext) {
		ctx = canvas.getContext('2d');
		if(ctx) {
			ancho = canvas.width;
			alto = canvas.height;
			limiteDerecha = ancho - radio;
			limiteIzquierda = radio;
			limiteArriba = radio;
			limiteAbajo = alto - radio;

			ctx.lineWidth = radio;
			ctx.fillStyle = 'red';
			mueve();
			setInterval(mueve, 60);
		} else {
			alert('Error al crear tu contexto');
		}
	}
}

function mueve() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	verifica();
	ctx.beginPath();
	ctx.arc(bolax,bolay,radio,0,2*Math.PI, true);
	ctx.fill();
}

function verifica() {
	let nbolax = bolax + dx;
	let nbolay = bolay + dy;

	if(nbolax > limiteDerecha) {
		dx *= -1;
		nbolax = limiteDerecha;
	}

	if(nbolax < limiteIzquierda) {
		dx *= -1;
		nbolax = limiteIzquierda;
	}

	if(nbolay > limiteAbajo) {
		dy *= -1;
		nbolay = limiteAbajo;
	}

	if(nbolay < limiteArriba) {
		dy *= -1;
		nbolay = limiteArriba;
	}

	bolax = nbolax;
	bolay = nbolay;
}