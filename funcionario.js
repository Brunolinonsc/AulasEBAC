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
    // this.salario = salario;
    let _salario = salario;

    // getters e setters

    this.getSalario = function(){
        return _salario;
    }

    this.setSalario = function(valor){
        if (typeof valor ==='number'){
            _salario = valor
        }
    }
    Pessoa.call(this, nome)
}

function Estagiario(nome){
    Funcionario.call(this, nome, 'Estagiario', 2000)

    this.aumento = function(){
        const novoSalario = this.getSalario * 1.07;
        this.setSalario(novoSalario)
    }
}


const funcionario1 = new Funcionario('Bruno', 'dev font-end', 5000);
const funcionario2 = new Estagiario('Pedro')

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())