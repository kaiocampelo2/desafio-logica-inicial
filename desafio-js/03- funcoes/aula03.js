
// aplicando funções a este exemplo pratipo

// const metodoPag = 3;
// const precoEtiqueta = 100;


// if(metodoPag === 1){
//     console.log ( precoEtiqueta - (precoEtiqueta * 0.1));
// }else if ( metodoPag === 2 ){
//     console.log (precoEtiqueta - (precoEtiqueta * 0.15));
// }else if (metodoPag === 3){
//   console.log( ` o valor parcelado em 2x fica em duas parcelas de ${precoEtiqueta / 2}`);
// } else{
//     console.log(precoEtiqueta + (precoEtiqueta * 0.1));
// }


function aplicarDesconto (valor, desconto){
    return (valor -(valor * (desconto / 100)));
}

function aplicarJuros (valor, juros){
    return (valor +(valor *(juros / 100)));
}


const metodoPag = 4;
const precoEtiqueta = 100;



if(metodoPag === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if ( metodoPag === 2 ){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (metodoPag === 3){
  console.log( ` o valor parcelado em 2x fica em duas parcelas de ${precoEtiqueta / 2}`);
} else{
   console.log(aplicarJuros(precoEtiqueta, 10));
}
