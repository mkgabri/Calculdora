var edittext = document.getElementById("inputBox");
var editpro = document.getElementById("pro");
var ibox = document.getElementById("inputBox");

function clc(e){
    edittext.value = "";
}

function canc(e){
    edittext.value = edittext.value.substring(0, edittext.value.length-1);
}

function edit(e){
    edittext.value += e.value;
    console.log(e.value); /* stampa su console */
}

function calc(e){
    //edittext.value = eval(edittext.value);  /* vecchio funzione di calcolo, analizza il valore di una stringa */

}

//salvataggio dell'operatore
function operator(e){
    
}

function toggle(){
    if(editpro.style.display === "block"){
        editpro.style.display = "none";
        ibox.style.width = "240px";
    }
    else{
        editpro.style.display = "block";
        ibox.style.width = "420px";
    }
}

// querySelector me permite selecionar un elemento
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click',function (){
    //<!-- classList tiene un metodo toggle que agrega o quita una clase
    document.getElementById('sidebar').classList.toggle('active');
})


