window.cipher = {

/*Codificar el contenido que se dirija en la caja*/
encode : (offset, string) => {
  /*Declaración de variable para conocer el tamaño del string ingresado*/ 
  let size = string.length; 
 /*Declaración de variable offset, convirtiendola en número entero con el parseInt*/
  let offSetConv= parseInt (offset);
  /*Declaración de variable donde se guardará el mensaje ingresado en formato ASCII*/
  let asciiMensage;
    /*Declaración de variable donde se guardará el mensaje ASCII con la función de cifrado*/
  let cipherMensage;
/*Evaluar la necesidad de esta variable*/
  let mensageEncrypted="";
//Realiza un bucle del tamaño de el texto ingresado
  for (let i=0; i<size; i++){ 
// Devuelve el índice de la cadena introducida
    asciiMensage=string.charCodeAt(i);
// Aplicando fórmula de cifrado César
    cipherMensage= (asciiMensage-65+offSetConv)%26+65;
// Obteniendo los caracteres cifrados de forma concatenada, para cifrar la frase completa
    const result = mensageEncrypted + String.fromCharCode (cipherMensage);
    console.log(result)
  }

// return (cipher.encode.result);
  
  },

}

decode:(offset, string) => {


}