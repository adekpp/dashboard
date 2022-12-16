<script setup>
import logo from "../assets/logo.svg";
</script>

<template>
  <aside
    class="xl:max-w-[264px] w-full pl-3 py-3 xl:py-0 xl:pl-[24px] xl:pt-[40px] bg-[#F7F7F9] xl:flex flex-col rounded-tl-lg rounded-bl-lg"
  >
    <div class="flex flex-row gap-x-4 items-center">
      <img class="w-[36px] h-[24px]" :src="logo" />
      <h1 class="font-semibold text-[24px] text-[#0A041C]">Payte</h1>
    </div>
  </aside>
</template>
