window.cipher = {

/*Codificar el contenido que se dirija en la caja*/
encode: (offset, string) => {
  // Variable declarada para guardar la palabra cifrada
  let mensageEncrypted="";
//Realiza un bucle del tamaño de el texto ingresado
  for (let i=0; i<string.length; i++){ 
// Devuelve el índice de la cadena introducida
  let asciiMensage=string.charCodeAt(i);
  // Aplicando fórmula de cifrado César
  let cipherMensage 
// Condición en mayúsculas
  if (33 <= asciiMensage <= 90)
  {
    cipherMensage = asciiMensage-65+parseInt(offset)%26+65;
  }
  else if  (97 <= asciiMensage <= 122){
    cipherMensage = asciiMensage-97+parseInt(offset)%26+97;
  }

  else if (33 <= asciiMensage <= 63){
    cipherMensage = asciiMensage-33+parseInt(offset)%26+33;
  }

  else if (32 === asciiMensage) {
    cipherMensage = " ";

  }
// Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
    mensageEncrypted += String.fromCharCode (cipherMensage);
    // console.log (mensageEncrypted);
  }

  return mensageEncrypted;

  
  },

  /*Codificar el contenido que se dirija en la caja*/
  decode: (offset, string) => {
  // Variable declarada para guardar la palabra cifrada
  let mensageDesEncrypted="";
//Realiza un bucle del tamaño de el texto ingresado
  for (let i=0; i<string.length; i++){ 
// Devuelve el índice de la cadena introducida
  let asciiMensageDes=string.charCodeAt(i);
  // Aplicando fórmula de cifrado César
  let descifradoMensage
  let parsenOffset= parseInt (offset);
// Condición en mayúsculas
  if (65 <= asciiMensageDes <= 90)
  {
    descifradoMensage = 90-(90+string.charCodeAt(i)-parseInt(offset))%26;
  }
  else if  (97 <= asciiMensageDes <= 122){
    descifradoMensage = 122-(122+string.charCodeAt(i)-parseInt(offset))%26;
  }

  else if (33 <= asciiMensageDes <= 63){
    descifradoMensage = 63-(63+string.charCodeAt(i)-parseInt(offset))%26;
  }

  else if (32 === asciiMensageDes) {
    descifradoMensage = " ";

  }
// Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
    mensageDesEncrypted += String.fromCharCode (descifradoMensage);
    // console.log (mensageEncrypted);
  }

  return mensageDesEncrypted;

  
  },
};