$(document).ready(()=> {

  function cerrarSesion(msj){
    opening();
    $.ajax({
      type: 'POST',
      data: 'funcion=cerrar_sesion', 
      url:'model/model_login.php',
      success: (r)=>{
        ending();
        if(r==="2"){
          swal({
            icon: "success",
            title: "Cerrando sesion...",
            html: true,
            text: '\n\n ' + msj,
            closeOnClickOutside: false,
            closeOnEsc: false,
            value: true,
            buttons: false,
            timer: 1500
          }).then((value) => {
            window.location = "login";
          });
        }
      }
    });
  }

  function cerrarSesionInactividad(msj){
    opening();
    swal({
      icon: "warning",
      title: "Cerrando sesion...",
      html: true,
      text: '\n\n ' + msj,
      closeOnClickOutside: false,
      closeOnEsc: false,
      value: true,
      confirmButtonText: "Aceptar"
    }).then((value) => {
      $.ajax({
        type: 'POST',
        data: 'funcion=cerrar_sesion', 
        url:'model/model_login.php',
        success: (r)=>{
          ending();
          if(r==="2"){
            window.location = "login";
          }
        }
      });
      
    });
    
  }
  

  function comprobar_inicio_sesion(){
    $.ajax({
      type: 'POST',
      data: 'funcion=comprobar_sesion', 
      url:'model/model_login.php',
      success: (r)=>{
        if(r=="0"){
          cerrarSesion("Se ha iniciado sesion en otro dispositivo...");
        }
      }
    });
  }
  
  setInterval(() => {
    comprobar_inicio_sesion();;
  }, 5000);

  $('#btnCerrarSesion').click(()=> {
    cerrarSesion("Estas siendo redirigido automaticamente...");
  });

  $('#btnCerrarSesionMovil').click(()=>{
    cerrarSesion("Estas siendo redirigido automaticamente...");
  });

  var tiempo = 0;
  var intervalo = setInterval(timerIncrement, 60000);
  
  $(this).mousemove(function (e) {
      tiempo = 0;
  });
  $(this).keypress(function (e) {
      tiempo = 0;
  });

  function timerIncrement() {
    tiempo = tiempo + 1;
    if (tiempo > 7) { 
        cerrarSesionInactividad("Cerrando Sesion por inactividad");
    }
  }

});