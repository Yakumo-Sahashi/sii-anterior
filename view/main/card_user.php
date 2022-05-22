<?php if(Sesion::validar_sesion()):?>
<div class="container-fluid bg-primary text-white">
    <div class="row py-3 justify-content-center">
        <div class="col-md-6 text-center">
            <hr class="py-0 my-0">
            <?=Sesion::datos_sesion("descripcion_rol")?>  |  
            <?=Sesion::datos_sesion("correo_usuario")?>
            <hr class="py-0 my-0">
        </div>
    </div>
</div>
<?php endif; ?>