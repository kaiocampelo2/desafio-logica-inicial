/* TASK 04 -  CALCUTE THE IMC OF A PERSON AND DEFINE IF THE PERSON IS UNDERWEIGHT, NORMAL, OVERWEIGHT OR OBESITY.

 IMC = peso / (altura * altura)

classification
 abaixo de 18.5 - abaixo do peso
 entre 18.5 e 25 - peso normal
 entre 25 e 30 - acima do peso
 entre 30 e 40 - obesidade
 acima de 40 - obesidade grave

*/

const peso = 76.70;
const altura = 1.67;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`Abaixo do peso! O seu IMC é de ${imc.toFixed(1)}`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Peso normal! O seu IMC é de ${imc.toFixed(1)}`);
}else if (imc >= 25 && imc < 30){
    console.log(`acima do peso! O seu IMC é de ${imc.toFixed(1)}`);
}else if (imc >= 30 && imc < 40){
    console.log(`obesidade! O seu IMC é de ${imc.toFixed(1)}`);
} else {
    console.log(`Obesidade grave! O seu imc é de ${imc.toFixed(1)}`);
}
