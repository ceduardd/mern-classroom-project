const courses = [
  {
    name: 'Curso de Node',
    image: '/images/node.jpg',
    description: 'Curso de introducción a Node',
    category: 'Backend',
    lessons: [
      {
        title: 'Introducción al Curso',
        content: 'Node.js es un entorno de ejecución de JavaScript',
        urlResource: 'https://nodejs.org',
      },
    ],
  },
  {
    name: 'Curso de React',
    image: '/images/react.png',
    description: 'Curso de introducción a React',
    category: 'Frontend',
    lessons: [
      {
        title: 'Introducción al Curso',
        content:
          'Una biblioteca de JavaScript para construir interfaces de usuario',
        urlResource: 'https://reactjs.org',
      },
    ],
  },
  {
    name: 'Curso de Vue',
    image: '/images/vue.jpg',
    description: 'Curso de introducción a Vue',
    category: 'Frontend',
    lessons: [
      {
        title: 'Introducción al Curso',
        content: 'The Progressive JavaScript Framework',
        urlResource: 'https://vuejs.org',
      },
    ],
  },
];

export default courses;
