
const botaomostrapalavras = document.queryselector ("#botao-palavrachave"); 

botaomostrapalavras.addeventlistener("click", mostrapalavraschave);

function mostrapalavraschave() {
    const texto = document.querySelector("#entrada-de-texto#").Value;
    const camporesultado = document.querySelector("#resultado-palavrachave");
    const palavraChave = processaTexto(texto);
    
    camporesultado.textcontent = palavras.join(", ");
    }
    function processaTexto(texto) {
        let palavras = texto.split(/\p{l}+/u);
        return palavras;
    }