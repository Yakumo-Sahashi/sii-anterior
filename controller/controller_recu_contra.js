$(document).ready(()=>{
    
    function validarVacio() {
       
            if ($('#correo_usuario').val() == "" || /^\s+$/.test($('#correo_usuario').val()) || $('#correo_usuario').val() == undefined){
                swal({
                    title: "Debes de ingresar tu correo institucional!",
                    icon: "error",
                    text: "El campo del correo institucional esta vacio!",
                }); 
                return false;
            }else if($('#correo').val() == "" || /^\s+$/.test($('#correo').val()) || $('#correo').val() == undefined){
                
                swal({
                    title: "Debes de ingresar tu correo!",
                    icon: "error",
                    text: "El campo de correo personal esta vacio!",
                }); 
                return false;
    
            }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($('#correo').val()))) {
    
                swal({
                    title: "Correo invalido!",
                    icon: "error",
                    text: "El correo personal debe de seguir la siguiente estructura example@tudominio.com!",
                });
                return false;
    
            }else{
                cambiar_contrasena();
            }

       
        
    }
    
    function alertaLg(msj) {
        swal({
          title: "Error!",
          text: msj,
          icon: "warning",
          button: "Ok!",
        });
      }

    function cambiar_contrasena(){
        funcion = $("#funcion").val();
        correo = $("#correo_usuario").val();
        correo_personal = $("#correo").val();
        opening();
        $.ajax({
            type: "POST",
            data: "funcion=" + funcion + "&correo=" + correo + "&correo_personal=" + correo_personal,
            url: "model/model_recuperar_contrasena.php",
            success: function(r) {
                
                console.log(r)
                if (r == 3){
                    $('#frm_recu_contra')[0].reset();
                    ending();
                    swal({
                        title: "Contraseña Actualizada!",
                        icon: "success",
                        text: "El cambio de tu contraseña a sido realizada!",
                    }); 
                }else if(r == 0){
                    ending();
                    swal({
                        title: "Error al ingresar tu correo!",
                        icon: "error",
                        text: "No se localizo tu correo intenta poniendolo de nuevo!",
                    }); 
                }else if(r == 1){
                    ending();
                    swal({
                        title: "Error al actualizar tu correo!",
                        icon: "error",
                        text: "No se actualizo tu correo!",
                    }); 
                }else{
                    ending();
                    swal({
                        title: "Error al enviar el correo",
                        icon: "error",
                        text: "Hubo un error al enviar el correo con tu informacion nueva",
                    }); ;
                }
            }
        });
    }

    $('#btnRecuContra').click(()=>{
        
        validarVacio();
    });
    
   
});