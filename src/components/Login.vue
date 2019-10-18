<template>
  <div class="container">
    <b-card>
      <b-card-text>
        <b-form @submit.prevent="login">
          <b-form-group>
            <h4>Name:</h4>
            <b-form-input
              v-model="name"
              type="text"
              required
              placeholder="Enter Your Name"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card-text>
    </b-card>
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
  margin-top: 10%;
}
input {
  width: 25vw;
  margin: auto;
}
.card {
  background-color: #eaeaea;
  height: 30vh !important;
  width: 50vw;
  margin-left: 20%;
  justify-content: center !important;
}
</style>
