<template>
  <div>
    <Navbar><b-button @click="logout">Log Out</b-button></Navbar>
    <p>Hi</p>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Axios from "axios";
import db from "@/config/firestore";

export default {
  name: "Room",
  components: {
    Navbar
  },
  data() {
    return {
      rooms: []
    };
  },
  methods: {
    fetchRooms() {
      db.collection("rooms")
        .onSnapshot((docs) => {
            docs.forEach(doc => {
              rooms.push(doc.data())
            })
        });
    }
  },
  mounted() {
    this.$store.dispatch("checkStatus");
  }
};
</script>

<style></style>
