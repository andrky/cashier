<template>
  <v-row>
    <v-col cols="2" v-for="(product, index) in products">
      <v-card :title="product.title" outlined elevation="2" :ripple="true">
        <v-actions>
          <v-img
            :src="require(`@/assets/images/products/${product.thumbnail}`)" 
          >
          </v-img>
        </v-actions>

        <v-card-text align="center" class="product-title">
          {{ product.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Asus Zenfone',
          thumbnail: 'asus-zenfone.png',
          category: '1',
          price: '2000000',
        },
        {
          id: 2,
          title: 'Canon EOS 700D',
          thumbnail: 'canon-eos-700d.png',
          category: '2',
          price: '4000000',
        },
        {
          id: 3,
          title: 'Canon EOS 750D',
          thumbnail: 'canon-eos-750d.png',
          category: '2',
          price: '4500000',
        },
        {
          id: 4,
          title: 'Iphone 6 Silver',
          thumbnail: 'iphone-6-silver.png',
          category: '1',
          price: '3000000',
        },
        {
          id: 5,
          title: 'Lenovo A7000',
          thumbnail: 'Lenovo-A7000.png',
          category: '1',
          price: '1500000',
        },
        {
          id: 6,
          title: 'LG 32 LED TV 32FLF550A',
          thumbnail: 'lg-32-led-tv-32LF550A.png',
          category: '3',
          price: '1700000',
        },
        {
          id: 7,
          title: 'LG 32 LED TV 32FLF520A',
          thumbnail: 'lg-led-tv32-32LF520A.png',
          category: '3',
          price: '1800000',
        },
        {
          id: 8,
          title: 'Nikon D3200',
          thumbnail: 'nikon-d3200.png',
          category: '2',
          price: '6000000',
        },
        {
          id: 9,
          title: 'Samsung Galaxy A3',
          thumbnail: 'samsung-galaxy-A3.png',
          category: '1',
          price: '2500000',
        },
        {
          id: 10,
          title: 'Samsung Galaxy A8',
          thumbnail: 'samsung-galaxy-A8.png',
          category: '1',
          price: '3500000',
        },
        {
          id: 11,
          title: 'Samsung Galaxy Grand Prime',
          thumbnail: 'samsung-galaxy-grand-prime.png',
          category: '1',
          price: '1800000',
        },
        {
          id: 12,
          title: 'Samsung Galaxy Note 3',
          thumbnail: 'samsung-galaxy-note-3.png',
          category: '1',
          price: '7000000',
        },
        {
          id: 13,
          title: 'Sharp 32 LED TV 32LE265I',
          thumbnail: 'sharp-32-led-32LE265i.png',
          category: '3',
          price: '1900000',
        },
        {
          id: 14,
          title: 'MI 4I',
          thumbnail: 'mi-4i.png',
          category: '1',
          price: '2200000',
        },
        {
          id: 15,
          title: 'Nikon D5200',
          thumbnail: 'nikon-d5200.png',
          category: '2',
          price: '8000000',
        },
      ],
    }
  },
}
</script>

<style scoped>
.product-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
