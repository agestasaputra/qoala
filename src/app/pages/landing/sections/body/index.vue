<template>
  <div id="body">
    <Fragment v-if="localStore">
      <Fragment v-for="task in localStore" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment v-else-if="this.filter.latestTask">
      <Fragment v-for="task in latestTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment v-else-if="this.filter.oldestTask">
      <Fragment v-for="task in this.oldestTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment v-else-if="this.option === '1'">
      <Fragment v-for="task in this.ascTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment v-else-if="this.option === '2'">
      <Fragment v-for="task in this.descTask" v-bind:key="task.id">
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
    ...mapState("landing", ["tasks", "filter", "option"]),
    ...mapGetters("landing", [
      "latestTask",
      "oldestTask",
      "ascTask",
      "descTask"
    ])
  },
  created() {
    if (localStorage.getItem("tasks")) {
      let tmp = JSON.parse(localStorage.getItem("tasks"));
      this.localStore = tmp.reverse();
    } else {
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
