class Pessoa {
    nome: string;
    renda?: number;

    //Propiedade obrigatoria não pode ser depois de propiedde opcional, ocasionara erro.
    constructor(nome: string, renda: number){
        this.nome = nome;
        this.renda = renda;
    }
    dizOi(): string {
        return `${this.nome} disse oi`;
    }
}

//Funcionalidades novas.
class ContaBancaria{
    // private saldo: number = 0;
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco(){
        return 125;
    }

    getSaldo(){
        return this.saldo;
    }
    depositar(valor: number){
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoBruno = new ContaBancariaPessoaFisica(123456)
// contaDoBruno.depositar
ContaBancaria.retornaNumeroDoBanco()

