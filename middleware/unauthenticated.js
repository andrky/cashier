export default function ({ store }) {
  // Kalau bukan false / sudah login
  if (store.getters['auth/authenticated']) {
    return window.$nuxt.$router.push({
      name: 'dashboard',
    })
  }
}
