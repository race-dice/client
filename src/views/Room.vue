<template>
  <div>
    <Navbar><b-button @click="logout">Log Out</b-button></Navbar>
    <p>Hi</p>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Axios from "axios";

export default {
  name: "Room",
  components: {
    Navbar
  },
  data() {
      rooms: []
  },
  methods: {
      fetchRooms() {
          Axios({
              method: "get",
              url: "http://localhost:3000/room"
          })
          .then(rooms => {
              this.rooms = rooms
          })
      }
  },
  mounted() {
    this.$store.dispatch("checkStatus");
  }
};
</script>

<style></style>
