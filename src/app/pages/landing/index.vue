<template>
  <Fragment>
    <app-header />
    <app-sort />
    <app-body />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import AppHeader from "./sections/header";
import AppSort from "./sections/sort";
import AppBody from "./sections/body";

export default {
  name: "app-landing",
  components: {
    Fragment,
    AppHeader,
    AppSort,
    AppBody
  }
};
</script>

<style scoped></style>
