<script setup>
const props = defineProps(["text"]);
</script>
<template>
  <button
    class="bg-[#7445FB] text-white px-4 py-2 rounded-[4px] text-sm font-semibold"
  >
    {{ text }}
  </button>
</template>
