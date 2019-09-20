<template>
    <div class="gallery">
        <h1>Галерея</h1>
        <lingallery :iid.sync="currentId"
                    :width="width"
                    :height="height"
                    :responsive="responsive"
                    :showThumbnails="showThumbnails"
                    :textColor="textColor"
                    :accentColor="accentColor"
                    :disableImageClick="disableImageClick"
                    :items="items"/>
    </div>

</template>

<script>
    import Lingallery from 'lingallery';

    export default {
        name: "Gallery",
        data() {
            return {
                width: 600,
                height: 400,
                responsive: true,
                showThumbnails: false,
                accentColor: '#cc0000', //цвет спиннера
                textColor: '#cc0000',
                leftControlClass: '', //кастомизация
                rightControlClass: '',
                disableImageClick: true,
                items: [
                    {
                        src: 'https://picsum.photos/600/400/?image=0',
                        thumbnail: 'https://picsum.photos/64/64/?image=0',
                        id: 'someid1'
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=18',
                        thumbnail: 'https://picsum.photos/64/64/?image=18',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=17',
                        thumbnail: 'https://picsum.photos/64/64/?image=17',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=15',
                        thumbnail: 'https://picsum.photos/64/64/?image=15',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=16',
                        thumbnail: 'https://picsum.photos/64/64/?image=16',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=11',
                        thumbnail: 'https://picsum.photos/64/64/?image=11',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=14',
                        thumbnail: 'https://picsum.photos/64/64/?image=14',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=12',
                        thumbnail: 'https://picsum.photos/64/64/?image=12',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=13',
                        thumbnail: 'https://picsum.photos/64/64/?image=13',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=19',
                        thumbnail: 'https://picsum.photos/64/64/?image=19',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=33',
                        thumbnail: 'https://picsum.photos/64/64/?image=33',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=28',
                        thumbnail: 'https://picsum.photos/64/64/?image=28',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=29',
                        thumbnail: 'https://picsum.photos/64/64/?image=29',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=22',
                        thumbnail: 'https://picsum.photos/64/64/?image=22',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=23',
                        thumbnail: 'https://picsum.photos/64/64/?image=23',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=24',
                        thumbnail: 'https://picsum.photos/64/64/?image=24',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=25',
                        thumbnail: 'https://picsum.photos/64/64/?image=25',
                    },
                    {
                        src: 'https://picsum.photos/600/400/?image=26',
                        thumbnail: 'https://picsum.photos/64/64/?image=26',
                    }
                ],
                currentId: null
            };
        },
        components: {
            Lingallery
        }
    }
</script>

<style scoped>
    .gallery {
        width: 70%;
        margin: 0 auto;
    }

    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>