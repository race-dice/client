<template>
  <div>
    <Navbar><b-button @click="logout">Log Out</b-button></Navbar>
    <div class="col">
      <b-form @submit.prevent="addRoom" inline>
        <h4 class="mr-3">Add New Room</h4>
        <b-input
          v-model="roomName"
          class="mb-2 mr-sm-3 mb-sm-0"
          placeholder="Room Name"
        ></b-input>
        <b-button class="ml-sm-3" type="submit" variant="secondary"
          >Create</b-button
        >
      </b-form>
    </div>
    <div class="row">
      <b-card-group deck v-for="(room, index) in rooms" :key="index">
        <Room :room="room" />
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Axios from "axios";
import Room from "@/components/Room";
import io from "socket.io-client";

export default {
  name: "RoomList",
  components: {
    Navbar,
    Room
  },
  data() {
    return {
      rooms: [],
      roomName: "",
      socket: io.connect("http://localhost:3000")
    };
  },
  methods: {
    addRoom() {
      const data = { name: this.roomName };
      Axios({
        method: "post",
        url: "http://localhost:3000/room",
        headers: { token: this.$store.state.token },
        data
      })
        .then(({ data }) => {
          this.$store.commit("setRoom", data.name);
          this.$router.push("/game");
        })
        .catch(console.log);
    },
    fetchRooms() {
      Axios({
        method: "get",
        url: "http://localhost:3000/room",
        headers: { token: this.$store.state.token }
      }).then(({ data }) => {
        this.rooms = data;
        this.socket.on("dataroom", payload => {
          this.rooms = payload;
          console.log("masuk");
        });
        console.log(this.rooms);
      });
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  },
  mounted() {
    this.$store.state.username ? this.fetchRooms() : this.$router.push("/");
    this.socket.on("dataroom", payload => {
      this.rooms = payload;
      console.log("masuk");
    });
  }
};
</script>

<style>
.form-inline {
  justify-content: center !important;
}
.row {
  justify-content: center !important;
  margin-top: 10px;
  background-color: #eaeaea;
  min-height: 69vh;
}

audio {
  visibility: hidden;
}
</style>
