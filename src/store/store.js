import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tagline: 'Make your miata go from Meow to RAWR!',
  navigation: [
    { link: '90-93 NA6 Turbo kit', url: '9093NA6.html' },
    { link: '90-97 NA8 Turbo kit', url: '9097NA8.html' },
    { link: '99-05 NB1/NB2 Turbo kit', url: '9905NB.html' },
    { link: 'Oil Line Kit', url: 'oilline.html' },
    { link: 'Reviews', url: 'reviews.html' },
    { link: 'FAQs', url: 'faq.html' },
    { link: 'Dynos', url: 'dynos.html' },
    { link: 'Installation & Instructions', url: 'installation.html' },
    { link: 'About MKTurbo', url: 'aboutMKT.html' }
  ]
}

export default new Vuex.Store({
  state
})
