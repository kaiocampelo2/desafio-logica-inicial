/* TASK 05 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - A vista no Dinheiro ou PIX, recebe  15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const metodoPag = 3;
const precoEtiqueta = 100;


if(metodoPag === 1){
    console.log ( precoEtiqueta - (precoEtiqueta * 0.1));
}else if ( metodoPag === 2 ){
    console.log (precoEtiqueta - (precoEtiqueta * 0.15));
}else if (metodoPag === 3){
  console.log( ` o valor parcelado em 2x fica em duas parcelas de ${precoEtiqueta / 2}`);
} else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}