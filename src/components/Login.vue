<template>
  <div class="container">
    <b-form @submit.prevent="login">
      <b-form-group label="Name:">
        <b-form-input
          v-model="name"
          type="text"
          required
          placeholder="Enter Your Name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    login() {
      this.$store.commit("login", this.name);
      this.$router.push("/room");
    }
  }
};
</script>

<style scoped>
div {
  margin-top: 30%;
}
input {
  width: 40vw;
  margin: auto;
}
</style>
