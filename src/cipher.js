window.cipher = {
  /*... cipher.encode(offset, string): offset es el número de posiciones que queremos 
  mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover 
a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.*/



/*Codificar el contenido que se dirija en la caja*/
const encode = (offset, string) {
  /*Declaración de variable para conocer el tamaño del string ingresado*/ 
  let size = string.length; 
 /*Declaración de variable offset, convirtiendola en número entero con el parseInt*/
  let offSetConv=parseInt (offset);
  /*Declaración de variable donde se guardará el mensaje ingresado en formato ASCII*/
  let inputMensage;
    /*Declaración de variable donde se guardará el mensaje ASCII con la función de cifrado*/
  let cipherMensage;
/*Evaluar la necesidad de esta variable*/
  let mensageEncrypted="";

  for (let i=0 i<size; i++){
    inputMensage=string.charCodeAt(i)

      cipherMensage =(inputMensage-65+offSetConv)%26+65;
      mensageEncrypted=mensageEncrypted+string.from.charCodeAt(cipherMensage);
  }
return mensageEncrypted
  
}

/*(position+wordinput)%26 Formula para obtener los desplazamientos*/

};
module.exports = encode;