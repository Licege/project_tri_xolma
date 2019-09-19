<template>
    <yandex-map :coords="coords" id="map">
        <ymap-marker
                marker-id="1"
                :coords="coords"
                hint-content="Мы здесь"
                :icon="markerIcon">
        </ymap-marker>
    </yandex-map>
</template>

<script>
    import {yandexMap, ymapMarker} from "vue-yandex-maps";

    export default {
        name: "testPages",
        /*
        data: () => ({
            coords: [54.650060, 20.366583], [54.64985518781342,20.366790039867983]
            zoom: 10
        }),*/
        data: () => {
            return {
                coords: [54.64996180443,20.366784965996604],
                zoom: 10,
                markerIcon: {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
                    imageSize: [43, 43],
                    imageOffset: [0, 0],
                    content: '',
                    contentOffset: [0, 15],
                    contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                }
            }
        },
        components: { yandexMap, ymapMarker }

    }
</script>

<style scoped>
    #map {
        height: 50vh;
        width: 80vw;
        margin: 0 auto;
    }
</style>