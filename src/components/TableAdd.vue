<template>
  <div>
    <div>
      <button @click="showEdit = !showEdit">Показать/Скрыть добавление</button>
    </div>
    <div v-show="showEdit">
      <input
        type="text"
        name=""
        id=""
        v-model="category"
        placeholder="Категория"
      />
      <input type="text" name="" id="" v-model="price" placeholder="Цена" />
      <input type="date" name="" id="" v-model="date" placeholder="Дата" />
      <button @click="add">Добавить</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TableCosts",
  props: ["tableData"],
  data() {
    return {
      showEdit: false,
      category: "",
      price: "",
      date: "",
    };
  },
  methods: {
    ...mapMutations(["addTableItem"]),
    add() {
      let data = {
        category: this.category,
        date: this.date,
        price: this.price,
      };
      this.addTableItem(data);
      // Чистим форму
      this.category = "";
      this.date = "";
      this.price = "";
    },
  },
  mounted() {
    console.log(this.$route.query);
    this.$route.query ? (this.showEdit = true) : (this.showEdit = false);
    this.price = this.$route.query.price;
    this.category = this.$route.query.category;
    if (this.$route.query.price && this.$route.query.category) {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();
      today = mm + "." + dd + "." + yyyy;
      this.date = today;
      this.add();
    }
  },
};
</script>

<style>
</style>