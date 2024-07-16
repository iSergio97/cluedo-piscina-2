<template>
  <div
    :class="
      numOfRows === 6
        ? `grid grid-cols-7 gap-0 place-items-center border-b-4 border-r-2 border-indigo-300`
        : numOfRows === 5 ? 'grid grid-cols-6 gap-0 place-items-center border-b-4 border-r-2 border-indigo-300'
        : numOfRows === 4 ? 'grid grid-cols-5 gap-0 place-items-center border-b-4 border-r-2 border-indigo-300'
        : numOfRows === 3 ? 'grid grid-cols-4 gap-0 place-items-center border-b-4 border-r-2 border-indigo-300'
        : 'grid grid-cols-3 gap-0 place-items-center border-b-4 border-r-2 border-indigo-300'
    "
  >
    <div
      class="col-span-1 p-2 border-r-2 border-indigo-300 w-full grid place-items-start text-wrap text-xs/3 sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl"
    >
      <p>{{ titulo }}</p>
    </div>
    <CeldaComponent
      v-for="(celda, index) of fila.celdas"
      :key="index"
      :estado="celda"
      @cambio-estado="actualizaEstadoCelda(filaIndex, index, action)"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import CeldaComponent from "./CeldaComponent.vue";
import { Fila } from "../interfaces/fila.interface";
import partida from "../store/partida";

interface Props {
  fila: Fila;
  filaIndex: number;
  numOfRows: number;
  titulo: string;
  action: string;
}

const { actualizaEstadoCelda } = partida();

const props = defineProps<Props>();

const { fila, filaIndex, numOfRows, titulo, action } = toRefs(props);
</script>
