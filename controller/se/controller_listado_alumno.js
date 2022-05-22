var tabla = $('#table_registro_alumno').DataTable({
    "language": {
        "url": "./app/json/lenguaje.json"
    },"ajax":'./model/se/model_tabla_alumnos.php',
    "columns": [
        {"data": "id_alumno", className: "text-center"},
        {"data": "numero_control", className: "text-center"},
        {"data": "nombre_persona", className: "text-center"},
        {"data": "apellido_paterno", className: "text-center"},
        {"data": "apellido_materno", className: "text-center"},
        {"data": "carrera", className: "text-center"},
        {"data": "semestre", className: "text-center"},
        {"data": "btnEditar", className: "text-center"},
        //{"data": "btnEliminar", className: "text-center"}
    ]
});
