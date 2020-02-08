/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var suma;
	var resultado;

	primerprecio=document.getElementById('PrecioUno').value;
	segundoprecio=document.getElementById('PrecioDos').value;
	tercerprecio=document.getElementById('PrecioTres').value;
	primerprecio=parseInt(primerprecio);
	segundoprecio=parseInt(segundoprecio);
	tercerprecio=parseInt(tercerprecio);
	//el parseInt transforma en numero entero al valor entre parentesis

	suma=primerprecio+segundoprecio+tercerprecio;
	console.log(suma);
	resultado=suma;
	alert("El resultado es "+resultado);


	
}
function Promedio () 
{

	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var suma;
	var resultado;
	var promedio;

	primerprecio=document.getElementById('PrecioUno').value;
	segundoprecio=document.getElementById('PrecioDos').value;
	tercerprecio=document.getElementById('PrecioTres').value;

	primerprecio=parseInt(primerprecio);
	segundoprecio=parseInt(segundoprecio);
	tercerprecio=parseInt(tercerprecio);


	suma=primerprecio+segundoprecio+tercerprecio;
	console.log(suma);
	promedio=suma/3;
	resultado=promedio;

	
	alert("El resultado es "+resultado);

	
}
function PrecioFinal () 
{

	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var IVA;
	var suma;
	var resultado;
	var PrecioFinal;


	primerprecio=document.getElementById('PrecioUno').value;
	segundoprecio=document.getElementById('PrecioDos').value;
	tercerprecio=document.getElementById('PrecioTres').value;
	primerprecio=parseInt(primerprecio);
	segundoprecio=parseInt(segundoprecio);
	tercerprecio=parseInt(tercerprecio);

	IVA=21;
	suma=primerprecio+segundoprecio+tercerprecio;
	resultado=(suma*IVA)/100;
	PrecioFinal=suma+resultado;
	alert("El resultado es "+PrecioFinal);


	
}