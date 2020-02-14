function mostrar()
{

	var numero1;
	var numero2;
	var resultadoSuma;
	var resultadoResta;

    numero1=prompt("Ingrese primer numero");
	numero2=prompt("Ingrese segundo numero");
	
	if (numero1==numero2) 
	{	

		alert (numero1+numero2);


	}
	else      
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);
		if (numero1>numero2)  
		{
		resultadoResta=parseInt(resultadoResta);	
		resultadoResta=numero1-numero2;	
 		alert (resultadoResta);
	
	}
	else
	{	resultadoSuma=parseInt(resultadoSuma);
		resultadoSuma=numero1+numero2;
		
	}
	}
	if (resultadoSuma>10) 
	{
		alert("La suma es "+resultadoSuma+" y supera el 10");
	}
	else
	{
		alert("La suma es "+resultadoSuma);
	}	

	




}
