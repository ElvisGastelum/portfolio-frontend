import React from 'react';

export default function Layout(props) {
  return (
    <div className="container h-100 d-flex flex-column">
      <header className="mx-auto">{props.header}</header>
      <nav>{props.nav}</nav>
      <main className="h-100 d-flex">
        <div className="w-75">
          <section className="h-50">{props.section}
          </section>
          <article className="h-50">{props.article}
          </article>
        </div>
        <div className="w-25">
          <aside>{props.aside}</aside>
        </div>
      </main>
      <footer>{props.footer}</footer>
    </div>
  )
}