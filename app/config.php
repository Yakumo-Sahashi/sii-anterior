<?php
    define('TITULO_PAGINA', "SII");
    define('SERVIDOR', "http://localhost/itma2sii-org/"); //Porfa bros ya no muevan esta cosa! y si lo hacen regresenla a lo que se estipulo!
    define('DEP_CSS', SERVIDOR . "public/css/");
    define('DEP_SCRIPT', SERVIDOR . "public/js/");
    define('DEP_IMG', SERVIDOR . "public/img/");
    define('CONTROLLER', SERVIDOR . "controller/");
    define('LIB_JC', SERVIDOR . "app/lib/JC/");
    
    define('AUDIO', SERVIDOR . "public/files/audio/");
    define('DOC', SERVIDOR . "public/files/doc/");
    define('PDF', SERVIDOR . "public/files/pdf/");
    define('VIDEO', SERVIDOR . "public/files/video/");
    define('EXCEL', SERVIDOR . "public/files/xlsx/");
    
    define('error', "view/error/404");
    
    define("direccion", array(
        'home' => 'view/home',
        'login' => 'view/login/login',
        'se' => 'view/se/se_dashboard',
        'ctrl' => 'view/se/creacion_numeros_ctrl',
        'alumnos' => 'view/se/creacion_alumnos',
        'aprobar_ctrl' => 'view/sa/aprobar_ctrl',
        'acad' => 'view/acad/acad_dashboard',
        'aprobar_ctrl' => 'view/acad/aprobar_ctrl',
        'info_personal' => 'view/main/info_personal',
        'recuperar_contra' => 'view/login/recup_contra',
        'listado_alumno' => 'view/se/listado_alumno',
        'dashboard' => 'view/admin/admin_dashboard',
        'aula' => 'view/admin/aula',
        'aula_dep' => 'view/dep/aula',
        'dep_dashboard' => 'view/dep/dep_dashboard',
        'crear_horario_grupo' => 'view/dep/crear_horario_grupo',
        'listado_horario_grupo' => 'view/dep/listado_horarios_grupo',
        'usuarios' => 'view/admin/usuarios'
    ));
?>
