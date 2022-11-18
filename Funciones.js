var numpantalla="0";
var pantallaconnumero="si"; //Si o No
var usarpunto="no"; //Si o No
var numespera=0;
var operapendiente="";
var solucion="";
var porcentaje=100;

function ingresarnumero(x)
{
if(x!=".")
{

	if(numpantalla=="0" || pantallaconnumero=="si")
		{
			document.Calculadora.Funciones.value=x;
			numpantalla=x;
		}
	else if(x!=".")
		{
			document.Calculadora.Funciones.value+=x;
			numpantalla+=x;
		}
}

if(x=="." && usarpunto=="no" && numpantalla=="0")
	{
		document.Calculadora.Funciones.value="0.";
		numpantalla=x;
		usarpunto="si";
	}	
else if(x=="." && usarpunto=="no")
	{

		document.Calculadora.Funciones.value +=x;
		numpantalla +=x;
		usarpunto="si";
	}

else if(x=="." && usarpunto=="si")
{

}
	pantallaconnumero="no";
}

function ingresaoperacion(y)
{
if(operapendiente =="")
{

numespera=document.Calculadora.Funciones.value;
document.Calculadora.Funciones.value +=y;
operapendiente = y;
pantallaconnumero = "no";
numpantalla = "";
usarpunto = "no";
_
}

}

function resultado()
{

if(operapendiente != "") 
{
solucion=numespera+operapendiente+numpantalla;
document.Calculadora.Funciones.value=eval(solucion);
numpantalla=eval(solucion);
pantallaconnumero="si";
operapendiente = "";
usarpunto = "no";

}

}

function raiz()
{

if(operapendiente == "")
{
document.Calculadora.Funciones.value=Math.sqrt(numpantalla);
pantallaconnumero = "no";
operapendiente = "";
usarpunto = "no";
}
}
function porcentaje()
{
if(operapendiente == "%")
    {
    solucion=numpantalla/100;
    document.Calculadora.Funciones.value=eval(solucion);
    numpantalla=eval(solucion);
    pantallaconnumero="si";
    operapendiente = "";
    usarpunto = "no";
    }


}


function limpiar()
{

 numpantalla="0";
 pantallaconnumero="si";
 usarpunto="no"; 
 numespera=0;
 operapendiente="";
 solucion="";
document.Calculadora.Funciones.value="0";
}
