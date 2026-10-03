class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm =  gastoMedioPorKm;
    }

    calcularViagem(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'preto', 1/12);


console.log(uno.calcularViagem(20, 6.70));