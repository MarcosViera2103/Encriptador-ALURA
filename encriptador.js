const textArea = document.querySelector(".text-input");
const mensaje = document.querySelector("#textoencontrado-2");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = (textoEncriptado)
    textArea.value = " "; 
    mensaje.style.backgroundImage = "none";
}        

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
return stringEncriptado;    
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = (textoDesencriptado)
    textArea.value = " "; 
}        

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
return stringDesencriptado;

}

function copiar() {
    
    let copyText = document.getElementById("textoencontrado-2");     
    copyText.select();
    copyText.setSelectionRange(0, 99999);      
    navigator.clipboard.writeText(copyText.value);    
}