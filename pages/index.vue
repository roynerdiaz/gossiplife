<template>
  <v-app>
    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <!-- Logo centrado y más grande -->
        <v-row justify="center" class="mb-5">
          <v-col cols="12" class="text-center">
            <h1 class="gl-logo">GL</h1>
          </v-col>
        </v-row>
        
        <!-- Campo de búsqueda -->
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-text-field
              dense
              solo
              prepend-inner-icon="mdi-magnify"
              label="Buscar chismes..."
            ></v-text-field>
          </v-col>
        </v-row>
        
        <!-- Lista de chismes -->
        <v-row>
          <v-col v-for="(chisme, index) in chismes" :key="index" cols="12" sm="4">
            <v-card>
              <v-card-title>
                <v-avatar size="40">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <span class="ml-2">{{ chisme.autor }}</span>
              </v-card-title>
              <v-card-text>
                {{ chisme.texto }}
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-comment-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      chismes: [
        { autor: "Ana", texto: "¿Sabían lo que pasó ayer en la fiesta?" },
        { autor: "Carlos", texto: "Dicen que alguien renunció de repente..." },
        { autor: "María", texto: "Vi a alguien con su ex en el centro comercial..." }
      ]
    };
  }
};
</script>

<style scoped>
.gl-logo {
  font-size: 64px;
  font-weight: bold;
  color: #333;
}
</style>
