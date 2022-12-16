<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button
    class="bg-white text-[#7445FB] px-4 py-2 rounded-[4px] border-[1px] border-[#EBEBF3] text-sm font-semibold"
  >
    {{text}}
  </button>
</template>
