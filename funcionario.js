function Pessoa(nome){
    this.nome = nome;
    this.dizoi = function(){
        console.log(this.nome + 'Diz olá');
    }
    this.dizCargo = function(){
        console.log(this.cargo)
    }
}


function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario('Bruno', 'dev font-end', 5000);
funcionario1.dizoi();
funcionario1.dizCargo();



