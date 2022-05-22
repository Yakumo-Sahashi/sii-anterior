<?php 
    require_once '../model_conector.php';
    require_once '../model_sesion.php';

    Conector::abrir_conexion();
    
    call_user_func('Usuarios::mostrar_tabla_usuario',Conector::obtener_conexion());

    class Usuarios {

      static function mostrar_tabla_usuario($conexion){ 

        foreach($conexion->query("SELECT id_usuario, correo_usuario, nombre_persona, apellido_paterno, apellido_materno, telefono FROM t_usuario tu INNER JOIN t_persona tp ON tu.fk_persona = tp.id_persona INNER JOIN t_cat_rol tr ON tu.id_cat_rol = tr.id_cat_rol WHERE tr.rol != 'ALUMNO'  ") as $aux){
          if($aux['correo_usuario'] == "dir_milpaalta2@tecnm.mx"){
            $aux['btnEditar']= '';
          }else{
            $aux['btnEditar']= '<button type="button" class="btn btn-outline-success rounded-3 mb-2" id="btn_ver"><i class="far fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="precargar_usuario('.$aux['id_usuario'].')"></i></button>';
          
          }
          
          //$aux['btnEliminar'] = '<button type="button" class="btn btn-outline-danger rounded-3 mb-2" id="btn_borrar"><i class="far fa-trash-alt"></i></button>';
          $arreglo ['data'][] = $aux;
        }

        if(isset($arreglo)){
          echo json_encode($arreglo, JSON_UNESCAPED_UNICODE);
        }else{
          $arreglo['data']['id_usuario'] = '';
          $arreglo['data']['correo_usuario'] ='';
          $arreglo['data']['nombre_persona'] ='';
          $arreglo['data']['apellido_paterno'] ='';
          $arreglo['data']['apellido_materno'] ='';
          $arreglo['data']['telefono'] ='';
          $arreglo['data']['btnEditar'] ='';
          //$arreglo['data']['btnEliminar'] ='';
          echo json_encode($arreglo, JSON_UNESCAPED_UNICODE);
        }  
        Conector::cerrar_conexion();
      }      
    }
    

?>