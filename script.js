
const botaomostrapalavras = document.query cselector ("#botao-palavrachave"); 

botaomostrapalavras.addeventlistener("click", mostrapalavraschave);

function mostrapalavraschave() {
    const texto = document.querySelector("#entrada-de-texto#").Value;

    const camporesdultado = document.querySelector("#resultado-palavrachave");

    const palavras = texto.split(" ");
    
    camporesultado.textcontent = palavras;
    }