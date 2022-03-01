let fs = require ('fs');

let archivo = fs.readFileSync('tareas.json', 'utf-8');

let archivoJS = JSON.parse(archivo);

module.exports = archivoJS;

let archivoJS = {               // puedo exportar un objeto literal con mas funciones 
    leerArchivo: function(){
    let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
    return JSON.parse(tareasJSON);
    }
}