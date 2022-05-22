<?php 
    require_once 'model_conector.php';
    require_once 'model_sesion.php';
    require_once 'model_token.php';
    
    
        
    Conector::abrir_conexion();
    call_user_func('Login::'.$_POST['funcion'],Conector::obtener_conexion());
    
     
    class Login {
        
        static function iniciar_sesion($conexion){
            
            $resultado = self::verificacion_acceso($conexion);
            
            if ($resultado && password_verify($_POST['password'], $resultado['password'])) {
                if($resultado['estado'] == 0){
                    $resultado['token_usuario'] = Token::generar_token();
                    $resultado['estado'] = "1";
                    Sesion::crear_sesion($resultado);  
                    self::actualizar_estado($conexion, $resultado['id_usuario'], 1);
                    echo "2";
                }else{
                    echo '3';
                }
                
            }else {
                echo "1";	
            } 
            Conector::cerrar_conexion();
        }

        static function verificacion_acceso($conexion){
            
            $consulta = $conexion->prepare("SELECT * FROM t_usuario tu INNER JOIN t_cat_rol rol ON tu.id_cat_rol = rol.id_cat_rol WHERE correo_usuario=:correo_usuario");
            $consulta -> bindParam(':correo_usuario', $_POST['correo_usuario']);
            $consulta -> execute();      
            return $consulta -> fetch(PDO::FETCH_ASSOC);
        }

        static function actualizar_estado($conexion, $id, $estado){

            $sql = $conexion -> prepare("UPDATE t_usuario SET estado= :estado WHERE id_usuario = :id_usuario");
            $sql -> bindParam(':estado',$estado);
            $sql -> bindParam(':id_usuario',$id);
            $sql -> execute();
        }

        static function cerrar_sesion($conexion){
            self::actualizar_estado($conexion, $_SESSION['user']['id_usuario'], 0);
            Sesion::destruir_sesion();  
            Conector::cerrar_conexion();     
            echo "2";
        }

        static function comprobar_sesion($conexion){   
            $id = Sesion::datos_sesion("id_usuario");         
            $consulta = $conexion->prepare("SELECT estado FROM t_usuario WHERE id_usuario=:id_usuario");
            $consulta -> bindParam(':id_usuario', $id);
            $consulta -> execute();      
            $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
            Conector::cerrar_conexion();
            echo '' . $resultado['estado'];        
        }

        static function cerrar_sesion_dispositivo($conexion){
            $resultado = self::verificacion_acceso($conexion);
            self::actualizar_estado($conexion, $resultado['id_usuario'], 0);
            Conector::cerrar_conexion();
            echo "2";
        }
        
    }
?>