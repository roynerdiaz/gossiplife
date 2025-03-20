<template>
  <v-app>
   
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- Sidebar con categorías -->
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item-group v-model="selectedCategory">
                <v-list-item v-for="(category, index) in categories" :key="index" @click="selectCategory(category)">
                  <v-list-item-content>
                    <v-list-item-title>{{ category }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <!-- Contenido principal -->
          <v-col cols="12" sm="9">
            <v-card>
              <v-img :src="selectedChisme.img" height="400px" contain></v-img>
            </v-card>
            
            <v-row class="mt-4">
              <v-col cols="12" sm="6">
                <v-card>
                  <v-card-title>Descripción</v-card-title>
                  <v-card-text>{{ selectedChisme.descripcion }}</v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card>
                  <v-card-title>Comentarios</v-card-title>
                  <v-list>
                    <v-list-item v-for="(comentario, index) in selectedChisme.comentarios" :key="index">
                      <v-list-item-content>
                        <v-list-item-title>{{ comentario.autor }}</v-list-item-title>
                        <v-list-item-subtitle>{{ comentario.texto }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
            
            <!-- Botón para subir chisme -->
            <div class="text-center mt-5">
              <v-btn color="primary" large @click="subirChisme">Subir Chisme</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      selectedCategory: null,
      categories: [
        "Deportivos",
        "Políticos",
        "Juegos",
        "Gente Famosa",
        "Cine",
        "Religión",
        "Tendencias",
      ],
      selectedChisme: {
        img: "https://apnews.com/article/argentina-messi-lesion-uruguay-brasil-9e4fd5db985cc12ac85fae207228bbad",
        descripcion: "Este es un chisme muy interesante sobre...",
        comentarios: [
          { autor: "Ana", texto: "No puedo creerlo!" },
          { autor: "Carlos", texto: "Esto está en tendencia." },
        ],
      },
    };
  },
  methods: {
    selectCategory(category) {
      console.log("Seleccionaste: ", category);
    },
    subirChisme() {
      console.log("Subir un nuevo chisme");
    },
  },
};
</script>

<style scoped>
.text-center {
  display: flex;
  justify-content: center;
}
</style>
