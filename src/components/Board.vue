<template>
  <div>
    <!-- <iframe src="../assets/dejavu.mp3" allow="autoplay" style="display:none" id="iframeAudio">
  </iframe>  -->
    <audio controls autoplay>
      <source src="../assets/dejavu.mp3" allow="autoplay" type="audio/mp3">
    </audio>
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
    </div>
     <div>
            <div>Countdown : {{ diceCount }}</div>
                <br><br>
            <form>
                <div>
                    <div id = "one">
                        <img :src='pic'>
                    </div>
                </div>
                <button @click.prevent="roll()">Roll</button>
            </form>
        </div>
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
      isRoll: false,
      object: null,
       diceCount : 0,
            numberOfRolls : 0,
            result : 0,
            myVar : null,
      car1: 0,
      car2: 7,
      pic: 'https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_6-512.png'
    };
  },
  methods: {
    roll() {
            console.log('rolling')
            // const numberOfRolls = this.numberOfRolls
            this.rollDice( 2 )
        },
    rollDice(numberOfRolls) {      
            this.isRoll = true;

            // var diceThrow = Math.floor((Math.random() * 6) + 1);

            const dicePics1 = [
                "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_1-512.png",
                "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_6-512.png",
                "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_2-512.png",
                "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_4-512.png",
                "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png",
                "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_3-512.png"
            ]
            let randomDice = Math.floor(Math.random() * dicePics1.length)
            this.pic = dicePics1[randomDice];

            this.diceCount = numberOfRolls

            this.result = randomDice + 1
            --numberOfRolls;
            // Check if there is a throw left...
            if (numberOfRolls < 0) {
                setTimeout(() => {
                    this.isRoll = false;
                    // this.$store.state.r.$store.state.diceoom.players[0].position += this.result
                    // this.$store.state.dice.result = this.result;
                    this.car1 += this.result 
                    this.numberOfRolls = 0;
                }, 1000);
                return;
            }
            this.tap()
            setTimeout(() => {
                this.rollDice(numberOfRolls);
            }, 500);
    },
    tap() {
      // this.car1 += Math.floor(Math.random() * 6);
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
            console.log(data)
        })
        .catch(console.log)
    }
  },
  mounted() {
    // this.$store.state.name ? this.fetchUser() : this.$router.push("/");
    this.fetchUser()
  }
};
</script>

<style>
  
</style>
