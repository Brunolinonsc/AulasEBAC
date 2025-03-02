<script setup>
  const nome = "Bruno Lino Nascimento"
  const meuObj = {
    nome: "Bruno",
    filmeFavorito: "Os mercenarios"
  }
function dizOla(nome) {
  return `${nome} diz oi`
}
const enderecoDaImagenDoBatiman = "https://images.hdqwalls.com/wallpapers/batman-art2020-lc.jpg"

const botaoEstaDesabilitado = false

</script>

<template>
  <h1>{{dizOla("Bruno")}}</h1>
  <img :src="enderecoDaImagenDoBatiman" alt="" >

  <button :disabled="!botaoEstaDesabilitado">Enviar Mensagem</button>
</template>

<style scoped>

</style>
