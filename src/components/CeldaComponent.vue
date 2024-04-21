<template>
  <div
    v-if="estado === 0"
    class="border-r-2 border-blue-300 w-full h-full grid place-items-center cursor-pointer"
    @click="emits('cambioEstado')"
  >
    <button><DefaultIcon /></button>
  </div>
  <div
    v-if="estado === 1"
    class="border-r-2 border-blue-300 w-full h-full grid place-items-center cursor-pointer bg-gray-300"
    @click="emits('cambioEstado')"
  >
    <button><QuestionMarkIcon /></button>
  </div>
  <div
    v-if="estado === 2"
    class="border-r-2 border-blue-300 w-full h-full grid place-items-center cursor-pointer bg-red-400"
    @click="emits('cambioEstado')"
  >
    <button><DenyIcon /></button>
  </div>
  <div
    v-if="estado === 3"
    class="border-r-2 border-blue-300 w-full h-full grid place-items-center cursor-pointer bg-green-400"
    @click="emits('cambioEstado')"
  >
    <button><ConfirmIcon /></button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  estado: number;
}

type Emit = (e: "cambioEstado") => void;

import { toRefs } from "vue";
import QuestionMarkIcon from "../icons/QuestionMarkIcon.vue";
import ConfirmIcon from "../icons/ConfirmIcon.vue";
import DenyIcon from "../icons/DenyIcon.vue";
import DefaultIcon from "../icons/DefaultIcon.vue";

const props = defineProps<Props>();

const { estado } = toRefs(props);

const emits = defineEmits<Emit>();
</script>
