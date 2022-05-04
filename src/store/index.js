import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [
      { "id": 1, "date": "20.03.2020", "category": "Food", "price": 169 },
      { "id": 2, "date": "21.03.2020", "category": "Navigation", "price": 50 },
      { "id": 3, "date": "22.03.2020", "category": "Sport", "price": 450 },
      { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "price": 969 },
      { "id": 5, "date": "24.03.2020", "category": "Education", "price": 1500 },
      { "id": 6, "date": "25.03.2020", "category": "Food", "price": 200 }
    ],
    tableHead: ["id", "date", "category", "price"]

  },
  getters: {
    getTableData: state => {
      return state.tableData;
    },
    getTableHead: state => {
      return state.tableHead;
    },

  },
  mutations: {
    addTableItem(state, payload) {
      payload.id = state.tableData.length + 1;
      state.tableData.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
