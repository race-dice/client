<template>
  <div>
    <b-navbar>
      <b-navbar-brand>Make Room</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <slot></slot>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
