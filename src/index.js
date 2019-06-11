const buttonchat = document.getElementById('button_chat');
const firstsection = document.getElementById ('first_section');
const secondsection =document.getElementById('second_section');


const getfirstsection = ()=> {
firstsection.classList.add ("disappear");
secondsection.classList.remove("appear");
};

buttonchat.addEventListener ("click", getfirstsection);


const buttoncifrar = document.getElementById('button_cifrar');
const buttondescifrar = document.getElementById('button_descifrar');
const input = document.getElementById('input');



const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
clave = "5";
newmensaje="";
mensaje=input("Introduce tu mensaje");
word= input ("Introduce tu mensaje:");
position=alfabeto.find (input);
newposition = (position + clave) %27;
newword= alfabeto [newposition];
print (newword);
