/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;
	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
    resultadoDeLaSuma=primerNumero*segundoNumero;
    console.log(resultadoDeLaSuma);


	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	console.log(segundoNumero);

	suma=primerNumero+segundoNumero;
	alert("La suma es "+ suma);

}

function restar()
{
	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	console.log(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	console.log(segundoNumero);

	resta=primerNumero-segundoNumero;
	alert("La resta es "+resta);
	
}

function multiplicar()
{
	var primerNumero;
	var segundoNumero;
	var multiplicar;


	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	console.log(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	console.log(segundoNumero);

	multiplicar=primerNumero*segundoNumero;
	alert("La multiplicacion es "+multiplicar);




	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var dividir;
	
	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	console.log(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	console.log(segundoNumero);

	dividir=primerNumero/segundoNumero;
	alert("La division es "+dividir);

}

