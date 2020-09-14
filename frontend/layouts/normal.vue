<template>
    <div>
        <img src="/header.svg" width="100%" class="header-img" />
        <h1>Triviator</h1>

        <Nuxt />

        <footer></footer>
    </div>
</template>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&display=swap');

    body {
        margin: 0px;
        font-family: "Montserrat", sans-serif;
    }

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

    .header-img {
        z-index: -1;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
    }

    button, .huge {
        box-shadow: none;
    }

    footer {
        width: 100%;
        height: 50px;
        background-color: #510075;
        margin-top: 70px;
    }

</style>
