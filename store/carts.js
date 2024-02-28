// Membuat state items
export const state = () => ({
  items: [],
})

// Buat mutation
export const mutations = {
  // Buat mutation yang dilakukan untuk menambahkan id dan quantity pada state items
  addItem(state, id) {
    state.items.push({
      id: id,
      quantity: 1,
    })
  },
  // Buat mutation untuk menambahkan quantity jika sudah ada id yang sama pada state items
  incrementItem(state, id) {
    state.items.find((item) => item.id === id).quantity++
  },
}

// Membuat action berdasarkan mutation dengan membawa id yang di klik pada card
export const actions = {
  addToCart({ commit, state }, id) {
    // Mencocokan id pada state items dan pada id yang di klik
    const found = state.items.find((item) => item.id === id)
    // Jika ada
    if (found) {
      // Commit mutation tambah quantity
      commit('incrementItem', id)
    }
    // Commit mutation tambah item to cart
    else {
      commit('addItem', id)
    }
  },
}
