<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DatePicker
      class="center"
      v-model="date"
      :highlighted="state.highlighted"
    ></DatePicker>
    <p>{{ date }}</p>
  </div>
</template>

<script>
import DatePicker from "@sum.cumo/vue-datepicker";
import "@sum.cumo/vue-datepicker/dist/Datepicker.css";

export default {
  name: "App",
  components: {
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
      state: {
        highlighted: {
          dates: [
            new Date(2021, 11, 16),
            new Date(2021, 11, 17),
            new Date(2021, 11, 18),
          ],
        },
      },
    };
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
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
