<template>
  <div id="app" style="margin: 100px">
    <div>
      <br />
      <ejs-autocomplete
        :dataSource="dataItem"
        :fields="dataFields"
        placeholder="Select item"
        :query="dataQuery"
        :highlight="true"
      >
      </ejs-autocomplete>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";
export default Vue.extend({
  data() {
    return {
      dataItem: new DataManager({
        url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
        adaptor: new WebApiAdaptor(),
        crossDomain: true,
      }),
      dataFields: { value: "FirstName" },
      dataQuery: new Query()
        .select(["FirstName", "EmployeeID"])
        .take(9)
        .requiresCount(),
    };
  },
  methods: {},
});
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>

