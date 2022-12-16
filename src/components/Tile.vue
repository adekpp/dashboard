<script setup></script>

<template>
  <div class="bg-[#F7F7F9] rounded-2xl px-[16px] md:px-[32px]">
    <div class="flex flex-row mt-[32px] place-content-between items-center">
      <div>
        <slot
          class="text-[20px] font-medium text-[#0A041C]"
          name="title"
        ></slot>
      </div>
      <div>
        <slot name="button"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
