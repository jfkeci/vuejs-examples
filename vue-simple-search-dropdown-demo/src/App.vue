<template>
  <div id="app" style="margin: 100px">
    <div>
      <br />
      <Dropdown
        :options="options"
        v-onselected="validateSelection"
        v-on:filter="getDropdownValues"
        :placeholder="`Selected: ${selected.name}`"
        name="My dropdown"
      >
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";
import Vue from "vue";
Vue.use(Dropdown);
export default {
  name: "App",
  components: {
    Dropdown,
  },
  data() {
    return {
      options: [
        { name: "Cat", id: "cat" },
        { name: "Dog", id: "dog" },
        { name: "Elephant", id: "elephant" },
        { name: "Girafe", id: "girafe" },
        { name: "Snake", id: "snake" },
        { name: "Spider", id: "spider" },
        { name: "Unicorn", id: "unicorn" },
      ],

      selected: { name: "Cat", id: "cat" },
    };
  },

  methods: {
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name + " has been selected");
    },

    getDropdownValues(keyword) {
      console.log(
        "You could refresh options by querying the API with " + keyword
      );
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
