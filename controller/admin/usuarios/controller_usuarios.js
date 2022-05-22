var tabla = $('#tabla_registro_usuario').DataTable({
    "language": {
        "url": "./app/json/lenguaje.json"
    },"ajax":'./model/admin/model_tabla_usuarios.php',
    "columns": [
        {"data": "id_usuario", className: "text-center"},
        {"data": "correo_usuario", className: "text-center"},
        {"data": "nombre_persona", className: "text-center"},
        {"data": "apellido_paterno", className: "text-center"},
        {"data": "apellido_materno", className: "text-center"},
        {"data": "telefono", className: "text-center"},
        {"data": "btnEditar", className: "text-center"},
        //{"data": "btnEliminar", className: "text-center"},
    ]
});


