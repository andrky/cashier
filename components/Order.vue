<template>
  <v-row>
    <v-col cols="12">
      <h2>Order</h2>

      <!-- Membuat list tampilan -->
      <v-list>
        <!-- Menampilan semua data dari cartItems -->
        <v-list-item v-for="(item, index) in cartItems" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle
              >{{ currency(item.price) }} X
              {{ item.quantity }}</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-action>
            <v-list-item-title>{{
              currency(itemTotal(item.price, item.quantity))
            }}</v-list-item-title>
          </v-list-action>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    currency(val) {
      return Intl.NumberFormat('id-ID').format(val)
    },
  },
  computed: {
    // // Menampilkan state dengan nama file carts
    // ...mapState('carts', {
    //   // Nama state items disimpan dalam objek items
    //   items: 'items',
    // }),
    // Menampilkan state dengan nama file carts
    ...mapGetters('carts', {
      // Nama getters cartItems disimpan dalam objek cartItems berisi data yang sudah dimanipulasi pada getters
      cartItems: 'cartItems',
      // Nama getters cartItems disimpan dalam objek itemTotal berisi fungsi untuk menghitung total
      itemTotal: 'itemTotal',
    }),
  },
}
</script>
