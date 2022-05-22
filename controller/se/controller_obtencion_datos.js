obtener_carrera();
obtener_tipo_ingreso();
var plan_id = '';
obtener_nivel_estudios();
obtener_estatus_alumno();
var curp = Array;
var lugar_naciemiento = "";

$('#lugar_naciemiento').change(function() {
    var dt = $(this).val();
    $('#curp').val(dt);
    console.log(dt);
});


function obtener_carrera(){    
    $.ajax({
        type: "POST",
        data: "funcion=consultar_carrera",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            $('#carrera_reticula').html(r);
        }
    });  
}

function obtener_especialidad(carrera){    
    $.ajax({
        type: "POST",
        data: "carrera_reticula=" + carrera + "&funcion=consultar_especialidad",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            $('#especialidad').html(r);
        }
    });  
}

function obtener_tipo_ingreso(){    
    $.ajax({
        type: "POST",
        data: "funcion=consultar_ingreso",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            $('#tipo_ingresos').html(r);
        }
    });  
}

function obtener_plan_estudios(carrera){    
    $.ajax({
        type: "POST",
        data: "carrera=" + carrera + "&funcion=consultar_plan_estudios",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            datos_precarga = jQuery.parseJSON(r);
            $('#plan_est').val(datos_precarga['id_cat_plan_estudio']);
            $('#plan_estudios').val(datos_precarga['plan_estudio']);
        }
    });  
}

function obtener_nivel_estudios(){    
    $.ajax({
        type: "POST",
        data: "funcion=consulta_nivel_estudios",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            $('#nivel_escolar').html(r);
        }
    });  
}

function obtener_estatus_alumno(){    
    $.ajax({
        type: "POST",
        data: "funcion=consulta_estatus_alumno",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            $('#estatus_alumno').html(r);
        }
    });  
}

function obtener_estado(codigo_postal){    
    $.ajax({
        type: "POST",
        data: "codigo_postal=" + codigo_postal + "&funcion=consultar_estado",
        url: "model/se/model_informacion_cat_dir.php",
        success: (r) => {
            var opcion_colonia = '';
            datos_precarga = jQuery.parseJSON(r);
            $('#estado').val(datos_precarga['estado']);
            $('#alcaldia').val(datos_precarga['alcaldia']);

            datos_precarga['colonia'].forEach((colonia)=> {
                opcion_colonia += '<option value="' + colonia + '">' + colonia + '</option>';
            });
            $('#colonia').html(opcion_colonia);
        }
    });  
}

$(document).on('keyup', '#codigo_postal', function() {
    var codigo_postal= $(this).val();
    if(codigo_postal != ""){
        obtener_estado(codigo_postal);
    }else{
        obtener_estado("");
    }
});

$('#carrera_reticula').change(function() {
    var carrera = $(this).val();
    obtener_especialidad(carrera);
    obtener_plan_estudios(carrera);
});