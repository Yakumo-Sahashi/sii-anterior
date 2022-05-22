$(document).ready(() => {

    var numeros_control = "";
    var posicion = 0;

    regCurp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    //Validacion de campos alumno
    function validar_vacios_datos_generales() {

        if ($('#apellido_paterno').val() == "" && $('#apellido_materno').val() == "" && $('#nombres').val() == "" && $('#lugar_nacimiento').val() == "" && $('#fecha_nacimiento').val() == "" 
            && $('#selector_sexo').val() == 0 && $('#selector_edo_civil').val() == 0 && $('#telefono').val() == "" && $('#curp').val() == "" && $('#correo_electronico').val() == "") {

            msj_error("No puedes dejar todos los campos vacios");
            return false;

        } else if ($('#apellido_paterno').val() == "" || /^\s+$/.test($('#apellido_paterno').val()) || $('#apellido_paterno').val() == undefined){

            msj_error("Debes de ingresar el apellido paterno del alumno");
            return false;

        } else if ($('#apellido_materno').val() == "" || /^\s+$/.test($('#apellido_materno').val()) || $('#apellido_materno').val() == undefined) {

            msj_error("Debes de ingresar el apellido materno del alumno");
            return false;

        } else if ($('#nombres').val() == "" || /^\s+$/.test($('#nombres').val()) || $('#nombres').val() == undefined) {

            msj_error("Debes de ingresar el nombre del alumno");
            return false;

        }else if ($('#lugar_nacimiento').val() == "" || /^\s+$/.test($('#lugar_nacimiento').val()) || $('#lugar_nacimiento').val() == undefined) {

            msj_error("Debes de ingresar el lugar de nacimiento del alumno");
            return false;

        } else if ($('#fecha_nacimiento').val() == "" || /^\s+$/.test($('#fecha_nacimiento').val()) || $('#fecha_nacimiento').val() == undefined) {

            msj_error("Debes de ingresar la fecha de nacimiento del alumno");
            return false;

        } else if ($('#selector_sexo').val() == 0 || $('#selector_sexo').val() == null || $('#selector_sexo').val() == undefined) {

            msj_error("Debes de ingresar el sexo del alumno");
            return false;

        } else if ($('#selector_edo_civil').val() == 0 || $('#selector_edo_civil').val() == null || $('#selector_edo_civil').val() == undefined) {

            msj_error("Debes de ingresar el estado civil del alumno");
            return false;

        } else if ($('#telefono').val() == "" || /^\s+$/.test($('#telefono').val()) || $('#telefono').val() == undefined) {

            msj_error("Debes de ingresar el telefono del alumno");
            return false;

        } else if ($('#curp').val() == "" || /^\s+$/.test($('#curp').val()) || $('#curp').val() == undefined) {

            msj_error("Debes de ingresar el curp del alumno");
            return false;

        } else if ($('#correo_electronico').val() == "" || /^\s+$/.test($('#correo_electronico').val()) || $('#correo_electronico').val() == undefined) {

            msj_error("Debes de ingresar el correo electronico del alumno");
            return false;

        } else if ($('#telefono').val().length > 10 || $('#telefono').val().length < 10) {

            msj_error("El telefono debe de tener 10 digitos");
            return false;

        } else if ($('#curp').val().length > 18 || $('#curp').val().length < 18) {

            msj_error("El curp debe de tener 18 digitos");
            return false;

        } else if (!regCurp.test($('#curp').val())) {

            msj_error("El curp debe de seguir una estructura valida");
            return false;


        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($('#correo_electronico').val()))) {

            msj_error("El correo electronico debe de seguir la siguiente estructura example@mail.com");
            return false;

        } else {

            estadoFormulario = 1;
            //$('#numero_control').prop('redonly', true);
            $("#form-part").text("Datos del Domicilio")
            $("#form_part_uno").hide()
            $("#form_part_dos").show()
        }





    }

    //Datos del Domicilio
    function validar_vacios_datos_domicilio() {

        if ($('#codigo_postal').val() == "" || /^\s+$/.test($('#codigo_postal').val()) || $('#codigo_postal').val() == undefined) {

            msj_error("Debes de ingresar el codigo postal del alumno");
            return false;

        } else if ($('#estado').val() == "" || /^\s+$/.test($('#estado').val()) || $('#estado').val() == undefined) {

            msj_error("Debes de ingresar el estado del alumno");
            return false;

        } else if ($('#alcaldia').val() == "" || /^\s+$/.test($('#alcaldia').val()) || $('#alcaldia').val() == undefined) {

            msj_error("Debes de ingresar la alcaldia del alumno");
            return false;

        } else if ($('#colonia').val() == "" || /^\s+$/.test($('#colonia').val()) || $('#colonia').val() == undefined) {

            msj_error("Debes de ingresar la colonia del alumno");
            return false;

        } else if ($('#calle').val() == "" || /^\s+$/.test($('#calle').val()) || $('#calle').val() == undefined) {

            msj_error("Debes de seleccionar la calle del alumno");
            return false;

        }else if ($('#no_exterior').val() == "" || /^\s+$/.test($('#no_exterior').val()) || $('#no_exterior').val() == undefined) {

            msj_error("Debes de ingresar el numero exterior del alumno");
            return false;

        }else if ($('#codigo_postal').val().length > 5) {

            msj_error("El codigo postal debe de tener menos de 5 digitos");
            return false;

        }else if ($('#no_exterior').val().length > 5) {

            msj_error("El numero exterior debe de tener menos de 5 digitos");
            return false;

        } else if ($('#no_interior').val().length > 5) {

            msj_error("El numero interior debe tener menos de 5 digitos");
            return false;

        } else {
            estadoFormulario = 2;
            $("#form-part").text("Datos Escolares")
            $("#form_part_dos").hide()
            $("#form_part_tres").show()
            
        }





    } 

    //Datos Escolares
    function validar_vacios_datos_escolares() {

        if($('#carrera_reticula').val() == "" || /^\s+$/.test($('#carrera_reticula').val()) || $('#carrera_reticula').val() == undefined){

            msj_error("Debes de seleccionar la carrera del alumno");
            return false;
        }else if($('#especialidad').val() == "" || /^\s+$/.test($('#especialidad').val()) || $('#especialidad').val() == undefined){
                
            msj_error("Debes de seleccionar la especialidad del alumno");
            return false;
        }else if($('#periodo_ingreso').val() == "" || /^\s+$/.test($('#periodo_ingreso').val()) || $('#periodo_ingreso').val() == undefined){
                
            msj_error("Debes de seleccionar el periodo de ingreso del alumno");
            return false;
        }else if($('#plan_estudios').val() == "" || /^\s+$/.test($('#plan_estudios').val()) || $('#plan_estudios').val() == undefined){

            msj_error("Debes de seleccionar el plan de estudios del alumno");
            return false;
        }else if($('#nivel_escolar').val() == "" || /^\s+$/.test($('#nivel_escolar').val()) || $('#nivel_escolar').val() == undefined){
            msj_error("Debes de seleccionar el nivel escolar del alumno");
            return false;
        }else if($('#estatus_alumno').val() == "" || /^\s+$/.test($('#estatus_alumno').val()) || $('#estatus_alumno').val() == undefined){
            msj_error("Debes de seleccionar el estatus del alumno");
            return false;
        }/* else if(!($('#img_alumno').val())){
            msj_error("Debes agregar una fotografia para completar el registro!");
            
        } */else{
            crear_alumno();
        }
    }      

    function fecha_nacimiento() {
        var año = new Date();
        var yyyy = año.getFullYear();
        año_valido = yyyy - 17;
        año_valido = año_valido.toString();
        año_valido = año_valido + "-12-31";
        año_valido_min = yyyy - 80;
        año_valido_min = año_valido_min.toString();
        año_valido_min = año_valido_min + "-01-01";
        console.log(año_valido_min);
        $('#fecha_nacimiento').attr('max', año_valido);
        $('#fecha_nacimiento').attr('min', año_valido_min);
        
    }
    fecha_nacimiento();

    /* function mostrarDatosControl() {
        posicion = 0;
        $.ajax({
            async: false,
            type: "POST",
            data: "funcion=mostrar_num_control",
            url: "model/se/model_creacion_alumno_se.php",
            success: (r) => {
                numeros_control = jQuery.parseJSON(r);
            }
        });
    }

    function insertarDatosControl() {
        mostrarDatosControl();
        $('#no_control').val(numeros_control[posicion].numero_control);
        $('#numero_control').val(numeros_control[posicion].id_numero_control);
    }

    insertarDatosControl();

    $('#btn_decrementar').click(()=>{
        if(posicion > 0){
            posicion--;
            $('#no_control').val(numeros_control[posicion].numero_control);
            $('#numero_control').val(numeros_control[posicion].id_numero_control);
        }
    });

    $('#btn_incrementar').click(()=>{
        if(posicion < numeros_control.length){
            posicion ++;
            $('#no_control').val(numeros_control[posicion].numero_control);
            $('#numero_control').val(numeros_control[posicion].id_numero_control);
        }
    }); */


    function msj_error(msj) {
        swal({
            title: "Error!",
            text: msj,
            icon: "warning",
            button: "Aceptar",
        });
    }


    //Limitacion de caracteres
    function limitacion_caracteres() {

        $('#apellido_paterno').on('input', function () {
            this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
            
        });

        $('#apellido_materno').on('input', function () {
            this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });

        $('#nombres').on('input', function () {
            this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });

        $('#lugar_nacimiento').on('input', function () {
            this.value = this.value.replace(/[^A-Za-z0-9ñÑ# ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });

        $('#telefono').on('input', function () {
            this.value = this.value.replace(/[^0-9+]/g, '');
        });

        $('#curp').on('input', function () {
            this.value = this.value.replace(/[^A-Za-z0-9ñÑ]/g, '');
            this.value = this.value.toUpperCase();
        });

        $('#codigo_postal').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        $('#estado').on('input', function () {
            this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });
        $('#alcaldia').on('input', function () {
            this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });
        $('#colonia').on('input', function () {
            this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });
        $('#calle').on('input', function () {
            this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
        });

        $('#no_calle').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        $('#no_exterior').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        $('#no_interior').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        $('#periodos_revalidados').on('input', function () {
            if(this.value > 12){
                this.value = 12;
            }else if(this.value < 1){
                this.value = 1;
            }
        });



        $( '#cb_revalidado' ).on( 'click', function() {
            if ($(this).is(':checked') ){
                $("#periodos_revalidados").prop('disabled', false);
                $("#periodos_revalidados").val(1);

            } else {
                $("#periodos_revalidados").prop('disabled', true);
                $("#periodos_revalidados").val(0);
    
               
            }
        });


    }

    $('#escritura_manual').on( 'click', function() {
        if ($(this).is(':checked') ){
            $('#estado').prop('readonly', false);
            $('#alcaldia').prop('readonly', false);
            // $('#colonia').prop('readonly', true);
            $('#colonia').replaceWith('<input type="text" class="form-control break_size" name="colonia" id="colonia">');
            $('#codigo_postal').val("");
            $('#estado').val("");
            $('#alcaldia').val("");
            $('#check_ditar').html('<input class="form-control" type="text" id="escritura" name="escritura" value="1" hidden>');
            $('#colonia').on('input', function () {
                this.value = this.value.replace(/[^a-zA-Z ñÑ]/g, '');
                this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
            });
        } else {
            $('#estado').prop('readonly', true);
            $('#alcaldia').prop('readonly', true);
            // $('#colonia').prop('readonly', false);
            $('#colonia').replaceWith('<select name="colonia" class="form-control break_size" id="colonia"></select>');
            $('#codigo_postal').val("");
            $('#estado').val("");
            $('#alcaldia').val("");
            $('#check_ditar').html('');
        }
    });

    //Informacion Inicial
    var estadoFormulario = 0
    $("#progreso-form").css("width", "1%")
    $("#form-part").text("Datos Generales")
    $("#form_part_dos").hide()
    $("#form_part_tres").hide()
    $("#form_part_uno").show()
    $("#atras").hide()
    $("#crear_alumno").hide();



    $("#siguiente").click(() => {

        if (estadoFormulario == 0) {
            validar_vacios_datos_generales();

        } else if (estadoFormulario == 1) {
            validar_vacios_datos_domicilio();

        }
        comprobarEstadoForm(estadoFormulario)
        comprobarVisualBotones()
    });


    $("#atras").click(() => {
        if (estadoFormulario == 1) {
            estadoFormulario = 0;
            $("#form-part").text("Datos Generales")
            $('#numero_control').prop('disabled', false);
            $("#form_part_dos").hide()
            $("#form_part_tres").hide()
            $("#form_part_uno").show()
        } else if (estadoFormulario == 2) {
            estadoFormulario = 1;
            $("#form-part").text("Datos del Domicilio")
            $("#form_part_uno").hide()
            $("#form_part_tres").hide()
            $("#form_part_dos").show()
        }
        comprobarEstadoForm(estadoFormulario)
        comprobarVisualBotones()
    });


    const comprobarEstadoForm = (edoForm) => {
        if (edoForm == 0) {
            $("#progreso-form").css("width", "1%")
        } else if (edoForm == 1) {
            $("#progreso-form").css("width", "50%")
        } else if (edoForm == 2) {
            $("#progreso-form").css("width", "100%")
        }
    }




    const comprobarVisualBotones = () => {
        if (estadoFormulario == 0) {
            $("#atras").hide()
            $("#crear_alumno").hide();
            $("#siguiente").show();
        } else {
            $("#atras").show()
        }
        if (estadoFormulario != 2) {
            $("#siguiente").text("Siguiente")
            $("#siguiente").show();
            $("#crear_alumno").hide();
        } else {
            $("#siguiente").hide();
            $("#crear_alumno").text("Actualizar Informacion")
            $("#crear_alumno").show();
            //$("#siguiente").text("Crear Alumno")
        }
    }

    limitacion_caracteres();

    $("#crear_alumno").click(()=>{
       validar_vacios_datos_escolares();
    });


    function reset_formulario(){
        $('#colonia').replaceWith('<select name="colonia" class="form-control break_size" id="colonia"></select>');
        $('#codigo_postal').val("");
        $('#estado').prop('readonly', true);
        $('#alcaldia').prop('readonly', true);
        $('#check_ditar').html('');

        estadoFormulario = 0
        comprobarVisualBotones()
        $("#progreso-form").css("width", "1%")
        $("#form-part").text("Datos Generales")
        $("#form_part_dos").hide()
        $("#form_part_tres").hide()
        $("#form_part_uno").show()
        $("#atras").hide()
        $("#crear_alumno").hide();
    }

    function crear_alumno(){
        $('#funcion').val("actualizar_inf_alumno");
        var Form = new FormData($('#frm_creacion_alumno')[0]);
        opening();
        $.ajax({
            type: "POST",
            data: Form,
            url: "model/se/model_actualizar_alumno.php",
            processData: false,
            contentType: false,
            success: (r) => {
                if(r === "2"){
                    console.log(r)
                    tabla.ajax.reload(null,false);
                    //('#close').trigger("click");
                    $('#frm_creacion_alumno')[0].reset();
                    limpiar_foto();
                    posicion = 0;
                    reset_formulario();  
                    $('#identificacion').html("");  
                    $('#listado_titulo').prop('hidden', false);
                    $('#listado_info').prop('hidden', false);
                    $('#editar_info').prop('hidden', true);                      
                    ending();
                    swal({
                        title: "Ejecucion completada",
                        icon: "success",
                        text: "La creacion del nuevo alumno ha sido correcta! ",
                    }); 
                }else{
                    ending();
                    msj_error("Error al crear alumno! " + r);
                    return false;
                }
                
            }
        });  
    }

    function fecha_nacimiento() {
        var año = new Date();
        var yyyy = año.getFullYear();
        año_valido = yyyy - 17;
        año_max = yyyy - 17;
        año_valido = año_valido.toString();
        año_valido = año_valido + "-12-31";
        año_valido_min = yyyy - 80;
        año_min = yyyy- 80;
        año_valido_min = año_valido_min.toString();
        año_valido_min = año_valido_min + "-01-01";
        $('#fecha_nacimiento').attr('max', año_valido);
        $('#fecha_nacimiento').attr('min', año_valido_min);
        $('#fecha_nacimiento').on('input', function () {
            año_teclado = $('#fecha_nacimiento').val().slice(0, 4);
            año_teclado = parseInt(año_teclado);
            año_length = año_teclado.toString().length;
            if(año_length == "4"){
                console.log(año_length);
                if(año_teclado < año_min){
                    this.value = año_valido_min;

                }else if(año_teclado > año_max){
                    this.value = año_valido;
                }
            }
           
            
        });
        
    
    }
    fecha_nacimiento();
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $('#close').click(()=>{
        $('#frm_creacion_alumno')[0].reset();
        limpiar_foto();
        posicion = 0;
        reset_formulario();  
        $('#identificacion').html("");    
    });

    $('#cancelar_edicion').click(()=>{
        regresar_lista();
    });


    function regresar_lista(){
        opening();
        tabla.ajax.reload(null,false);
        //('#close').trigger("click");
        $('#frm_creacion_alumno')[0].reset();
        limpiar_foto();
        posicion = 0;
        reset_formulario();  
        $('#identificacion').html("");  
        $('#listado_titulo').prop('hidden', false);
        $('#listado_info').prop('hidden', false);
        $('#editar_info').prop('hidden', true);                      
        ending();
    }
});