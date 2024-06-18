function PrimeraVocal(texto) {
    const vocales = "aeiou";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (vocales.includes(letra)) {
            return `La primera vocal es '${letra}'. Está en la posición Nº${i + 1}.`;
        }
    }
    return "No se encontraron vocales en el texto.";
}

const textoUsuario = prompt("Introduce un texto: ");
const resultado = PrimeraVocal(textoUsuario);
console.log(resultado);
document.write(resultado);