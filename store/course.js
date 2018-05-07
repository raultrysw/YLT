import Subject from "~/prototypes/subject.js";
import Unit from '~/prototypes/unit.js'
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
  },
  replaceSubject (state, {id, subject}) {
    state.subjects[id].name = subject.name;
    state.subjects[id].aka = subject.aka
  },
  addUnit (state, {id, unit}) {
    state.subjects[id].units.push(new Unit(unit))
  }
}

export const namespaced = true
