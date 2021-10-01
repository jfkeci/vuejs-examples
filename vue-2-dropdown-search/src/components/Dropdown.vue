<template>
  <section class="dropdown-wrapper">
    <div @click="isVisible = !isVisible" class="selected-item">
      <span>{{
        selectedItem !== null ? selectedItem.name : "Select user"
      }}</span>

      <svg
        :class="isVisible ? 'dropdown' : ''"
        class="drop-down-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
        />
      </svg>
    </div>
    <div :class="isVisible ? 'visible' : 'invisible'" class="dropdown-popover">
      <input v-model="searchQuery" type="text" placeholder="Search User" />
      <span v-if="users.length === 0 || filteredUser.length === 0"
        >No users avalible</span
      >
      <div class="options">
        <ul>
          <li
            v-for="(user, index) in filteredUser"
            :key="`user-${index}`"
            @click="selectItem(user)"
          >
            {{ user.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      searchQuery: "",
      selectedItem: null,
      isVisible: false,
      users: [],
    };
  },
  computed: {
    filteredUser() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery == "") {
        return this.users;
      }
      return this.users.filter((user) => {
        return Object.values(user).some((word) =>
          String(word).toLowerCase().includes(query)
        );
      });
    },
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.users = json;
      });
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.isVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-wrapper {
  max-width: 350px;
  position: relative;
  margin: 0 auto;

  .selected-item {
    height: 40px;
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 400;

    .drop-down-icon {
      transform: rotate(0deg);
      transition: all 0.5s ease;
      &.dropdown {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown-popover {
    position: absolute;
    border: 2px solid lightgray;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    max-width: 100%;
    padding: 10px;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    max-height: 0px;
    overflow: hidden;

    &.visible {
      max-height: 450px;
      visibility: visible;
    }
  }

  input {
    width: 98%;
    height: 30px;
    border: 2px solid lightgray;
    font-size: 16px;
    padding-left: 8px;
  }
  .options {
    width: 100%;

    ul {
      list-style: none;
      text-align: left;
      padding-left: 8px;
      max-height: 180px;
      overflow-y: scroll;
      overflow-x: hidden;

      li {
        width: 100%;
        border-bottom: 1px solid lightgray;
        padding: 10px;
        background-color: #f1f1f1;
        cursor: pointer;
        font-size: 16px;
        &:hover {
          background: #70878a;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>