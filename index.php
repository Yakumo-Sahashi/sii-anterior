<?php error_reporting(E_ALL ^ E_NOTICE);?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
        require_once 'app/config.php';
        require_once 'app/dependencias.php';
        require_once 'app/router.php';    
        require_once 'model/model_token.php';    
    ?>
</head>
<body>
    <?php 
    require_once 'view/main/loader.php';
    ?>
    <div class="d-flex flex-column justify-content-between" style="min-height: 100vh; max-height: 100vh;">
        <div>
            <?php 
                require_once 'view/main/header.php';
            ?>
            <?php 
                Router::direccion();
            ?>
        </div>
        <?php 
            require_once 'view/main/footer.php';
        ?>
    </div>
</body>
</html>