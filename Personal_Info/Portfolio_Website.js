/* ============ DATA ============ */
const skills = [
  { name: 'HTML5', icon: '🌐', level: 90, color: '#E34F26' },
  { name: 'CSS3', icon: '🎨', level: 85, color: '#1572B6' },
  { name: 'JavaScript', icon: '⚡', level: 60, color: '#F7DF1E' },
  { name: 'Java', icon: '☕', level: 70, color: '#ED8B00' },
  { name: 'PHP', icon: '🐘', level: 10, color: '#777BB4' },
  { name: 'MySQL', icon: '🗄️', level: 20, color: '#4479A1' },
  { name: 'React', icon: '⚛️', level: 30, color: '#61DAFB' },
  { name: 'Node.js', icon: '🟢', level: 40, color: '#339933' },
  { name: 'Git', icon: '🔀', level: 60, color: '#F05032' },
  { name: 'MongoDB', icon: '🍃', level: 40, color: '#47A248' },
  { name: 'Figma', icon: '✏️', level: 50, color: '#F24E1E' },

];

const projects = [
  {
    icon: '🛒', gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
    tags: [{ label: 'Web App', cls: 'tag-blue' }, { label: 'Full-Stack', cls: 'tag-purple' }],
    title: 'SAMCIS Marketplace',
    desc: 'Developing an e-commerce with my team for the students and faculties only of the Saint Louis University Maryheights Campuse',
    stack: ['React', 'Node.js', 'MongoDB', 'Java', 'TypeScript','CSS', 'JavaScript'],
    github: '#', demo: '#', 
  }
];

const certs = [
  { icon: '🏅', title: ' PowerPoint Presentation (Prototype Website Hyperlink) ', issuer: 'Rosales National High School - ICT', date: '2024', verified: true },
  { icon: '🏅', title: 'Web Designing', issuer: 'Rosales National High School - ICT', date: '2024', verified: true },
  { icon: '🏅', title: 'Photoshop Designing', issuer: 'Rosales National High School - ICT', date: '2024', verified: true },
  { icon: '🏅', title: 'Best in Video Editing', issuer: 'Rosales National High School - ICT', date: '2024', verified: true },
  { icon: '🏅', title: 'Photoshop Designing', issuer: 'Rosales National High School - ICT', date: '2023', verified: true },
  ];

/* ============ RENDER SKILLS ============ */
const sg = document.getElementById('skillsGrid');
skills.forEach((s, i) => {
  sg.innerHTML += `
    <div class="skill-card reveal" style="transition-delay:${i * 0.05}s">
      <span class="skill-icon">${s.icon}</span>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level"><div class="skill-level-fill" data-level="${s.level}"></div></div>
    </div>`;
});

/* ============ RENDER PROJECTS ============ */
const pg = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  const tags = p.tags.map(t => `<span class="project-tag ${t.cls}">${t.label}</span>`).join('');
  const stack = p.stack.map(s => `<span class="stack-badge">${s}</span>`).join('');
  pg.innerHTML += `
    <div class="project-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="project-thumb">
        <div class="project-thumb-bg" style="background:${p.gradient}; position:absolute;inset:0;"></div>
        <div class="project-thumb-dots"></div>
        <div class="project-tag-row">${tags}</div>
        <div class="project-thumb-icon">${p.icon}</div>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-stack">${stack}</div>
        <div class="project-links">
          <a href="${p.github}" class="project-link"><i class="fab fa-github"></i> Source</a>
          <a href="${p.demo}" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
      </div>
    </div>`;
});

/* ============ RENDER CERTS ============ */
const cg = document.getElementById('certsGrid');
certs.forEach((c, i) => {
  cg.innerHTML += `
    <div class="cert-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-info">
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-date">📅 ${c.date}</div>
        ${c.verified ? '<div class="cert-verify"><i class="fas fa-check-circle"></i> Verified</div>' : ''}
      </div>
    </div>`;
});

/* ============ TYPING EFFECT ============ */
const phrases = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Network Engineer', 'Database Designer', 'Creative Coder'];
let pi = 0, ci = 0, del = false;
const el = document.getElementById('typingText');
function type() {
  const phrase = phrases[pi];
  if (!del) {
    el.innerHTML = phrase.slice(0, ++ci) + '<span class="type-cursor"> </span>';
    if (ci === phrase.length) { del = true; setTimeout(type, 1800); return; }
  } else {
    el.innerHTML = phrase.slice(0, --ci) + '<span class="type-cursor"> </span>';
    if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, del ? 60 : 100);
}
type();

/* ============ SCROLL REVEAL ============ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      e.target.querySelectorAll('.skill-level-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============ COUNTER ANIMATION ============ */
const counters = document.querySelectorAll('[data-count]');
const cObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = +e.target.dataset.count;
      let cur = 0;
      const inc = target / 40;
      const t = setInterval(() => {
        cur = Math.min(cur + inc, target);
        e.target.textContent = Math.floor(cur) + '+';
        if (cur >= target) clearInterval(t);
      }, 40);
      cObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => cObserver.observe(c));

/* ============ CURSOR ============ */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});
function animTrail() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx - 18 + 'px';
  trail.style.top = ty - 18 + 'px';
  requestAnimationFrame(animTrail);
}
animTrail();
document.querySelectorAll('a,button,.skill-card,.project-card,.cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; trail.style.transform = 'scale(0.5)'; });
  el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; trail.style.transform = 'scale(1)'; });
});

/* ============ SCROLL PROGRESS ============ */
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - innerHeight;
  progress.style.width = (scrollY / total * 100) + '%';
});

/* ============ NAV SCROLL ============ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = scrollY > 50 ? 'var(--shadow)' : 'none';
});

/* ============ THEME ============ */
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
}
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.dataset.theme = saved;

/* ============ MOBILE MENU ============ */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ============ PARTICLES ============ */
const pc = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 3 + 1;
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${size}px; height: ${size}px;
    animation-duration: ${Math.random() * 15 + 10}s;
    animation-delay: ${Math.random() * 15}s;
    --drift: ${(Math.random() - 0.5) * 200}px;
    opacity: ${Math.random() * 0.5};
  `;
  pc.appendChild(p);
}

/* ============ PARALLAX ORBS ============ */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / innerWidth - 0.5) * 30;
  const y = (e.clientY / innerHeight - 0.5) * 30;
  document.querySelector('.orb1').style.transform = `translate(${x}px, ${y}px)`;
  document.querySelector('.orb2').style.transform = `translate(${-x}px, ${-y}px)`;
});