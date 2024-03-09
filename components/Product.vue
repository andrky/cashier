<template>
  <section>
    <!-- Membuat pencarian -->
    <v-row class="mt-3" align="center">
      <v-col cols="10">
        <v-autocomplete
          label="Products"
          placeholder="Start typing to search"
          :search-input.sync="search"
          :loading="isLoading"
          :items="itemSearch"
          item-text="title"
          item-value="id"
          v-model="selectedSearch"
          return-object
          hide-no-data
        >
        </v-autocomplete>
      </v-col>
      <v-col cols="2" align="right">
        <!-- Button -->
        <v-menu transition="scale-transition">
          <!-- Membuat button category -->
          <template v-slot:activator="{ on: category }">
            <v-btn v-on="category" color="primary">Category </v-btn>
          </template>

          <!-- Menu setelah button category di pencet -->
          <v-list>
            <!-- V-model hasil dari value -->
            <v-list-item-group>
              <!-- Menampilkan data list item dari categories -->
              <v-list-item
                v-for="(category, index) in categories"
                :key="index"
                :value="category.id"
                :disabled="category.id == categoryId"
                @change="updateCategoryId(category.id)"
              >
                <v-list-item-title>{{ category.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <!-- Membuat component products -->
    <v-row class="mb-16">
      <!-- Mengambil data dari computed filteredProducts -->
      <v-col cols="2" v-for="(product, index) in filteredProducts" :key="index">
        <!-- Buat card -->
        <v-card
          @click="addToCart(product.id)"
          :title="product.title"
          outlined
          elevation="2"
          :ripple="true"
        >
          <v-actions>
            <v-img
              class="my-3 mx-3"
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
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      // v-autocomplete
      itemSearch: [],
      search: null,
      isLoading: false,
      selectedSearch: null,
    }
  },
  methods: {
    // Import action dengan nama file products
    ...mapActions({
      // Nama action updateCategoryId pada file products disimpan dalam objek updateCategoryId
      updateCategoryId: 'products/updateCategoryId',
      // Nama action addToCart pada file carts disimpan dalam objek addToCart
      addToCart: 'carts/addToCart',
      // Nama action fetchProducts pada file products disimpan dalam objek fetchProducts
      fetchProducts: 'products/fetchProducts',
    }),
    resetCategoryId() {
      this.categoryId = false
    },
  },
  computed: {
    // Membuat filter
    filteredProducts() {
      // Jika categoryId tidak false atau memiliki nilai
      if (this.categoryId) {
        // Lakukan filter berdasarkan category dari data products dengan categoryId dari v-model
        return this.products.filter((s) => s.categoryId == this.categoryId)
      }
      // Lakukan filter berdasarkan judul dari data products dengan judul dari v-model
      else if (this.selectedSearch) {
        return this.products.filter((s) => s.title == this.selectedSearch.title)
      }
      // Jika bernilai false tampilkan seluruh products
      return this.products
    },
    // Menampilkan state dengan nama file products
    ...mapState('products', {
      // Nama state products disimpan dalam objek products, nama state categories disimpan dalam objek categories, nama state categoryId disimpan dalam objek categoryId,
      products: 'products',
      categories: 'categories',
      categoryId: 'categoryId',
    }),
  },
  watch: {
    // Kondisi Pencarian
    search(val) {
      // Animasi ketika melakukan pencarian pada underline kolom search
      this.isLoading = true
      // Set animasi selama 3ms, dilakukan filter berdasarkan val dan disimpan sebagai objek di itemSearch
      setTimeout(() => {
        this.itemSearch = this.products.filter((e) => {
          this.isLoading = false
          // Reset categoryId supaya bisa melakukan pencarian ketika setelah pilih kategori melalui button
          this.resetCategoryId()
          return e.title
        })
      }, 1500)
    },
  },
  // Komponen berhasil di load setelah itu memanggil fetchProducts
  mounted() {
    this.fetchProducts()
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
