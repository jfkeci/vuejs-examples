<template>
  <div id="app">
    <h2>Date picker</h2>
    <div>
      <br />
      <birth-datepicker v-model="date" :inline="true" selectYear />
      <hr />
      <p><b>Date selected: </b>{{ dateString }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";

Vue.use(birthDatepicker);
export default {
  name: "App",
  components: {
    birthDatepicker,
  },
  data() {
    return {
      date: null,
      dateString: "",
    };
  },
  watch: {
    date() {
      const dateObject = new Date(this.date);
      this.dateString = dateObject.toString().slice(0, 16);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
