const fs = require('fs');

const parametros = {
    codigo:{
        demand: true,
        alias: 'c'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    documento:{
        demand:true,
        alias: 'd'
    }
};


let crearArchivo = (documento,nombre,curso)=>{
    texto = 'El estudiante con nombre ' + nombre +
            '\n con documento ' + documento+
            ' se ha matriculado en el curso '+curso.nombre+
            ' que tiene na duracion de '+curso.duracion+
            ' con un costo de '+curso.valor;

    fs.writeFile('registro - '+documento+'.txt',texto,(err)=>{
        if(err) throw (err);
        console.log('Se ha registrado la inscripcion')
    });
}

module.exports ={
    parametros,
    crearArchivo
};