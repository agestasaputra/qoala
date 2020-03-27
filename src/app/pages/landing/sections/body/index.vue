<template>
  <div id="body">
    <Fragment
      v-if="this.tasksLocalStorage && this.tasksLocalStorage.length > 0 && this.filter.latestTask"
    >
      <Fragment v-for="task in latestTaskLocalStorage" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length > 0 && this.filter.oldestTask"
    >
      <Fragment v-for="task in this.oldestTaskLocalStorage" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length > 0 && this.option === '1'"
    >
      <Fragment v-for="task in this.ascTaskLocalStorage" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length > 0 && this.option === '2'"
    >
      <Fragment v-for="task in this.descTaskLocalStorage" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length > 0 && this.option ==='0'"
    >
      <Fragment v-for="task in latestTaskLocalStorage" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length === 0 && this.filter.latestTask"
    >
      <Fragment v-for="task in latestTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length === 0 && this.filter.oldestTask"
    >
      <Fragment v-for="task in this.oldestTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length === 0 && this.option === '1'"
    >
      <Fragment v-for="task in this.ascTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length === 0 && this.option === '2'"
    >
      <Fragment v-for="task in this.descTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment
      v-else-if="this.tasksLocalStorage && this.tasksLocalStorage.length === 0 && this.option === '0'"
    >
      <Fragment v-for="task in latestTask" v-bind:key="task.id">
        <AppCard v-bind:data="task" />
      </Fragment>
    </Fragment>
    <Fragment v-else />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Fragment } from "vue-fragment";
import AppCard from "@/app/components/card";

export default {
  name: "app-body",
  components: {
    AppCard,
    Fragment
  },
  computed: {
    ...mapState("landing", ["tasks", "tasksLocalStorage", "filter", "option"]),
    ...mapGetters("landing", [
      "latestTask",
      "oldestTask",
      "ascTask",
      "descTask",
      "latestTaskLocalStorage",
      "oldestTaskLocalStorage",
      "ascTaskLocalStorage",
      "descTaskLocalStorage"
    ])
  },
  created() {
    if (localStorage.getItem("tasks")) {
      console.log("ada localStorage");
      let tmp = JSON.parse(localStorage.getItem("tasks"));
      this.$store.commit("landing/SET_TASKS_LOCAL_STORAGE", tmp);
    } else {
      console.log("ga ada localStorage");
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

@media screen and (max-width: 480px) {
  #body {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
}
</style>
