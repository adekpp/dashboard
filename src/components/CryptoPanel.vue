<script setup>
import arrowCircleUp from "./icons/arrowCircleUp.svg";
import arrowCircleDown from "./icons/arrowCircleDown.svg";
import Chart from "./Chart.vue";
import { chartDataSummary, chartOptionsSummary } from "../lib/chartConfig";
import ButtonOutlined from "./buttons/ButtonOutlined.vue";
import ButtonFilled from "./buttons/ButtonFilled.vue";
const props = defineProps(["symbol", "price", "name", "logo", "percentChange"]);
import { formatter } from "../lib/utils";
import { computed } from "vue";

const priceFormated = computed(() => formatter.format(props?.price));
const icon = computed(() =>
  props.percentChange > 0 ? arrowCircleUp : arrowCircleDown
);
</script>

<template>
  <div
    class="max-w-[976px] w-full bg-white border-[1px] border-[#EBEBF3] rounded-[8px] flex flex-row px-[20px] mb-[8px] pb-3 md:pb-0"
  >
    <div
      class="flex md:flex-row flex-col items-center md:gap-x-4 gap-y-3 md:gap-y-0 w-full place-content-between"
    >
    <div class="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-7 items-center place-content-between w-full max-w-[400px]">
      <div class="md:max-w-[150px] w-full flex place-content-center md:block">
        <div class="py-[16px] flex flex-row items-center gap-x-4">
          <div
            class="relative w-[48px] h-[48px] border-[1px] border-[#EBEBF3] rounded-full"
          >
            <img
              :src="logo"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px]"
            />
          </div>

          <div class="flex flex-col gap-y-[6px]">
            <p class="text-[#9896A1] text-[16px] leading-[14px]">
              {{ symbol }}
            </p>
            <p class="text-[14px] font-semibold leading-[14px]">{{ name }}</p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col gap-y-[6px] max-w-[77px] w-full">
        <p class="text-[#9896A1] text-[16px] leading-[14px]">Price</p>
        <p class="text-[14px] font-semibold leading-[14px]">
          {{ priceFormated }}
        </p>
      </div>
      <div class="flex flex-col gap-y-[6px] max-w-[72px] w-full">
        <p class="text-[#9896A1] text-[16px] leading-[14px]">Change</p>
        <span class="inline-flex gap-x-[6px] items-center">
          <p
            :class="percentChange > 0 ? 'text-green-500' : 'text-red-500'"
            class="text-[14px] font-semibold leading-[14px]"
          >
            {{ percentChange.toFixed(2) }}%
          </p>
          <img class="w-[16px] h-[16px]" :src="icon" />
        </span>
      </div>
      </div>
      <div class="hidden md:flex max-w-[147px] w-full">
        <Chart
          :chartData="chartDataSummary"
          :chartOptions="chartOptionsSummary"
        />
      </div>
      

      <div class="flex flex-row gap-x-[8px]">
        <ButtonOutlined :text="`Sell`" />
        <ButtonFilled :text="`Buy`" />
      </div>
    </div>
  </div>
</template>
