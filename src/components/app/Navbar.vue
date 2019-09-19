<template>
    <div class="navbar" :class="{open: value}">
        <div></div>
        <a href="/" class="logoMenu">
            <img src="../../assets/logo/logo.png" alt="logo">
        </a>

        <ul>
            <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag="li"
                    active-class="active"
                    :to="link.url"
                    class="links-menu"
            >
                <a href="#" class="nav-link" @click="toggleMenu">{{link.title}}</a>
            </router-link>
        </ul>

        <ul>
            <li class="links-social">
                <a href="https://www.instagram.com/tri_xolma/" target="_blank" class="nav-link-social">
                    <img src="../../../public/img/icons2/15-instagram.svg" alt="INSTAGRAM" class="instagram">
                </a>
            </li>
            <li class="links-social">
                <a href="https://vk.com/trixolma" target="_blank" class="nav-link-social">
                    <img src="../../../public/img/icons2/18-vk.svg" alt="VK" class="vk">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Navbar",
        props: ['value'],
        data: () => ({
            links: [
                {title: 'Меню', url: '/menu'},
                {title: 'Заказать стол', url: '/reserve'},
                {title: 'Галерея', url: '/gallery'},
                {title: 'Отзывы', url: '/reviews'},
                {title: 'Контакты', url: '/contact'}
            ],
            socials: [
                {title: 'Instagram', url: '/insta'},
                {title: 'Vk', url: 'https://vk.com/trixolma'}
            ]
        }),
        methods: {
            ...mapActions(['changeToggle']),
            toggleMenu() {
                this.changeToggle({});
                this.enableScrolling();
            },
            enableScrolling() {
                document.body.style.height = ''
                document.body.style.overflow = ''
            }
        }
    }

</script>


<style scoped>
    .open {
        display: none;
    }

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 30px;
        background: #ffffff;
        z-index: 89;
        opacity: 1;
        overflow: hidden;
    }

    img {
        max-width: 100%;
        height: auto;

    }

    .logoMenu {
        display: inline-block;
        position: fixed;
        top: 56px;
        left: 35px;
        z-index: 99;
    }

    ul {
        position: relative;
        top: 30%
    }

    .links-menu {
        display: block;
        padding: 10px;
        list-style: none;
        color: #ffffff;
        letter-spacing: 2px;
    }

    .links-social {
        display: inline-block;
        padding: 30px 10px;
    }

    .nav-link-social:hover {
        color: #85744f;
    }

    a {
        cursor: pointer;
        color: #000;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
    }

    a:visited {
        color: #000;
    }

    a:hover {
        color: #85744f;
    }

    * {
        box-sizing: border-box;
    }

</style>