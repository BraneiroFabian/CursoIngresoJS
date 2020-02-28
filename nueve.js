function mostrar()
{
	


	var nombre;
    var edad;
    edad = parseInt(edad);
    var sexo;
    var nota;
    nota = parseInt(nota);
    var Continuar;
    var mAprobado;
    mAprobado = 0;
    var pMenores;
    pMenores = 0;
    var menores;
    menores = 0;
    var pAdolescentes;
    pAdolescentes = 0;
    var adolescentes;
    adolescentes = 0;
    var pMayores;
    pMayores = 0;
    var mayores;
    mayores = 0;
    var pMasculino;
    pMasculino = 0;
    var masculino;
    masculino = 0;
    var pFemenino;
    pFemenino = 0;
    var femenino;
    femenino = 0;
    
    while (Continuar!=="N")
    {
            nombre = prompt("Ingresá tu nombre");
            edad = prompt("Ingresá tu edad");
            edad = parseInt(edad);
        //valido que SI sea un número
        while (isNaN(edad))
        {
            edad = prompt("Re-Ingresá tu edad");
            edad = parseInt(edad);
        }
            sexo = prompt("Ingresa tu sexo (M/F) ");
        // Valido 
        while (sexo!="M"&&sexo!="F")
        {
            sexo = prompt("Ingresa tu sexo (M/F) ");
        }
            nota = prompt("Ingresa tu nota final (1-10)")
            nota = parseInt(nota);
        while (isNaN(nota))
        {
            nota = prompt("Re ingresa tu nota final (1-10)")
            nota = parseInt(nota);
        }
        if (sexo=="M" && nota>5)
        {
            // cuento cuantos Varones hay con el contador "mAprobado"
            mAprobado = mAprobado+1
        }
        if (edad<13)
        {   
            // cuento y almaceno todas las notas de los menores
            pMenores = pMenores + nota;
            pMenores = parseInt(pMenores);
            // cuento y agrupo cuantos menores hay.
            menores = menores + 1
    
        }
        if (edad>13 && edad<18)
        {
            pAdolescentes = pAdolescentes + nota;
            pAdolescentes = parseInt(pAdolescentes);
            adolescentes = adolescentes + 1;
        }
        if (edad>18)
        {
            pMayores = pMayores + nota;
            pMayores = parseInt(pMayores);
            mayores = mayores + 1;
        }
        if (sexo=="M")
        {
            pMasculino = pMasculino + nota;
            pMasculino = parseInt(pMasculino);
            masculino = masculino + 1;
        }
        else 
        {
            pFemenino = pFemenino + nota;
            pFemenino = parseInt(pFemenino);
            femenino = femenino +1;
        }
        Continuar = prompt("¿Desea ingresar mas datos? (S/N)");
    
    }
        //Calculos
        document.write("Cantidad de varones aprobados:"+mAprobado+"<br>");
        document.write("El promedio de los menores es:"+pMenores/menores+"<br>");
        document.write("El promedio de los adolescentes es:"+pAdolescentes/adolescentes+"<br>");
        document.write("El promedio de los mayores es:"+pMayores/mayores+"<br>");
        document.write("El promedio de notas Masculino es:"+pMasculino/masculino+"<br>");
        document.write("El promedio de las notas femeninas es:"+pFemenino/femenino+"<br>");
}
