let cursos = [
    {    
        codigo: 1,
        nombre:"JAVA",
        duracion:"40 Horas",
        valor:"$ 40.000"
    },
    {
        codigo: 2,
        nombre:"PHP",
        duracion:"50 Horas",
        valor:"$ 50.000"
    },
    {
        codigo: 3,
        nombre:"JAVASCRIPT",
        duracion:"60 Horas",
        valor:"$ 60.000"
    }
    ];


let buscarCurso = (codigo) => {
    return cursos.find( curso => curso.codigo == codigo);
} 
   
let mostrarInfoCurso = ()=>{
    for (let i = 0; i < cursos.length; i++) {
        setTimeout(() => {
            console.log(
            'ID '+ cursos[i].codigo+ ': '+ 
            'El curso se llama '+cursos[i].nombre+
            ' tiene una duracion de '+cursos[i].duracion+
            ' y un valor de '+cursos[i].valor);
        }, i * 2000);
      }
}


module.exports = {
    cursos,
    buscarCurso,
    mostrarInfoCurso
};
