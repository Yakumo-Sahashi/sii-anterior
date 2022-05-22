<?php
    require_once '../../model_conector.php';
    require_once '../../model_sesion.php';
    require_once '../../model_token.php';

    Conector::abrir_conexion();
    
    call_user_func('Agregar_aula::'.$_POST['funcion'],Conector::obtener_conexion());
    
    
    class Agregar_aula{

        static function agregar_aula($conexion){
            if(isset($_POST['btn_inactivo'])){
                $activo = "ACTIVA";
            }else{
                $activo = "INACTIVO";
            }
            if(!($_POST['observaciones'] == false)){
                $observaciones = $_POST['observaciones'];
            }else{
                $observaciones = "Sin observaciones";
            }
            $insert = $conexion->prepare("INSERT INTO t_cat_aulas (aula,capacidad,ubicacion,estatus_aula,observaciones) VALUES (:aula, :capacidad, :ubicacion, :estatus_aula,   :observaciones)");
            $insert -> bindParam(':aula', $_POST['nombre_aula']);
            $insert -> bindParam(':capacidad', $_POST['capacidad']);
            $insert -> bindParam(':ubicacion', $_POST['ubicacion']);
            $insert -> bindParam(':estatus_aula', $activo);
            $insert -> bindParam(':observaciones', $observaciones);

            if($insert->execute()){
                 echo 1; 
                              
            }else{
                echo "";
            }         
        }

        static function eliminar_aula($conexion){
            $consulta = $conexion->prepare("DELETE FROM t_cat_aulas WHERE id_cat_aulas = :id_cat_aulas");    
            $consulta -> bindParam(':id_cat_aulas', $_POST['id_cat_aula']);
            if($consulta->execute()){
                echo 1;
            }
            Conector::cerrar_conexion();  
        }
        
        static function precargar_aula($conexion){
            $consulta = $conexion->prepare("SELECT id_cat_aulas, aula, capacidad, ubicacion, estatus_aula, observaciones FROM t_cat_aulas WHERE id_cat_aulas = :id_cat_aulas");    
            $consulta -> bindParam(':id_cat_aulas', $_POST['id_cat_aulas']);
            $consulta->execute();
            $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
            Conector::cerrar_conexion();  
        }

        static function actualizar_aula($conexion){
            if(isset($_POST['actualizar_btn_inactivo'])){
                $actualizar_activo = "ACTIVA";
            }else{
                $actualizar_activo = "INACTIVO";
            }
            if(!($_POST['actualizar_observaciones'] == false)){
                $actualizar_observaciones = $_POST['actualizar_observaciones'];
            }else{
                $actualizar_observaciones = "Sin observaciones";
            }
            $update = $conexion->prepare("UPDATE t_cat_aulas SET aula = :aula, capacidad = :capacidad, ubicacion = :ubicacion, estatus_aula = :estatus_aula, observaciones = :observaciones WHERE id_cat_aulas = :id_cat_aulas");
            $update -> bindParam(':aula',$_POST['actualizar_nombre_aula']);
            $update -> bindParam(':capacidad',$_POST['actualizar_capacidad']);
            $update -> bindParam(':ubicacion',$_POST['actualizar_ubicacion']);
            $update -> bindParam(':estatus_aula',$actualizar_activo);
            $update -> bindParam(':observaciones',$actualizar_observaciones);
            $update -> bindParam(':id_cat_aulas', $_POST['id_cat_aula']);   
            if($update->execute()){
                echo "1";
            }else{
                echo "";
            }
                
        
        
            Conector::cerrar_conexion();            
        }


        
                    
    }



?>