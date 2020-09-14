<template>
  <div class="container">
    <center>
      <a href="/join"><button class="huge" id="join-button">JOIN GAME</button></a>
      <button class="huge" id="create-button">CREATE GAME</button>
    </center>
  </div>
</template>

<script>

  export default {
    layout: 'normal'
  }

</script>

<style>

  h1 {
    left: 15vw;
    right: 15vw;
    margin-top: 200px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: calc(100vw / 12.2);
    line-height: 112px;
    text-transform: lowercase;
    color: #F1B12D;
    text-align: center;
  }

  .huge {
    width: 401px;
    height: 200px;
    border: 4px solid #FFFFFF;
    border-radius: 8px;
    display: inline-block;
    font-size: 32px;
    line-height: 39px;
    cursor: pointer;
    transition: 150ms;
    background: #E9E9E9;
  }

  .huge:active {
    background: linear-gradient(180deg, #0C7702 0%, #00A711 100%);
  }

</style>
