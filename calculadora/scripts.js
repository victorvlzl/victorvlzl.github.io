
var pantalla = document.getElementById("pantalla");

function clickButton(valor){
    pantalla.value += valor;
}

function clickClear(){
    pantalla.value = '';
}

function clickResult(){
    var result = eval(pantalla.value);
    pantalla.value = result;
}

