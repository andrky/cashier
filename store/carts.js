// Membuat state items dan additional
export const state = () => ({
  items: [],
  additional: [
    {
      title: 'Tax',
      mode: 'percentage',
      value: 11,
    },
    {
      title: 'Service Charge',
      mode: 'fix',
      value: 50000,
    },
  ],
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

  // Membuat fungsi untuk menghitung total
  itemTotal: () => (price, quantity) => {
    return price * quantity
  },

  // Membuat fungsi untuk menghitung sub total menggunakan reduce
  // total merupakan jumlah keseluruhan dari fungsi reduce, 0 merupakan nilai awal dari total
  subTotal: (state, getters) => {
    return getters.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  },

  // Membuat fungsi untuk menghitung persentase
  calculatePercentage: (state, getters) => (value) => {
    return (getters.subTotal * value) / 100
  },

  // Membuat fungsi untuk menghitung additional
  // total merupakan jumlah keseluruhan dari fungsi reduce, 0 merupakan nilai awal dari total
  sumAdditional: (state, getters) => {
    // Cek apakah state additional kosong atau tidak
    if (state.additional.length) {
      // Jika tidak kosong lakukan jumlah total berdasarkan state additional
      return state.additional.reduce((total, item) => {
        // Jika item.mode == percentage
        if (item.mode == 'percentage') {
          // Lakukan jumlah total dengan getter calculatePercentage
          return total + getters.calculatePercentage(item.value)
        }
        // Lakukan jumlah total dengan item.value (mode fixed)
        return total + item.value
      }, 0)
    }
  },

  // Membuat fungsi untuk menghitung total
  total: (state, getters) => {
    return getters.subTotal + getters.sumAdditional
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
  // Buat mutation untuk mengurangi quantity jika sudah ada id yang sama pada state items
  decrementItem(state, id) {
    let product = state.items.find((item) => item.id === id)

    if (product.quantity > 1) {
      product.quantity--
    }
  },
  // Buat mutation untuk menghapus item jika sudah ada id yang sama pada state items
  removeItem(state, id) {
    let index = state.items.findIndex((item) => item.id === id)
    // console.log(index)
    state.items.splice(index, 1)
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
  // Action untuk menambahkan jumlah item
  increment({ commit }, id) {
    commit('incrementItem', id)
  },
  // Action untuk mengurangi jumlah item
  decrement({ commit }, id) {
    commit('decrementItem', id)
  },
  // Action untuk menghapus item
  remove({ commit }, id) {
    commit('removeItem', id)
  },
}
