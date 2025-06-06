<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/" title="Inicio" />
        <v-list-item to="/contenido" title="Contenido Temático" />
        <v-list-item to="/actividades" title="Actividades" />
        <v-list-item to="/autoaprendizaje" title="Autoaprendizaje" />
        <v-list-item to="/foro" title="Foro" />
        <v-list-item to="/acerca" title="Acerca de" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>OVA STEM+</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>