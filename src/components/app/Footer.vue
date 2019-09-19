<template>
    <div class="footer">
        <div>
            <span class="hours">Часы работы: 12:00 - 01:00</span>
            <div>
                <div v-if="soonOpen">Cкоро откроемся</div>
                <div v-else-if="soonClose">Cкоро закрываемся</div>
                <div v-else-if="isOpen">Мы открыты</div>
                <div v-else-if="!isOpen">Мы закрыты</div>
            </div>
        </div>
        <ul>
            <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag="li"
                    active-class="active"
                    :to="link.url"
                    class="links-menu"
            >
                <a href="#" class="nav-link">{{link.title}}</a>
            </router-link>
        </ul>
        <div>
            © {{ this.date.getFullYear() }}
            <a href="/">Три Холма</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            date: new Date(),
            hour: null,
            interval: null,
            isOpen: true,
            soonOpen: false,
            soonClose: false,
            links: [
                {title: 'Меню', url: '/menu'},
                {title: 'Заказать стол', url: '/reserve'},
                {title: 'Галерея', url: '/gallery'},
                {title: 'Отзывы', url: '/reviews'},
                {title: 'Контакты', url: '/contact'},
                {title: 'Вакансии', url: '/vacancy'}
            ],
            socials: [
                {title: 'Instagram', url: '/insta'},
                {title: 'Vk', url: 'https://vk.com/trixolma'}
            ]

        }),
        computed: {
        },
        mounted() {
            {
                this.interval = setInterval(() => {
                    this.date = new Date()
                    this.hour = this.date.getHours()
                    if (this.hour > 9 && this.hour < 12){
                        this.soonOpen = true
                    } else if (this.hour > 1 && this.hour < 12) {
                        this.isOpen = false
                    } else if (this.hour >= 0 && this.hour < 1) {
                        this.soonClose = true
                    }
                }, 1000)
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        }
    }
</script>

<style scoped>
    .footer {
        position: relative;
        width: 100%;
        background-color: #CCCCCC;
        min-height: 180px;
        margin-top: 30px;
    }

    li {
        display: inline-block;
        padding-left: 3vw;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #85744f;
    }
</style>