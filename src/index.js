let nom = document.getSelection('#nom');

const boton = document.getSelection('.ingresar_datos').onclick = getData(nom)

function getData(nombre){
    console.log(nombre);
}