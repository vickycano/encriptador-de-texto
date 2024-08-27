const texto__area =  document.querySelector (".texto__area");
const mensaje__encriptado = document.querySelector (".mensaje__encriptado");


/*La letra "e" es convertida para "enter" */
/*La letra "i" es convertida para "imes" */
/*La letra "a" es convertida para "ai" */
/*La letra "o" es convertida para "ober" */
/*La letra "u" es convertida para "ufat" */

function botonEncriptar(){
    const textoEncriptado = encriptar(texto__area.value)
    mensaje__encriptado.value = textoEncriptado
    texto__area.value = "";
    mensaje__encriptado.style.backgroundImage = "none";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(texto__area.value)
    mensaje__encriptado.value = textoEncriptado
    texto__area.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto() {
    // Obtén el valor del textarea
    const texto = document.getElementById("textoParaCopiar");

    // Utiliza la API de Portapapeles para copiar el texto
    navigator.clipboard.writeText(texto.value)
        .then(() => {
            // Muestra un alert cuando el texto se ha copiado con éxito
            alert("Texto copiado: " + texto.value);

            // Limpia el contenido del textarea
            texto.value = "";
        })
        .catch(err => {
            // Maneja el error si no se pudo copiar el texto
            console.error("Error al copiar el texto: ", err);
            alert("Hubo un error al copiar el texto.");
        });
}


console.table(matrizCodigo);

