/*let fs = require ('fs');

let archivo = fs.readFileSync('tareas.json', 'utf-8');

//console.log(JSON.parse(archivo));

let palabra = 'listar';*/

switch(palabra){
    case 'listar':
        console.log(JSON.parse(archivo));
        break;
    case ' ':
        console.log('Atencion - Tienes que pasar una accion');
        break;
    default:
        console.log('No entiendo que quieres hacer');
        break;
}