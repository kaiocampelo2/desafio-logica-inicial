const pessoa = {
    nome: 'kaio',
    idade: 25,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();