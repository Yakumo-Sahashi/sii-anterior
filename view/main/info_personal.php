<div class="container mt-4 mb-5 border shadow rounded">
    <div class="row py-5">
        <div class="col-md">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <h2 class="mb-4 text-primary text-center">INFORMACIÓN PERSONAL</h2>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col-md">
                                    <span class="btn btn-primary btn-block" id="boton-general"><i class="fas fa-user me-2"></i>General</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md">
                                    <span class="btn btn-primary btn-block" id="boton-contrasenia"><i class="fas fa-key me-2"></i>Contraseña</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9" id="general">
                        <div class="container">
                            <div class="row">
                                <div class="col-md">
                                    <form>
                                        <input type="text" id="tk_form" name="tk_form" value="" hidden>
                                        <div class="container">
                                            <div class="row mt-4 mt-lg-0">
                                                <div class="col-md">
                                                    <h5 class="text-primary">CONFIGURACIÓN GENERAL</h5>
                                                    <p>Administre los detalles de la cuenta de ITMA II, incluido su nombre, información de contacto y más.</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md">
                                                    <h5 class="text-primary">INFORMACIÓN DE CUENTA</h5>
                                                    <div>
                                                        <strong class="text-primary">No. de Control:</strong><span class="ms-2">181190013</span>
                                                    </div>
                                                    <div>
                                                        <strong class="text-primary">Rol:</strong><span class="ms-2">Alumno</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <h5 class="text-primary">DETALLES PERSONALES</h5>
                                                <div class="col-md">
                                                    <label for="apellido_paterno" class="form-label">Apellido Paterno</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text borde-left"><i class="fas fa-portrait"></i></span>
                                                        <input type="text" class="form-control" id="apellido_paterno" name="">
                                                    </div>
                                                </div>
                                                <div class="col-md mt-2 mt-md-0 mt-lg-0">
                                                    <label for="apellido_materno" class="form-label">Apellido Materno</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text borde-left"><i class="fas fa-portrait"></i></span>
                                                        <input type="text" class="form-control" id="apellido_materno" name="">
                                                    </div>
                                                </div>
                                                <div class="col-md mt-2 mt-md-0 mt-lg-0">
                                                    <label for="nombres" class="form-label">Nombre(s)</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text borde-left"><i class="fas fa-user"></i></span>
                                                        <input type="text" class="form-control" id="nombres" name="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md">
                                                    <label for="correo_institucional" class="form-label">Correo Institucional</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text borde-left"><i class="fas fa-at"></i></span>
                                                        <input type="text" class="form-control" id="correo_institucional" name="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" id="contrasenia">
                        <div class="container">
                            <div class="row">
                                <div class="col-md">
                                    <form>
                                        <input type="text" id="tk_form" name="tk_form" value="" hidden>
                                        <div class="container">
                                            <div class="row mt-4 mt-lg-0">
                                                <div class="col-md">
                                                    <h5 class="text-primary">CAMBIA TU CONTRASEÑA</h5>
                                                    <p>Por su seguridad, le recomendamos que elija una contraseña única que no ultilice para ninguna otra cuenta en línea.</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-6 border-end-sm">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-md">
                                                                <h5 class="text-primary">CONTRASEÑA ACTUAL</h5>
                                                                <label for="requerido" class="form-label fw-bold text-primary"><small>REQUERIDO</small></label>
                                                                <div class="input-group">
                                                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                                                    <input type="password" class="form-control" id="requerido" placeholder="* * * * * * * *">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-3">
                                                            <div class="col-md">
                                                                <h5 class="text-primary">NUEVA CONTRASEÑA</h5>
                                                                <label for="requerido" class="form-label fw-bold text-primary"><small>REQUERIDO</small></label>
                                                                <div class="input-group">
                                                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                                                    <input type="password" class="form-control" id="requerido" placeholder="* * * * * * * *">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="container">
                                                        <div class="row mt-4 mt-lg-0">
                                                            <div class="col-md">
                                                                <h5 class="text-primary">TU CONTRASEÑA</h5>
                                                                <p>Tu contraseña no debe tener espacios.</p>
                                                                <p>Debe contener minimo 8 caracteres y máximo 30 caracteres.</p>
                                                                <p>Tu contraseña debe tener al menos una mayúscula y un número.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="row mt-4">
                                                <div class="col-md text-end">
                                                    <span class="btn btn-danger"><i class="fas fa-times me-2"></i>Cancelar</span>
                                                    <span class="btn btn-success"><i class="fas fa-check me-2"></i>Guardar</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="<?=CONTROLLER?>controller_info_personal.js"></script>

<!-- 
    1.- Span -> id="boton-general"
    2.- Span -> id="boton-contrasenia"
    3.- Input -> name="" id="apellido_peterno"
    4.- Input -> name="" id="apellido_materno"
    5.- Input -> name="" id="nombres"
    6.- Input -> name="" id="correo_institucional"
    7.- Input -> name="" id="requerido"
    8.- Input -> name="tk_form" id="tk_form"
 -->
