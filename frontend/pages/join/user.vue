<template>
  <div class="container">
    <center>
      <h3>YOUR AVATAR</h3>
      <img :src="src" id="user-avatar" /><br />
      <button class="avatar-refresh" @click="avatarRefresh">REFRESH</button>
      <br /><br />
      <input type="text" id="nickname" placeholder="Nickname" v-model="nickname" required /><br /><br />
      <button id="submit-nickname" @click="setNickname" type="submit">Ok, GO!</button>
    </center>
  </div>
</template>

<script>

  export default {
    layout: 'normal',
    data: function() {
      return {
        src: "https://generative-placeholders.glitch.me/image?width=300&height=300",
        nickname: ""
      }
    },
    methods: {
      avatarRefresh: function() {
        this.src = "https://generative-placeholders.glitch.me/image?width=300&height=300&img=" + Math.random();
      },
      setNickname: function() {
        this.nickname = this.nickname.trim();
        if (this.nickname === " " || this.nickname === "" || this.nickname == "" || !this.nickname) {
          console.log("no username");
          return;
        }
        this.$store.commit('setNickname', this.nickname)
      }
    },
    created: function() {
      if (this.$store.getters.getPin == "" || !this.$store.getters.getPin) {
        console.log("nothing, redirecting")
        this.$router.push({ path: "/join/" });
      }
      console.log(this.$store.getters.getPin);
      // Swal.fire(
      //   'The Internet?',
      //   'That thing is still around?',
      //   'question'
      // )
    }
  }

</script>

<style>

  #user-avatar {
    border-radius: 50%;
    border: 4px solid #FFFFFF;
  }

  .avatar-refresh {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  #nickname {
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

  #submit-nickname {
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

</style>
