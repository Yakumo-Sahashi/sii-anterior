<?php
    $title = "LISTADO DE HORARIOS Y GRUPOS";
    if (!Sesion::validar_sesion()) {
        Redireccion::redirigir("login");
    }
    Redireccion::validar_vista("DEP");
?>
<div class="container">
    <div class="row mt-5">
        <div class="col-md-12">
            <h1 class="border-bottom text-center pb-2 text-uppercase">Listado de horarios y grupos</h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-6">
            
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div id="tabla_horas" class="table-responsive">
                <table class="table table-sm table-responsive-lg " id="table_created_rooms">
                    <thead class="text-center fw-bolder">
                        <th>Hora</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>