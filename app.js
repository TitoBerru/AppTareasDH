let fs = require ('fs');
let process = require ('process');

//process.argv.forEach((val, index) => {
  //  console.log(`${index}: ${val}`);
  //});

let objetoLiteral = require('./tareas.json'); // OTRA FORMA DE traer el archivo json  EN UNA LINEA
let listarTareas = require ('./funcionesDeTareas/listarTareas'); //traigo el modulo de listar tareas
let guardarTareas = require ('./funcionesDeTareas/guardarTareas'); //traigo el modulo de guardar tareas
let borrar = require ('./funcionesDeTareas/borrarTareas'); //traigo el modulo de borrar.
let filtrar = require ('./funcionesDeTareas/filtrarTareas'); //modulo para filtrar por cantidad de tareas.
let filtrarPorCaso = require ('./funcionesDeTareas/filtro');
const filtro = require('./funcionesDeTareas/filtro');

//let obj_json =fs.readFileSync('./tareas.json');
//let obj_literal = JSON.parse(obj_json);
/* let nuevaTarea = 
  {
    "codigo": 5,
    "titulo": "esta es la tarea que agrego",
    "estado": "intentanding..."
  };
  */

filtro(objetoLiteral,5);

// Modifico un poco el codigo para subirlo a Github y ver 
console.log("es una prueba para GitHub");

