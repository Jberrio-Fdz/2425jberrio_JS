//funcion de bienvenida a la web
function saludar(){
    const mensaje = "Bienvenid@ a GASTRONOMIKA!!!"
    var nombre=prompt("Escribe tu nombre","");
    alert(mensaje+""+nombre);
}

function llamar(){
    if (confirm("¿Quieres conocer más de nuestro proyecto?") == true){
        window.open("https://www.birt.eus/")
    }
    else{
        alert("Gracias por visitarnos");
    }
}
// Funcion para habilitar cuadros de textos en formulario
function reservar(){  
    if(confirm("¿Desea hacer una reserva?") == true){
        document.getElementById("nombre").disabled = false;
        document.getElementById("nombre").focus();
        document.getElementById("telefono").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("enviar").disabled = false;
        document.getElementById("cancelar").disabled = false;
    }
}

function sombrear(){ // funcion para resaltar en la barra de navegacion la pagina actual
    window.onload = document.getElementById("actividad").style.background='brown';
    window.onload = document.getElementById("actividad").style.color='white';
}
function cambiarimagen(){
    document.getElementById("galerias").src="imagenes/galeria3.jpg";
}