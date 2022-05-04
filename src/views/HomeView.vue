<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <TableCosts :tableData="tableDataPaginate" :tableHead="getTableHead" />
    <PaginatePage :data="getTableData" @paginateData="paginateData"/>
    <TableAdd/>
  </div>
</template>

<script>
import TableCosts from "@/components/TableCosts.vue";
import TableAdd from "@/components/TableAdd.vue";
import PaginatePage from "@/components/PaginatePage.vue"

import { mapGetters} from "vuex";

export default {
  name: "App",
  components: {
    TableCosts,
    TableAdd,
    PaginatePage,
  },
  data() {
    return {
      tableDataPaginate: [],
    };
  },
  methods: {
    paginateData(data){
      this.tableDataPaginate = data
    }
  },
  computed: {
    ...mapGetters(["getTableData", "getTableHead"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
