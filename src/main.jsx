import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  {
    title: "Olympos Restaurant",
    type: "Fullstack",
    text: "A modern restaurant platform with a menu, animations, and responsive design..",
    tech: "React • Node.js • CSS",
    github: "https://restoran-virid-eta.vercel.app/"
  },
  {
    title: "Tea",
    type: "E-Commerce",
    text: "Product catalog, shopping cart, search, and backend API.",
    tech: "Js, Html,css",
    github: "https://tea-five-psi.vercel.app/"
  },
  {
    title: "Jele",
    type: "Web App",
    text: "A beautiful selection of jelly cakes with elegant combinations..",
    tech: "JavaScript • Html •css",
    github: "https://jele-fawn.vercel.app/"
  },
  {
    title: "Flowers",
    type: "Web App",
    text: "A perfect blend of elegance and beauty in one place.",
    tech: "JavaScript • Html • Css",
    github: "https://caxikner.vercel.app/"
  },
  {
    title: "Export Agency",
    type: "Web App",
    text: "Export and Import.",
    tech: "JavaScript • html • css",
    github: "https://artahanman-gorcakalutyun.vercel.app/"
  },
  {
    title: "Rom",
    type: "Web App",
    text: "An interactive archive of historical materials with cards and filters..",
    tech: "JavaScript • html • css",
    github: "https://rome-psi-orcin.vercel.app/"
  }
];

const skills = [
  ["HTML5", 95], ["CSS3", 92], ["JavaScript", 90], ["React", 88],
  ["Node.js", 82], ["Express", 80], ["REST API", 84], ["Git / GitHub", 85]
];

function App() {
  const [active, setActive] = useState("home");
  const [sent, setSent] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "skills", "works", "education", "info", "contacts"];
      const y = window.scrollY + 180;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  async function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    } catch (_) {}
    e.currentTarget.reset();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <div className="site-shell">
      <div className="grain" />
      <header className="navbar">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">RZ</span>
          <span><b>Ruben Zeytnaghyan</b><small>FULLSTACK DEVELOPER</small></span>
        </button>
        <button className="menu-btn" onClick={() => setMenu(!menu)}>☰</button>
        <nav className={menu ? "nav open" : "nav"}>
          {[
            ["home","Home"],["about","About"],["skills","Skills"],
            ["works","Works & Projects"],["education","Education"],["info","My info"],["contacts","Contacts"]
          ].map(([id,label]) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>{label}</button>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">✦ ΧΑΙΡΕ / WELCOME TO MY DIGITAL PONTOS</div>
            <h1>Fullstack<br /><em>Web Developer</em></h1>
            <p>I build fast, modern, and beautiful web applications using React + Node.js, with a modern digital interpretation of the ancient symbols of Pontus.</p>
            <div className="hero-actions">
              <button className="gold-btn" onClick={() => go("works")}>View Projects <span>→</span></button>
              <button className="ghost-btn" onClick={() => go("contacts")}>Contact Me</button>
            </div>
            <div className="hero-stats">
              <div><strong>08+</strong><span>TECHNOLOGIES</span></div>
              <div><strong>∞</strong><span>IDEAS</span></div>
              <div><strong>24/7</strong><span>LEARNING</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="sun-disc" />
            <div className="column left-column"><i/><i/><i/></div>
            <div className="column right-column"><i/><i/><i/></div>
            <div className="laurel">✦</div>
            <div className="hero-card">
              <img src="/assets/Logo.png" alt="" />
            </div>
          </div>
        </section>

        <section id="about" className="section parchment">
          <div className="section-heading"><span>01</span><div><small>THE DEVELOPER</small><h2>About Me</h2></div></div>
          <div className="about-grid">
            <div className="portrait">
              <div className="portrait-inner"><span>Π</span><strong>FULLSTACK</strong><small>DEVELOPER</small></div>
            </div>
            <div className="about-text">
              <p className="lead">I am a web developer who loves combining technology with strong design and historical aesthetics.</p>
              <p>My main focus is Fullstack Development. On the frontend, I create React interfaces, while on the backend, I build Node.js / Express APIs.</p>
              <div className="quote">“ΤΟΛΜΑ — Create boldly, learn continuously.”</div>
              <div className="about-points"><span>✓ Clean Code</span><span>✓ Responsive UI</span><span>✓ API Integration</span><span>✓ Creative Design</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-heading light"><span>02</span><div><small>MY ARSENAL</small><h2>Skills</h2></div></div>
          <div className="skills-grid">
            {skills.map(([name,val]) => <div className="skill" key={name}>
              <div><b>{name}</b><span>{val}%</span></div>
              <div className="bar"><i style={{width: `${val}%`}} /></div>
            </div>)}
          </div>
          <div className="tech-stones">
            <span>REACT</span><span>NODE</span><span>JS</span><span>HTML</span><span>CSS</span><span>EXPRESS</span>
          </div>
        </section>

        <section id="works" className="section parchment">
          <div className="section-heading"><span>03</span><div><small>SELECTED WORK</small><h2>Works & Projects</h2></div></div>
          <div className="project-grid">
            {projects.map((p,i) => <article className="project" key={p.title}>
              <div className="project-top"><span>0{i+1}</span><span>{p.type}</span></div>
              <div className="project-icon">{["⚔","⚱","☼"][i]}</div>
              <h3>{p.title}</h3><p>{p.text}</p><small>{p.tech}</small>
              <a href={p.github}>View</a>
            </article>)}
          </div>
        </section>

        <section id="education" className="section stone-section">
          <div className="section-heading"><span>04</span><div><small>KNOWLEDGE TEMPLE</small><h2>Education Info</h2></div></div>
          <div className="timeline">
            <div className="timeline-item"><span>01</span><div><small>WEB DEVELOPMENT</small><h3>Frontend & Backend Development</h3><p>HTML, CSS, JavaScript, React, Node.js, Express, REST API և Git.</p></div></div>
            <div className="timeline-item"><span>02</span><div><small>CONTINUOUS LEARNING</small><h3>Modern JavaScript Ecosystem</h3><p>Code Architecture, component design, API integration և responsive interfaces։</p></div></div>
            <div className="timeline-item"><span>03</span><div><small>PERSONAL DEVELOPMENT</small><h3>Practice • Projects • Growth</h3><p>Continuous knowledge development through real-world projects.։</p></div></div>
          </div>
        </section>

        
        <section id="info" className="section info-section">
          <div className="section-heading">
            <span>05</span>
            <div><small>PERSONAL DETAILS</small><h2>Personal Information</h2></div>
          </div>

          <div className="info-grid">
            <div className="info-intro">
              <div className="info-emblem">Π</div>
              <div>
                <small>FULLSTACK WEB DEVELOPER</small>
                <h3>First Name Last Name</h3>
                <p>Add your brief professional description here.</p>
              </div>
            </div>

            <div className="info-list">
              <div className="info-row"><span>👤 First Name Last Name</span><b>Ruben Zeytnaghyan</b></div>
              <div className="info-row"><span>📞 Phone</span><b>+374 99961606</b></div>
              <div className="info-row"><span>✉ Email</span><b>ruben.zeytnaxyan@email.ru</b></div>
              <div className="info-row"><span>📍 Location</span><b>Yerevan, Armenia</b></div>
              <div className="info-row"><span>💻 GitHub</span><b>github.com/rubenzeytnagyan94</b></div>
            </div>
          </div>

          <div className="cv-box">
            <div>
              <span className="cv-symbol">▣</span>
              <div>
                <small>MY PROFESSIONAL DOCUMENT</small>
                <h3>My CV / Resume</h3>
                <p>Your PDF CV-ն Insert / Add <b>public/assets/CV.pdf</b> By name</p>
              </div>
            </div>
            <a className="gold-btn cv-btn" href="/assets/CV.pdf" download="CV.pdf">
               download CV <span>↓</span>
            </a>
          </div>
        </section>

<section id="contacts" className="section contact-section">
          <div className="contact-decor">⚖</div>
          <div className="section-heading light"><span>06</span><div><small>OPEN THE GATES</small><h2>Contacts</h2></div></div>
          <div className="contact-grid">
            <div><h3>Let's build something legendary.</h3><p>If you have an idea or a website project, feel free to reach out to me.</p><div className="contact-lines"><p>✉ hello@pontos.dev</p><p>⌘ github.com/yourusername</p><p>◉ Yerevan, Armenia</p></div></div>
            <form onSubmit={submit}>
              <input name="name" required placeholder="Քո անունը" />
              <input name="email" required type="email" placeholder="Էլ․ փոստ" />
              <textarea name="message" required placeholder="About the Project..." rows="5" />
              <button className="gold-btn" type="submit">Send Message →</button>
              {sent && <div className="success">Message Sent</div>}
            </form>
          </div>
        </section>
      </main>

      <footer><div>Π PONTOS</div><p>© 2026 Fullstack Developer Portfolio • Built with React & Node.js</p><div>ΑΡΧΗ • ΤΕΧΝΗ • ΚΩΔΙΚΑΣ</div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
