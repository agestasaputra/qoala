<template>
  <div id="modal">
    <div class="modal-head">
      <div class="title" />
      <div class="icon" v-on:click="$emit('modalHandler', false)">x</div>
    </div>
    <div class="modal-body">
      <h3>Title</h3>
      <input placeholder="input a title" v-model="form.title" v-bind:maxlength="titleMax" />
      <h3>Description</h3>
      <textarea
        placeholder="input a description"
        v-model="form.desc"
        rows="6"
        v-bind:maxlength="descMax"
      />
      <button
        v-on:click="submitHandler"
        v-bind:class="(form.title.length < 3 || form.desc.length < 3) && 'disabled'"
      >Submit</button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "app-modal",
  data() {
    return {
      form: {
        title: "",
        desc: ""
      },
      titleMin: 33,
      titleMax: 30,
      descMin: 3,
      descMax: 255
    };
  },
  methods: {
    submitHandler() {
      if (localStorage.getItem("tasks")) {
        console.log("masuk localStorage");
        const date = new Date();
        const convertDate = moment(date).format("L");
        const tmp = {
          ...this.form,
          date: convertDate
        };
        // this.$store.commit("landing/ADD_TASK", tmp);
        this.$store.commit("landing/ADD_TASK_LOCAL_STORAGE_SECOND", tmp);
        this.$emit("modalHandler", false);
        localStorage.setItem(
          "tasks",
          JSON.stringify(this.$store.state.landing.tasksLocalStorage)
        );
        this.form = {
          title: "",
          desc: ""
        };
        return;
      } else {
        console.log("tidak masuk localStorage");
        const date = new Date();
        const convertDate = moment(date).format("L");
        const tmp = {
          ...this.form,
          date: convertDate
        };
        // this.$store.commit("landing/ADD_TASK", tmp);
        this.$store.commit("landing/ADD_TASK_LOCAL_STORAGE_FIRST", tmp);
        this.$emit("modalHandler", false);
        localStorage.setItem(
          "tasks",
          JSON.stringify(this.$store.state.landing.tasksLocalStorage)
        );
        this.form = {
          title: "",
          desc: ""
        };
        return;
      }
    }
  }
};
</script>

<style scoped>
#modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  width: 30%;
  background: #41b883;
  padding: 30px 50px;
  text-align: left;
  color: #fff;
}

#modal .modal-head {
  display: flex;
  flex-flow: row nowrap;
}

#modal .modal-head .title {
  flex: 1;
}

#modal .modal-head .icon {
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
}

#modal h3 {
  margin: 0px;
}

#modal .modal-body input {
  width: 100%;
  display: block;
  margin: 0px 0px 10px 0px;
  padding: 0px 10px;
  border: unset;
  height: 35px;
  box-sizing: border-box;
}

#modal .modal-body textarea {
  width: 100%;
  display: block;
  margin: 0px 0px 10px 0px;
  padding: 10px;
  border: unset;
  /* height: 35px; */
  box-sizing: border-box;
}

#modal .modal-body button {
  background: lightgreen;
  color: #000;
  border: 1px lightgreen solid;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 15px;
  margin-top: 10px;
}

#modal .modal-body .disabled {
  background: #e8e9e9;
  color: #6b727b;
  pointer-events: none;
}
</style>
