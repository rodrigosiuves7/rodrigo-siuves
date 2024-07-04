const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
const tempoObjetiv1 = new Date(2024,11,31,59,59);
const tempoObjetivo2 = new Date(2024,10,28,59,59);
const tempoObjetivo3 = new Date(2024,9,29,59,59);
const tempoObjetivo4 = new Date(2024,8,27,59,59);
const agora = new Date();
let segundos;
let minutos;
let horas;
let dias;
segundos = (tempoObjetiv1-agora)/1000
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
tempo[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

let segundos2;
let minutos2;
let horas2;
let dias2;
segundos2 = (tempoObjetivo2-agora)/1000
minutos2 = segundos2/60
horas2 = minutos2/60
dias2 = horas2/24
segundos2 = Math.floor(segundos2)
minutos2 = Math.floor(minutos2)
horas2 = Math.floor(horas2)
dias2 = Math.floor(dias2)
segundos2 = segundos2%60
minutos2 = minutos2%60
horas2 = horas2%60
tempo[1].textContent = `Faltam ${dias2} dias, ${horas2} horas, ${minutos2} minutos e ${segundos2} segundos`

let segundos3;
let minutos3;
let horas3;
let dias3;
segundos3 = (tempoObjetivo3 - agora)/1000
minutos3 = segundos3/60
horas3 = minutos3/60
dias3 = horas3/24
segundos3 = Math.floor(segundos3)
minutos3 = Math.floor(minutos3)
horas3 = Math.floor(horas3)
dias3 = Math.floor(dias3)
segundos3 = segundos3%60
minutos3 = minutos3%60
horas3 = horas3%60
dias3 = dias3%60
tempo[2].textContent = `Faltam ${dias3} dias, ${horas3} horas, ${minutos3} minutos e ${segundos3} segundos`

let segundos4;
let minutos4;
let horas4;
let dias4;
segundos4 = (tempoObjetivo4 - agora)/1000
minutos4 = segundos4/60
horas4 = minutos4/60
dias4 = horas4/24
segundos4 = Math.floor(segundos4)
minutos4 = Math.floor(minutos4)
horas4 = Math.floor(horas4)
dias4 = Math.floor(dias4)
segundos4 = segundos4%60
minutos4 = minutos4%60
horas4 = horas4%60
dias4 = dias4%60
tempo[3].textContent = `Faltam ${dias4} dias, ${horas4} horas, ${minutos4} minutos e ${segundos4} segundos`




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