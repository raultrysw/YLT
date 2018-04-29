import Vuex from 'vuex'
import * as course from './course'

const createStore = () => {
  return new Vuex.Store({
    modules: {course},
    state: {

    }
  })
}

export default createStore
