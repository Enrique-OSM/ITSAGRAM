<script setup>
import { computed, onMounted, ref } from "vue";
import LoginPages from "./Pages/LoginPages.vue";
import NavBar from "./components/NavBar.vue";
import { auth } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import Feed from "./Pages/Feed.vue";

const user = ref(null);
const isLoginShown = computed(() => user.value === null);

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});

// Navbar
// pageShown ("about-us" | "explore" | "reviews")
const pageShown = ref("about-us");

function changePage(page) {
  pageShown.value = page;
}

onMounted(() => {
  // onAuthStateChanged escucha los cambios en la autenticación del usuario
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      user.value = currentUser;
    } else user.value = null;
  });
});
</script>

<template>
  <!-- Login -->
  <LoginPages @hide-login="isLoginShown = false" v-if="isLoginShown === true" />

  <!-- Contenido de la app -->
  <div v-else>
    <!-- Navbar -->
    <NavBar @change-page="changePage" @hide-login="isLoginShown = true" />
    <!-- Páginas -->


    <!-- Acerca de nosotros -->
    <Feed v-if="pageShown === 'feed'" />

    <!--<section v-if="pageShown === 'reviews'">
      <h2>Reseñas</h2>
    </section>-->
  </div>
</template>

<style scoped></style>