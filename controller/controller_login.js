$(document).ready(() => {
  var espaera = 0;
  function iniciarSesion() {
    $("#funcion").val("iniciar_sesion");
    if ($('#correo_usuario').val() == "" && $('#password').val() == "") {
      alertaLg("Desbes llenar todos los campos!");
      return false;
    } else if ($('#correo_usuario').val() == "") {
      alertaLg("Debes ingresar un email!");
      return false;
    } else if ($('#password').val() == "") {
      alertaLg("Debes ingresar un password!");
      return false;
    } else {
      espaera = 1;
      opening();
    }

    $.ajax({
      type: 'POST',
      data: $('#frmLogin').serialize(),
      url: 'model/model_login.php',
      success: (r) => {
        ending();
        if (r === "2") {
          swal({
            icon: "success",
            title: "Credenciales de acceso validas!",
            html: true,
            text: '\n\n Estas siendo redirigido automaticamente...',
            closeOnClickOutside: false,
            closeOnEsc: false,
            value: true,
            buttons: false,
            timer: 1500
          }).then((value) => {
            window.location = "home";
          });
        } else if(r === "3") {
          espaera = 0;
          swal({
            title: "No se ha podido iniciar sesion!",
            text: "La cuenta a la que quiere acceder esta siendo utilizada en otro dispositivo.\n¿Desea cerrar la sesion anterior e iniciar en este dispositivo?",
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              $("#funcion").val("cerrar_sesion_dispositivo");
              reiniciar_sesion();
            } else {
              swal("Se ha conservado la sesion anterior!");
            }
          });
          return false;
        } else {
          espaera = 0;
          alertaLg("Email o contraseña incorrectos! ");
          return false;
        }
      }
    });
  }

  function reiniciar_sesion(){
    $.ajax({
      type: 'POST',
      data: $('#frmLogin').serialize(),
      url: 'model/model_login.php',
      success: (r) => {
        ending();
        if (r === "2") {
          swal({
            icon: "success",
            title: "Por favor espere",
            html: true,
            text: '\n\n Cerrando sesion en otros dispositivos...',
            closeOnClickOutside: false,
            closeOnEsc: false,
            value: true,
            buttons: false,
            timer: 5000
          }).then((value) => {
            iniciarSesion();
          });
        } else {
          espaera = 0;
          alertaLg("No se ha logrado cerrar la sesion anterior intente mas tarde! ");
          return false;
        }
      }
    });
  }

  function alertaLg(msj) {
    swal({
      title: "Error!",
      text: msj,
      icon: "warning",
      button: "Ok!",
    });
  }

  $('#btnSesion').click(() => {
    iniciarSesion();
  });

  $("#frmLogin").keypress((e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      if(espaera == 0){
        iniciarSesion();
      }
      
    }
  });

});