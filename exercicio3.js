/*Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes
categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos
 */
{
    let idade =  0
    console.log ( " Insira idade do atleta: " )
    idade = readln ().toInt()
    console.log(idade)

    if (idade >=  5  && idade <=  7 ) {
        console.log( " Infatil A " )

    }
    if (idade >=  8  && idade <=  11 ) {
        console.log( " Infantil B " )

    }
    if (idade >=  12  && idade <=  13 ) {
        console.log( " Juvenil A " )
    }
    if (idade >=  14  && idade <=  17 ) {
        console.log( " Juvenil B " )
    }
    if (idade >=  18 ) {
        console.log( " Adulto " )
    }

}