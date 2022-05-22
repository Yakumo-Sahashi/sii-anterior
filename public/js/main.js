// Evento encargado de mostrar el loader ITMA2, al momento de cargar la página.
window.onload = () => {
  var carga = document.getElementById("contenedor");
  carga.style.visibility = "hidden";
  carga.style.opacity = "0";
};

function opening() {
  $("#contenedor2").css("visibility", "visible");
  $("#contenedor2").css("opacity", "100");
}

function ending() {
  $("#contenedor2").css("visibility", "hidden");
  $("#contenedor2").css("opacity", "0");
}

$().ready(() => {
  $("#usuario-sesion").draggable({
    containment: "document"
  })
})



var restriccion = {
  "vacios": {
    "expresion": /^$/,
    "msj1": "No puedes dejar vacio en el campo ",
    "msj2": "No puedes dejar campos vacios!"
  },
  "letras": {
    "expresion": /^([a-záéíóú]+[\s]?)/i,
    "msj1": "Solo puedes ingresar letras en el campo ",
    "msj2": "Solo puedes ingresar letras!"
  },
  "numeros": {
    "expresion": /[^0-9+]/g,
    "msj1": "Solo puedes ingresar numeros en el campo ",
    "msj2": "Solo puedes ingresar numeros!"
  },
  "espacios": {
    "expresion": /^\s+$/,
    "msj1": "No puedes ingresar espacios  en el campo ",
    "msj2": "No puedes ingresar espacios!"
  },
  "email": {
    "expresion": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    "msj1": "Estructura de correo no valida!",
    "msj2": "Estructura de correo no valida!"
  },
  "pagina_web": {
    "expresion": /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/,
    "msj1": "Estructura de pagina web no valida!",
    "msj2": "Estructura de pagina web no valida!"
  },
};

const validar_campo = (input, validacion, msj) => {
  if (Array.isArray(input)) {
    for (i = 0; i < input.length; i++) {
      let valor = $('#' + input[i]).val();
      if (restriccion[validacion]['expresion'].test(valor)) {
        msj_error(msj != "" ? msj : restriccion[validacion]['msj1'] + input[i]);
        return false;
      }
    }
    return true;
  } else {
    let valor = $('#' + input).val();
    if (restriccion[validacion]['expresion'].test(valor)) {
      msj_error(msj != "" ? msj : restriccion[validacion]['msj1'] + input);
      return false;
    } else {
      return true;
    }
  }

}

function msj_error(msj) {
  swal({
    title: "Error!",
    text: msj,
    icon: "warning",
    button: "Aceptar",
  });
}