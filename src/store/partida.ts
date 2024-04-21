import { defineStore } from "pinia";
import { Partida } from "../interfaces/partida.interface";
import { Ref, computed, ref, watch } from "vue";
import { Fila } from "../interfaces/fila.interface";

const generaFilaQuien = (numOfPlayers: number): Fila[] => {
  return [
    {
      titulo: "Prado",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Rubio",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Orquídea",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Celeste",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Mora",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Amapola",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
  ];
};

const generateFilaArma = (numOfPlayers: number): Fila[] => {
  return [
    {
      titulo: "Candelabro",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Puñal",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Tubería de plomo",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Pistola",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Cuerda",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Herramienta",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
  ];
};

const generateFilaDonde = (numOfPlayers: number): Fila[] => {
  return [
    {
      titulo: "Sala de baile",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Sala de billar",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Invernadero",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Comedor",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Cuarto de baño",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Cocina",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Biblioteca",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Salon",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
    {
      titulo: "Estudio",
      celdas: Array.from({ length: numOfPlayers }, () => 0),
    },
  ];
};

const partida = defineStore("partidaStore", () => {
  const numOfPlayers = ref(6); // TODO: get this from the user
  const partida: Ref<Partida> = ref({
    quien: [],
    arma: [],
    donde: [],
  });

  const iniciaPartida = (): void => {
    const lsPartida = localStorage.getItem("partida");
    if (lsPartida) {
      if (lsPartida) {
        partida.value = JSON.parse(lsPartida);
      }
    } else {
      partida.value = {
        quien: generaFilaQuien(numOfPlayers.value),
        arma: generateFilaArma(numOfPlayers.value),
        donde: generateFilaDonde(numOfPlayers.value),
      };
    }
  };

  const setNumOfPlayers = (num: number): void => {
    numOfPlayers.value = num;
  };

  const guardaPartidaEnMemoria = (): void => {
    localStorage.setItem("partida", JSON.stringify(partida.value));
  };

  const actualizaEstadoCelda = (
    filaIndex: number,
    celdaIndex: number,
    action: string
  ): void => {
    let nuevoValor: number = 0;
    switch (action) {
      //  Vamos a no permitir marcar más de un estado como que lo tiene si ya tiene otro marcado igual en la msima fila
      case "quien":
        nuevoValor =
          (partida.value.quien[filaIndex].celdas[celdaIndex] + 1) % 4;
        if (nuevoValor === 3) {
          if (!partida.value.quien[filaIndex].celdas.includes(3)) {
            partida.value.quien[filaIndex].celdas[celdaIndex] = nuevoValor;
          }
        } else {
          partida.value.quien[filaIndex].celdas[celdaIndex] = nuevoValor;
        }
        break;
      case "arma":
        nuevoValor = (partida.value.arma[filaIndex].celdas[celdaIndex] + 1) % 4;
        if (nuevoValor === 3) {
          if (!partida.value.arma[filaIndex].celdas.includes(3)) {
            partida.value.arma[filaIndex].celdas[celdaIndex] = nuevoValor;
          }
        } else {
          partida.value.arma[filaIndex].celdas[celdaIndex] = nuevoValor;
        }
        break;
      case "donde":
        nuevoValor =
          (partida.value.donde[filaIndex].celdas[celdaIndex] + 1) % 4;
        if (nuevoValor === 3) {
          if (!partida.value.donde[filaIndex].celdas.includes(3)) {
            partida.value.donde[filaIndex].celdas[celdaIndex] = nuevoValor;
          }
        } else {
          partida.value.donde[filaIndex].celdas[celdaIndex] = nuevoValor;
        }
        break;
    }

    guardaPartidaEnMemoria();
  };

  return {
    numOfPlayers: computed(() => numOfPlayers),
    partida: computed(() => partida),
    iniciaPartida,
    setNumOfPlayers,
    actualizaEstadoCelda,
  };
});

export default partida;
