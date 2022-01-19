let text = document.querySelector("#input");
let output = document.querySelector("#output");
let encode = document.querySelector("#btn-encrypt");
let decode = document.querySelector("#btn-decrypt");
let copy = document.querySelector("#btn-copy");
const regex = new RegExp("^[a-z 0-9\b]");


encode.addEventListener('click', (event) => {

    event.preventDefault();

    output.textContent = caracteres(encrypt(text.value));

    text.value = "";

})

decode.addEventListener('click', (event) => {

    event.preventDefault();

    output.textContent = caracteres(decrypt(text.value));

    text.value = "";

})

copy.addEventListener('click', (event) => {

    event.preventDefault();

    output.select();

    document.execCommand('copy');
    text.value = "";
})



function encrypt(text) {

    let encryptText = text.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat").toLowerCase();

    return encryptText;

}

function decrypt(text) {

    let decryptText = text.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return decryptText;

}

function caracteres(text) {

    if (!regex.test(text)) {

        return "ERROR: Não utilize acentos e nem letras maiúsculas."
    }
    else {
        return text;

    }

}