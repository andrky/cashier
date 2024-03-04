<template>
  <v-row>
    <v-col cols="12">
      <h2>Order</h2>

      <!-- Membuat list tampilan -->
      <v-list>
        <!-- Menampilan semua data dari cartItems -->
        <v-list-item v-for="(item, index) in cartItems" :key="index">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ currency(item.price) }} X
              <v-btn
                x-small
                icon
                px="0"
                color="primary"
                @click="decrement(item.id)"
              >
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
              {{ item.quantity }}
              <v-btn
                x-small
                icon
                px="0"
                color="primary"
                @click="increment(item.id)"
              >
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon color="error" x-small @click="remove(item.id)">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>

            <v-list-item-title>
              {{ currency(itemTotal(item.price, item.quantity)) }}
            </v-list-item-title>
          </v-list-item-action>
        </v-list-item>

        <!-- Menampilan sub total -->
        <v-list-item
          v-if="cartItems.length"
          class="text-h5 black--text grey lighten-2 font-weight-black"
        >
          <v-list-item-content>
            <v-list-item-title>Sub Total</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-title>{{ currency(subTotal) }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>

        <!-- Menampilkan additional item -->
        <v-list-group v-if="cartItems.length" class="grey lighten-3">
          <template v-slot:activator>
            <v-list-item-content class="text-h5 font-weight-bold">
              <v-list-item-title> Additional </v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="(additional, index) in additional">
            <v-list-item :key="index" disabled class="black--text">
              <v-list-item-content class="text-h5">
                <v-list-item-title>
                  {{ additional.title }}
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-title>
                  {{ currency(additional.value) }}
                </v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list-group>
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
    ...mapActions('carts', {
      increment: 'increment',
      decrement: 'decrement',
      remove: 'remove',
    }),
  },
  computed: {
    // // Menampilkan state dengan nama file carts
    // ...mapState('carts', {
    //   // Nama state items disimpan dalam objek items
    //   items: 'items',
    // }),
    // Menampilkan state dengan nama file carts
    ...mapState('carts', {
      // Nama state additional disimpan dalam objek additional
      additional: 'additional',
    }),
    // Menampilkan getters dengan nama file carts
    ...mapGetters('carts', {
      // Nama getters cartItems disimpan dalam objek cartItems berisi data yang sudah dimanipulasi pada getters
      cartItems: 'cartItems',
      // Nama getters itemTotal disimpan dalam objek itemTotal berisi fungsi untuk menghitung total
      itemTotal: 'itemTotal',
      // Nama getters subTotal disimpan dalam objek subTotal berisi fungsi untuk menghitung subtotal
      subTotal: 'subTotal',
    }),
  },
}
</script>
