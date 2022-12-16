<script setup>
const props = defineProps(["chartData", "chartOptions"]);

import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";
import { ref } from "@vue/reactivity";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler
);
</script>

<template>
  <Line
    id="chart"
    width="full"
    height="full"
    :options="chartOptions"
    :data="chartData"
  />
</template>
