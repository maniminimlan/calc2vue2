<template>
  <div>
    <ModalWindow
      v-if="ModalWindoW"
      :ModalWindoW="ModalWindoW"
      :modalWindowSettings="modalWindowSettings"
    />
    <table>
      <tr>
        <th v-for="item in tableHead" :key="item">
          {{ item }}
        </th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td v-for="head in tableHead" :key="head">
          {{ item[head] }}
        </td>
        <td>
          <button>Редактировать</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>



export default {
  name: "TableCosts",
  props: ["tableData", "tableHead"],
  data() {
    return {
      ModalWindoW: "FormContextMenu",
      modalWindowSettings: {},
    };
  },
  methods: {
    onShown(settings) {
      this.ModalWindoW = settings.name;
      this.modalWindowSettings = settings;
    },
    onHide() {
      this.ModalWindoW = "";
      this.modalWin;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style>
</style>