// let nom = document.getElementById('nombre');
// let edad = document.getElementById('edad');
// let fecha = document.getElementById('fecha');
// let glu = document.getElementById('azucar');
// let preA = document.getElementById('pa');
// let preB = document.getElementById('pb');
// let lat = document.getElementById('lat');



class Glucosa{
    constructor({
        glucosa = [],
    }){
        this.glucosa = glucosa;
    }
}
const registroGlocosa = new Glucosa({
    glucosa: [203,229],
});


class PresionA{
    constructor({
        presionA = [],
    }){
        this.presionA = presionA;
    }
}
const presionAlta = new PresionA({
    presionA: [126,106],
});


class PresionB{
    constructor({
        presionB = [],
    }){
        this.presionB = presionB;
    }
}
const presionBaja = new PresionB({
    presionB: [67,67],
});


class Latidos{
    constructor({
        latidos = []
    
    }){
        this.latidos = latidos;
    }
}
const latidosTotales = new Latidos({
    latidos: [53,52],
});



class UserGlucometer{
    constructor({
        nombre,
        edad,
        fecha = [],
        glucosa = [],
        presionA = [],
        presionB = [],
        latidos = []
    }){
        this.nombre = nombre;
        this.edad = edad;
        this.fecha = fecha;
        this.glucosa = glucosa;
        this.presionA = presionA;
        this.presionB = presionB;
        this.latidos = latidos;
    }
}




let usuario1 = new UserGlucometer({
    nombre: "Carmen",
    edad: 65,
    fecha: new Date().toLocaleDateString(),
    glucosa: [registroGlocosa],
    presionA: [presionAlta],
    presionB: [presionBaja],
    latidos: [latidosTotales],
});


let usuario2 = new UserGlucometer({
    nombre: "Pancho",
    edad: 50,
    fecha: new Date(),
    glucosa: [registroGlocosa],
    presionA: [presionAlta],
    presionB: [presionBaja],
    latidos: [latidosTotales],
});











// para obtener la fecha de hoy 
// const fecha = new Date();
// console.log(fecha);
// // Sat May 28 2022 18:42:01 GMT-0500 (hora de verano central)

// // obtener el año actual
// const añoActual = fecha.getFullYear();
// console.log(añoActual);

// //obtener el mes y el dia 
// const hoy = fecha.getDate();
// const mesActual = fecha.getMonth() + 1;

// console.log(`hoy es ${hoy} del mes ${mesActual}`);

// const formatoMap = {
//     day: fecha.getDate(),
//     month: fecha.getMonth() + 1,
//     año2digitos: fecha.getFullYear().toString().slice(-2),
//     año4digitos: fecha.getFullYear(),
//     fecha: fecha,
//     fechalocal: fecha.toUTCString(),
//     fechacorta: fecha.toLocaleDateString(),
// };

// console.log(formatoMap);












