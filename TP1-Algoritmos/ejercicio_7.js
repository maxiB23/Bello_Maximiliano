var valores = [true, false, 2, "hola", "mundo", 3, "char"];
    var strings = valores.filter((elemento) => typeof elemento === 'string');
strings.sort((a, b) => b.length - a.length);
    var elementoMayor = strings[0];
console.log("El elemento de texto con mayor longitud de letras es:", elementoMayor);

var strings = valores.filter((elemento) => typeof elemento === 'string');
strings.sort((a, b) => a.length - b.length);
    var elementoMenor = strings[0];
console.log("El elemento de texto con menor longitud letras es:", elementoMenor);

var numeros = valores.filter((elemento) => typeof elemento === 'number');
    var suma = numeros[0] + numeros[1];
    var resta = numeros[0] - numeros[1];
    var multiplicacion = numeros[0] * numeros[1];
    var division = numeros[0] / numeros[1];
console.log("Resultado de la suma:", suma);
console.log("Resultado de la resta:", resta);
console.log("Resultado de la multiplicación:", multiplicacion);
console.log("Resultado de la división:", division);

//Quiero Mostrar en Pantalla tambien aunque no este en la consigna:
document.write(`El elemento de texto con mayor longitud de letras es: ${elementoMayor} <br>`);
document.write(`El elemento de texto con menor longitud de letras es: ${elementoMenor} <br>`);
document.write(`Resultado de la suma: ${suma} <br>`);
document.write(`Resultado de la resta: ${resta} <br>`);
document.write(`Resultado de la multiplicación: ${multiplicacion} <br>`);
document.write(`Resultado de la división: ${division} <br>`);