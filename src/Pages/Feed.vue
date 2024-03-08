<script setup>
import { ref, onMounted } from "vue";
import Publicacion from "@/components/Publicacion.vue";
const books = ref([]);
const selectedBookId = ref();
</script>

<template>
  <!-- Lista de Libros -->
  <section v-if="!selectedBookId">
    <h2>For You</h2>
    <div>
      <!-- Una sola instancia de un libro -->
      <BookCard
        v-for="publicacion in 10"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
}

h2 {
  text-align: center;
}
</style>