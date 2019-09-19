<template>

    <div>
        <h1>Как нас найти</h1>
        <p>Адрес: г. Калининград</p>
        <p>Калининградская область</p>
        <p>Мамоновское шоссе, 13 км</p>
        <y-map />
        <!--
        <google-map />
        -->
    </div>

</template>

<script>
    //import GoogleMap from "../components/GoogleMap";
    import YMap from "../components/YandexMap"

    export default {
        name: "Contacts",
        //components: { GoogleMap }
        components: { YMap }
    }
</script>

<style scoped>

</style>