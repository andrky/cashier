export const state = () => ({
  // Data produk
  products: [],
  // Data categories
  categories: [
    {
      _id: 0,
      title: 'All',
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
  // Menyimpan hasil fetch ke state products
  updateProducts(state, products) {
    state.products = products
  },
  // Menyimpan hasil fetch ke state categories
  updateCategories(state, categories) {
    state.categories.push(...categories)
  },
}

// Buat actions (asynchronize)
// Satu action bisa commit beberapa mutation
export const actions = {
  updateCategoryId({ commit }, valCategoryId) {
    // Melakukan commit berdasarkan mutation
    commit('updateCategoryId', valCategoryId)
  },
  // Fetch data products dari database melalui api
  fetchProducts({ commit }) {
    return this.$axios
      .$get('http://localhost:3001/products')
      .then((response) => {
        commit('updateProducts', response.products)
      })
  },
  // Fetch data categories dari database melalui api
  fetchCategories({ commit }) {
    return this.$axios
      .$get('http://localhost:3001/categories')
      .then((response) => {
        commit('updateCategories', response.categories)
      })
  },
}
