/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var cantidadAlambre;
	var largo;
	var ancho;
	var perimetro;
	var hiloAlambre;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro=(largo*2+ancho*2);
	perimetro=parseInt(perimetro);
	hiloAlambre=parseInt(hiloAlambre);
	hiloAlambre=3;//aca uso el 3 porque se debe hacer con 3 hilos de alambre

	

	console.log(perimetro);
	cantidadAlambre=perimetro*hiloAlambre;
	alert("Metros de alambre a comprar: "+cantidadAlambre);


}	


function Circulo () 
{
	var cantidadAlambre;
	var radio;
	var hiloAlambre;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	hiloAlambre=3;
	hiloAlambre=parseInt(hiloAlambre);
	diametro=radio*2;
	console.log(diametro);
	diametro=parseInt(diametro);

	cantidadAlambre=diametro*3;
	alert("Metros de alambre a comprar: "+cantidadAlambre);

	
}
function Materiales () 
{
	var largo;
	var ancho;
	var perimetro;
	var bolsasCal;
	var bolsasCemento;
	var bolsascementoNecesitadas;
	var bolsascalNecesitadas;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	bolsasCal=3;
	bolsasCal=parseInt(bolsasCal);
	bolsasCemento=2;
	bolsasCemento=parseInt(bolsasCemento);

	perimetro=parseInt(perimetro);
	perimetro=(largo*2+ancho*2);

	console.log(perimetro);
	bolsascementoNecesitadas=perimetro*bolsasCemento/4;
	bolsascalNecesitadas=perimetro*bolsasCal/4;

	alert("Cal necesitado: "+bolsascalNecesitadas);
	alert("Cemento necesitado: "+bolsascementoNecesitadas);




}