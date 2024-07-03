<template>
  <v-row>
    <v-col cols="10" offset="1">
      <v-card class="mb-2">
        <v-toolbar color="primary"> Dashboard </v-toolbar>
        <v-card-text>
          <h2>Helo,</h2>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // Panggil function middleware ke folder middleware file authenticated
  middleware: ['authenticated'],
}
</script>
