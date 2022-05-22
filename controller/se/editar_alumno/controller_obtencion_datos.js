obtener_carrera();
obtener_tipo_ingreso();
var plan_id = '';
obtener_nivel_estudios();
obtener_estatus_alumno();

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


function precargar_alumno(buscar){
    opening();
    $.ajax({
        type: "POST",
        data: "id_alumno=" + buscar + "&funcion=precargar_alumno",
        url: "model/se/model_actualizar_alumno.php",
        success: (r) => {
            datos_alumno = jQuery.parseJSON(r);
            console.log(datos_alumno);
            //parte uno
            $("#codigo_postal").val(datos_alumno['codigo_postal']);
            obtener_estado(datos_alumno['codigo_postal']);  
            setTimeout
            //$("#colonia").val(datos_alumno['colonia']);   
            $("#apellido_paterno").val(datos_alumno['apellido_paterno']);
            $("#apellido_materno").val(datos_alumno['apellido_materno']);
            $("#nombres").val(datos_alumno['nombre_persona']);
            $("#lugar_nacimiento").val(datos_alumno['lugar_nacimiento']);
            $("#fecha_nacimiento").val(datos_alumno['fecha_nacimiento']);
            $("#selector_sexo").val(datos_alumno['id_cat_sexo']);
            $("#selector_edo_civil").val(datos_alumno['id_cat_estado_civil']);
            $("#telefono").val(datos_alumno['telefono']);
            $("#curp").val(datos_alumno['curp']);
            $("#correo_electronico").val(datos_alumno['correo']);
            //parte dos                  
            $("#calle").val(datos_alumno['calle']);
            $("#no_exterior").val(datos_alumno['numero_exterior']);
            $("#no_interior").val(datos_alumno['numero_interior']);
            //parte tre
            $("#carrera_reticula").val(datos_alumno['id_cat_carrera']);
            obtener_especialidad(datos_alumno['id_cat_carrera']);
            obtener_plan_estudios(datos_alumno['id_cat_carrera']);
            //$("#especialidad").val(datos_alumno['id_cat_especialidad']);
            $("#periodo_ingreso").val(datos_alumno['periodo_ingreso']);
            $("#periodos_revalidados").val(datos_alumno['periodos_revalidados']);
            $("#tipo_ingresos").val(datos_alumno['id_cat_tipo_ingreso']);
            $("#nivel_escolar").val(datos_alumno['id_cat_escolaridad']);
            $("#estatus_alumno").val(datos_alumno['id_cat_estatus']);
            $("#no_control").val(datos_alumno['numero_control']);  
            precargar_foto(datos_alumno['id_usuario'],datos_alumno['numero_control']);
            setTimeout(() => {
                $("#colonia").val(datos_alumno['colonia']); 
                $("#especialidad").val(datos_alumno['id_cat_especialidad']);
            }, 500);   
            $('#identificacion').html('<input type="text" name="id_usuario" value="' + datos_alumno['id_usuario'] +'" hidden><input type="text" name="id_persona" value="' + datos_alumno['id_persona'] +'" hidden><input type="text" name="id_direccion" value="' + datos_alumno['id_direccion'] +'" hidden><input type="text" name="id_alumno" value="' + datos_alumno['id_alumno'] +'" hidden>');
            $('#listado_titulo').prop('hidden', true);
            $('#listado_info').prop('hidden', true);
            $('#editar_info').prop('hidden', false);            
            ending();    
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


