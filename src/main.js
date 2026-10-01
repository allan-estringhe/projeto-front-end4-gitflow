import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav container" aria-label="Navegação principal">
      <a href="#inicio" class="logo" aria-label="ONG Estringhe - início">
        Estringhe
      </a>

      <button
        id="menu-button"
        class="menu-button"
        type="button"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="menu"
      >
        ☰
      </button>

      <ul id="menu" class="menu">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button
        id="theme-button"
        class="theme-button"
        type="button"
        aria-label="Ativar modo escuro da página"
      >
        🌙
      </button>
    </nav>
  </header>

  <main>
    <section id="inicio" class="hero">
      <div class="container hero-content">
        <div>
          <span class="badge">ONG Estringhe</span>
          <h1>Transformando ideias em ações que fazem a diferença.</h1>
          <p>
            Conheça nossos projetos e participe de iniciativas que contribuem
            para uma sociedade melhor.
          </p>

          <div class="hero-actions">
            <a href="#projetos" class="button primary">Conheça os projetos</a>
            <a href="#contato" class="button secondary">Entre em contato</a>
          </div>
        </div>
      </div>
    </section>

    <section id="projetos" class="section">
      <div class="container">
        <span class="badge">Nossos projetos</span>
        <h2>Projetos que geram impacto</h2>

        <div class="cards">
          <article class="card">
            <h3>Educação</h3>
            <p>
              Ações voltadas para o acesso à educação e desenvolvimento de
              oportunidades.
            </p>
            <a href="#contato" class="card-link">Saiba mais</a>
          </article>

          <article class="card">
            <h3>Comunidade</h3>
            <p>
              Projetos que incentivam a participação e o desenvolvimento das
              comunidades.
            </p>
            <a href="#contato" class="card-link">Saiba mais</a>
          </article>

          <article class="card">
            <h3>Sustentabilidade</h3>
            <p>
              Iniciativas para conscientização e práticas mais sustentáveis.
            </p>
            <a href="#contato" class="card-link">Saiba mais</a>
          </article>
        </div>
      </div>
    </section>

    <section id="sobre" class="section section-alt">
      <div class="container">
        <span class="badge">Sobre nós</span>
        <h2>Uma organização feita para transformar</h2>
        <p>
          A ONG Estringhe desenvolve projetos sociais e busca aproximar pessoas
          interessadas em contribuir para mudanças positivas.
        </p>
      </div>
    </section>

    <section id="contato" class="section">
      <div class="container">
        <span class="badge">Contato</span>
        <h2>Fale conosco</h2>

        <form id="contact-form" class="form">
          <label for="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minlength="3"
            placeholder="Digite seu nome"
          />

          <label for="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Digite seu e-mail"
          />

          <label for="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            minlength="10"
            placeholder="Digite sua mensagem"
          ></textarea>

          <button class="button primary" type="submit">
            Enviar mensagem
          </button>

          <div
            id="form-feedback"
            class="alert"
            role="status"
            aria-live="polite"
            hidden
          ></div>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2026 ONG Estringhe. Todos os direitos reservados.</p>
    </div>
  </footer>
`

const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('#menu')
const themeButton = document.querySelector('#theme-button')
const form = document.querySelector('#contact-form')
const feedback = document.querySelector('#form-feedback')

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open')

  menuButton.setAttribute('aria-expanded', isOpen)
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Fechar menu' : 'Abrir menu'
  )
})

document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Abrir menu')
  })
})

themeButton.addEventListener('click', () => {
  const darkMode = document.body.classList.toggle('dark')

  themeButton.textContent = darkMode ? '☀️' : '🌙'
themeButton.title = darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'
  themeButton.setAttribute(
    'aria-label',
    darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'
  )
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  feedback.hidden = false
  feedback.textContent = 'Mensagem enviada com sucesso!'
  feedback.classList.add('success')

  form.reset()
})