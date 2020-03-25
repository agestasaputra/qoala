<template>
  <div id="card">
    <div class="card-title">
      <h3>{{ data.title }}</h3>
    </div>
    <div class="card-date">
      <h5>{{ data.date }}</h5>
    </div>
    <div class="card-desc">
      <p>
        {{ data.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-card",
  props: ["data"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  background: lightgreen;
}
</style>
