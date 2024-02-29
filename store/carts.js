// Membuat state items
export const state = () => ({
  items: [],
})

// Membuat getters yang berfungsi untuk memanipulasi data
export const getters = {
  // Menyimpan data pada object cartItems dengan membawa state, getters dan rootState. Fungsi rootState untuk mengakses seluruh state yang ada di store
  cartItems: (state, getters, rootState) => {
    // Melakukan map pada state items dengan membawa id dan quantity
    return state.items.map(({ id, quantity }) => {
      // Mencari berdasarkan id pada state product dan id pada state items dan menyimpannya pada var let
      // rootState = Untuk mengakses semua state pada store
      // products = nama folder
      // products = nama file
      let product = rootState.products.products.find(
        (product) => product.id === id
      )
      return {
        // Mengembalikan data
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
      }
    })
  },
}

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
