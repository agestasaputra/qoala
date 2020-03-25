<template>
  <div id="sort">
    <h5 class="title">Sort by:</h5>
    <button class="latest">Latest</button>
    <button class="oldest">Oldest</button>
    <select class="option" v-model="option">
      <option value="1">A-Z</option>
      <option value="2">Z-A</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "app-sort",
  data() {
    return {
      option: "1"
    };
  },
  components: {}
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

#sort .option {
  margin: 0px;
  display: inline-block;
  cursor: pointer;
}
</style>
