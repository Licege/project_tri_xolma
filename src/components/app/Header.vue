<template>
    <div>
        <!--
        <div class="loading">
            <img src="../../assets/logo-round.svg" alt=""
                 class="round-skrollable"
                 data-start="transform: rotate(0deg)"
                 data-end="transform: rotate(360deg)">
        </div>
        -->
        <div class="wrapper">
            <div class="header">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    /*
    .test {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        min-height: 600px;
        background-color: #000000;
        overflow: hidden;
    }

    .header {
        position: relative;
        height: 100vh;
        min-height: 600px;
        background: url("../../assets/areas/bg-home.jpg") center left;
        background-size: cover;
        opacity: .5;
        transform: scale(1.2);
    }
    */
    .wrapper {
        height: 100vh;
        position: relative;
        background-color: #000;
        /*overflow: hidden;*/
        min-height: 600px;
        z-index: 50;
    }

    .header:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: .5;
        z-index: 90;
        background: url("../../assets/areas/bg-home.jpg") center left;
        background-size: cover;
    }
</style>