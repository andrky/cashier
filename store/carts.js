// Membuat state items
export const state = () => ({
  items: [],
})

// Buat mutation yang dilakukan untuk menambahkan id dan quantity pada state items
export const mutations = {
  addItem(state, id) {
    state.items.push({
      id: id,
      quantity: 1,
    })
    console.log(state.items)
  },
}

// Membuat action berdasarkan mutation dengan membawa id yang di klik pada card
export const actions = {
  addToCart({ commit }, id) {
    commit('addItem', id)
  },
}
