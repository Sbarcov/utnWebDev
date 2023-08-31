const num1 = parseInt(prompt('Ingrese la distancia a recorrer:', 'hola'));
    if (num1 > 100000) {
    document.write(`Viaje en Avion`);
        } else if (num1 <= 100000 && num1 > 30000) {
            document.write(`Viaje en Auto`);
        } else if (num1 <= 30000 && num1 > 10000) {
            document.write(`Viaje en Colectivo`);
        } else if (num1 <= 10000 && num1 > 1000) {
            document.write(`Viaje en Bicicleta`);
        } else {
        document.write(`Viaje Caminando`);
    }

document.write(`-     -     -`);

const num2 = parseInt(prompt('Ingrese el tamaño del Array:', ''));

let Array1 = [];
Array1.length = num2;

for (let i = 0; i < Array1.length; i++) {
    Array1[i] = parseInt(prompt('Ingrese numeros al Array', ''));
}

let Aux = Array1[0];

for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] >= Aux) {
        Aux = Array1[i];
    }
}
document.write(`El elemento mas grande en el Array es: ` + Aux);
