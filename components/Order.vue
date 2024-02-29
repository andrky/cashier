<template>
  <div>
    <!-- Menampilkan isi dari items -->
    {{ cartItems }}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    // // Menampilkan state dengan nama file carts
    // ...mapState('carts', {
    //   // Nama state items disimpan dalam objek items
    //   items: 'items',
    // }),
    // Menampilkan state dengan nama file carts
    ...mapGetters('carts', {
      // Nama getters cartItems disimpan dalam objek cartItems
      cartItems: 'cartItems',
    }),
  },
}
</script>
