<?php 
    require_once '../../model_conector.php';
    require_once '../../model_sesion.php';

    Conector::abrir_conexion();
    
    call_user_func('Aula::mostrar_tabla_aula',Conector::obtener_conexion());

    class Aula {

      static function mostrar_tabla_aula($conexion){ 

        foreach($conexion->query("SELECT id_cat_aulas, aula, capacidad, ubicacion, estatus_aula, observaciones FROM t_cat_aulas") as $aux){
          $aux['btnEditar']= '<button type="button" class="btn btn-outline-success rounded-3 mb-2" id="btn_modal" data-bs-toggle="modal" data-bs-target="#aulaActualizar" onclick="precargar_aula('.$aux['id_cat_aulas'].')"><i class="far fa-edit"></i></button>';
          $aux['btnEliminar'] = '<button type="button" class="btn btn-outline-danger rounded-3 mb-2" id="btn_borrar" onclick="eliminar_aula('.$aux['id_cat_aulas'].')"><i class="far fa-trash-alt"></i></button>';
          $arreglo ['data'][] = $aux;
        }

        if(isset($arreglo)){
          echo json_encode($arreglo, JSON_UNESCAPED_UNICODE);
        }else{
          $arreglo['data']['aula'] = '';
          $arreglo['data']['capacidad'] ='';
          $arreglo['data']['ubicacion'] ='';
          $arreglo['data']['estatus_aula'] ='';
          $arreglo['data']['observaciones'] ='';
          $arreglo['data']['btnEditar'] ='';
          $arreglo['data']['btnEliminar'] ='';
          echo json_encode($arreglo, JSON_UNESCAPED_UNICODE);
        }  
        Conector::cerrar_conexion();
      }      
    }
    

?>