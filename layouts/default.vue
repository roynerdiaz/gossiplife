<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar color="primary" dark>
      <v-toolbar-title>GL</v-toolbar-title>
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

    <!-- Contenido dinámico de cada página -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <!-- Footer con botones de navegación centrados y aún más grandes -->
    <v-footer fixed>
      <v-container class="d-flex justify-center">
        <v-btn-group class="pa-1">
          <v-btn @click="$router.push('/')" x-large>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn @click="$router.push('/nueva')" x-large>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn @click="$router.push('/perfil')" x-large>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-btn-group>
      </v-container>
    </v-footer>
  </v-app>
</template>
