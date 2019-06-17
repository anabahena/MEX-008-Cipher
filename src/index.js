
// Declaración de variables  de secciones y botones
const buttonchat = document.getElementById('button_chat');
const firstsection = document.getElementById ('first_section');
const secondsection =document.getElementById('second_section');
const buttoncifrar = document.getElementById('button_cifrar');
const buttondescifrar = document.getElementById('button_descifrar');




// Funcion para desaparecer la primera sección y aparecer la segunda sección
const getfirstsection = ()=> {
firstsection.classList.add ("disappear");
secondsection.classList.remove("appear");
};

// Invocación del boton para realizar lo que se declara en la funcion getfirstsection
buttonchat.addEventListener ("click", getfirstsection);



buttoncifrar.addEventListener ("click", () => {
    const offsetCif= document.getElementById("offsetCif");
    const inputStringCif = document.getElementById ("inputStringCif");
    const códigoCifrado = document.getElementById ("códigoCifrado");
    códigoCifrado.innerHTML = window.cipher.encode(offsetCif.value, inputStringCif.value);
});





buttondescifrar.addEventListener ("click", () => {
    const offsetDescif= document.getElementById("offsetDescif");
    const inputStringDescif = document.getElementById ("inputStringDescif");
    const códigoDescif= document.getElementById("códigoDescifrado")
    códigoDescif.innerHTML = window.cipher.decode(offsetDescif.value, inputStringDescif.value);
});




