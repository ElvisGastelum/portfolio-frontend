import React from 'react';

import './styles.css';

export default function Projects() {
  return (
    <div className="container h-100 d-flex flex-column">
      <header>Projects</header>
      <nav>Navbar</nav>
      <main className="h-100 d-flex">
        <div className="w-75">
          <section className="h-50">Section
          </section>
          <article className="h-50">Article
          </article>
        </div>
        <div className="w-25">
          <aside>Aside</aside>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  )
}