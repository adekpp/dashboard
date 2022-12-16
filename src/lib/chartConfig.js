import { ref } from "vue";
export const chartData = ref({
  labels: [...Array(31).keys()],
  datasets: [
    {
      elements: {},
      label: "data",
      fill: "origin",
      borderColor: "#7445FB",
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 0, 0, 180);
        1;
        gradient.addColorStop(0, "rgba(116, 69, 251, 0.16)");
        gradient.addColorStop(0.8, "rgba(116, 69, 251, 0)");

        return gradient;
      },
      data: [
        0, 15, 12, 10, 23, 23, 23, 23, 23, 25, 25, 15, 12, 10, 25, 25, 10, 23,
        23, 23, 23, 25, 25, 25, 10, 23, 23, 23, 23, 25, 25,
      ],
    },
    {
      borderColor: "rgba(133, 133, 133, 0.3)",
      borderDash: [8, 5],
      borderCapStyle: "round",
      label: "data2",

      data: [
        0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18,
        18, 18, 18, 18, 18, 18, 11, 11, 11, 11, 8, 8, 8,
      ],
    },
  ],
});

export const chartOptions = ref({
  responisve: true,
  pointBorderColor: "rgba(0, 0, 0, 0)",
  pointBackgroundColor: "rgba(0, 0, 0, 0)",

  backgroundColor: "white",
  borderWidth: 2,
  radius: 4,
  pointHoverBackgroundColor: "white",
  pointHoverBorderColor: "#7445FB",
  scales: {
    y: {
      grid: {
        drawTicks: false,
        tickBorderDash: [10, 20],
        color: "rgba(133, 133, 133, 0.16)",
      },
      ticks: {
        callback: function (value, index, ticks) {
          return value + "k";
        },
      },
    },
    x: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.3,

      borderWidth: 2,
    },
  },
  plugins: {
    tooltip: {
      displayColors: false,
      displayLabel: false
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
  },
});

export const chartDataSummary = ref({
  labels: [...Array(24).keys()],
  datasets: [
    {
      elements: {},
      label: "test",

      borderColor: "#2DC78F",

      data: [10,14,18,12,12,12,12,12,12,15,15,16,19,24,24,24,24,24,24,24],
    },
  ],
});

export const chartOptionsSummary = ref({
  responisve: true,
  // maintainAspectRatio: false,
  pointBorderColor: "rgba(0, 0, 0, 0)",
  pointBackgroundColor: "rgba(0, 0, 0, 0)",

  backgroundColor: "white",

  scales: {
    y: {
      display: false,
    },

    x: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.3,

      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false, // <-- this option disables tooltips
    },
  },
});
