const process = require('process');
const { listar, crear, leerPorEstado } = require('./tarea/funcionesDeTareas.js');
let accion = process.argv[2];

switch (accion) {
    case undefined:
        console.log('Escriba uno de estos comandos: listar , crear , filtrar')
        break;
    case 'listar':
        return listar()
        break;
    case 'crear':
        crear(process.argv[3], process.argv[4])
        return listar()
        break;
    case 'filtrar':
        leerPorEstado(process.argv[3])
        break;
    default:
        console.log('Tu respuesta solo se vera con los comandos disponibles: listar , crear , filtrar')
        break;
};
