<?php
    require_once '../model_conector.php';
    require_once '../model_sesion.php';
    require_once '../model_token.php';

    Conector::abrir_conexion();
    
    call_user_func('Actualizar_usuario::'.$_POST['funcion'],Conector::obtener_conexion());

    class Actualizar_usuario{

        static function precargar_usuario($conexion){
            $consulta = $conexion->prepare("SELECT id_usuario, fk_persona, correo_usuario, nombre_persona, apellido_paterno, apellido_materno, telefono FROM t_usuario tu INNER JOIN t_persona tp ON tu.fk_persona = tp.id_persona WHERE id_usuario = :id_usuario");    
            $consulta -> bindParam(':id_usuario', $_POST['id_usuario']);
            $consulta->execute();
            $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
            Conector::cerrar_conexion();  
        }

        static function actualizar_inf_usuario($conexion){
                $persona = self::actualizar_inf_persona($conexion,$_POST['fk_persona']);
                $update = $conexion->prepare("UPDATE t_usuario SET correo_usuario = :correo_usuario WHERE id_usuario = :id_usuario");
                $update -> bindParam(':correo_usuario',$_POST['correo_electronico']);
                $update -> bindParam(':id_usuario', $_POST['id_usuario']);   
                if($update->execute()){
                    if($persona == 2){
                        echo "2"; 
                                     
                   }else{
                         echo "1";
                   }     
                }else{
                    echo "1";
                }
                    
            
            
            Conector::cerrar_conexion();            
        }

        static function actualizar_inf_persona($conexion,$fk_persona){  
            $update = $conexion->prepare("UPDATE t_persona SET nombre_persona = :nombre_usuario, apellido_paterno = :apellido_paterno, apellido_materno = :apellido_materno, telefono = :telefono WHERE id_persona = :fk_persona");
            $update -> bindParam(':nombre_usuario', $_POST['nombre_usuario']);
            $update -> bindParam(':apellido_paterno', $_POST['apellido_paterno']);
            $update -> bindParam(':apellido_materno', $_POST['apellido_materno']);
            $update -> bindParam(':telefono', $_POST['telefono']);
            $update -> bindParam(':fk_persona',$fk_persona);
            

            
            if($update->execute()){
                 $id = 2; 
                              
            }else{
                $id = "";
            }         

            return $id;
        
        
                
        }
        
        

        

        
                    
    }



?>