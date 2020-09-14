<template>
  <div class="container">
      <div id="game-form">
        <center>
          <input type="number" id="game-pin" v-model="pin" placeholder="GAME PIN"><br><br>
          <button @click="submitPin()" id="submit-pin">ENTER</button>
        </center>
      </div>
  </div>
</template>

<script>

  export default {
    data: function() {
      return {
        pin: ""
      }
    },
    layout: 'normal',
    methods: {
      submitPin: function() {
        console.log(this.pin);
        console.log(this);
        this.$store.commit('setPin', this.pin);
        this.$store.commit('setStatus', 200);
        this.$router.push({ path: "/join/user" })
      }
    },
  }

</script>

<style>

  #game-pin {
    background: #E9E9E9;
    border: 4px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;
    width: 400px;
    height: 100px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    padding: 10px 20px;
  }

  #submit-pin {
    width: 400px;
    height: 100px;
    background: linear-gradient(180deg, #0C7702 0%, #00A711 100%);
    border-radius: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
  }

  button {
    box-shadow: 0px;
    border: none;
  }

</style>
