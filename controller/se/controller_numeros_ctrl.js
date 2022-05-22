const inputRange = () => {
    $("#rango_matriculas").val($("#num_matriculas").val());
}

const range = () => {
    $("#num_matriculas").val($("#rango_matriculas").val());
}

$(document).ready(() => {
    const valorInicial = 50; //Valor por defecto de matriculas
    $("#num_matriculas").val(valorInicial);
    $("#rango_matriculas").val(valorInicial);
    
    function consultar_estado_solicitud(){// funcion para consultar el estado de la solicitud actual
        let obj;
        $("#funcion").val("consultar_estado_solicitud");
        $.ajax({
            type: "POST",
            data: $("#frm_num_ctrl").serialize(),
            url: "model/se/model_num_ctrl.php",
            success: (r) => {
                obj = JSON.parse(r);
                $("#estado_solicitud").val(obj.estado_solicitud);
                $("#id_solicitud").val(obj.id_solicitud);
                status_solicitud();
            }
        });
    }

    function validar(){  //funcion para validar el input de numeros de control
        let regExp = new RegExp (/\D/g);
        let numMatriculas = $("#num_matriculas").val();
        let cadena = numMatriculas.toString();
        if(regExp.test(cadena)){
            swal({
                title: "Error!",
                text: "Solo puedes ingresar números",
                icon: "warning",
                button: "Ok!",
            });
            return false;
            
        } else if($("#num_matriculas").val() < 1 || $("#num_matriculas").val() > 200){
            swal({
                title: "Error!",
                text: "Solo puedes ingresar números entre 1 y 200",
                icon: "warning",
                button: "Ok!",
            });
            return false;
        } else {
            enviar_solicitud();
        }
    }

    function enviar_solicitud(){ //funcion para enviar solicitud
        opening();
        $.ajax({
            type: 'POST',
            data: $("#frm_num_ctrl").serialize(),
            url: 'model/se/model_num_ctrl.php',
            success: (r) => {
                if(r == "1"){
                    ending();
                    swal({
                        title: "Solicitud enviada!",
                        text: "La solicitud se ha enviado, por favor espera que sea aceptada",
                        icon: "success",
                        button: "Ok!",
                    }).then(()=>{
                        consultar_estado_solicitud();
                        $('#tabla_datos').DataTable().ajax.reload();
                    });
                    
                } else {
                    ending();
                    swal({
                        title: "Error!",
                        text: "No se pudo procesar la solicitud, por favor contacta al administrador",
                        icon: "error",
                        button: "Ok!",
                    });
                    return false;
                }
            }
        });
        
    }

    function status_solicitud(){ //funcion para cambiar el estatus de la solicitud
        if($("#id_solicitud").val() != 0){
            if($("#estado_solicitud").val() == 0){
                $("#alerta").remove()
                $("#status_solicitud").append(
                    `<div id="alerta" class="alert alert-warning" role="alert">
                        <h4 class="alert-heading"><i class="fas fa-clock"></i> Pendiente</h4>
                        <p>Tu solicitud de numeros de control fue enviada.</p>
                        <hr>
                        <p class="mb-0">Espera la aprobacion para generar una nueva solicitud.</p>
                    </div>`
                );
                $("#enviar_solicitud").attr("disabled", true);
            } else {
                $("#alerta").remove()
                $("#status_solicitud").append(
                    `<div id="alerta" class="alert alert-secondary" role="alert">
                        <h4 class="alert-heading"><i class="fas fa-envelope-open-text"></i> Sin Enviar</h4>
                        <p>No tienes solicitudes de numeros de control enviadas.</p>
                        <hr>
                        <p class="mb-0">Para generar una nueva solicitud de numeros de control selecciona un rango de matriculas y da click en "Enviar solicitud"</p>
                    </div>
                `)
            }
        } else {
            $("#alerta").remove()
            $("#status_solicitud").append(
                `<div id="alerta" class="alert alert-secondary" role="alert">
                    <h4 class="alert-heading"><i class="fas fa-envelope-open-text"></i> Sin Enviar</h4>
                    <p>No tienes solicitudes de numeros de control enviadas.</p>
                    <hr>
                    <p class="mb-0">Para generar una nueva solicitud de numeros de control selecciona un rango de matriculas y da click en "Enviar solicitud"</p>
                </div>`
            );
        }
    }

    function cancelar_solicitud(){ //funcion para cancelar y eliminar la solicitud actual
        swal({
            title: "¿Estas seguro de cancelar la solicitud?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                opening();
                $.ajax({
                    type: 'POST',
                    data: $("#frm_num_ctrl").serialize(),
                    url: 'model/se/model_num_ctrl.php',
                    success: (r) => {
                        if(r == "1"){
                            ending();
                            swal({
                                    title: "La solicitud ha sido cancelada!",
                                    icon: "success",
                                }).then(()=>{
                                    consultar_estado_solicitud();
                                    $('#tabla_datos').DataTable().ajax.reload();
                                });
                        } else {
                            ending();
                            swal({
                                title: "Error al cancelar la solicitud!",
                                icon: "error",
                                text: "Por favor contacte al administrador",
                                }); 
                            return false;
                        }
                    }
                });
            } else {
                swal("¡La solicitud sigue activa!");
            }
        });
    }

    consultar_estado_solicitud();

    $("#enviar_solicitud").click( ()=>{
        $("#funcion").val("enviar_solicitud");
        validar();
    });

    /* $("#frm_num_ctrl").keypress((e) => {
        $("#funcion").val("enviar_solicitud");
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            validar();
            return false; 
        }
    }); */

    $("#cancelar_solicitud").click(() => {
        $("#funcion").val("cancelar_solicitud");
        cancelar_solicitud();
    });

    $('#num_matriculas').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

});
