<script setup>
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";
import { useApiStore } from "./store/useApiStore";

const apiStore = useApiStore();

const { getUsers, users } = storeToRefs(apiStore);

watchEffect(() => {
  apiStore.fetchUsers();
});
</script>

<template>
  <h1>Fetch API with pinia</h1>

  <ul>
    <li v-for="getterUser in getUsers" :key="getterUser.id">
      <div>{{ getterUser.name }}</div>
    </li>
  </ul>

  <ul>
    <li v-for="user in users" :key="user.id">
      <div>{{ user.username }}</div>
    </li>
  </ul>
</template>
