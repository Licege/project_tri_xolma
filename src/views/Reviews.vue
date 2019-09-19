<template>
    <div>
        <h1>Ваши отзывы</h1>
        <div class="container-f">
            <h2>Сделай нас лучше</h2>
            <div class="describe">
                <p>Уважаемый клиент, эта страница создана для того, чтобы вы могли оставлять Ваши отзывы и пожелания по улучшению нашего сервиса.</p>
                <br>
                <p>Ваше мнение очень важно для нас!</p>
            </div>
            <div class="constructor">
                <label>
                    <input class="name-field" type="text" placeholder="Ваше имя*" v-model="name" required>
                </label>
                <label>
                    <input class="phone-field" type="text" placeholder="Телефон*" v-model="phone">
                </label>
                <label>
                    <textarea class="review-field" placeholder="Комментарий*" v-model="comment" required></textarea>
                </label>
                <div>Здесь нужно допилить оценку</div>
                <button @click="addReviewsMethod">Оставить отзыв</button>
            </div>
        </div>
        <div class="container-r">
            <div v-for="review in reviews.slice().reverse()"
                 class="reviews">
                <div class="r-head">
                    <span class="user-review">{{review.name}}</span>
                    <span class="date-review">{{review.date | date('datenoseconds')}}</span>
                    <div class="mark-review"> {{review.mark}} </div>
                </div>
                <p class="r-content">{{review.comment}}</p>
                <div>Допилить ответ Администрации</div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import uuid from "uuid/v4"

    export default {
        name: "Reviews",
        data () {
            return {
                name: '',
                phone: '',
                comment: '',
                mark: '',
                wrong: '',
                date: ''
            }
        },
        computed: {
            ...mapGetters({
                'reviews': 'getReviews'
            }),
            total() {
                return this.reviews.length;
            }
        },
        methods: {
            ...mapActions(['addReview']),
            addReviewsMethod() {
                if (this.validateData() === true) {
                    const nowDate = new Date();
                    const review = {
                        id: uuid(),
                        name: this.name,
                        phone: this.phone,
                        date: nowDate,
                        comment: this.comment,
                        mark: this.mark
                    };
                    console.log(review.date);
                    this.addReview(review);
                    this.name = '';
                    this.phone = '';
                    this.comment = '';
                    this.date = '',
                    this.mark = ''

                } else {
                    this.wrong = true
                }
            },

            validateData() {
                return this.name !== '';
            }
        }
    }

</script>

<style scoped>
    .container-f {
        width: 80vw;
        max-width: 700px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .name-field {
        width: 45%;
        float: left;
        padding: 9px 10px;
        margin-bottom: 15px;
        border-radius: 5px;
    }

    .phone-field {
        width: 45%;
        float: right;
        padding: 9px 10px;
        margin-bottom: 15px;
        border-radius: 5px;
    }

    textarea {
        height: 20vh;
        width: 100%;
        padding: 10px 10px;
        border: 1px solid #85744f;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        resize: none;
        box-sizing: border-box;
    }

    .container-r {
        width: 80vw;
        max-width: 700px;
        margin: 120px auto 0;
    }

    .reviews {
        width: 100%;
        padding: 17px 33px 28px;
        margin-bottom: 24px;
        text-align: left;
        color: #85744f;
        line-height: 20px;
        border: 1px solid #85744f;
        box-sizing: border-box;
    }

    .user-review {
        margin: 0 6px 5px 0;
        font-weight: bold;
    }

     .date-review {
        margin: 0 9px 5px 0;
        font-size: .8em;
    }

    .r-foot {
        padding: 21px 0 0 18px;
    }

    button {
        padding: 10px;
        cursor: pointer;
        border-radius: 10px;
        outline: none;
    }

</style>