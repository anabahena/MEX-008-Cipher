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
  if (asciiMensage >= 65 && asciiMensage <= 90)
  {
    cipherMensage= (asciiMensage-65+parseInt(offset))%26+65;
  }
  else if (asciiMensage >= 97 && asciiMensage <= 122)
  {
    cipherMensage= (asciiMensage-97+parseInt(offset))%26+97;
  }
  // else if (asciiMensage >= 33 && asciiMensage <= 64)
  // {
  //   cipherMensage= (asciiMensage-33+parseInt(offset))%32+33;
  // }
  // else if (asciiMensage === 32)
  // {
  //   mensageEncrypted= mensageEncrypted + " ";
  // }

// Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
    mensageEncrypted += String.fromCharCode (cipherMensage);
  }
  return mensageEncrypted;

  },

  /*Codificar el contenido que se dirija en la caja*/
  decode: (offset, string) => {
  // Variable declarada para guardar la palabra cifrada
  let mensageEncrypted="";
//Realiza un bucle del tamaño de el texto ingresado
  for (let i=0; i<string.length; i++){ 
// Devuelve el índice de la cadena introducida
  let asciiMensageDes=string.charCodeAt(i);
  // Aplicando fórmula de cifrado César
  let descifradoMensage;
// Condición en mayúsculas
  if (asciiMensageDes >= 65 && asciiMensageDes <= 90)
  {
    descifradoMensage= (asciiMensageDes + 65 - parseInt(offset)) %26 + 65;
  }
  else if (asciiMensageDes >= 97 && asciiMensageDes <= 122)
  {
    descifradoMensage= (asciiMensageDes - 122 - parseInt(offset)) %26 + 122;
  }
// Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
    mensageEncrypted += String.fromCharCode (descifradoMensage);
  }
  return mensageEncrypted;

  },
};