<template>
  <Fragment>
    <button v-on:click="modalHandler">+ Add a Task</button>
    <app-modal v-show="modal" v-on:modalHandler="modalHandler" />
  </Fragment>
</template>

<script>
import AppModal from "@/app/components/modal";
import { Fragment } from "vue-fragment";

export default {
  name: "app-header",
  data() {
    return {
      modal: false,
      form: {}
    };
  },
  components: {
    AppModal,
    Fragment
  },
  methods: {
    modalHandler(value) {
      this.modal = value;
    }
  }
};
</script>

<style scoped>
button {
  margin: 10px 0px;
  padding: 20px 0px;
  width: 100%;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
  font-size: 20px;
}
</style>
