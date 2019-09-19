<template>
    <div>
        <div class="vacancy-order">
            <div class="form">
                <div class="title-vacancy">Заполните анкету</div>
                <div class="item">Выберите вакансию</div>
                <select name="prof" id="prof" class="prof" v-model="profession">
                    <option selected value="Официант">Официант</option>
                    <option selected value="Официант-бармен">Официант-бармен</option>
                    <option selected value="Повар">Повар</option>
                </select>
                <div class="item">Представьтесь</div>
                <input type="text" name="name" id="fio" placeholder="Ф.И.О." v-model="name" required>
                <div class="item">Дата рождения</div>
                <select name="day" id="day" class="birthday" v-model="birthday" required>
                    <option value="0" disabled selected style="display: none">День</option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select name="month" id="month" class="birthday" v-model="birthmonth" required>
                    <option value="0" disabled selected style="display: none">Месяц</option>
                    <option value="Январь">Январь</option>
                    <option value="Февраль">Февраль</option>
                    <option value="Март">Март</option>
                    <option value="Апрель">Апрель</option>
                    <option value="Май">Май</option>
                    <option value="Июнь">Июнь</option>
                    <option value="Январь">Июль</option>
                    <option value="Январь">Август</option>
                    <option value="Январь">Сентябрь</option>
                    <option value="Январь">Октябрь</option>
                    <option value="Январь">Ноябрь</option>
                    <option value="Январь">Декабрь</option>
                </select>
                <select name="year" id="year" class="birthday" v-model="birthyear" required>
                    <option value="0" disabled selected style="display: none">Год</option>
                    <option v-for="year in years" :value="year">{{ year }}</option>
                </select>
                <div>
                    <div class="item">Адрес проживания</div>
                    <input type="text" name="address" id="address" placeholder="Адрес" v-model="address" required>
                    <div class="item">Телефон</div>
                    <input type="tel" name="phone" id="phoneNumber" placeholder="+7(___) ___-__-__" v-model="phone" required>
                </div>
                <div>
                    <div class="item">Полезные ссылки</div>
                    <input type="text" name="social" id="social" placeholder="Соц. сети" v-model="socials" required>
                </div>
                <div class="containerChoice">
                    <div class="med">
                        <div class="checkbox item">Медицинская книжка</div>
                        <div class="form-labeled">
                            <input type="checkbox" name="med" id="med" value="true" v-model="med" required>
                            <label for="med">Есть</label>
                        </div>
                    </div>
                    <div class="experience">
                        <div class="header-label item">Опыт работы</div>
                        <div class="form-labeled">
                            <input type="radio" name="experience" id="radio-0" value="Без опыта" v-model="experience" checked>
                            <label for="radio-0" class="radio">Без опыта</label>
                        </div>
                        <div class="form-labeled">
                            <input type="radio" name="experience" id="radio-1" value="Менее 1 года" v-model="experience" required>
                            <label for="radio-1" class="radio">Менее 1 года</label>
                        </div>
                        <div class="form-labeled">
                            <input type="radio" name="experience" id="radio-2" value="От 2 до 3 лет" v-model="experience" required>
                            <label for="radio-2" class="radio">От 2 до 3 лет</label>
                        </div>
                        <div class="form-labeled">
                            <input type="radio" name="experience" id="radio-3" value="Более 3 лет" v-model="experience" required>
                            <label for="radio-3" class="radio">Более 3 лет</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="item">Что-то о вас</div>
                    <textarea name="hobbies" id="hobbies" cols="30" rows="10" placeholder="Расскажите" v-model="about" required></textarea>
                    <div>Нажимая кнопку, я подтверждаю свою дееспособность, даю согласие на обработку своих персональных данных.</div>
                    <button @click="addSummaryMethod">Отправить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Inputmask from 'inputmask'
    import uuid from "uuid/v4"
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Vacancy",
        data () {
            return {
                id: '',
                date: '',
                profession: 'Официант',
                name: '',
                birthday: '0',
                birthmonth: '0',
                birthyear: '0',
                birthdate: '',
                address: '',
                phone: '',
                socials: '',
                med: false,
                experience: 'Без опыта',
                about: '',
                wrong: ''
            }
        },
        computed: {
            ...mapGetters({
                'summaries': 'getSummaries'
            }),
            years() {
                const year = new Date().getFullYear()
                return Array.from({length: year - 1950}, (value, index) => 1950 + index)
            }
        },
        methods: {
            ...mapActions(['addSummary']),
            addSummaryMethod() {
                if (this.validateData() === true) {
                    this.birthdate = this.birthday + '.' + this.birthmonth + '.' + this.birthyear;
                    const nowDate = new Date();
                    const summary = {
                        id: uuid(),
                        date: nowDate,
                        profession: this.profession,
                        name: this.name,
                        birthdate: this.birthdate,
                        address: this.address,
                        phone: this.phone,
                        socials: this.socials,
                        med: this.med,
                        experience: this.experience,
                        about: this.about
                    }

                    this.addSummary(summary)
                    console.log(summary)
                    this.profession = 'Официант',
                    this.name = '',
                    this.birthday = '0',
                    this.birthmonth = '0',
                    this.birthyear = '0',
                    this.birthdate = '',
                    this.address = '',
                    this.phone = '',
                    this.socials = '',
                    this.med = '',
                    this.experience = 'Без опыта',
                    this.about = ''
                } else {
                    this.wrong = true
                    console.log(this.wrong)
                }
            },

            validateData() {
                if (this.profession !== '' &&
                this.name !== '' &&
                this.birthday !== '0' &&
                this.birthmonth !== '0' &&
                this.birthyear !== '0' &&
                this.address !== '' &&
                this.phone !== '' &&
                this.about !== ''
                ) {
                    return true
                }
                return false
            }
        },
        mounted() {
            const inMask = new Inputmask("+7(___) ___-__-__")
            inMask.mask(document.getElementById('phoneNumber'))
        }
    }
</script>

<style scoped>
    .form {
        width: 310px;
        margin: 0 auto;
        padding: 40px 0;
    }

    div {
        box-sizing: border-box;
    }

    .title-vacancy {
        margin-bottom: 30px;
        font-size: 1.8em;
        font-weight: bold;
        text-transform: uppercase;
    }

    .item {
        color: #85744f;
        padding: 7px 7px 4px 7px;
        text-align: left;
    }

    input[type="text"] {
        height: 24px;
        width: 265px;
        padding: 0 25px 0 8px;
        border: 1px solid #85744f;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
    }

    input[type="tel"] {
        height: 24px;
        width: 265px;
        padding: 0 25px 0 8px;
        border: 1px solid #85744f;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
    }

    input[type="radio"] {
        cursor: pointer;
    }
    
    .radio {
        cursor: pointer;
    }

    .checkbox {
        cursor: pointer;
        width: 49.99%;
    }

    select {
        height: 24px;
        width: 265px;
        padding: 0 25px 0 8px;
        color: #666666;
        border: 1px solid #85744f;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
    }

    .prof {
        width: 300px;
    }

    .birthday {
        width: 100px;
    }

    .containerChoice {
        display: flex;
        margin-top: 20px;
    }

    .med {
         width: 49.99%;
     }

    .experience {
        width: 49.99%;
    }

    .header-label {
        width: 49.99%;
    }

    .form-labeled {
        display: flex;
        padding: 7px;
    }

    textarea {
        height: 30vh;
        width: 300px;
        padding: 10px 10px;
        border: 1px solid #85744f;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        resize: none;
        box-sizing: border-box;
    }

    button {
        padding: 0 20px;
        cursor: pointer;
        border-radius: 10px;
        outline: none;
    }
</style>