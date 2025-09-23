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
        
    let frequecias = {};
    for (let i of palavras) {
        frequencia[i] = 0;
        for(let j of palavras)
          if(i==j){
            frequencias[i]++;
          } 
        } 
    }
        return palavras;
    }