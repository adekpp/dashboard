<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from "@vue/reactivity";
import Summary from "./Summary.vue";
import Loader from "./Loader.vue";

const tabs = ref(["Summary", "Table", "Charts", "Reporting", "Analysis"]);
</script>

<template>
  <div class="relative bg-[#F7F7F9] rounded-2xl w-full mt-[32px]">
    <TabGroup :defaultIndex="0">
      <div class="lg:pl-[32px] lg:px-0">
        <TabList>
          <div
            class="flex flex-row gap-x-3 w-full font-normal pt-[32px] place-content-between sm:place-content-start px-2 lg:px-0"
          >
            <Tab
              v-for="(tab, idx) in tabs"
              :key="idx"
              class="text-sm md:text-md lg:text-base ui-selected:underline ui-selected:underline-offset-[11px] ui-selected:decoration-[4px] ui-selected:decoration-[#7445FB] ui-not-selected:text-[#9896A1] focus:outline-none"
              >{{ tab }}</Tab
            >
          </div>
        </TabList>
        <div class="h-[1px] w-full mt-[9px] bg-[#EBEBF3]"></div>
      </div>
      <div class="px-[32px] mt-[32px]">
        <TabPanels>
          <TabPanel>
            <Suspense>
              <Summary />
            </Suspense>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>

          <TabPanel>Content 3</TabPanel>
          <TabPanel>Content 4</TabPanel>
          <TabPanel>Content 5</TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  </div>
</template>
