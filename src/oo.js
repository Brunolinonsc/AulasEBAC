"use strict";
class Pessoa {
    //Propiedade obrigatoria não pode ser depois de propiedde opcional, ocasionara erro.
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOi() {
        return `${this.nome} disse oi`;
    }
}
//Funcionalidades novas.
class ContaBancaria {
    constructor(numeroConta) {
        // private saldo: number = 0;
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoBruno = new ContaBancariaPessoaFisica(123456);
// contaDoBruno.depositar
ContaBancaria.retornaNumeroDoBanco();
