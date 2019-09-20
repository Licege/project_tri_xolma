<template>
    <div class="tour">
        <router-link to="/">
            <img src="../assets/logo/logo.png" alt="logo" class="logo">
        </router-link>
        <iframe src="https://navse360.ru/onlyTour/4421" width="100%" height="100%"> </iframe>
        <div class="hint" id="hint">
            <p>Мы в соцсетях</p>
        </div>
        <div class="social" @mouseover="showHint" @mouseleave="hideHint">
            <a href="https://vk.com/trixolma" target="_blank" class="nav-link-social">
                <img class="icon-vk" src="../assets/social/vk.svg">
            </a>
            <a href="https://www.instagram.com/tri_xolma/" target="_blank" class="nav-link-social">
                <img class="icon-instagram" src="../assets/social/instagram.svg">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tour",
        methods: {
            showHint() {
                document.getElementById('hint').style.display = 'block'
            },
            hideHint() {
                document.getElementById('hint').style.display = 'none'
            }
        }
    }
</script>

<style scoped>
    .tour {
        width: 99vw;
        height: 98vh;
    }

    .logo {
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        -webkit-user-drag: none;
    }

    .social{
        position: absolute;
        bottom: 45px;
        right: 30px;
        cursor: pointer;
    }

    .icon-vk {
        height: 40px;
        width: 48px;
        cursor: pointer;
    }

    .icon-instagram {
        height: 35px;
        width: 35px;
        cursor: pointer;
    }

    .hint {
        display: none;
        position: absolute;
        bottom: 70px;
        right: 15px;
        color: #fff;
    }

</style>