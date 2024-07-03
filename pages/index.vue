<template>
  <v-row>
    <!-- Membuat tampilan main content url root -->
    <v-col cols="8" class="frame-content">
      <product> </product>
    </v-col>
    <v-col cols="4 frame-content white pb-13">
      <order></order>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // Panggil function middleware ke folder middleware file authenticated
  middleware: ['authenticated'],
}
</script>
