<template>
    <gmap-map
            v-bind="options"
            id="map"
    />
</template>

<script>
    import {gmapApi} from 'vue2-google-maps'

    export default {
        name: "GoogleMap",
        data() {
            return {
                options: {
                    zoom: 15,
                    center: {
                        lat: 54.650060,
                        lng: 20.366583
                    },
                    mapTypeId: 'roadmap'
                }
            };
        },
        computed: {
            google: gmapApi
        }
    }
</script>

<style scoped>
    #map {
        height: 50vh;
        width: 80vw;
        margin: 0 auto;
    }
</style>