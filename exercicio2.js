   /*Faça um programa que receba três inteiros e diga qual deles é o maior.
   */
   const prompt = require("prompt-sync")()
   let numero1 = Number(prompt("Digite o primeiro número:"))
   let numero2 = Number(prompt("Digite o primeiro número:"))
   let numero3 = Number(prompt("Digite o primeiro número:"))

   if (numero1>= numero2 && numero1>= numero3){
       console.log(`${numero1} é o maior número.`)
      

   }else if (numero2>= numero1 && numero2>= numero3){
       console.log(`${numero2} é o maior número.`)

    } else{
         console.log(`${numero3} é o maior número.`)
    }
     
    if (numero1 < numero2 && numero1 < numero3){
        console.log(`${numero1} é o menor número.`)

    }else if (numero2 < numero1 && numero2 < numero3){
    console.log(`${numero2} é o menor número.`)

    } else{
      console.log(`${numero3} é o menor número.`)
 }


   
   