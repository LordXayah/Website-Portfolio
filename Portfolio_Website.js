/* ============ RE-STRUCTURED INVENTORY DATA ============ */
const skillsData = [
  { group: "Front-End Development", tags: ["HTML", "CSS", "JavaScript"] },
  { group: "Back-End Development", tags: ["Java", "MongoDB", "SQL", "PHP", "Node.js", "MySQL"] },
  { group: "UI/UX & Design", tags: ["Figma", "Photoshop","Canva"] },
  { group: "Mobile Development", tags: ["Android Studio", "React Native"] },
  { group: "Video & Content Editing", tags: ["CapCut", "Color Grading", "Motion Graphics", "Audio Cleanup"] },
  { group: "Professional Stack", tags: ["Business Analysis", "Social Media Mgmt", "Team Collaboration", "Excel / Sheets"] }
];

const projectsData = [
  { num: "01", date: "May 2026", name: "Wordy Game", role: "Back-end & Front-end Developer", desc: "A competitive word-formation game built with Java and MySQL. Players form words from random letters to beat their opponent, with user authentication, score tracking, and a dynamic dictionary powered by a MySQL database.", stack: ["Java", "MySQL"] },
  { num: "02", date: "Jan 2026 – April 2026", name: "Lost & Found System", role: "Back-end & Front-end Developer", desc: "A Java-based system for Saint Louis University's OSA that digitizes lost and found item management. It enables logging, searching, and claiming items with persistent data storage using file I/O.A Lost & Found System developed for the Saint Louis University Maryheights Campus ", stack: ["Java"] },
  { num: "03", date: "Sept 2025 – Feb 2026", name: "SAMCIS Marketplace", role: "Business Analyst · Front-end Developer", desc: "A student and faculty-restricted e-commerce platform developed for the Saint Louis University Maryheights Campus. Aligned technical criteria with consumer requirements through business analysis matrices, and contributed to interface assembly in a team infrastructure[cite: 3, 4].", stack: ["React", "Node.js", "MongoDB", "Java", "Business Analysis"] },
  { num: "04", date: "May 2025", name: "ReserveIT", role: "Android Developer", desc: "An open-laboratory reservation and scheduling environment application built with Android Studio for Saint Louis University. Streamlines operations and minimizes double-booking criteria .", stack: ["Android Studio", "Java", "Mobile Dev"] },
  { num: "05", date: "Dec 2024", name: "Ride Revamp", role: "Front-end Developer", desc: "A web platform connecting consumers handling faulty vehicle assemblies with the closest mechanics. Features a user-friendly custom booking dynamic.", stack: ["HTML", "CSS", "JavaScript"] },
  { num: "06", date: "Jan 2024", name: "School Website", role: "Front-end Developer", desc: "A crisp structural informational landing site project highlighting clean semantic architecture layout configurations.", stack: ["HTML", "CSS", "Web Design"] }
];

const experienceData = [
  { period: "Jan 2026 – May 2026", name: "Social Media Manager", org: "Freelance / Remote", bullets: ["Managed multiple production YouTube vectors — processing assets, micro-scheduling, and handling thumbnail graphics", "Evaluated account growth metrics and delivery output using custom spreadsheets", "Coordinated dynamic calendar queues to maximize subscriber retention pipelines"] },
  { period: "Sept 2024 – Jan 2025", name: "Video Editor", org: "Freelance / Remote", bullets: ["Processed cinematic short clips, YouTube series assets, motivational shorts, and podcasts from raw timelines", "Polished visual elements via custom color grading layouts, audio scrubbing, and tracking typography layers", "Generated delivery parameters optimized specifically for diverse target hosting configurations"] },
  { period: "May 2022 – May 2023", name: "CapCut Content Creator", org: "Self-Directed", bullets: ["Grew an organic short-form asset profile to nearly 100,000 subscribers inside a single year deployment", "Curated text synchronizations and atmospheric filters matching strict user intent metrics", "Audited algorithmic trend shifts to sustain top-tier visibility cycles"] }
];

const servicesData = [
  { icon: "🎥", title: "Video Editing", desc: "High-impact short-form and high-fidelity long-form video editing.", features: ["Color Grading Correction", "Animation & Transition"] },
  { icon: "💻", title: "Web Development", desc: "Responsive front-end rendering layouts and structural back-end configurations built for fast, semantic terminal operations.", features: ["Dynamic Responsive Interfaces", "API Configuration Paths", "Secure Database Schemes"] },
  { icon: "📈", title: "Social Media Management", desc: "End-to-end multi-platform channel scaling, metric reporting, thumbnail configurations, and custom calendar content lifecycle development.", features: ["Content Lifecycle Mapping", "Performance Metrics Auditing"] }
];

const certsData = [
  { title: "AI Ready ASEAN Youth Challenge", issuer: "Certificate of Appreciation", date: "May 2026", icon: "🏅" },
  { title: "Best in Video Editing", issuer: "Rosales National High School — ICT Achievement", date: "May 2024", icon: "🏆" },
  { title: "PowerPoint Prototype Website Hyperlink Setup", issuer: "RNHS ICT — 5th Place Ribbon", date: "Feb 2024 ", icon: "🥈" },
  { title: "Web Designing Competition", issuer: "Rosales National High School — Entry Portfolio", date: "Feb 2024", icon: "📜" },
  { title: "Photoshop Designing Assembly", issuer: "RNHS ICT Competition Entry", date: "Feb 2024", icon: "📜" }
];

/* ============ DYNAMIC INTERFACE ASSEMBLER ============ */
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Generate Skills Inventory Modules
  const skGrid = document.getElementById("skillsGrid");
  skillsData.forEach(sk => {
    const pills = sk.tags.map(t => `<span class="skill-pill">${t}</span>`).join('');
    skGrid.innerHTML += `
      <div class="skill-card reveal">
        <div class="skill-group-title">${sk.group}</div>
        <div class="skill-tags-container">${pills}</div>
      </div>`;
  });

  // 2. Generate Project Grid Display Elements
  const projGrid = document.getElementById("projectsGrid");
  projectsData.forEach(p => {
    const stackHTML = p.stack.map(s => `<span class="stack-badge">${s}</span>`).join('');
    projGrid.innerHTML += `
      <div class="project-card reveal">
        <div class="project-thumb">
          <div class="project-thumb-bg"></div>
          <div class="project-thumb-dots"></div>
          <span class="project-num-marker">${p.num}</span>
          <span class="project-date-badge">${p.date}</span>
        </div>
        <div class="project-body">
          <div class="project-title">${p.name}</div>
          <div class="project-role">${p.role}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-stack">${stackHTML}</div>
        </div>
      </div>`;
  });

  // 3. Generate Timeline Sequence
  const timelineGrid = document.getElementById("experienceTimeline");
  experienceData.forEach(e => {
    const bulletsHTML = e.bullets.map(b => `<li>${b}</li>`).join('');
    timelineGrid.innerHTML += `
      <div class="timeline-item reveal">
        <div class="time-period">${e.period.replace(" – ", "<br>– ")}</div>
        <div class="time-content">
          <h3>${e.name}</h3>
          <div class="time-org">${e.org}</div>
          <ul class="time-bullets">${bulletsHTML}</ul>
        </div>
      </div>`;
  });

  // 4. Generate Professional Service Offerings
  const srvGrid = document.getElementById("servicesGrid");
  servicesData.forEach(srv => {
    const featuresHTML = srv.features.map(f => `<li>${f}</li>`).join('');
    srvGrid.innerHTML += `
      <div class="service-card reveal">
        <div class="service-icon-box">${srv.icon}</div>
        <h3>${srv.title}</h3>
        <p>${srv.desc}</p>
        <ul class="service-bullet-list">${featuresHTML}</ul>
      </div>`;
  });

  // 5. Generate Certifications
  const certsGrid = document.getElementById("certsGrid");
  certsData.forEach(c => {
    certsGrid.innerHTML += `
      <div class="cert-card reveal">
        <div class="cert-icon">${c.icon}</div>
        <div class="cert-info">
          <div class="cert-title">${c.title}</div>
          <div class="cert-issuer">${c.issuer}</div>
          <div class="cert-date">📅 ${c.date}</div>
        </div>
      </div>`;
  });

  /* ============ ENGINE TRIGGERS ============ */

  // Setup Automated Metric Aggregators
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(cnt => {
    const key = cnt.getAttribute('data-count');
    if (key === 'projects') cnt.setAttribute('data-count', projectsData.length);
    if (key === 'skills') {
      const flatCount = skillsData.reduce((acc, curr) => acc + curr.tags.length, 0);
      cnt.setAttribute('data-count', flatCount);
    }
  });

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.count;
        let runningTotal = 0;
        const speedFactor = target > 0 ? Math.max(target / 40, 1) : 0;
        const intervalTimer = setInterval(() => {
          runningTotal = Math.min(runningTotal + speedFactor, target);
          entry.target.textContent = Math.floor(runningTotal) + (target > 5 ? "+" : "");
          if (runningTotal >= target) clearInterval(intervalTimer);
        }, 40);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(c => countObserver.observe(c));

  // Typographic Ticker Node Array Loop
  const phrases = ['Full-Stack Developer', 'UI/UX Specialist', 'Social Media Manager', 'Video Production Editor', 'Mobile App Engineer'];
  let currentPhraseIdx = 0, currentLetterIdx = 0, isDeleting = false;
  const targetTypingElement = document.getElementById('typingText');
  
  function typeRoutine() {
    const fullText = phrases[currentPhraseIdx];
    if (!isDeleting) {
      targetTypingElement.innerHTML = fullText.slice(0, ++currentLetterIdx) + '<span class="type-cursor"> </span>';
      if (currentLetterIdx === fullText.length) { isDeleting = true; setTimeout(typeRoutine, 1800); return; }
    } else {
      targetTypingElement.innerHTML = fullText.slice(0, --currentLetterIdx) + '<span class="type-cursor"> </span>';
      if (currentLetterIdx === 0) { isDeleting = false; currentPhraseIdx = (currentPhraseIdx + 1) % phrases.length; }
    }
    setTimeout(typeRoutine, isDeleting ? 50 : 90);
  }
  typeRoutine();

  // Scroll View Reveal Core Activator 
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

/* ============ VISUAL INTERACTIONS & GLOBAL MOTIONS ============ */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let clientX = 0, clientY = 0, trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
  clientX = e.clientX; clientY = e.clientY;
  cursor.style.left = clientX - 6 + 'px';
  cursor.style.top = clientY - 6 + 'px';
});

function animateTrail() {
  trailX += (clientX - trailX) * 0.12;
  trailY += (clientY - trailY) * 0.12;
  trail.style.left = trailX - 18 + 'px';
  trail.style.top = trailY - 18 + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Parallax Ambient Light Trackers
document.addEventListener('mousemove', e => {
  const dx = (e.clientX / window.innerWidth - 0.5) * 30;
  const dy = (e.clientY / window.innerHeight - 0.5) * 30;
  document.querySelector('.orb1').style.transform = `translate(${dx}px, ${dy}px)`;
  document.querySelector('.orb2').style.transform = `translate(${-dx}px, ${-dy}px)`;
});

// Dynamic Scroll Trackers 
window.addEventListener('scroll', () => {
  const progressLine = document.getElementById('progress');
  const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
  progressLine.style.width = (window.scrollY / maxScrollableHeight * 100) + '%';
  
  const navbarElement = document.getElementById('navbar');
  navbarElement.style.boxShadow = window.scrollY > 50 ? 'var(--shadow)' : 'none';
}, { passive: true });

// Theme Switching Operations
function toggleTheme() {
  const currentMode = document.documentElement.getAttribute('data-theme');
  const targetMode = currentMode === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetMode);
  localStorage.setItem('irc-theme', targetMode);
}
const savedModeSelection = localStorage.getItem('irc-theme');
if (savedModeSelection) document.documentElement.setAttribute('data-theme', savedModeSelection);

// Mobile Responsive Navigation Sidebar Sliders
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Particle Canvas Generator Engine
const dynamicParticleBox = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const activeParticleNode = document.createElement('div');
  activeParticleNode.className = 'particle';
  const size = Math.random() * 3 + 1;
  activeParticleNode.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${size}px; height: ${size}px;
    animation-duration: ${Math.random() * 12 + 8}s;
    animation-delay: ${Math.random() * 10}s;
    --drift: ${(Math.random() - 0.5) * 160}px;
    opacity: ${Math.random() * 0.4};
  `;
  dynamicParticleBox.appendChild(activeParticleNode);
}