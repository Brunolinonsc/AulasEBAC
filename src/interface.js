"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.nuemeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
// interface IExemplo3 extends IExemplo2{
//     telefone : number
// }
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
