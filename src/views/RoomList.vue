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

export default {
  name: "RoomList",
  components: {
    Navbar,
    Room
  },
  data() {
    return {
      rooms: [],
      roomName: ""
    };
  },
  methods: {
    addRoom() {
      const data = {
        name: this.roomName,
        players: [{ name: this.$store.state.name }]
      };
      console.log(data);
    },
    fetchRooms() {
      Axios({
        method: "get",
        url: "http://localhost:3000/room"
      }).then(({ data }) => {
        this.rooms = data;
      });
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  },
  mounted() {
    this.$store.state.name ? this.fetchRooms() : this.$router.push("/");
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
</style>
