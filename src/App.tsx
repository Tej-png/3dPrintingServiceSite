import './App.css'

function App(): JSX.Element {
  return (
    <div className="site">
      <header className="navbar">
        <div className="container inner">
          <a className="brand" href="#home" aria-label="Acme Home">
            <span className="brand-mark" aria-hidden="true"></span>
            <span>Acme</span>
          </a>
          <nav className="nav-links" aria-label="Primary Navigation">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="btn">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container inner">
            <div>
              <div className="kicker">Introducing the new Acme Starter</div>
              <h1>Build modern sites faster with a beautiful React template</h1>
              <p>Production-ready structure, delightful defaults, and accessible components. Ship a polished marketing site in hours, not days.</p>
              <div className="hero-actions">
                <a href="#get-started" className="btn btn-primary">Get Started</a>
                <a href="#features" className="btn">Explore Features</a>
              </div>
              <div className="badge-row">
                <span className="badge">React + Vite</span>
                <span className="badge">Accessible</span>
                <span className="badge">Responsive</span>
                <span className="badge">Dark UI</span>
              </div>
            </div>

            <div className="hero-card" role="img" aria-label="Product preview card">
              <div className="glow" aria-hidden="true"></div>
              <div className="content">
                <div style={{display:'grid', gap: '12px'}}>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                    <div className="metric">
                      <h3>98%</h3>
                      <p>Performance</p>
                    </div>
                    <div className="metric">
                      <h3>100</h3>
                      <p>Accessibility</p>
                    </div>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
                    <div className="metric">
                      <h3>0.6s</h3>
                      <p>TTI</p>
                    </div>
                    <div className="metric">
                      <h3>99</h3>
                      <p>Best Practices</p>
                    </div>
                    <div className="metric">
                      <h3>SEO</h3>
                      <p>Friendly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2>Everything you need</h2>
            <p className="lead">A sensible structure and polished UI so you can focus on content and product.</p>
            <div className="features">
              <article className="feature">
                <h3>Clean structure</h3>
                <p>Use a minimal file layout with clear entry points to keep your site maintainable.</p>
              </article>
              <article className="feature">
                <h3>Modern design</h3>
                <p>Elegant dark theme with accent colors, subtle depth and refined typography.</p>
              </article>
              <article className="feature">
                <h3>Fast by default</h3>
                <p>Vite-powered dev server and production build for instant feedback and tiny bundles.</p>
              </article>
              <article className="feature">
                <h3>Accessible</h3>
                <p>Semantic HTML, clear focus styles and strong contrast to support every user.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="cta">
          <div className="container">
            <div className="panel">
              <h2>Ready to launch?</h2>
              <p>Start with this template and customize it to your brand. Deploy anywhere.</p>
              <a href="#get-started" className="btn btn-primary">Use Template</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container inner">
          <span className="brand" aria-label="Acme">
            <span className="brand-mark" aria-hidden="true"></span>
            <span>Acme</span>
          </span>
          <p>© {new Date().getFullYear()} Acme. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App