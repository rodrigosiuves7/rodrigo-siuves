const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
const tempoObjetiv1 = new Date(2024,11,31,59,59);
const tempoObjetivo2 = new Date(2024,10,28,59,59);
const tempoObjetivo3 = new Date(2024,9,29,59,59);
const tempoObjetivo4 = new Date(2024,8,27,59,59);
function calculaTempo(tempoObjetivo){
    const agora = new Date();
let segundos;
let minutos;
let horas;
let dias;
segundos = (tempoObjetivo-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24
segundos = Math.floor(segundos)
minutos = Math.floor(minutos)
horas = Math.floor(horas)
dias = Math.floor(dias)
segundos = segundos%60
minutos = minutos%60
horas = horas%60
 return `Faltam ${horas} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
}
tempo[0].textcontent = calculaTempo(tempoObjetivo1);
tempo[1].textcontent = calculaTempo(tempoObjetivo2);
tempo[2].textcontent = calculaTempo(tempoObjetivo3);
tempo[3].textcontent = calculaTempo(tempoObjetivo4);


for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
        for (let j = 0 ; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}