import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import {faPlus} from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";
import Vue from 'vue'

import MyShadowInput from "~/components/my-shadow-input.vue";
import MyForm from "~/components/my-form.vue";
import MyInput from "~/components/my-input.vue";

fontawesome.library.add(faPlus)

Vue.component("font-awesome", FontAwesomeIcon);
Vue.component("my-form", MyForm);
Vue.component('my-input', MyInput)
Vue.component('shadow-input', MyShadowInput)
