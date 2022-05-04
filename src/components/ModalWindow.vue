<template>
  <div :class="wrapper">
    <div :class="header">{{ modalWindowSettings.header }}</div>
    <div :class="content">
      <component :is="ModalWindoW" />
    </div>
    <div :class="footer">
      <button @click="$modal.hide()">Close</button>
    </div>
  </div>
</template>
<script>
import FormEdit from "./FormEdit";
import FormContextMenu from "./FormContextMenu";

export default {
  components: {
    FormEdit,
    FormContextMenu,
  },
  props: {
    ModalWindoW: String,
    modalWindowSettings: Object,
  },
};
</script>
