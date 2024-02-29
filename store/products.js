export const state = () => ({
  // Data produk
  products: [
    {
      id: 1,
      title: 'Asus Zenfone',
      thumbnail: 'asus-zenfone.png',
      categoryId: '1',
      price: '2000000',
    },
    {
      id: 2,
      title: 'Canon EOS 700D',
      thumbnail: 'canon-eos-700d.png',
      categoryId: '2',
      price: '4000000',
    },
    {
      id: 3,
      title: 'Canon EOS 750D',
      thumbnail: 'canon-eos-750d.png',
      categoryId: '2',
      price: '4500000',
    },
    {
      id: 4,
      title: 'Iphone 6 Silver',
      thumbnail: 'iphone-6-silver.png',
      categoryId: '1',
      price: '3000000',
    },
    {
      id: 5,
      title: 'Lenovo A7000',
      thumbnail: 'Lenovo-A7000.png',
      categoryId: '1',
      price: '1500000',
    },
    {
      id: 6,
      title: 'LG 32 LED TV 32FLF550A',
      thumbnail: 'lg-32-led-tv-32LF550A.png',
      categoryId: '3',
      price: '1700000',
    },
    {
      id: 7,
      title: 'LG 32 LED TV 32FLF520A',
      thumbnail: 'lg-led-tv32-32LF520A.png',
      categoryId: '3',
      price: '1800000',
    },
    {
      id: 8,
      title: 'Nikon D3200',
      thumbnail: 'nikon-d3200.png',
      categoryId: '2',
      price: '6000000',
    },
    {
      id: 9,
      title: 'Samsung Galaxy A3',
      thumbnail: 'samsung-galaxy-A3.png',
      categoryId: '1',
      price: '2500000',
    },
    {
      id: 10,
      title: 'Samsung Galaxy A8',
      thumbnail: 'samsung-galaxy-A8.png',
      categoryId: '1',
      price: '3500000',
    },
    {
      id: 11,
      title: 'Samsung Galaxy Grand Prime',
      thumbnail: 'samsung-galaxy-grand-prime.png',
      categoryId: '1',
      price: '1800000',
    },
    {
      id: 12,
      title: 'Samsung Galaxy Note 3',
      thumbnail: 'samsung-galaxy-note-3.png',
      categoryId: '1',
      price: '7000000',
    },
    {
      id: 13,
      title: 'Sharp 32 LED TV 32LE265I',
      thumbnail: 'sharp-32-led-32LE265i.png',
      categoryId: '3',
      price: '1900000',
    },
    {
      id: 14,
      title: 'MI 4I',
      thumbnail: 'mi-4i.png',
      categoryId: '1',
      price: '2200000',
    },
    {
      id: 15,
      title: 'Nikon D5200',
      thumbnail: 'nikon-d5200.png',
      categoryId: '2',
      price: '8000000',
    },
  ],
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
}

// Buat actions (asynchronize)
// Satu action bisa commit beberapa mutation
export const actions = {
  updateCategoryId({ commit }, valCategoryId) {
    // Melakukan commit berdasarkan mutation
    commit('updateCategoryId', valCategoryId)
  },
}
