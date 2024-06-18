let dato, resultado; /* se define dato y resultado como una variable*/

val1 = window.prompt("Introduce tu nombre", "..."); /* asignamos valor a val1 con 
con window.prompt, la cual permitira abrir una venta en la pagina para pedirle al usuario escriba 
su nombre, que se le asignara a val1*/
val2 = window.prompt("Introduce tu apellido", "...");/* Lo mismo que el anterior */

dato = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; /* a la variable dato
 le asignamos el valor de la union de val1 y val2*/

 resultado = dato /* A Resultado le asiganamos el valor de dato */

document.write(resultado); /* imprimimos el valor de Resultado en pantalla */