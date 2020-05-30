let seguir = "s";
let resultado = 0;

function getRandomArbitrary(min, max, apuesta, numeroApuesta) {
    const numero = Math.random() * (max - min) + min;
    const numeroAleatorio = parseInt(numero)
    alert(numeroAleatorio)
    if(numeroAleatorio == numeroApuesta){
        resultado = apuesta * 2 + resultado
    }else {
        resultado =  apuesta * 0 
    }
    alert(`El resultado de tu apuesta es ${resultado}`)
    
    seguir = prompt('¿Desea continuar? (s/n)')
    
}
do{
    let valorApuesta = Number(prompt('¿Cuanto dinero desea apostar? (MAYOR A 5 SOLES)'))
    let nuevoNumeroApuesta = Number(prompt('Coloque un numero al cual apostar (1 - 6)'))
    getRandomArbitrary(1,7, valorApuesta, nuevoNumeroApuesta)

}while(seguir == "s")