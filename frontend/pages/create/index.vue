<template>
    <center>
        <input id="email" type="email" placeholder="Enter email" required /><br /><br />
        <input type="submit" id="submit-email" />
    </center>
</template>

<script>

    export default {
        layout: 'normal'
    }

</script>

<style>

    #email {
        width: 400px;
        height: 100px;
        background: #E9E9E9;
        border: 4px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 8px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        padding: 10px 20px;
    }

    #submit-email {
        width: 400px;
        height: 100px;
        background: linear-gradient(180deg, #0C7702 0%, #00A711 100%);
        border-radius: 8px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }

</style>