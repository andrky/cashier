export default function ({ store }) {
  // Kalau bukan true / belum login
  if (!store.getters['auth/authenticated']) {
    return window.$nuxt.$router.push({
      name: 'login',
      params: { message: 'AUTH_REQUIRED' },
    })
  }
}
