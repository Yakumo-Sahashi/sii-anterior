const precargar_usuario = (buscar) => {
    opening();
    $.ajax({
        type: "POST",
        data: "id_usuario=" + buscar + "&funcion=precargar_usuario",
        url: "model/admin/model_actualizar_usuario.php",
        success: (r) => {
            datos_usuario = jQuery.parseJSON(r); 
            console.log(datos_usuario);
            $("#fk_persona").val(datos_usuario['fk_persona']);
            $("#id_usuario").val(datos_usuario['id_usuario']);
            $("#correo_electronico").val(datos_usuario['correo_usuario']);
            $("#nombre_usuario").val(datos_usuario['nombre_persona']);
            $("#apellido_paterno").val(datos_usuario['apellido_paterno']);
            $("#apellido_materno").val(datos_usuario['apellido_materno']);
            $("#telefono").val(datos_usuario['telefono']);
            ending();    
        }
    });     
}



const alertaUsuarios = (msj) => {
    swal({
        title: "Error!",
        text: msj,
        icon: "warning",
        button: "Aceptar",
    });
}

const limitacion_caracteres_usuarios = () => {
    $('#nombre_usuario').on('input', () => {
        $('#nombre_usuario').val($('#nombre_usuario').val().replace(/[^a-zA-Z ñÑ .]/g, ''));
        $('#nombre_usuario').val($('#nombre_usuario').val().charAt(0).toUpperCase() + $('#nombre_usuario').val().slice(1));
    });
    $('#apellido_paterno').on('input', () => {
        $('#apellido_paterno').val($('#apellido_paterno').val().replace(/[^a-zA-Z ñÑ .]/g, ''));
        $('#apellido_paterno').val($('#apellido_paterno').val().charAt(0).toUpperCase() + $('#apellido_paterno').val().slice(1));
    });
    $('#apellido_materno').on('input', () => {
        $('#apellido_materno').val($('#apellido_materno').val().replace(/[^a-zA-Z ñÑ .]/g, ''));
        $('#apellido_materno').val($('#apellido_materno').val().charAt(0).toUpperCase() + $('#apellido_materno').val().slice(1));
    });
    $('#telefono').on('input', () => {
        $('#telefono').val($('#telefono').val().replace(/[^0-9]/g, ''));
    });
}

limitacion_caracteres_usuarios();

const validar_vacios_datos_generales = () => {

    if ($('#correo_electronico').val() == "" && $('#nombre_usuario').val() == "" && $('#apellido_paterno').val() == "" && $('#apellido_materno').val() == "" && $('#telefono').val() == "") {

        alertaUsuarios("No puedes dejar todos los campos vacios");
        return false;

    } else if ($('#correo_electronico').val() == "" || /^\s+$/.test($('#correo_electronico').val()) || $('#correo_electronico').val() == undefined){

        alertaUsuarios("Debes de ingresar el correo de el usuario");
        return false;

    } else if ($('#nombre_usuario').val() == "" || /^\s+$/.test($('#nombre_usuario').val()) || $('#nombre_usuario').val() == undefined) {

        alertaUsuarios("Debes de ingresar el nombre del usuario");
        return false;

    } else if ($('#apellido_paterno').val() == "" || /^\s+$/.test($('#apellido_paterno').val()) || $('#apellido_paterno').val() == undefined) {

        alertaUsuarios("Debes de ingresar el apellido paterno de el usuaro");
        return false;

    }else if ($('#apellido_materno').val() == "" || /^\s+$/.test($('#apellido_materno').val()) || $('#apellido_materno').val() == undefined) {

        alertaUsuarios("Debes de ingresar el apellido materno de el usuario");
        return false;

    } else if ($('#telefono').val() == "" || /^\s+$/.test($('#telefono').val()) || $('#telefono').val() == undefined) {

        alertaUsuarios("Debes de ingresar el telefono de el usuario");
        return false;

    }else {

       actualizar_usuario();
    }
}


const actualizar_usuario = () => {
    $('#funcion').val("actualizar_inf_usuario");
        var Form = new FormData($('#frm_actualizar_usuario')[0]);
        opening();
        $.ajax({
            type: "POST",
            data: Form,
            url: "model/admin/model_actualizar_usuario.php",
            processData: false,
            contentType: false,
            success: (r) => {
                console.log(r);
                if(r === "2"){
                    tabla.ajax.reload(null,false);
                    //('#close').trigger("click");
                    $('#frm_actualizar_usuario')[0].reset();
                    $("#exampleModal").modal("hide");
                    posicion = 0;                  
                    ending();
                    swal({
                        title: "Ejecucion completada",
                        icon: "success",
                        text: "Se ha actualizado el usuario! ",
                    }); 
                }else{
                    console.log(r);
                    ending();
                    swal({
                        title: "Ejecucion completada",
                        icon: "success",
                        text: "Se ha actualizado el usuario! " + r,
                    });
                    return false;
                }
                
            }
            
        });  
    
}



