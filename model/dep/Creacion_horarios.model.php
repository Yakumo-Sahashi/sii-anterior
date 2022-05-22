<?php
    require_once '../model_conector.php';
    require_once '../model_sesion.php';
    require_once '../model_token.php';
    
    Conector::abrir_conexion();
    call_user_func('Creacion_horarios::'.$_POST['funcion'] ,Conector::obtener_conexion());
    
    class Creacion_horarios {
        static function consultar_carrera($conexion){
            echo '<option value="">Seleccionar carrera</option>';
            foreach ($conexion->query("SELECT id_cat_carrera, nombre_carrera FROM t_cat_carrera") as $carrera){
                echo '<option value="' . $carrera['id_cat_carrera'] .'">' . $carrera['nombre_carrera'] . '</option>';
            }
            Conector::cerrar_conexion();
        }

        static function consultar_materia($conexion){
            $carrera = $_POST['carrera'];
            echo '<option value="">Seleccionar materia</option>';
            foreach ($conexion->query("SELECT id_cat_materia, nombre FROM t_cat_materias WHERE id_cat_carrera = '$carrera'") as $materia){
                echo '<option value="' . $materia['id_cat_materia'] .'">' . $materia['nombre'] . '</option>';
            }
            Conector::cerrar_conexion();
        }

        static function obtener_datos_materia($conexion){
            $consulta = $conexion->prepare("SELECT clave, creditos_totales, exclusivo_carrera FROM t_cat_materias WHERE id_cat_materia = :id_cat_materia");
            $consulta -> bindParam(':id_cat_materia', $_POST['materia']);
            $consulta -> execute();
            $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
            Conector::cerrar_conexion();
        }

        static function consultar_aula($conexion){
            echo '<option value="">Aula</option>';
            foreach ($conexion->query("SELECT id_cat_aulas, aula FROM t_cat_aulas WHERE  estatus_aula = 'ACTIVA'") as $materia){
                echo '<option value="' . $materia['id_cat_aulas'] .'">' . $materia['aula'] . '</option>';
            }
            Conector::cerrar_conexion();
        }

        static function obtener_disponibilidad($conexion){
            $hora_inicio = $_POST['hora_inicio'];
            $hora_fin = $_POST['hora_fin'];
            $dia = $_POST['dia'];
            $consulta = $conexion->prepare("SELECT " . $dia . " FROM t_horario WHERE periodo = :periodo AND id_cat_aulas = :id_cat_aulas");
            $consulta -> bindParam(':periodo', $_POST['periodo']);
            $consulta -> bindParam(':id_cat_aulas', $_POST['aula']);
            $consulta -> execute();
            $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
            if($resultado){
                $respuesta = 2;
                $hora_ini = 0;
                $hora_fn = 0;
                foreach($resultado as $key => $hora){
                    echo "Hora:" . $hora;
                    /* if($key == "hora_inicio"){
                        $hora_ini = intval($hora);
                        if(intval($hora) == intval($hora_inicio)){
                            $respuesta ++;      
                        }
                    } else if($key == "hora_fin"){
                        $hora_fn =  intval($hora);
                        if((intval($hora) > intval($hora_inicio)) && ($hora_ini < intval($hora_inicio))){
                            $respuesta ++;      
                        }
                    }else{
                        continue;
                    }
                    if(($hora_fn >= intval($hora_fin)) && (intval($hora_fin) > $hora_ini)){
                        $respuesta ++;
                    } */
                }
                echo $respuesta;
            }else{
                echo "2";
            }
        }

        static function consultar_semestre($conexion){
            $consulta = $conexion->prepare("SELECT id_semestre, semestre FROM t_semestre WHERE estado = '1'");
            $consulta -> execute();
            $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
            Conector::cerrar_conexion();
        }

        static function insercion_horario($conexion){
            $dias_semana = array('lunes','martes','miercoles','jueves','viernes','sabado');
            if(Token::comprobar_token_frm("frm_horario_grupo",$_POST['tk_frm'])){
                $respuesta = 2; 
                $insercion = $conexion->prepare("INSERT INTO t_horario (id_cat_aulas, id_cat_materia, id_cat_carrera, dia, hora_inicio, hora_fin, semestre, periodo) VALUES (:id_cat_aulas, :id_cat_materia, :id_cat_carrera, :dia, :hora_inicio, :hora_fin, :semestre, :periodo)");
                for($i = 1; $i < 7; $i++){
                    if($_POST['hora_inicio' . $i] != "" && $_POST['hora_fin' . $i] != ""){
                        $hora_clase = $_POST['hora_inicio' . $i] < 10 ? '0'. $_POST['hora_inicio' . $i] . ':00' : '' . $_POST['hora_inicio' . $i] . ':00';                        
                        $insercion -> bindParam(':id_cat_aulas',$_POST['aula' . $i]);
                        $insercion -> bindParam(':id_cat_materia',$_POST['materia']);
                        $insercion -> bindParam(':id_cat_carrera',$_POST['carrera']);
                        $insercion -> bindParam(':dia', $dias_semana[$i]);
                        $insercion -> bindParam(':hora_inicio', $hora_clase);
                        $insercion -> bindParam(':hora_fin',$_POST['hora_fin' . $i]);
                        $insercion -> bindParam(':semestre',$_POST['semestre']);
                        $insercion -> bindParam(':periodo',$_POST['periodo_id']); 
                        if($insercion -> execute()){

                        }else{
                            $respuesta ++; 
                        }
                    }
                }                
                echo $respuesta;
            }else{
                echo "Solicitud no valida";
            }
            Conector::cerrar_conexion();
        }

        static function consulta_tatal_horarios($conexion){
            foreach ($conexion->query("SELECT tss.semestre, tca.aula, tca.capacidad, tca.ubicacion, tca.observaciones, tcm.nombre, tcm.clave, tcm.creditos_totales, tcm.exclusivo_carrera, tcc.nombre_carrera, tcc.carrera, th.semestre, th.dia, th.hora_inicio, th.hora_fin FROM t_horario th INNER JOIN t_cat_aulas tca ON th.id_cat_aulas = tca.id_cat_aulas INNER JOIN t_cat_materias tcm ON th.id_cat_materia = tcm.id_cat_materia INNER JOIN t_cat_carrera tcc ON th.id_cat_carrera = tcc.id_cat_carrera INNER JOIN t_semestre tss ON th.periodo = tss.id_semestre")as $horario){
                echo '
                <tr>
                    <td></td>
                    <td></td>
                </tr>';
            }            
            Conector::cerrar_conexion();
        }
    }
?>