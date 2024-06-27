<template>
  <v-row>
    <!-- V-model untuk menangkap isi dari form -->
    <!-- Rules untuk menangkap isi pesan alert dari hasil input jika tidak memenuhi kriteria -->
    <v-col cols="8" offset="2" md="4" offset-md="4">
      <v-card class="mb-2">
        <v-toolbar dark color="primary">Register</v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              name="fullname"
              label="Fullname"
              type="text"
              :rules="rules.fullname"
              v-model="form.fullname"
            />
            <v-text-field
              name="email"
              label="Email"
              type="email"
              :rules="rules.email"
              v-model="form.email"
              @keyup="checkEmail"
            />
            <v-text-field
              name="password"
              label="Password"
              type="password"
              :rules="rules.password"
              v-model="form.password"
            />
            <v-text-field
              name="retype_password"
              label="Re-Password"
              type="password"
              :rules="rules.retype_password"
              v-model="form.retype_password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onsubmit" :disabled="isDisabled">
            <!-- Jika isDisabled false fungsikan btn register -->
            <span v-if="!isDisabled">Register</span>
            <!-- Jika isDisabled true tampilkan btn animasi -->
            <v-progress-circular v-else color="primary" indeterminate>
            </v-progress-circular>
          </v-btn>
        </v-card-actions>
      </v-card>
      <p>
        Already have an account ?
        <v-btn to="/login" class="text-decoration-none" plain>Login</v-btn>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      emailExist: false,
      isDisabled: false,
      // Form input dari v-model disimpan disini
      form: {
        fullname: '',
        email: '',
        password: '',
        retype_password: '',
      },
      // Rules sesuai dengan input disimpan disini
      rules: {
        // Jika fullname kosong
        fullname: [(v) => !!v || 'Fullname is required'],
        // Jika email kosong dan format email tidak sesuai
        email: [
          (v) => !!v || 'Email is required',
          (v) => /.+@.+.+/.test(v) || 'Email invalid',
          // (v) => !!this.emailExist || 'Email already exist',
        ],
        // Jika password kosong dan kurang dari 8 karakter
        password: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 8 || 'Password must be at least 8 characters',
        ],
        // Jika retype_password tidak sama dengan passwords
        retype_password: [
          (v) =>
            v === this.form.password ||
            'Re-password must be same with password',
        ],
      },
    }
  },
  methods: {
    // Ketika klik tombol register maka data pada form akan dikirim ke backend menggunakan api
    checkEmail() {
      this.$axios
        .$post('http://localhost:3001/auth/check-email', this.form)
        // Email belum ada di database
        .then((response) => {
          this.emailExist = false
        })
        // Email sudah ada di database
        .catch((error) => {
          this.emailExist = true
        })
    },
    // Ketika klik tombol register maka data pada form akan dikirim ke backend menggunakan api
    onsubmit() {
      // Setelah di klik disabled button dulu
      this.isDisabled = true
      this.$axios
        .$post('http://localhost:3001/auth/register', this.form)
        .then((response) => {
          // Setelah proses selesai aktifkan button
          this.isDisabled = false
          // Redirect to login
          this.$router.push('/login')
          // console.log(response)
        })
        .catch((error) => {
          this.isDisabled = false
        })
    },
  },
}
</script>
