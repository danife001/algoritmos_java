// document.body.onload = function (){
    // alert("hola mundo")
// }
// aca se pone la funcion mencionada en el html
function suma (){
    var a=0;
    var b=0;
    var suma=0;
    var resta=0;
    var div=0;
    var multi=0;
    
    alert("este algoritmo raliza las cuatro operaciones basicas de dos valores ingresados por el usuario");
   
    a =parseInt( prompt("por favor ingrese el primer valor  "));
    b =parseInt( prompt("por favor ingrese el segundo valor "));

    suma=a+b;
    resta=a-b;
    div=a/b;
    multi=a*b;

    alert("el resultado de la suma es : " +suma+" la resta es :"+resta+"  la division es :"+div+"  la multiplicacion es :"+multi);

}

function mayordedos (){
    var a=0;
    var b=0;

    alert("este algoritmo determina el mayor de dos numeros ");
    a =parseInt( prompt("por favor ingrese el primer valor  "));
    b =parseInt( prompt("por favor ingrese el segundo valor "));
    if (a>b) {
        alert("el numero mayor es "+a)
    } else {
        alert("el numero mayor es "+b)
    }

}

function menordetres (){
    var a=0;
    var b=0;
    var c=0;

    alert("este algoritmo determina el menor  de tres numeros  ");
    a =parseInt( prompt("por favor ingrese el primer valor  "));
    b =parseInt( prompt("por favor ingrese el segundo valor "));
    c =parseInt( prompt("por favor ingrese el tercer valor "));

    if (a==b && b==c) {
        alert("los numeros son iguales ")
    } else if (b<a && b<c) {
        alert("el menor es "+b)
    } else if (a<b && a<c){
        alert("el menor es "+a)
    }else {
        alert("el menor es "+c)
    }

}

function elevado (){
    var a=0;
    var b=0;

    alert("este algoritmo eleva el numero indicado al cuadrado ");
    a =parseInt( prompt("por favor ingrese el primer valor  "));
    
   b=a**2
   alert("el numero elevado es :"+b)
}

function triangulo (){
    var b=0;
    var h=0;
    var a=0;

    alert("este algoritmo determina el area de un triangulo ");
    h =parseInt( prompt("por favor ingrese la altura de el triangulo  "));
    b =parseInt( prompt("por favor ingrese la base del triaungulo  "));
    
   a=(b*h)/2
   alert("el area del triangulo es :"+a)
}

function medidas  (){
    var m=0;
    var cm=0;
    var inch=0;
    var km=0;
    

    alert("este algoritmo convierte los metros a centimetros , a pulgadas y a kilometros ");
    m =parseInt( prompt("por favor ingrese el primer valor  "));
    cm=m*100
    km=m/1000
    inch=m*39.37

    alert("la mededidas son : "+cm+"cm, "+km+"km y "+inch+"pulgada" )
}

function parimpar  (){
    var a=0;
   

    alert("este algoritmo indica si el numero es par o impar ");
    a =parseInt( prompt("por favor ingrese el primer valor  "));
    if (a%2==1 ) {
        
        alert("el numero es impar " )
    } else {
        alert("el numero es par" )
    }
}


function edad  (){
    var a=0;
    var b=0;

    alert("determina el año en el que nacio ");
    a =parseInt( prompt("por favor ingrese su edad  "));
    b = 2022-a
    alert("su edad es :"+b)
}

function manzana   (){
    var a=0;
    var b=0;
    var c=0;
    var p=0;

    alert("determina el descuento de la compra de kilos de manzanas  ");
    a =parseInt( prompt("por favor ingrese la cantidad de kilos que compro"));
    if (a<3) {
        c=a*4500
        
    } else if(a<5) {
        b=a*4500
        p=b*0.10
        c=b-p
        
    } else if (a<10){
        b=a*4500
        p=b*0.15
        c=b-p
    } else {
        b=a*4500
        p=b*0.20
        c=b-p
    }
    alert("el valor total de las manzanas es "+c)
}

function notas  (){
    var a=0;
    var b=0;
    var p=0;
    var c=1;

    alert("determina si un estudiante paso o no dependiendo de su promedio ");
    while (c<=5){
        a =parseInt( prompt("por favor ingrese la nota numero "+c));
        c++
        b=b+a
        
    }
    p=b/5
   if (p>=3) {
       alert("aprobo")
       
   } else {
    alert("no aprobo")
   }
}

function inversion  (){
    var a=0;
    var b=0;
    var i=0;
    var c=0;
    var n=0;

    alert("determina la inversion dada en unos años por el usuario ");
    a=parseInt(prompt("ingrese los años de la inversion :"))
    b=parseInt(prompt("ingrese los años de la inversion :"))
    n=a*12
    i=b*0.02
    i=i*n
    a=a*n
    c=a+i
    alert("la inversion sera de :"+c)

}

function cifras   (){
    var a=0;

    alert("este algoritmo determina el numero de cifras de un numero  ");
    a =parseInt( prompt("por favor ingrese su edad  "));
   if (a<10) {
       alert("el numero tiene una cifra")
   } else if(a<100) {
       alert("el numero tiene dos cifras")
   } else if (a<1000){
       alert("el numero tiene tres cifras ")
   }else if(a<10000){
    alert("el numero tiene cuatro cifras ")
   }else if(a<100000){
       alert("el numero tiene cinco  cifras ")
   }

}