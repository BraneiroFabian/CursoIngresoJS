/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	var importe;
	var porcentaje;
	var resultado;
	var descuento;

	porcentaje=25;
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	descuento=importe*porcentaje/100;
	console.log(descuento);
	resultado=importe-descuento;

	document.getElementById('resultado').value=resultado;

	
}
