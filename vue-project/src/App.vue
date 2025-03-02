<script setup>
import { reactive } from "vue";
  const nome = "Bruno Lino Nascimento"
  const meuObj = {
    nome: "Bruno",
    filmeFavorito: "Os mercenarios"
  }
function dizOla(nome) {
  return `${nome} diz oi`
}
const enderecoDaImagenDoBatiman = "https://images.hdqwalls.com/wallpapers/batman-art2020-lc.jpg";
const imagenDoSuperman = "https://th.bing.com/th/id/OIP.s9YVtYH2SYge-c0gs-nRNQHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7";

const botaoEstaDesabilitado = false
const gostaDoBatman = false
const gostaDoSuperman= false

const estaAutorizado = true

//let contador = 0 
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['Bruno', 'João', 'Luiza', 'Monica'],
  nomeAInserir: '',
})
function incrementar(){
  estado.contador++;
}
function decrementar(){
  estado.contador--;
}
function alteraEmail(evento){
  estado.email = evento.target.value
}
function mostraSaldoFuturo(){
  const {saldo, transferindo } = estado;
  return estado.saldo - transferindo
}
function validaValorTransferencia() {
  const{saldo, transferindo} = estado;
  return saldo >= transferindo;
}
function cadastraNome(){
  if (estado.nomeAInserir.length >= 3){
    estado.nomes.push(estado.nomeAInserir)
  }else {
    alert('Digire mais caracteres')
  }
}


</script>

<template>
  <h1>{{dizOla("Bruno")}}</h1>
  <img v-if="gostaDoBatman" :src="enderecoDaImagenDoBatiman" alt="" >
  <img v-else-if="imagenDoSupermanDoSuperman" :src="gostaDoSuperman" alt="" srcset="">
  <h2 v-else>Não curte heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Não possue altorização</h1>

  <button :disabled="!botaoEstaDesabilitado">Enviar Mensagem</button>
  <br>
  <hr/>

  {{ estado.contador }}
  

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr/>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">
<br>
<hr/>
Saldo: {{ estado.saldo }} <br>
Transferindo: {{ estado.transferindo }} <br>
Saldo depois transferência: {{ mostraSaldoFuturo ()}} <br>
<input class="campo" :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
<button v-if="validaValorTransferencia()">Transferir</button>
<span v-else>Valor maior que o saldo da conta</span>

<br>
<hr/>

<ul>
  <li v-for="nome in estado.nomes">
    {{ nome }}
  </li>
</ul>
<input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
<button @click="cadastraNome" type="button">Cadastrar novo nome</button>

<h3 v-for="nome in estado.nomes">{{ nome }}</h3>
 
</template>

<style scoped>
img{
  max-width: 200px;
}

.invalido{
  outline-color: red;
  border-color: red;
}
.campo{
  border: 2px solid #000;
}

</style>
