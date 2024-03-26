<template>
  <v-row>
    <v-col cols="8" offset="2" md="4" offset-md="4">
      <v-card class="mb-2">
        <v-toolbar dark color="primary">Register</v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              name="fullname"
              label="Fullname"
              type="text"
              v-model="form.fullname"
            />
            <v-text-field
              name="email"
              label="Email"
              type="email"
              v-model="form.email"
            />
            <v-text-field
              name="password"
              label="Password"
              type="password"
              v-model="form.password"
            />
            <v-text-field
              name="retype_password"
              label="Re-Password"
              type="password"
              v-model="form.retype_password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onsubmit">Register</v-btn>
        </v-card-actions>
      </v-card>
      <p>
        Sudah punya akun ?
        <v-btn to="/login" class="text-decoration-none" plain>Login</v-btn>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        password: '',
        retype_password: '',
      },
    }
  },
  methods: {
    onsubmit() {
      console.log(this.form)
      this.$axios
        .$post('http://localhost:3001/auth/register', this.form)
        .then((response) => {
          console.log(response)
        })
    },
  },
}
</script>
