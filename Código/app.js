function CapturarTexto() {
    var texto = document.getElementById("TextoIngresado");
    var contenido = texto.value;
    console.log(contenido);
}

function IncriptarTexto() {
    var TextoIngresado = document.getElementById("TextoIngresado").value;

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
    var TextoIngresado = document.getElementById("TextoIngresado").value;

    var textoDesencriptado = "";

    var palabras = TextoIngresado.split(" ");

    var vocalesEncriptadas = {
        'ai': 'a',
        'enter': 'e',
        'ober': 'o',
        'imes': 'i',
        'ufat': 'u'
    };

    for (var i = 0; i < palabras.length; i++) {
        var palabraEncriptada = palabras[i];
        var palabraDesencriptada = "";

        for (var x = 0; x < palabraEncriptada.length; x++) {
            var caracter = palabraEncriptada.charAt(x);

            var esVocalCambiada = false;
            for (var vocalEncriptada in vocalesEncriptadas) {

                if (vocalesEncriptadas.hasOwnProperty(vocalEncriptada)) {
                    if (caracter === vocalEncriptada.charAt(0) || caracter === vocalEncriptada.charAt(1)) {
                        // Si el caracter es una vocal cambiada, reemplazarla por la vocal original
                        palabraDesencriptada += vocalesEncriptadas[vocalEncriptada];
                        esVocalCambiada = true;
                        break;
                    }
                }
            }
            if (!esVocalCambiada) {
                palabraDesencriptada += caracter;
            }
        }

        textoDesencriptado += palabraDesencriptada


        if (i < palabras.length - 1) {
            textoDesencriptado += " ";
        }
    }

    console.log(textoDesencriptado);
    var textoResultado = document.getElementById("textoResultado");
    textoResultado.innerHTML = textoDesencriptado;
}
