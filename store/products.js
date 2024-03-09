export const state = () => ({
  // Data produk
  products: [],
  // Data categories
  categories: [
    {
      id: false,
      title: 'All',
    },
    {
      id: 1,
      title: 'Smartphone',
    },
    {
      id: 2,
      title: 'Kamera',
    },
    {
      id: 3,
      title: 'Televisi',
    },
  ],
  // Menampilkan berdasarkan category
  categoryId: 0,
})

// Buat mutation
export const mutations = {
  updateCategoryId(state, valCategoryId) {
    // Menyimpan categoryId yang dipilih ke dalam objek di state.categoryId
    state.categoryId = valCategoryId
  },
  updateProducts(state, products) {
    state.products = products
  },
}

// Buat actions (asynchronize)
// Satu action bisa commit beberapa mutation
export const actions = {
  updateCategoryId({ commit }, valCategoryId) {
    // Melakukan commit berdasarkan mutation
    commit('updateCategoryId', valCategoryId)
  },
  // Fetch data dari database melalui api
  fetchProducts({ commit }) {
    return this.$axios
      .$get('http://localhost:3001/products')
      .then((response) => {
        commit('updateProducts', response.products)
      })
  },
}
