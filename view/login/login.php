<?php 
	$title = 'Login'; 
	if (Sesion::validar_sesion()){
		Redireccion::redirigir("home");
	}
?>
<div class="container h-100 py-5">
	<div class="row justify-content-around">
		<div class="col-lg-4 col-md-6 col-sm-8 col-10 neumorph-card p-5">
			<div class="text-center">
				<img class="mb-2" src="<?=DEP_IMG?>itma2.png" width="50%">
			</div>
			
			<form id="frmLogin" class="form-grup mb-3 ml-3 mr-3">
				<input type="text" id="funcion" name="funcion" value="iniciar_sesion" hidden>
				<label class="mb-2 ms-2 text-primary" for=""><b>Correo Institucional</b></label>
				<div class="input-group mb-4 custom-shadow">
					<span class="input-group-text bg-light"><i class="fas fa-user-alt"></i></span>
					<input type="text" class="form-control border-start-0 text-primary" name="correo_usuario" id="correo_usuario" required  placeholder="ejemplo@milpaalta2.tecnm.mx">
				</div>
				<label class="mb-2 ms-2 text-primary" for=""><b>Contraseña</b></label>
				<div class="input-group mb-3 custom-shadow">
					<span class="input-group-text bg-light"><i class="fas fa-lock"></i></span>
					<input type="password" class="form-control border-start-0 text-primary" name="password" id="password" required  placeholder="Contraseña">
				</div>
				<div class="mb-3 text-end">
					<a href="<?=Router::redirigir('recuperar_contra')?>" class="text-muted">¿Olvidaste tu contraseña?</a>
				</div>
				 
				<div class="py-1 text-center">
					<button type="button" class="btn btn-primary custom-shadow mb-2 container-fluid" id="btnSesion">Iniciar Sesion</button>
				</div>
			</form>
		</div>
	</div>
</div>
<script src="<?=CONTROLLER?>controller_login.js"></script>

<!-- 
	1. form -> id="frmLogin"
	2. input -> name="funcion"
	3. input -> name="correo_usuario" id="correo_usuario"
	4. input -> name="password" id="password"
	5. button -> id="btnSesion"
 -->