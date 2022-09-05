/*
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo. */
    
const prompt = require("prompt-sync")()
   
var num  = 0
var soma = 0
var contador  = 0
 while (num >= 0 ){
    num = Number(prompt( " Digite um numero: " ))

    if (num >= 0 ){
        contador++
        soma += num

    }
 
}
  
    console.log( `A soma dos valores: ${soma} `)
    console.log( ` A media dos valores: ${soma / contador} `)
   console.log( ` total de valores lidos ${contador} ` )

   
  