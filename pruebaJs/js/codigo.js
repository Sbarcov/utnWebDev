const num1 = parseInt(prompt('Ingrese la distancia a recorrer:', ''));


		if (num1 > 100000) {
			document.write(`Viaje en Avion`);
		} else if (num1 <= 100000 && num1 > 30000 ) {
			document.write(`Viaje en Auto`);
		} else if (num1 <= 30000 && num1 > 10000 ) {
        document.write(`Viaje en Colectivo`);
        } else if (num1 <= 10000 && num1 > 1000 ) {
            document.write(`Viaje en Bicicleta`);
        } else {
			document.write(`Viaje Caminando`);
        }