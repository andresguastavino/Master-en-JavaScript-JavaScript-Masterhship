// Posts
var posts = [
  {
    title: 'Un post',
    date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Otro post',
    date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Tercer post',
    date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'El mejor post',
    date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Ultimo post',
    date: 'Publicado ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

posts.forEach((post) => {
  var post = `
    <article class="articulo">
      <h2>${post.title}</h2>
      <p class="fecha">${post.date}</p>
      <p>${post.description}</p>
      <button class="mas">Leer más</button>
    </article>
  `

  $('section.articulos').append(post)
})
