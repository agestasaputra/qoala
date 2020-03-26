<template>
  <div id="sort">
    <h5 class="title">Sort by:</h5>
    <button
      class="latest"
      v-on:click="latestHandler"
      v-bind:class="{active : this.filter.latestTask}"
    >Latest</button>
    <button
      class="oldest"
      v-on:click="oldestHandler"
      v-bind:class="{active : this.filter.oldestTask}"
    >Oldest</button>
    <select class="option" v-model="this.option" v-on:change="optionHandler">
      <option
        v-for="sort in this.sorts"
        v-bind:key="sort.value"
        v-bind:value="sort.value"
        v-bind:disabled="sort.disabled"
      >{{sort.name}}</option>
    </select>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "app-sort",
  computed: {
    ...mapState("landing", ["filter", "option", "sorts"]),
    ...mapGetters("landing", [
      "latestTask",
      "oldestTask",
      "ascTask",
      "descTask"
    ])
  },
  methods: {
    optionHandler(event) {
      this.$store.commit("landing/SET_OPTION", event.target.value);
      return;
    },
    latestHandler() {
      console.log("latestHandler invoked!");
      const tmp = {
        oldestTask: false,
        latestTask: true
      };
      this.$store.commit("landing/LATEST_TASK", tmp);
    },
    oldestHandler() {
      console.log("oldestHandler invoked!");
      const tmp = {
        oldestTask: true,
        latestTask: false
      };
      this.$store.commit("landing/OLDEST_TASK", tmp);
    }
  }
};
</script>

<style scoped>
#sort {
  width: 100%;
  text-align: left;
}

#sort .title {
  margin: 0px 5px 0px 0px;
  display: inline-block;
}

#sort button {
  margin: 0px 5px 0px 0px;
  display: inline-block;
  cursor: pointer;
}

#sort .active {
  background: #41b883;
  color: #fff;
}

#sort .option {
  margin: 0px;
  display: inline-block;
  cursor: pointer;
}
</style>
