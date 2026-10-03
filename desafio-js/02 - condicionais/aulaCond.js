const numero = 10;

const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0) {
    console.log("Numero é invalido!");
} else if (numeroDivisivelPor5) {
    console.log("Sim!");
} else {
    console.log("Não!");
}