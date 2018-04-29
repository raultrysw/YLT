import Subject from '~/prototypes/subject.js'
import subjects from './test-content'

export const state = {
  title: 'Desarrollo de aplicaciones multiplataforma', subjects
}

export const mutations = {
  setTitle (state, newTitle) {
    state.title = newTitle
  },
  pushSubject (state, newSubject) {
    state.subjects.push(newSubject)
  }
}

export const namespaced = true
