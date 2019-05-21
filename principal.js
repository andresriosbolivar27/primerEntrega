const estudiante = require ('./archivo');
const cursos = require ('./datos');

const argv = require ('yargs')
			.command('inscribir','Incripcion a cursos',estudiante.parametros)
			.argv;

if (argv.n != undefined || argv.d !=undefined || argv.c!=undefined) {
    if (cursos.buscarCurso(argv.c)==undefined) {
        console.log('El curso con el codigo '+argv.c+' no existe');
        cursos.mostrarInfoCurso();
        process.exit(); 
    }else{
        estudiante.crearArchivo(argv.d,argv.n,cursos.buscarCurso(argv.c));
    }

} else {
    cursos.mostrarInfoCurso();
} 






