<script setup>
import searchIcon from "../components/icons/search.svg";
</script>

<template>
  <div class="flex justify-start items-center relative max-w-[232px] w-full">
    <input
      placeholder="Search"
      class="rounded-[8px] bg-[#F7F7F9] pl-[42px] w-full h-[48px] outline-none text-sm placeholder:text-[#9896A1]"
    />
    <img
      :src="searchIcon"
      class="absolute left-[20px] w-[12px] h-[12px]"
      alt="Search Icon"
    />
  </div>
</template>
