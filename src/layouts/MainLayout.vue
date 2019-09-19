<template>
    <div class="main-layout">

        <Header @scroll="hideHidder"></Header>

        <div v-scroll="hideHidder" class="fixedNavbar" :class="{hideMenu: isHideHeader}">
            <div class="tel">
                <a href="tel:+79114541676" target="_blank">
                    8 (911) 454-16-76
                </a>
            </div>

            <button
                    @click="toggleMenu"
                    class="toggleMenu"
            >{{ menuIsOpen ? 'Close' : 'Menu' }}
            </button>
        </div>



        <Navbar v-if="menuIsOpen"/>

        <!-- menuIsOpen ? disableScrolling : enableScrolling-->

        <Sidebar />

        <main class="app-page">
            <div>
                <router-view />
            </div>
        </main>

        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from "../components/app/Navbar";
    import Sidebar from "../components/app/Sidebar";
    import Header from "../components/app/Header";
    import {mapActions} from "vuex";
    import Footer from "../components/app/Footer";

    export default {
        name: "MainLayout",
        data: () => ({
            isHideHeader: false
        }),
        computed: {
            menuIsOpen() {
                return this.$store.state.isOpen
            }
        },
        methods: {
            ...mapActions(['changeToggle']),
            toggleMenu() {
                this.changeToggle({});
                if (this.menuIsOpen === false){
                    this.enableScrolling()
                } else {
                    this.disableScrolling()
                }
            },

            hideHidder() {
                let wh = window.innerHeight;
                /*
                console.log(window.scrollY > wh);
                console.log(window.scrollY);
                console.log(wh);*/
                if (window.scrollY > wh-50) {
                    this.isHideHeader = false
                } else {
                    this.isHideHeader = true
                }
            },

            disableScrolling()
            {
                document.body.style.height = '100%'
                document.body.style.overflow = 'hidden'
            },

            enableScrolling() {
                document.body.style.height = ''
                document.body.style.overflow = ''
            }
            },
        components: {Footer, Sidebar, Navbar, Header}
    }
</script>

<style scoped>
    .anim-button-menu-enter-active {
        transition: all .3s ease;
    }

    .app-page {
        min-height: 100vh;
    }

    .hideMenu {
        display: none;
        position: absolute;
    }

    .anim {
        transform: translateX(-200px);
        transition-property: width, transform, -webkit-transform;
        transition-duration: .3s, .3s, .3s;
        transition-timing-function: linear, linear, linear;
        transition-delay: .8s, 0s, 0s;
    }

    .fixedNavbar {
        position: fixed;
        top: 0;
        z-index: 90;
        width: 100%;
        padding: 0 30px;
        pointer-events: none;
    }

    .toggleMenu {
        position: relative;
        height: 105px;
        padding: 40px 10px;
        font-weight: 700;
        font-size: 1.6em;
        line-height: 1em;
        float: right;
        border: none;
        background: transparent;
        text-transform: uppercase;
        cursor: pointer;
        outline: none;
        pointer-events: auto;
    }

    .toggleMenu:active {
        border: none;
    }

    .toggleMenu:hover {
        color: #85744f;
    }

    .tel {
        position: relative;
        top: 0;
        margin-top: 28px;
        float: left;
        padding: 10px;
        pointer-events: auto;
    }

    .tel a {
        text-decoration: none;
        color: #000000;
    }

    img {
        max-width: 100%;
        height: auto;

    }

    .logoMenu {
        position: fixed;
        top: 26px;
        left: 35px;
    }

    * {
        box-sizing: border-box;
    }
</style>