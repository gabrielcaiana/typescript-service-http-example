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
        {{ name }} <br />
        {{ gender }} <br />
        {{ url }}
      </div>
    </div>
  </div>
</template>
