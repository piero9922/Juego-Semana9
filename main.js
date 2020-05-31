let seguir = "s";
let resultado = 5;
function getRandomArbitrary(min, max, apuesta, numeroApuesta) {
  console.log(apuesta, numeroApuesta);
  if (isNaN(apuesta) === false && isNaN(numeroApuesta) === false) {
    const numero = Math.random() * (max - min) + min;
    const numeroAleatorio = parseInt(numero);
    alert(`EL numero aleatorio es ${numeroAleatorio}`);

    if (numeroAleatorio == numeroApuesta) {
      alert(
        `Hasta el momento vas ganando ${(resultado =
          apuesta * 2 + resultado)} soles`
      );
    } else {
      alert(`Has perdido.Tienes ${(resultado = apuesta * 0)} soles`);
    }

    seguir = prompt("¿Desea continuar? (s/n)");
  } 
  else {
    alert("Los valores a ingresar tienen que ser un Numeros");
  }
}
do {
  let valorApuesta = Number(prompt("¿Cuanto dinero desea apostar?"));
  let nuevoNumeroApuesta = Number(
    prompt("Coloque un numero al cual apostar (1 - 6)")
  );
  getRandomArbitrary(1, 7, valorApuesta, nuevoNumeroApuesta);
} while (seguir == "s");