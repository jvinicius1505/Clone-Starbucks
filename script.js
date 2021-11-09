let imagens = [
    {img: "https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_2437495195_desktop.jpg?crc=72e9ff1c"} ,
    {img: "https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_979975250_desktop.jpg?crc=3b9374fa"}
]


let carrossel = document.getElementById("carrossel");
let imagem = document.getElementById("imgsCarrossel");
let botao1 = document.querySelector(".botaozinho");
let botao2 = document.querySelector(".botaozao");

let posicao = 0;
imagem.setAttribute("src", imagens[posicao].img);

let tamanho = imagens.length - 1;


botao1.onclick = function(){
    if(posicao == tamanho){
        posicao --;
        imagem.setAttribute("src", imagens[posicao].img);         
    } else{
        posicao++;
        imagem.setAttribute("src", imagens[posicao].img);
    }    
}

botao2.onclick = function(){
    if(posicao == 0){
        posicao ++;
        imagem.setAttribute("src", imagens[tamanho].img);         
    } else{
        posicao--;
        imagem.setAttribute("src", imagens[posicao].img);
    }
}
