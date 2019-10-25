// https://www.youtube.com/watch?v=RqQ1d1qEWlE
console.error("Error MSG");
var miVariableString = 'Bob';
console.log(miVariableString);
var miVariableInt = 10;
console.log(miVariableInt);
var miVariableBoolean = true;
console.log(miVariableBoolean);
var miVariableArray = [1,'Bob','Steve',10];
console.log(miVariableArray);
var miVariableObject = document.querySelector('h1');
console.log(miVariableObject);
var usuario = {
	"name": "Carlos",
	"edad": 26,
	"peso": 60.5,
	"futbol": true
};
console.log(usuario);
const miVariableConstante = 'CONSTANTE';
console.log(miVariableConstante);
/*
let te permite declarar variables
limitando su alcance (scope) al bloque,
 declaración, o expresión donde se está usando.
 */
document.querySelector('h1').onclick = function(){
	let msg = "Has pulsado H1";
	alert(msg);
};

try {
 	nonExistentFunction();
}catch(error) {
 	console.error(error);
}


function ExceptionUsuario(mensaje) {
   this.mensaje = mensaje;
   this.nombre = "ExceptionUsuario";
}
try {
	let miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
    throw miExcepcionUsuario;
}catch(error) {
  console.error(error);
}

// https://uniwebsidad.com/libros/javascript

// https://www.youtube.com/watch?v=Q9fwkpxr3Dw
var name = 'Carlos';
var old = 26;
var datos = document.getElementById("datos");
datos.innerHTML = `
		<h2> Add to html </h2>
		<p> Nombre: ${name} </p>
		<p> Edad: ${old} </p>
	`;

datos.innerHTML += '<footer> Bye bye</footer>';




document.write('<br><br><p>Recorremos foreach array</p>')
miVariableArray.forEach((item) => {
	document.write(item + '<br>')
});