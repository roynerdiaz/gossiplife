<template>
    <v-app-bar color="primary" dark>
      <v-toolbar-title @click="$router.push('/')" class="cursor-pointer">GL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('/add')">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('/perfil')">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "Navbar"
  };
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>