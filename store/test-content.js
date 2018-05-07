import Subject from '~/prototypes/subject.js'
import Unit from '~/prototypes/unit.js'


let testUnitContent = [
  {
    type: 'note',
    content: `
      <p>Prueba para que funcion el <strong>quill editor</strong></p>
    `
  }
]


const units = [
  new Unit({name: 'Acceso a ficheros', content: testUnitContent}),
  new Unit({name: 'JDBC'})
]

export default [
  new Subject({ id: 0, name: "Programación de servicios y procesos", aka: "PSP" }),
  new Subject({ id: 1, name: "Programación de aplicaciones multimedia", aka: "PM" }),
  new Subject({ id: 2, name: "Ingles técnico", aka: "IT" }),
  new Subject({ id: 3, name: "Formación y orientación laboral", aka: "FOL" }),
  new Subject({ id: 4, name: "Acceso a datos", aka: "AD", units }),
];
