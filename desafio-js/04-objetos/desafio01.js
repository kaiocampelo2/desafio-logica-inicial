class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){           
        const imc = this.calcularImc(); 

        if (imc < 18.5) {
    return (`Abaixo do peso! O seu IMC é de ${imc.toFixed(1)}`);
    } else if (imc >= 18.5 && imc < 25) {
    return (`Peso normal! O seu IMC é de ${imc.toFixed(1)}`);
    }else if (imc >= 25 && imc < 30){
    return (`acima do peso! O seu IMC é de ${imc.toFixed(1)}`);
    }else if (imc >= 30 && imc < 40){
    return (`obesidade! O seu IMC é de ${imc.toFixed(1)}`);
    } else {
    return (`Obesidade grave! O seu imc é de ${imc.toFixed(1)}`);
    }  
  }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());

const dominike = new Pessoa('Dominike', 70, 1.67);
console.log(dominike.classificarImc());

const kaio = new Pessoa('kaio', 85, 1.85);
console.log(kaio.classificarImc());