<template>
  <div id="cover">
    <b-card id="card">
      <b-card-text>
        <h2>{{ room.name }}</h2>
        <h4 style="">Players:</h4>
        <b-card id="players">
          <div id="cover" v-for="(player, index) in room.players" :key="index">
            {{ index + 1 }}. {{ player }}
          </div>
        </b-card>
      </b-card-text>
      <b-button @click="verify()" variant="secondary">Join</b-button>
    </b-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Room",
  props: {
    room: Object
  },
  methods: {
    verify() {
      Swal.fire({
        title: "Are you sure?",
        text: "You are going to untouched grounds!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I'm Sure!"
      }).then(result => {
        if (result.value) {
          this.$router.push("/game");
        }
      });
    }
  }
};
</script>

<style>
#cover {
  margin: 25px;
}
.card {
  min-width: 250px;
}
#card {
  height: 350px;
}
#players .card-body {
  padding: 0px;
  margin: 0px;
  min-height: 150px;
}
h4 {
  text-align: left;
  margin-left: 15px;
}
</style>
