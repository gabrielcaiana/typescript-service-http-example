<script setup lang="ts">
import { RickAndMortyApi } from './services/rick-and-morty';
import { onMounted, ref } from 'vue';

const api = new RickAndMortyApi();
const data: any = ref([]);

onMounted(async () => {
  data.value = await api.getAllCharacters();
});
</script>

<template>
  <div class="container mx-auto p-10">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="{ id, gender, image, name, url } in data" :key="id">
        <img :src="image" :alt="name" />
        <span class="text-xl text-neutral-600 block">{{ name }}</span>
        <span class="text-neutral-400 block">{{ gender }}</span>
        <a class="text-blue-400 underline block" :href="url"> Detalhes</a>
      </div>
    </div>
  </div>
</template>
