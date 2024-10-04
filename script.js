//MAP

let lista = ["Altamiro","Barnabé","Clementino"];

lista.map((item,index)=>{
    console.log(`Restornando ${item} que está na posição ${index}`)
})

//REDUCE
//tenta reduzir a um valor único, normalmente atravéz de operações matemáticas
let numeros = [2, 3, 5];

let total = numeros.reduce((acumulador,numero,indice,original)=>{
    console.log(`${acumulador} - total até agora`);
    console.log(`${numero} - valor atual`);
    //console.log(`${indice} - Posição até agora`);
    //console.log(`${original} - array original`);
    console.log("------------------")

    return acumulador +=numero;
})
console.log(`Total de reduce ${total}`);

//FIND
//Faz uma busca dentro do array e retorna o primeiro valor encontrado

let listagem =[2, 3, 4, 5, 6];

let busca = listagem.find((item2)=>{
    return item2>4;
})
console.log(busca);

//FILTER
//Filtra elementos dentro de um array
//retorno de filter é um array
let palavras = ['alface','beterraba','cenoura','dill'];

//Vamos criar um filtro retornando palavras que tem menos de 7 caracteres

resultado = palavras.filter((item3)=>{
    return item3.length>7;
})
console.log(resultado);

//Implemente o código que retorna do array listagem, todos aqueles que são maiores que 4

let numeross =[2, 3, 4, 5, 6, 7, 8, 9, 10];
let ordem = numeross.filter((item4)=>{
    return item4>4;
})
console.log(ordem);