window.cipher = {

/*Codificar el contenido que se dirija en la caja*/
encode: (offset, string) => {
  /*Declaración de variable para conocer el tamaño del string ingresado*/ 
  // let size = string.length; 
 /*Declaración de variable offset, convirtiendola en número entero con el parseInt*/
  let offSetConv= parseInt (offset);
  /*Declaración de variable string en mayúsculas*/
  let stringMayus = (string.toUpperCase ());
  /*Declaración de variable donde se guardará el mensaje ingresado en formato ASCII*/
  let asciiMensage;
    /*Declaración de variable donde se guardará el mensaje ASCII con la función de cifrado*/
  let cipherMensage;
  // Variable declarada para guardar la palabra cifrada
  let mensageEncrypted="";
//Realiza un bucle del tamaño de el texto ingresado
  for (let i=0; i<stringMayus.length; i++){ 
// Devuelve el índice de la cadena introducida
    asciiMensage=string.charCodeAt(i);
// Aplicando fórmula de cifrado César
    cipherMensage= (asciiMensage-65+offSetConv)%26+65;
    
// Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
    mensageEncrypted += String.fromCharCode (cipherMensage);
    
    // console.log (mensageEncrypted);
  }

  return mensageEncrypted;

  
  },

  /*Codificar el contenido que se dirija en la caja*/
  decode: (offset, string) => {
    /*Declaración de variable para conocer el tamaño del string ingresado*/ 
    // let size = string.length; 
   /*Declaración de variable offset, convirtiendola en número entero con el parseInt*/
    let offSetConvDec= parseInt (offset);
    /*Declaración de variable string en mayúsculas*/
    let stringMayus = (string.toUpperCase ());
    /*Declaración de variable donde se guardará el mensaje ingresado en formato ASCII*/
    let asciiMensageDec;
      /*Declaración de variable donde se guardará el mensaje ASCII con la función de cifrado*/
    let cipherMensageDec;
    // Variable declarada para guardar la palabra cifrada
    let mensageEncryptedDec="";
  //Realiza un bucle del tamaño de el texto ingresado
    for (let i=0; i<stringMayus.length; i++){ 
  // Devuelve el índice de la cadena introducida
      asciiMensageDec=string.charCodeAt(i);
  // Aplicando fórmula de cifrado César
      cipherMensageDec= (asciiMensageDec-65-offSetConvDec)%26+65;
      
  // Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
      mensageEncryptedDec += String.fromCharCode (cipherMensageDec);
      
      // console.log (mensageEncryptedDec);
    }
  
    return mensageEncryptedDec;
  
    
    },
}