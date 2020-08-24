var n1
var n2
var op
function numero(n){
    var resultado= document.getElementById("resultado");
    resultado.textContent= resultado.textContent + n;
}
function operador(operador) {
    var resultado= document.getElementById("resultado");
    n1 = resultado.textContent;
    resultado.textContent= resultado.textContent + operador;
    op = operador; 
}
function igual(){
    var resultado= document.getElementById("resultado");
    var nresultado= resultado.textContent;
    var datos= nresultado.split(op);
    n2 = datos[1];
    operar();
}
function operar(){
    var resultado= document.getElementById("resultado");
    if (op=="+"){
        resultado.textContent=Number(n1)+Number(n2);  
    }
    if (op=="-"){
        resultado.textContent=Number(n1)-Number(n2);  
    }
    if (op=="*"){
        resultado.textContent=Number(n1)*Number(n2);  
    }
    if (op=="/"){
        resultado.textContent=Number(n1)/Number(n2);  
    }
}
function limpiar(){
    var resultado= document.getElementById("resultado");
    resultado.textContent="";
    n1="";
    n2="";
    op="";
}

