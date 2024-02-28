


function filtrarTexto(texto) {
    // Eliminar caracteres especiales y tildes
    var textoFiltrado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return textoFiltrado;
}

function IncriptarTexto() {
    var TextoIngresadoMayus = document.getElementById("TextoIngresado").value;
    var textoFiltrado = filtrarTexto(TextoIngresadoMayus.toLowerCase());
    var TextoIngresado = textoFiltrado;
    var textoIncriptado = "";

    for (var i = 0; i < TextoIngresado.length; i++) {
        var caracter = TextoIngresado.charAt(i);

        switch (caracter.toLowerCase()) {
            case 'a':
                textoIncriptado += "ai" 
                break;

            case 'e':
                textoIncriptado += "enter"
                break;

            case 'o':
                textoIncriptado += "ober"
                break;

            case 'i':
                textoIncriptado += "imes"
                break;

            case 'u':
                textoIncriptado += "ufat"
                break;

            default:
                textoIncriptado += caracter;
                continue;
        }
    }
    console.log(textoIncriptado);
    var textoResultado = document.getElementById("textoResultado")
    textoResultado.innerHTML = textoIncriptado

    // Mostrar el botón de copiar texto
    var botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.style.display = "block";

}

function DesencriptarTexto() {
    var TextoIngresadoMayus = document.getElementById("TextoIngresado").value;
    var textoFiltrado = filtrarTexto(TextoIngresadoMayus.toLowerCase());
    var TextoIngresado = textoFiltrado;
    var textoDesencriptado = "";
    var palabras = TextoIngresado.split(" ");

    var vocalesEncriptadas = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }

    for (var i = 0; i < palabras.length; i++) {
        var palabraEncriptada = palabras[i];
        var palabraDesencriptada = "";

        for (var j = palabraEncriptada.length - 1; j >= 0; j--) {
            var letra = palabraEncriptada.charAt(j);
            var posibleVocalEncriptada = letra;

            // Construir una posible vocal encriptada empezando desde la última letra hacia atrás
            for (var k = j - 1; k >= 0; k--) {
                posibleVocalEncriptada = palabraEncriptada.charAt(k) + posibleVocalEncriptada;

                if (vocalesEncriptadas.hasOwnProperty(posibleVocalEncriptada)) {
                    // Si encontramos una coincidencia con una vocal encriptada, reemplazamos y salimos del bucle
                    palabraDesencriptada = vocalesEncriptadas[posibleVocalEncriptada] + palabraDesencriptada;
                    j = k; // Actualizamos la posición del bucle externo para evitar volver a procesar la vocal encriptada
                    break;
                }
            }

            // Si no se encontró ninguna coincidencia, simplemente agregamos la letra actual a la palabra desencriptada
            if (k < 0)
                palabraDesencriptada = letra + palabraDesencriptada;
        }
        // Agregar espacio si no es la última palabra
        if (i < palabras.length - 1) {
            textoDesencriptado += " ";
        }

        textoDesencriptado += palabraDesencriptada;


    }
    console.log(textoDesencriptado);
    var textoResultado = document.getElementById("textoResultado");
    textoResultado.innerHTML = textoDesencriptado;

    // Mostrar el botón de copiar texto
    var botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('boton-copiar').addEventListener('click', CopiarTexto);
});
function CopiarTexto() {
    {
        // Selecciona el contenido del div
        var contenido = document.getElementById('textoResultado');
        var seleccion = window.getSelection();
        var rango = document.createRange();
        rango.selectNodeContents(contenido);
        seleccion.removeAllRanges();
        seleccion.addRange(rango);

        // Intenta copiar el contenido seleccionado al portapapeles
        try {
            document.execCommand('copy');
            alert('¡Texto copiado al portapapeles!');
        } catch (error) {
            console.error('No se pudo copiar el texto: ', error);
        }

        // Limpia la selección
        seleccion.removeAllRanges();
    };

}
document.getElementById("botonDesencriptar").addEventListener("click", IncriptarTexto);
document.getElementById("botonDesencriptar").addEventListener("click", DesencriptarTexto);
