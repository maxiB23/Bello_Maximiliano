const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre","Octubre", 
"Noviembre", "Diciembre"];
  
  function NombreDelMes(numero) 

  {
    if (numero >= 1 && numero <= 12) {
      return meses[numero - 1];
    } else {
      return "INVÁLIDO (debe ser un valor entre 1 y 12).";
    }
  }
  const Ingreso = parseInt(prompt("Para saber el nombre del mes ingrese un numero del 1 al 12:"));
  
  const Elmes = NombreDelMes(Ingreso);
  
alert(`El mes correspondiente al número ${Ingreso} es:
${Elmes}`);
console.log(`El mes correspondiente al número ${Ingreso} es:
${Elmes}`);
document.write(`El mes correspondiente al número ${Ingreso} es: ${Elmes}.`);