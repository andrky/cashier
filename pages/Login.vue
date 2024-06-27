<template>
  <v-row>
    <v-col cols="8" offset="2" md="4" offset-md="4">
      <v-card class="mb-2">
        <v-toolbar dark color="primary">Login</v-toolbar>
        <v-card-text>
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
          <v-btn color="primary" @click="onsubmit">Login</v-btn>
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
export default {
  data() {
    return {
      // Form input dari v-model disimpan disini
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // Ketika klik tombol login maka data pada form akan dikirim ke backend menggunakan api
    onsubmit() {
      this.$axios
        .$post('http://localhost:3001/auth/login', this.form)
        .then((response) => {
          console.log(response)
        })
    },
  },
}
</script>
