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
    let subject = new Subject(newSubject);
    subject.id = state.subjects.legnth
    state.subjects.push(subject)
  },
  removeSubject (state, id) {
    state.subjects.splice(id, 1)
  }
}

export const namespaced = true
