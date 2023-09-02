//Ejercicio 1

const boton = document.getElementById('contenedor');

boton.addEventListener('click' , function(e) {
    if(e.target.id === 'rojo'){document.querySelector('body').style.background = "linear-gradient(rgb(255, 0, 0), rgb(255, 136, 0)) fixed";}
    if(e.target.id === 'azul'){document.querySelector('body').style.background = "linear-gradient(rgb(0, 17, 255), rgb(111, 9, 194)) fixed";}
    if(e.target.id === 'verde'){document.querySelector('body').style.background = "linear-gradient(rgb(30, 255, 0), rgb(0, 255, 200)) fixed";}
});

//Ejercicio 2

const textarea = document.getElementById('txtarea');

textarea.addEventListener('keyup' , function() {
    document.getElementById('contador').innerText = "Contador de caracteres: " + this.value.length;;
});

//Ejercicio 3

var alumnos = [{nombre: 'Juan Gomez', nota: 7}, {nombre: 'Pedro Rodriguez', nota: 4}, {nombre: 'Roxana García', nota: 8}, {nombre: 'Luciano Lopez', nota: 5}, {nombre: 'Fernanda Gimenez', nota: 6}, {nombre: 'Florencia Martinez', nota: 10}, { nombre: 'Raul Sanchez', nota: 7}, {nombre: 'Sandra Figueroa', nota: 8}];
var aprobados = alumnos.filter(e => e.nota >= 7)
document.getElementById('aprobados').innerText = JSON.stringify(aprobados); // Se muestra en formato 'Array de objetos'
