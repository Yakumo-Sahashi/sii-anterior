$(document).ready(function () {
    var tabla = $("#tabla_datos").DataTable({
        language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de MAX total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
        "ajax": "./model/acad/model_tabla_solicitud.php",
        "columns": [
            {"data": "descripcion_solicitud"},
            {"data": "solicitud", className : "text-center"},
            {"data": "estado_solicitud", 
            render: function(data, type, row){
                if(row.estado_solicitud == 1){
                    return '<span class="text-success">Aprobada</span>';
                }else if(row.estado_solicitud == 2){
                    return '<span class="text-danger">Rechazada</span>';
                }else{
                    return '<span class="text-primary">En espera</span>';
                }
            }},
            {"data": "fecha_realizo_solicitud"},
            {"data": "fecha_atencion_solicitud", 
            render: function(data, type, row){
                if(row.fecha_atencion_solicitud == null){
                    return '<span class="text-primary">En espera</span>';
                } else {
                    return row.fecha_atencion_solicitud;
                }
            }},
            
    ]
    
    });
    
});