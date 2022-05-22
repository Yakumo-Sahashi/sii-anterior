$(document).ready(() => {
    $("#contrasenia").hide();
    $("#boton-general").click(() => {
        $("#contrasenia").hide();
        $("#general").show();
    });
    $("#boton-contrasenia").click(() => {
        $("#general").hide();
        $("#contrasenia").show();
    });
});