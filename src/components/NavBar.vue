<script setup>
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.js";
const emits = defineEmits(["changePage"]);

async function signout() {
  await signOut(auth);
  alert("Sesión cerrada exitosamente");
}
</script>

<template>
  <nav>
    <h2>ITSAGRAM</h2>
    <div>
      <span @click="emits('changePage', 'feed')">Feed</span>
      <span @click="signout">Cerrar sesión</span>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar */
nav {
  position: relative;
  z-index: 10;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid rgb(206, 206, 206);
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

nav > h2 {
  font-weight: 600;
}

nav > div > span {
  cursor: pointer;
  margin-right: 40px;
}
</style>