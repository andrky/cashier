<template>
  <v-row>
    <v-col cols="10" offset="1">
      <v-card class="mb-2">
        <v-toolbar color="primary"> Dashboard </v-toolbar>
        <v-card-text>
          <h2>Helo,</h2>
          {{ authenticated }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // Getters dari file auth dengan membawa var authenticated
    ...mapGetters('auth', {
      authenticated: 'authenticated',
    }),
  },
  mounted() {
    // console.log(this.$route)
    // Jika authenticated tidak true redirect ke halaman login
    if (!this.authenticated) {
      this.$router.push({
        name: 'login',
        params: { message: 'AUTH_REQUIRED' },
      })
    }
  },
}
</script>
