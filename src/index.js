let nom = document.getElementById('nom');
let edad = document.getElementById('edad');
let fecha = document.getElementById('fecha');
let glu = document.getElementById('azucar');
let preA = document.getElementById('pa');
let preB = document.getElementById('pb');
let lat = document.getElementById('lat');



function getData(){
    const user = {
        nombre: nom.value,
        edad: edad.value,
        fecha: fecha.value,
        recordData:[
            {glucosa:[parseInt(glu.value)]},
            {presionA: [parseInt(preA.value)]},
            {presionB:[parseInt(preB.value)]},
            {latidos:[parseInt(lat.value)]},
        ]
    };

    console.log(user);

}