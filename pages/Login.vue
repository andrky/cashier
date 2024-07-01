<template>
  <v-row>
    <v-col cols="8" offset="2" md="4" offset-md="4">
      <v-card class="mb-2">
        <v-toolbar dark color="primary">Login</v-toolbar>
        <v-card-text>
          <v-alert color="red lighten-2" dark v-if="isError">{{
            message
          }}</v-alert>
          <v-form>
            <v-text-field
              name="email"
              label="Email"
              type="email"
              v-model="form.email"
            />
            <v-text-field
              name="passwrod"
              label="Password"
              type="password"
              v-model="form.password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onsubmit" :disabled="isDisabled">
            <!-- Jika isDi  sabled false fungsikan btn login -->
            <span v-if="!isDisabled">Login</span>
            <!-- Jika isDisabled true tampilkan btn animasi -->
            <v-progress-circular v-else color="primary" indeterminate>
            </v-progress-circular>
          </v-btn>
        </v-card-actions>
      </v-card>
      <p>
        Don't have an account ?
        <v-btn to="/register" class="text-decoration-none" plain
          >Register</v-btn
        >
      </p>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      isDisabled: false,
      isError: false,
      message: '',
      // Form input dari v-model disimpan disini
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // Panggil mutation dari file auth.js
    ...mapMutations('auth', {
      setFullname: 'setFullname',
      setAccessToken: 'setAccessToken',
      setRefreshToken: 'setRefreshToken',
    }),
    storeWelcomeScreen() {
      localStorage.setItem('welcomeScreen', true)
    },
    // Ketika klik tombol login maka data pada form akan dikirim ke backend menggunakan api
    onsubmit() {
      // Setelah di klik disabled button dulu
      this.isDisabled = true
      this.$axios
        .$post('http://localhost:3001/auth/login', this.form)
        .then((response) => {
          // Login sukses
          // Store passed welcome screen
          if (!localStorage.welcomeScreen) {
            this.storeWelcomeScreen()
          }
          // Setelah proses selesai aktifkan button
          this.isDisabled = false

          // Store auth data
          this.setFullname(response.fullname)
          this.setAccessToken(response.accessToken)
          this.setRefreshToken(response.refreshToken)

          // Redirect to dashboard
          this.$router.push('/dashboard')
        })
        .catch((error) => {
          // Mengambil respon error hasil dari backend
          this.message = error.response.data.message
          this.isError = true
          this.isDisabled = false
        })
    },
  },
}
</script>
