<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">All Galeries</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="!Authenticated">
          <template #button-content>
            <em>Member Area</em>
          </template>
          <b-dropdown-item to="Register">Register</b-dropdown-item> 
          <b-dropdown-item to="Login">Login</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown v-else>
          <template #button-content>
            <em>Member Area</em>
          </template>
          <!-- <b-dropdown-item :to="{name: UserGalleries}">My Galleries</b-dropdown-item> -->
          <b-dropdown-item to="#">My Galleries</b-dropdown-item>
          <b-dropdown-item to="#">Create Gallery</b-dropdown-item>
          <b-dropdown-item @click="handleLogout">Log out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    Authenticated() {
      return this.isAuthenticated;
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>