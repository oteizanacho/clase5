console.log('----');

let fs = require ('fs');

let archivo = fs.readFileSync('tareas.json', 'utf-8');

console.log(archivo);

console.log(JSON.parse(archivo));
