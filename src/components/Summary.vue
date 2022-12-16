<script setup>
import CryptoPanel from "./CryptoPanel.vue";
import { useCrypto } from "../lib/api";
import useSWRV from "swrv";
import Loader from "./Loader.vue";
const { data, error } = useSWRV("data", useCrypto);
</script>

<template>
  <div
    class="flex w-full place-content-center py-4"
    v-if="data === undefined && !error"
  >
    <Loader />
  </div>
  <div class="flex w-full place-content-center py-4" v-if="error">
    An error occured
  </div>
  <CryptoPanel
    v-for="crypto in data"
    :key="crypto.id"
    :symbol="crypto.symbol"
    :price="crypto.quote.USD.price"
    :name="crypto.name"
    :logo="crypto.logo"
    :percentChange="crypto.quote.USD.percent_change_24h"
  />
</template>
