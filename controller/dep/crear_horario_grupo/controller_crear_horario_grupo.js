$(document).ready(() => {
    let total_actual= 0;//variable para llevar conteo de horas asignadas
    let aulas = new Array(); ;
    $('#ir_materia_grupo').click(() => {
        $('#datos_materia_grupo').removeClass('d-none');
        $('#botones_datos_generales').addClass('d-none');
    });
    $('#ir_asignar_horario').click(() => {
        $('#asignar_horario').removeClass('d-none');
        $('#botones_materia_grupo').addClass('d-none');
    });
    //funcion para evitar la insercion de caracteres diferentes a numeros en el campo capacidad de grupo
    $('#capacidad').on('input', () => {
        $('#capacidad').val($('#capacidad').val().replace(/[^0-9+]/g, ''));
    });
    $('#nombre_grupo').on('input', () => {
        $('#nombre_grupo').val($('#nombre_grupo').val().toUpperCase());
    });
    //funcion para obtener el listado de carreras
    const obtener_carrera = () => {
        $.ajax({
            type: "POST",
            data: "funcion=consultar_carrera",
            url: "model/dep/Creacion_horarios.model.php",
            success: (r) => {
                $('#carrera').html(r);
            }
        });  
    }
    //funcion para obtener el periodo activo
    const obtener_periodo = () => {
        $.ajax({
            type: "POST",
            data: "funcion=consultar_semestre",
            url: "model/dep/Creacion_horarios.model.php",
            success: (r) => {
                datos_precarga = jQuery.parseJSON(r);
                $('#periodo').val(datos_precarga['semestre']);
                $('#periodo_id').val(datos_precarga['id_semestre']);
            }
        });  
    }
    const obtener_aula = () => {
        $.ajax({
            type: "POST",
            data: "funcion=consultar_aula",
            url: "model/dep/Creacion_horarios.model.php",
            success: (r) => {
                for(let i = 0; i < 7; i++){
                    $('#aula' + i).html(r);
                }
            }
        });  
    }
    //funcion para reiniciar el conteo de horas asignadas
    const reiniciar_contenido_tabla = () => {
        $('#contador_horas').removeClass("alert-danger").addClass("alert-success");
        $('#contador_horas').removeClass("border-danger").addClass("border-success");
        $('#semestre').val("");
        $('#cambio_texto').html("<b><i class=\"fas fa-universal-access\"></i></b>");
        for(let i = 1; i < 7; i++){
            actualizar_hora_final("", i);         
            $('#horas_dia' + i).val("");
            $('#hora_inicio' + i).val("");
            $('#hora_inicio' + i).prop('disabled', true);
            $('#hora_fin' + i).prop('disabled', true);
            $('#aula' + i).val("");
            $('#aula' + i).prop('disabled', true);
        }
    }
    //Reinicia todo el formulario en caso de utilizar F5 cuando ya se habian ingresado datos
    $('#frm_horario_grupo')[0].reset();
    //invocacion de la funcion obtener_carrera
    obtener_carrera(); 
    obtener_aula();  
    obtener_periodo(); 
    //funcion change para detectar la selecion de carrera
    $('#carrera').change(() => {
        obtener_materia($('#carrera').val());
        $('#clave').val("");
        $('#horas').val("");
        $('#contador_horas').html("<b>Horas por asignar: 0</b>");
        reiniciar_contenido_tabla();
    });
    //funcion para obtener el listado de materias para la carrera seleccionada
    const obtener_materia = (carrera) => {    
        $.ajax({
            type: "POST",
            data: "funcion=consultar_materia&carrera=" + carrera,
            url: "model/dep/Creacion_horarios.model.php",
            success: (r) => {
                $('#materia').html(r);
            }
        });  
    }
    //funcion change para detectar la selecion de materia
    $('#materia').change(() => {
        obtener_datos_materia($('#materia').val());
        reiniciar_contenido_tabla();
        if($('#materia').val() != "")
        for(let i = 1; i < 7; i++){
            $('#hora_inicio' + i).prop('disabled', false);
            $('#hora_fin' + i).prop('disabled', false);
        }
    });
    //funcion para obtener la informacion de la materia seleccionada
    const obtener_datos_materia = (materia) => {  
        $.ajax({
            type: "POST",
            data: "funcion=obtener_datos_materia&materia=" + materia,
            url: "model/dep/Creacion_horarios.model.php",
            success: (r) => {
                if(r){
                    datos_precarga = jQuery.parseJSON(r);
                    $('#clave').val(datos_precarga['clave']);
                    $('#horas').val(datos_precarga['creditos_totales']);
                    $('#cambio_texto').html(datos_precarga['exclusivo_carrera'] == 1 ? "<b class=\"text-danger\"><i class=\"fas fa-universal-access\"></i> Si" : "<b class=\"text-success\"><i class=\"fas fa-universal-access\"></i> No" +"</b>");
                    $('#contador_horas').html("<b>Horas por asignar: " +  $('#horas').val() + "</b>");
                }else{
                    $('#clave').val("");
                    $('#horas').val("");
                    $('#contador_horas').html("<b>Horas por asignar: 0</b>"); 
                }
                
            }
        });  
    }
    //funcion para obtener la disponibilidad de un aula en el dia y horario seleccionado
    const obtener_disponibilidad = (aula, dia, hora_inicio, hora_fin, id) => {  
        $.ajax({
            type: "POST",
            data: "funcion=obtener_disponibilidad&aula=" + aula + "&dia=" + dia + "&hora_inicio=" + hora_inicio + "&hora_fin=" + hora_fin + "&periodo=" + $('#periodo_id').val(),
            url: "model/dep/Creacion_horarios.model.php",
            success: (r) => {
                if(r != 2){
                   msj_error("El aula seleccionada no esta disponible en el horario ingresado! " + r);
                   $('#aula' + id).val("");
                }               
            }
        });  
    }
    //funciones change para detectar la hora iniciar de la clase cada, funcion es para un dia de la semana
    $('#hora_inicio1').bind('change', () => {
        actualizar_hora_final($('#hora_inicio1').val(), 1);
        contar_horas_seleccionadas(1);
        $('#aula1').val("");
        $('#aula1').prop('disabled', true);
    });

    $('#hora_inicio2').bind('change', () => {
        actualizar_hora_final($('#hora_inicio2').val(), 2);
        contar_horas_seleccionadas(2);
        $('#aula2').val("");
        $('#aula2').prop('disabled', true);
    });

    $('#hora_inicio3').bind('change', () => {
        actualizar_hora_final($('#hora_inicio3').val(), 3);
        contar_horas_seleccionadas(3);
        $('#aula3').val("");
        $('#aula3').prop('disabled', true);
    });

    $('#hora_inicio4').bind('change', () => {
        actualizar_hora_final($('#hora_inicio4').val(), 4);
        contar_horas_seleccionadas(4);
        $('#aula4').val("");
        $('#aula4').prop('disabled', true);
    });

    $('#hora_inicio5').bind('change', () => {
        actualizar_hora_final($('#hora_inicio5').val(), 5);
        contar_horas_seleccionadas(5);
        $('#aula5').val("");
        $('#aula5').prop('disabled', true);
    });

    $('#hora_inicio6').bind('change', () => {
        actualizar_hora_final($('#hora_inicio6').val(), 6);
        contar_horas_seleccionadas(6);
        $('#aula6').val("");
        $('#aula6').prop('disabled', true);
    });

    //funciones change para detectar la hora de finalizacion de clase, cada funcion es para un dia de la semana
    $('#hora_fin1').bind('change', () => {
        contar_horas_seleccionadas(1);
        if($('#hora_fin1').val() != ""){
            $('#aula1').prop('disabled', false);
        }else{
            $('#aula1').val("");
            $('#aula1').prop('disabled', true);
        }
    });

    $('#hora_fin2').bind('change', () => {
        contar_horas_seleccionadas(2);
        if($('#hora_fin2').val() != ""){
            $('#aula2').prop('disabled', false);
        }else{
            $('#aula2').val("");
            $('#aula2').prop('disabled', true);
        }
    });

    $('#hora_fin3').bind('change', () => {
        contar_horas_seleccionadas(3);
        if($('#hora_fin3').val() != ""){
            $('#aula3').prop('disabled', false);
        }else{
            $('#aula3').val("");
            $('#aula3').prop('disabled', true);
        }
    });

    $('#hora_fin4').bind('change', () => {
        contar_horas_seleccionadas(4);
        if($('#hora_fin4').val() != ""){
            $('#aula4').prop('disabled', false);
        }else{
            $('#aula4').val("");
            $('#aula4').prop('disabled', true);
        }
    });

    $('#hora_fin5').bind('change', () => {
        contar_horas_seleccionadas(5);
        if($('#hora_fin5').val() != ""){
            $('#aula5').prop('disabled', false);
        }else{
            $('#aula5').val("");
            $('#aula5').prop('disabled', true);
        }
    });

    $('#hora_fin6').bind('change', () => {
        contar_horas_seleccionadas(6);
        if($('#hora_fin6').val() != ""){
            $('#aula6').prop('disabled', false);
        }else{
            $('#aula6').val("");
            $('#aula6').prop('disabled', true);
        }
    });
    //funciones change para detectar la hora de finalizacion de clase, cada funcion es para un dia de la semana
    $('#aula1').bind('change', () => {
        obtener_disponibilidad($('#aula1').val(), "lunes", $('#hora_inicio1').val(), $('#hora_fin1').val(), 1);
    });

    $('#aula2').bind('change', () => {
        obtener_disponibilidad($('#aula2').val(), "martes", $('#hora_inicio2').val(), $('#hora_fin2').val(), 2);
    });

    $('#aula3').bind('change', () => {
        obtener_disponibilidad($('#aula3').val(), "miercoles", $('#hora_inicio3').val(), $('#hora_fin3').val(), 3);
    });

    $('#aula4').bind('change', () => {
        obtener_disponibilidad($('#aula4').val(), "jueves", $('#hora_inicio4').val(), $('#hora_fin4').val(), 4);
    });

    $('#aula5').bind('change', () => {
        obtener_disponibilidad($('#aula5').val(), "viernes", $('#hora_inicio5').val(), $('#hora_fin5').val(), 5);
    });

    $('#aula6').bind('change', () => {
        obtener_disponibilidad($('#aula6').val(), "sabado", $('#hora_inicio6').val(), $('#hora_fin6').val(), 6);
    });
    //funcion para actualizar las horas finales de la clase en base a la seleccion de la hora de inicio
    const actualizar_hora_final = (inicio, fin) => { 
        inicio = parseInt(inicio) + 1;       
        let opciones = '<option value="">--:--</option>';
        for (let i = inicio; i < (22); i++) {
            if (i < 10) {
                opciones = opciones + '<option value="0' + i + ':00">0' + i + ':00</option>';
            } else {
                opciones = opciones + '<option value="' + i + ':00">' + i + ':00</option>';
            }
        }         
        $('#hora_fin' + fin).html(opciones);
        if($('#hora_inicio' + fin).val() == ""){
            $('#aula' + fin).val("");
            $('#aula' + fin).prop('disabled', true);
            $('#aula' + fin).val("");
        }
    };
    //funcion para contar el numero de horas que se aignan por dia
    const contar_horas_seleccionadas = (dia) => {   
        let horas_por_dia = $('#hora_inicio' + dia).val() != "" &&  $('#hora_fin' + dia).val() != "" ? parseInt($('#hora_fin' + dia).val()) - parseInt($('#hora_inicio' + dia).val()) : "";
        $('#horas_dia' + dia).val(horas_por_dia);
        contador_horas_materia(dia);
    }
    //funcion para obtener y validar la cantidad de horas aignadas no pueden ser mayor a la cantidad de horas disponibles
    const contador_horas_materia = (dia) => {
        let asignadas = 0;
        for (let i = 1; i < 7; i++){
            if(/[0-9]/.test($('#horas_dia' + i).val())){
                asignadas += parseInt($('#horas_dia' + i).val());
            }          
        }
        let calcular = parseInt($('#horas').val()) - asignadas;
        let total =  calcular < 1 ? "<b>Horas por asignar: 0</b>" : "<b>Horas por asignar: " + calcular + "</b>";   
        if(calcular == 0){
            total_actual = calcular;
            $('#contador_horas').removeClass("alert-success").addClass("alert-danger");
            $('#contador_horas').removeClass("border-success").addClass("border-danger");
            $('#contador_horas').html(total);
        }else if(calcular < 0){        
            msj_error("Tienes " + total_actual + "hr(s) disponible(s) para asignar!\n Por favor intentalo de nuevo." );
            actualizar_hora_final("", dia);         
            $('#horas_dia' + dia).val("");
            contador_horas_materia(dia);
            $('#hora_inicio' + dia).val("");
            $('#aula' + dia).val("");
            $('#aula' + dia).prop('disabled', true);
        }else{
            total_actual = calcular;
            $('#contador_horas').html(total);
            $('#contador_horas').removeClass("alert-danger").addClass("alert-success");
            $('#contador_horas').removeClass("border-danger").addClass("border-success");         
        }
    }
    //funcion para mostrar mensaje de error. recibe como parametro el mensaje personalizado.
    const msj_error = (msj) => {
        swal({
            title: "Error!",
            text: msj,
            icon: "warning",
            button: "Aceptar",
        });
    }
    //funcion para evaluar si se asigno un aula a los dias que tienen un horario asignado
    const validar_total = () => {
        aulas = new Array();
        let total = 0, horas_totales = parseInt($('#horas').val());
        for (i = 1; i < 7; i++) {
            if($('#horas_dia' + i).val() != ""){
                aulas.push("aula" + i);
                total +=  parseInt($('#horas_dia' + i).val());
            }
        }
        if (total != horas_totales) {
            msj_error("Debes asignar un total de " + horas_totales + " hrs.");
            return false;
        } else {
            return true;
        }
    }
    //funcion para realizar la insercion del nuevo horario no antes sin haber validado todos los campos
    const insercion_horario = () => {
        if(!validar_campo(["carrera","materia","semestre","nombre_grupo","capacidad"],"vacios", "")){
            return false;
        }else if(!validar_total()){
            return false;
        }else if(!validar_campo(aulas,"vacios", "Debes asignar un aula a todos los dias designados para clase.")){
            return false;
        }
        let Formulario = new FormData($('#frm_horario_grupo')[0]);
        opening();
        $.ajax({
            type: "POST",
            data: Formulario,
            url: "model/dep/Creacion_horarios.model.php",
            processData: false,
            contentType: false,
            success: (r) => {
                if(r === "2"){
                    $('#frm_horario_grupo')[0].reset();
                    reiniciar_contenido_tabla();
                    obtener_materia();
                    obtener_aula();  
                    obtener_periodo(); 
                    ending();
                    swal({
                        title: "Ejecucion completada",
                        icon: "success",
                        text: "La creacion del nuevo horario ha sido correcta! ",
                    }); 
                }else{
                    ending();
                    msj_error("Error al crear horario! " + r);
                    return false;
                }
                
            }
        });  
    }

    $('#button_next_2').click(() =>{
        insercion_horario();        
    });
});