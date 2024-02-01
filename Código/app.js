function CapturarTexto() {
    var texto = document.getElementById("TextoIngresado");
    var contenido = texto.value;
    console.log(contenido);
}


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
            if (k < 0) {
                palabraDesencriptada = letra + palabraDesencriptada;
            }
        }

        textoDesencriptado += palabraDesencriptada;

        // Agregar espacio si no es la última palabra
        if (i < palabras.length - 1) {
            textoDesencriptado += " ";
        }
    }



    console.log(textoDesencriptado);
    var textoResultado = document.getElementById("textoResultado");
    textoResultado.innerHTML = textoDesencriptado;
}