<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import alertIcon from "./icons/alertIcon.svg";
</script>

<template>
  <Menu as="div" class="relative hidden sm:inline-block text-center z-10">
    <div class="w-[48px] h-[48px]">
      <MenuButton
        class="relative inline-flex justify-center rounded-[8px] bg-[#F7F7F9] h-full w-full active:scale-90"
      >
        <div
          class="absolute w-[12px] h-[12px] bg-[#EA4D4D] rounded-full -right-[2px] -top-[1px] outline-2 outline-white"
        ></div>
        <img :src="alertIcon" class="p-[14px] w-full h-full" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
    </transition>
  </Menu>
</template>
