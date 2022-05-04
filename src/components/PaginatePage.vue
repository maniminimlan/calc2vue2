<template>
  <div>
      <button @click="prevPage">(- Сюдым</button>
        {{ page }}({{ page_counts }})
      <button @click="nextPage">Тудым -)</button>
  </div>
</template>

<script>
export default {
    name: "PaginatePage",
    props: ["data"],
    data() {
        return {
            "page": 0,
            "page_limit": 5,
        }
    },
    computed: {
      page_counts() {
        return Math.ceil(this.data.length/this.page_limit)
      },
    },
    watch: {
      page(){
        this.paginateData()
      },
      data(){
        this.paginateData()
      }
    },
    methods: {
      paginateData(){
        let item_from = this.page * this.page_limit - this.page_limit;
        let item_to = this.page * this.page_limit;
        this.$emit('paginateData', this.data.slice(item_from, item_to));
      },
      nextPage() {
        if (this.page < this.page_counts) {
          this.page += 1;
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page -= 1;
        }
      }
    },
    mounted() {
      this.page = 1;
    }
}
</script>

<style>

</style>