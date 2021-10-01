<template>
  <section class="dropdown-wrapper">
    <div class="selected-item">
      <span>Select User</span>
    </div>
    <div class="dropdown-popover">
      <input v-model="searchQuery" type="text" placeholder="Search User" />
      <div class="options">
        <ul>
          <li>Marco</li>
          <li>Polo</li>
          <li>Leonardo</li>
          <li>Vinci</li>
          <li>ivan</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dropdown",
};
</script>

<style scoped lang="scss">
.dropdown-wrapper {
  max-width: 350px;
}
</style>