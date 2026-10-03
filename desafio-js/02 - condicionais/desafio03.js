// TASK 03 - CALCULATE THE SCHOOL GRADES BASED ON THE NOTES OF THE STUDENTS, AND DEFINE IF THE STUDENT IS APPROVED OR NOT.
// media = (nota1 + nota2 + nota3) / 3

//classification
// media >= 7 - approved
// media >= 5 e < 7 - detention for recovery
// media < 5 - failed

const nota1 = 9;
const nota2 = 6;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

if ( media >= 7){
    console.log (`Aprovado! a sua media foi de ${media.toFixed(1)}`);
} else if(media >= 5 && media < 7){
    console.log (`Recuperação! a sua media foi de ${media.toFixed(1)}`);
}else{
    console.log (`Reprovado! a sua media foi de ${media.toFixed(1)}`);
}