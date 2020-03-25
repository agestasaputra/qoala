<template>
  <div id="body">
    <Fragment v-if="localStore">
      <Fragment v-for="task in localStore" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment v-else>
      <Fragment v-for="task in latestTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Fragment } from "vue-fragment";
import AppCard from "@/app/components/card";

export default {
  name: "app-body",
  data() {
    return {
      localStore: null
    };
  },
  components: {
    AppCard,
    Fragment
  },
  computed: {
    ...mapState("landing", ["tasks"]),
    ...mapGetters("landing", ["latestTask"])
  },
  created() {
    if (localStorage.getItem("tasks")) {
      console.log("localStorage ada isinya");
      let tmp = JSON.parse(localStorage.getItem("tasks"));
      this.localStore = tmp.reverse();
      return;
    } else {
      console.log("localStorage kosong");
      return;
    }
  }
};
</script>

<style scoped>
#body {
  padding: 10px 0px 0px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}

.card {
  background: lightgreen;
}
</style>
