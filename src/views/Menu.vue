<template>
    <div>
        <h1>Menu</h1>
        <div class="menu-wrapper">
        <div class="card-menu"
             v-for="(dish, index) in dishes"
             :key="index">
            <img :src="dish.image" :alt="dish.title" @click="go(dish.id)">
            <h3>{{dish.title}}</h3>
            <div class="description">{{dish.description}}</div>
            <div class="composition">Состав: {{dish.composition}}</div>
            <div class="price">
                {{dish.price + ' р /'}}
                <span class="weight">{{dish.weight + ' г'}}</span>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Menu",
        computed: {
            ...mapGetters({
                'dishes': 'getDishes'
            })
        },
        methods: {
            go(dishId) {
                this.$router.push({name: 'detail', params:{Pid:dishId}})
            }
        }
        /*
        methods(prodId) {
            this.$router.push({name: 'details', params: {Pid:prodId}})
        }*/
    }
</script>

<style scoped>
    .menu-wrapper {
        position: relative;
        padding: 0 80px;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    img {
        max-height: 200px;
        width: 100%;
        cursor: pointer;
    }

    .card-menu {
        /*display: inline-block;*/
        margin: 10px;
        padding: 40px 10px 60px;
        height: 400px;
        width: 360px;
        max-width: 100%;
        border: 1px solid #85744f;
    }

    .composition, .description{
        margin-bottom: 15px;
    }

    .price {
        margin-bottom: 10px;
        font-size: 1.6em;
        font-weight: 600;
    }

    .weight {
        font-size: .6em;
        font-weight: 500;
    }


</style>