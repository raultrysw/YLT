import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import {faPlus} from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";
import Vue from 'vue'

fontawesome.library.add(faPlus)

Vue.component('font-awesome', FontAwesomeIcon)
