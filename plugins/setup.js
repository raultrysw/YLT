import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import {faPlus} from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";
import Vue from 'vue'

import MyShadowInput from "~/components/my-shadow-input.vue";

fontawesome.library.add(faPlus)

Vue.component('font-awesome', FontAwesomeIcon)
Vue.component('shadow-input', MyShadowInput)
