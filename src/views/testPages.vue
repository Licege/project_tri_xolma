<template>
    <div>
        <div v-scroll="magic2try" class="before" :class="{ activeClass: isActive }" >1234</div>
    </div>
</template>

<script>
    import ScrollMagic from 'scrollmagic'

    export default {
        name: "testPages",
        data () {
            return {
                isActive: false
            }
        },
        methods: {
            magic2try () {
                let wh = window.innerHeight;
                console.log(window.scrollY > wh);
                console.log(window.scrollY);
                console.log(wh);
                if (window.scrollY > wh-50) {
                    this.isActive = true
                } else {
                    this.isActive = false
                }
            }
        }
    }
</script>

<style scoped>
    .before {
        display: none;
    }

    .activeClass {
        display: block;
    }
</style>