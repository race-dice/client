<template>
  <div class="container mt-5">
    <label class="h2">Let the race begin!!!</label>
    <b-form-input
      class="p-5"
      v-model="car1"
      type="range"
      min="0"
      max="30"
      step="0.5"
      disabled
    ></b-form-input>
    <b-form-input
      class="p-5"
      v-model="car2"
      type="range"
      min="0"
      max="30"
      step="0.5"
      disabled
    ></b-form-input>
    <b-button @click="tap">Tap Me!!</b-button>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Axios from "axios";

export default {
  name: "game",
  data() {
    return {
      object: null,
      car1: 0,
      car2: 7
    };
  },
  methods: {
    tap() {
      this.car1 += Math.floor(Math.random() * 6);
      if (this.car1 >= 30) {
        Swal.fire("Congrats!!", "You Won!!", "success");
      }
    },
    fetchUser() {
      Axios({
        method: "get",
        url: "http://localhost:3000/user"
      })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(console.log);
    }
  },
  mounted() {
    // this.$store.state.name ? this.fetchUser() : this.$router.push("/");
    this.fetchUser();
  }
};
</script>

<style></style>
