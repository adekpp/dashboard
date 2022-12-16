<script setup>
import Sidebar from "./components/Sidebar.vue";
import Input from "./components/Input.vue";
import Menu from "./components/Menu.vue";
import Tile from "./components/Tile.vue";
import arrowRightIcon from "./components/icons/arrowRight.svg";
import Chart from "./components/Chart.vue";
import Tabs from "./components/Tabs.vue";
import dotsIcon from "./components/icons/dots.svg";
import { chartData, chartOptions } from "./lib/chartConfig";
import ButtonFilled from "./components/buttons/ButtonFilled.vue";
import ButtonOutlined from "./components/buttons/ButtonOutlined.vue";
import AlertButton from "./components/AlertButton.vue";
</script>

<template>
  <div
    class="relative max-w-[1440px] w-full bg-white mx-auto rounded-lg flex flex-col xl:flex-row place-content-start xl:place-content-center min-h-screen"
  >
    <Sidebar />
    <div
      class="relative flex flex-row w-full min-h-screen px-2 lg:p-0 bg-white"
    >
      <div class="fade"></div>
      <div class="w-full flex flex-col lg:mx-[68px]">
        <div
          class="mt-6 lg:mt-[49px] flex flex-row w-full place-content-between items-center"
        >
          <Input />
          <div class="flex flex-row gap-x-4">
            <AlertButton />
            <Menu />
          </div>
        </div>
        <div
          class="mt-[32px] w-full flex flex-col lg:flex-row lg:gap-x-[32px] gap-y-[32px] lg:gap-y-0 place-content-center"
        >
          <Tile class="xl:max-w-[509px] w-full md:min-w-[340px]">
            <template v-slot:title> <h2>Current Balance</h2> </template>
            <template v-slot:button><img :src="dotsIcon" /></template>
            <div class="flex flex-col mt-[16px]">
              <span class="inline-flex text-[32px] md:text-[56px] font-light">
                <p class="text-[#9896A1] font-light">$</p>
                <p>21 432.23</p></span
              >
              <span class="inline-flex items-center gap-x-2 text-[#2DC78F]">
                <img class="w-[18px] h-[18px]" :src="arrowRightIcon" />
                <p class="text-lg font-medium">12% vs last month</p>
              </span>
              <div class="flex gap-x-2 mt-[72px] mb-[32px]">
                <ButtonFilled :text="`Quick Invest`" />
                <ButtonOutlined :text="`Show Report`" />
              </div>
            </div>
          </Tile>
          <Tile class="xl:max-w-[499px] w-full md:min-w-[340px]">
            <template v-slot:title><h2>Summary</h2></template>
            <template v-slot:button><img :src="dotsIcon" /></template>
            <div class="mt-[24px] flex w-full mb-[32px]">
              <Chart :chartData="chartData" :chartOptions="chartOptions" />
            </div>
          </Tile>
        </div>

        <Tabs />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media only screen and (min-width: 1024px) {
  .fade::after {
    position: absolute;
    content: "";
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 80%
    );
    width: 100%;
    height: 120px;
  }
}
</style>
