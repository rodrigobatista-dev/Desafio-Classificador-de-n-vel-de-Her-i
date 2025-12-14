/*
Instruções para entrega

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
 
 
 

 */
let heroi = "Batman"
let xp = 8500
let nivel = ""

if (xp < 1000) {
    nivel = "Ferro"
}

if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
}

if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
}

if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
}

if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
}

if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
}

if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
}

if (xp > 10001) {
    nivel = "Radiante"
}
console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`)

// agora com switch case
let heroi2 = "Superman"
let xp2 = 40000
let nivel2 = ""
switch (true) {
    case (xp2 < 1000):
        nivel2 = "Ferro"
        break;
    case (xp2 >= 1001 && xp2 <= 2000):
        nivel2 = "Bronze"
        break;                  
    case (xp2 >= 2001 && xp2 <= 5000):
        nivel2 = "Prata"
        break;
    case (xp2 >= 5001 && xp2 <= 7000):
        nivel2 = "Ouro"
        break;
    case (xp2 >= 7001 && xp2 <= 8000):
        nivel2 = "Platina"
        break;
    case (xp2 >= 8001 && xp2 <= 9000):
        nivel2 = "Ascendente"
        break;
    case (xp2 >= 9001 && xp2 <= 10000):
        nivel2 = "Imortal"
        break;
    case (xp2 > 10001):
        nivel2 = "Radiante"
        break;
    default:
        nivel2 = "Nível desconhecido"
        break;
}

console.log(`O Herói de nome ${heroi2} está no nível de ${nivel2}`)
