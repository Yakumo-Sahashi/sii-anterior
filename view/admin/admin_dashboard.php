<?php 
    Redireccion::validar_vista("ADMIN");
?>
<div class="container">
    <div class="row justify-content-around py-5">
        <div class="col-md-12 text-center">
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-2 g-4">
                <div class="col">
                    <a href="<?=Router::redirigir('aula')?>">
                        <div class="card-pricing text-center mb-3 h-100">
                            <div class="card-body">
                                <i class="img-fluid fas fa-9x fa-door-open"></i>
                                <h5 class="card-title pt-2">Aula</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="<?=Router::redirigir('usuarios')?>">
                        <div class="card-pricing text-center mb-3 h-100">
                            <div class="card-body">
                            <i class="img-fluid fas fa-9x fa-users"></i>
                                <h5 class="card-title">Usuarios</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <div class="card-pricing text-center mb-3 h-100">
                            <div class="card-body">
                                <i class="img-fluid fab fa-9x fa-algolia"></i>
                                <h5 class="card-title">Pendiente</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <div class="card-pricing text-center mb-3 h-100">
                            <div class="card-body">
                                <i class="img-fluid fab fa-9x fa-algolia"></i>
                                <h5 class="card-title">Pendiente</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <div class="card-pricing text-center mb-3 h-100">
                            <div class="card-body">
                                <i class="img-fluid fab fa-9x fa-algolia"></i>
                                <h5 class="card-title">Pendiente</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <div class="card-pricing text-center mb-3 h-100">
                            <div class="card-body">
                                <i class="img-fluid fab fa-9x fa-algolia"></i>
                                <h5 class="card-title">Pendiente</h5>
                            </div>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</div>
