<template>
  <div class="container">
    <div class="position" v-for="(player, index) in allplayer" :key="index">
      <div class="player">
        <div v-if="player.name === 'b'" :style="'margin-left:' + posisi + '%;'">
          1
        </div>
        <div
          v-else-if="player.name !== 'b'"
          :style="'margin-left:' + player.posisi + '%;'"
        >
          2
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary" @click="random">click me</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "play",
  data() {
    return {
      socket: io.connect("http://localhost:3000"),
      posisi: 1,
      allplayer: [
        {
          name: "a",
          posisi: 3
        },
        {
          name: "b",
          posisi: 2
        },
        {
          name: "c",
          posisi: 6
        }
      ],
      id: ""
    };
  },
  methods: {
    random() {
      let rand = Math.floor(Math.random() * Math.floor(20));
      this.posisi += rand;
      if (this.posisi >= 100) {
        this.posisi = 95;
        alert("menangg");
      }
    },
    getdata() {
      axios({
        method: "get",
        url: "http://localhost:3000/user"
      })
        .then(({ data }) => {
          // console.log("berhasil client");
          console.log(data);

          this.socket.emit("datauser");

          this.socket.on("datauser", datauser => {
            this.allplayer = datauser;
            console.log(this.allplayer, "masuk di emit");
          });
        })
        .catch(data => {
          console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
          console.log(data);
        });
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style>
.position {
  border: 2px solid black;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
}
.player {
  border: 2px solid black;
  text-align: left;
  width: 100%;
  height: 50%;
}
</style>
