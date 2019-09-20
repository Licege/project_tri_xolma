import Vue from 'vue'
import Vuex from 'vuex'
import uuid from "uuid/v4"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    reviews: [],
    summaries: [],
    menuPages: {
      categories: {salad: 'Салат', soup: 'Суп', coldSnacks: 'Холодные закуски',
      hotMeatDishes: 'Горячие мясные блюда', hotFishDishes: 'Горячие рыбные блюда',
      sideDishes: 'Гарниры', pancakes: 'Блинчики', barbecue: 'Шашлык', sweet: 'Для сластен',
      hotDrinks: 'Горячие напитки', tea: 'Чай', refreshDrinks: 'Освежающие напитки',
      alcoholicDrinks: 'Алкогольные напитки', wines: 'Wines', childrenMenu: 'Детское меню'},
      meats: {none: '', chicken: 'Курица', beef: 'Говядина', mutton: 'Баранина', fish: 'Рыба', pork: 'Свинина'},
      spicy: {none: '', spicy: 'Острый', verySpicy: 'Очень острый'},
      dishes: [
        {id: 'gazpacho', title: 'Гаспачо', category: 'Суп', image: 'https://images.lady.mail.ru/5792/', spicy: 'Очень острый', meat: '', description: 'Летний суп из свежих томатов', composition: 'Томаты, огурец, перец чили', weight: '300', price: '200'},
        {id: uuid(), title: 'Цезарь с курицей', category: 'Салат', image: 'http://nektariambrosia.ru/wp-content/uploads/2018/05/cezar-s-ruricei.jpg', spicy: '', meat: 'Курица', description: 'Когда-нибудь здесь будет описание салата', composition: 'Куриное филе, сыр, соус, гренки, черри, яйцо перепелинное, лист салата', weight: '200', price: '290'},
        {id: uuid(), title: 'Барбекю из форели', category: 'Шашлык', image: 'https://n1s2.hsmedia.ru/9c/be/c5/9cbec554c914cb83bf00b032bf5bddcf/660x512_0_36ab191e90acdf109d6734808fdb11e3@1931x1553_0xc0a839a2_5106035731492546667.jpeg', spicy: '', meat: 'Рыба', description: 'Когда-нибудь здесь будет описание', composition: 'Куриное филе, сыр, соус, гренки, черри, яйцо перепелинное, лист салата', weight: '200', price: '290'},
        {id: uuid(), title: 'Медовик', category: 'Для сластен', image: 'http://edinstvennaya.ua/pictures/article/12716_max.jpg', spicy: '', meat: '', description: 'Когда-нибудь здесь будет описание', composition: 'Торт', weight: '200', price: '290'},
        {id: uuid(), title: 'Цезарь с курицей', category: 'Салат', image: 'http://nektariambrosia.ru/wp-content/uploads/2018/05/cezar-s-ruricei.jpg', spicy: '', meat: 'Курица', description: 'Когда-нибудь здесь будет описание салата', composition: 'Куриное филе, сыр, соус, гренки, черри, яйцо перепелинное, лист салата', weight: '200', price: '290'},
      ]
    }

  },
  mutations: {
    addReview(state, review) {
      state.reviews.push(review);
    },

    addSummary (state, summary) {
      state.summaries.push(summary);
    },

    changeToggleMenu(state) {
      state.isOpen = !state.isOpen;
      console.log(this.state.isOpen)
    }
  },
  actions: {
    addReview({commit}, review) {
      commit('addReview', review)
    },

    addSummary({commit}, summary) {
      commit('addSummary', summary)
    },

    changeToggle({commit}) {
      commit('changeToggleMenu')
    }
  },
  getters: {
    getReviews(state) {
      return state.reviews;
    },

    getSummary(state) {
      return state.summaries;
    },

    getDishes(state) {
      return state.menuPages.dishes;
    }
  }
})
