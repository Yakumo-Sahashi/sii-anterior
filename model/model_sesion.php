<?php 
    session_start();

    class Sesion{

        static function crear_sesion($datos_sesion){
            $_SESSION['user'] = $datos_sesion;  
        }

        static function destruir_sesion(){
            session_unset();
            session_destroy();
        }
        
        static function validar_sesion(){
            return isset($_SESSION['user']['correo_usuario']) ? true : false;
        }

        static function datos_sesion($obtenerDato){
            return $_SESSION['user'][''.$obtenerDato];
        }
        
        static function obtener_sesion() {

            $boton_sesion = isset($_SESSION['user']['correo_usuario']) ? 
            '<a href="#" class="text-white" title="'.$_SESSION['user']['correo_usuario'].'">
                <div class="ico text-center">
                    <i class="fas fa-user"></i>                
                </div>
                <div class="title">
                    <span class="btn-user"> '.$_SESSION['user']['correo_usuario'].'</span>
                </div>
            </a>
            <hr>
            <a href="#" class="text-white" id="btnCerrarSesion" title="Cerrar Sesion">
                <div class="ico text-center">
                    <i class="fas fa-power-off text-danger"></i>                
                </div>
                <div class="title">
                    <span>Cerrar Sesion</span>
                </div>
            </a>'
            : ' <a href="login" title="Iniciar Sesion">
                    <div class="ico text-center">
                        <i class="fas fa-user"></i>             
                    </div>
                    <div class="title">
                        <span>Iniciar Sesion</span>
                    </div>
                </a>
                <hr>
                ';
            
            return $boton_sesion;
        }

    }


?>