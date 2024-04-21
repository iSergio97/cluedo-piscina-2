<template>
  <div class="w-full h-full">
    <h1 class="text-4xl text-start bg-blue-300 pb-2">¿Qui&eacute;n?</h1>
    <FilaComponent
      v-for="(fila, index) of partida.quien"
      :fila="fila"
      :fila-index="index"
      :titulo="fila.titulo"
      action="quien"
      :num-of-rows="numOfPlayers"
    />
    <h1 class="text-4xl text-start bg-blue-300 pb-2">¿Arma?</h1>
    <FilaComponent
      v-for="(fila, index) of partida.arma"
      :fila="fila"
      :fila-index="index"
      :titulo="fila.titulo"
      action="arma"
      :num-of-rows="numOfPlayers"
    />
    <h1 class="text-4xl text-start bg-blue-300 pb-2">¿D&oacute;nde?</h1>
    <FilaComponent
      v-for="(fila, index) of partida.donde"
      :fila="fila"
      :fila-index="index"
      :titulo="fila.titulo"
      action="donde"
      :num-of-rows="numOfPlayers"
    />
  </div>
</template>

<script setup lang="ts">
import FilaComponent from "./FilaComponent.vue";
import usePartidaStore from "../store/partida";

const { numOfPlayers, partida, iniciaPartida, setNumOfPlayers } =
  usePartidaStore();

setNumOfPlayers(6);
iniciaPartida();
</script>
