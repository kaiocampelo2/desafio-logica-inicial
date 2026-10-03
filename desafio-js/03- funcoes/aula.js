// aplicando function no exercicio


// função do calculo de imc
function calcularImc (peso, altura){
    return peso / Math.pow(altura, 2);
}

// função para classificar o imc
function classificarImc(imc){
   if (imc < 18.5) {
    return `Abaixo do peso! O seu IMC é de ${imc.toFixed(1)}`;
} else if (imc >= 18.5 && imc < 25) {
    return `Peso normal! O seu IMC é de ${imc.toFixed(1)}`;
}else if (imc >= 25 && imc < 30){
    return `acima do peso! O seu IMC é de ${imc.toFixed(1)}`;
}else if (imc >= 30 && imc < 40){
    return `obesidade! O seu IMC é de ${imc.toFixed(1)}`;
} else {
    return `Obesidade grave! O seu imc é de ${imc.toFixed(1)}`;
}
}
// função auto invoke
(function (){
const peso = 85;
const altura = 1.67;

const imc = calcularImc(peso,altura);
console.log(classificarImc(imc));
})();


