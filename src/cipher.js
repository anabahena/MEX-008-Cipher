window.cipher = {

/*Codificar el contenido que se dirija en la caja*/
encode: (offset, string) => {
  /*Declaración de variable para conocer el tamaño del string ingresado*/ 
  // let size = string.length; 
 /*Declaración de variable offset, convirtiendola en número entero con el parseInt*/
  let offSetConv= parseInt (offset);
  /*Declaración de variable string en mayúsculas*/
  let stringMayus = (string.toUpperCase ());
  // Variable declarada para guardar la palabra cifrada
  let mensageEncrypted="";
//Realiza un bucle del tamaño de el texto ingresado
  for (let i=0; i<stringMayus.length; i++){ 
    // if (asciiMensage)===35 {

    //   mensageEncrypted= mensageEncrypted + ' ';
    // }
// Devuelve el índice de la cadena introducida
  let asciiMensage=string.charCodeAt(i);
// Aplicando fórmula de cifrado César
    let cipherMensage= (asciiMensage-65+offSetConv)%26+65;
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
    // Variable declarada para guardar la palabra cifrada
    let mensageEncryptedDec="";
  //Realiza un bucle del tamaño de el texto ingresado
    for (let i=0; i<stringMayus.length; i++){ 
  // Devuelve el índice de la cadena introducida
     let asciiMensageDec=string.charCodeAt(i);
  // Aplicando fórmula de cifrado César
      let cipherMensageDec= (asciiMensageDec+65-offSetConvDec)%26+65;
      
  // Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
      mensageEncryptedDec += String.fromCharCode (cipherMensageDec);
      
      // console.log (mensageEncryptedDec);
    }
  
    return mensageEncryptedDec;
  
    
    },
};