// ---------- Translations ----------
const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.work": "Projets",
    "nav.contact": "Contact",
    "hero.greeting": "Bonjour, je suis",
    "hero.tagline": "Spécialiste en",
    "hero.subtitle": "Sécurité offensive &amp; défensive — audits, pentest, SOC Wazuh/Fortigate.",
    "hero.cta": "Voir mes projets",
    "hero.cta2": "Me contacter",
    "hero.scroll": "Scroll",
    "avatar.caption": "Système initialisé. Prêt quand vous l'êtes.",
    "about.eyebrow": "À propos",
    "about.title": "À propos de moi",
    "about.text": "Passionné de cybersécurité, en formation à Epitech Bénin (promo 2028). Formé sur le terrain&nbsp;: audits de sécurité, pentest et SOC Wazuh chez Euphorbia Group, SOC/Fortigate chez Talentys Cybersecurity. Solide culture réseaux et virtualisation (Proxmox, VMware), rigueur forgée par une expérience militaire. Objectif&nbsp;: évoluer vers l'audit et l'ingénierie cybersécurité.",
    "about.stat1": "ans dans la cybersécurité",
    "about.stat2": "stages cybersécurité",
    "about.stat3": "ans d'expérience militaire",
    "about.stat4": "niveau d'anglais",
    "whatido.eyebrow": "Compétences",
    "whatido.title": "CE QUE JE FAIS",
    "whatido.off.title": "SÉCURITÉ OFFENSIVE",
    "whatido.off.desc": "Reconnaissance, énumération et tests d'intrusion&nbsp;: penser comme un attaquant pour trouver les failles avant qu'elles ne soient exploitées — challenges boot2root, CTF et audits réels.",
    "whatido.def.title": "SÉCURITÉ DÉFENSIVE",
    "whatido.def.desc": "Surveillance, détection et réponse&nbsp;: supervision SOC avec Wazuh (SIEM), pare-feu Fortigate, analyse de logs, infrastructure et annuaire sécurisés.",
    "tag.pentesting": "Pentesting",
    "tag.recon": "Reconnaissance &amp; énumération",
    "tag.ctf": "CTF / Boot2root",
    "tag.stegano": "Stéganographie",
    "tag.netsec": "Sécurité réseau",
    "tag.wazuh": "Wazuh (SIEM)",
    "tag.fortigate": "Fortigate",
    "tag.logs": "Analyse de logs",
    "tag.ad": "Active Directory",
    "tag.virtu": "Proxmox / Ceph / Virtualisation",
    "career.eyebrow": "Parcours",
    "career.title": "Mon parcours &amp; expériences",
    "career.job1.role": "Accompagnateur pédagogique",
    "career.job1.desc": "Accompagnement des étudiants dans leur cursus, amélioration de l'expérience campus et des relations parents-administration-étudiants.",
    "career.job2.role": "Stagiaire DSI — Système d'Information &amp; Sécurité",
    "career.job2.desc": "Audits de sécurité externe/interne, SOC Wazuh sur Proxmox (agents, dashboard, tests d'attaque brute force/FIM), infrastructure hyperconvergée Proxmox + Ceph et synchronisation Active Directory.",
    "career.job3.year": "Depuis 2023",
    "career.job3.role": "Chef de Projets",
    "career.job3.desc": "Réalisation de challenges cybersécurité, jeux RPG &amp; Arcade, boot2root, stéganographie et CTF.",
    "career.job4.role": "Stagiaire SOC (Security Operation Center)",
    "career.job4.desc": "Installation et configuration d'un pare-feu Fortigate, analyse de logs et détection d'anomalies réseau.",
    "career.job5.role": "Marin Militaire",
    "career.job5.desc": "Stages maritimes et formation militaire — rigueur, discipline et gestion d'équipe sur le terrain.",
    "career.education.title": "Formation",
    "career.edu1": "Bachelor en Expertise Informatique — EPITECH Cotonou",
    "career.edu2": "Formation Militaire — École Royale Militaire (ERM), Bruxelles",
    "career.edu3": "Baccalauréat Scientifique, Série C — EMPT Bingerville",
    "work.eyebrow": "Projets",
    "work.title": "Mes Projets",
    "work.p1.title": "SOC Wazuh &amp; Simulation d'attaques",
    "work.p1.cat": "Blue Team · SOC",
    "work.p1.desc": "Déploiement d'agents Wazuh sur infrastructure Proxmox, mise en place du dashboard SIEM et tests d'attaque (brute force, FIM) pour valider la détection.",
    "work.p2.title": "Infrastructure hyperconvergée",
    "work.p2.cat": "Infrastructure",
    "work.p2.desc": "Mise en place d'une infrastructure Proxmox + Ceph et synchronisation Active Directory pour centraliser l'identité et le stockage.",
    "work.p3.title": "Déploiement pare-feu Fortigate",
    "work.p3.cat": "Network Security",
    "work.p3.desc": "Installation et configuration d'un pare-feu Fortigate, suivie d'une analyse continue des logs pour détecter les anomalies réseau.",
    "work.p4.title": "Audits de sécurité internes/externes",
    "work.p4.cat": "Pentest",
    "work.p4.desc": "Identification de failles sur des périmètres internes et externes, avec propositions de remédiation priorisées.",
    "work.p5.title": "CTF, Boot2root &amp; Stéganographie",
    "work.p5.cat": "Red Team · CTF",
    "work.p5.desc": "Création et résolution de challenges CTF, machines boot2root et exercices de stéganographie, ainsi que de jeux RPG &amp; Arcade.",
    "work.note": "* Études de cas détaillées à venir.",
    "tech.eyebrow": "Stack",
    "tech.title": "Ma Stack Technique",
    "tech.g1": "Cybersécurité",
    "tech.g2": "Programmation",
    "tech.g3": "Réseau &amp; Infrastructure",
    "tech.g4": "Outils",
    "tech.logs2": "Analyse de logs",
    "tech.recon2": "Reconnaissance &amp; énumération",
    "tech.netsec2": "Sécurité réseau",
    "tech.netarch": "Architecture réseau",
    "tech.virtu2": "Virtualisation",
    "contact.eyebrow": "Contact",
    "contact.title": "Discutons",
    "contact.subtitle": "Disponible pour des stages, missions pentest/SOC ou collaborations.",
    "contact.email.label": "Email",
    "contact.phone.label": "Téléphone",
    "contact.location.label": "Localisation",
    "contact.social.label": "Réseaux",
    "footer.text": "Conçu et développé par"
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "hero.greeting": "Hello! I'm",
    "hero.tagline": "A specialist in",
    "hero.subtitle": "Offensive &amp; defensive security — audits, pentesting, SOC Wazuh/Fortigate.",
    "hero.cta": "See my work",
    "hero.cta2": "Get in touch",
    "hero.scroll": "Scroll",
    "avatar.caption": "System initialized. Ready when you are.",
    "about.eyebrow": "About",
    "about.title": "About Me",
    "about.text": "Cybersecurity enthusiast, currently studying at Epitech Benin (class of 2028). Trained in the field: security audits, pentesting and SOC Wazuh at Euphorbia Group, SOC/Fortigate at Talentys Cybersecurity. Strong background in networking and virtualization (Proxmox, VMware), with rigor forged by military experience. Goal: grow into security auditing and cybersecurity engineering.",
    "about.stat1": "years in cybersecurity",
    "about.stat2": "cybersecurity internships",
    "about.stat3": "years of military experience",
    "about.stat4": "English level",
    "whatido.eyebrow": "Skills",
    "whatido.title": "WHAT I DO",
    "whatido.off.title": "OFFENSIVE SECURITY",
    "whatido.off.desc": "Reconnaissance, enumeration and penetration testing: thinking like an attacker to find the flaws before they're exploited — boot2root challenges, CTFs and real-world audits.",
    "whatido.def.title": "DEFENSIVE SECURITY",
    "whatido.def.desc": "Monitoring, detection and response: SOC supervision with Wazuh (SIEM), Fortigate firewall, log analysis, secured infrastructure and directory services.",
    "tag.pentesting": "Pentesting",
    "tag.recon": "Reconnaissance &amp; Enumeration",
    "tag.ctf": "CTF / Boot2root",
    "tag.stegano": "Steganography",
    "tag.netsec": "Network Security",
    "tag.wazuh": "Wazuh (SIEM)",
    "tag.fortigate": "Fortigate",
    "tag.logs": "Log Analysis",
    "tag.ad": "Active Directory",
    "tag.virtu": "Proxmox / Ceph / Virtualization",
    "career.eyebrow": "Career",
    "career.title": "My Career &amp; Experience",
    "career.job1.role": "Student Support &amp; Experience Officer",
    "career.job1.desc": "Supporting students through their curriculum, improving campus experience and parent-administration-student relations.",
    "career.job2.role": "IT &amp; Security Intern (DSI)",
    "career.job2.desc": "Internal/external security audits, SOC Wazuh on Proxmox (agents, dashboard, brute-force/FIM attack testing), Proxmox + Ceph hyperconverged infrastructure and Active Directory synchronization.",
    "career.job3.year": "Since 2023",
    "career.job3.role": "Project Lead",
    "career.job3.desc": "Building cybersecurity challenges, RPG &amp; Arcade games, boot2root machines, steganography and CTF projects.",
    "career.job4.role": "SOC (Security Operation Center) Intern",
    "career.job4.desc": "Fortigate firewall installation and configuration, log analysis and network anomaly detection.",
    "career.job5.role": "Navy Sailor",
    "career.job5.desc": "Maritime deployments and military training — rigor, discipline and on-the-ground team management.",
    "career.education.title": "Education",
    "career.edu1": "Bachelor in IT Expertise — EPITECH Cotonou",
    "career.edu2": "Military Training — Royal Military Academy (ERM), Brussels",
    "career.edu3": "Scientific Baccalaureate, Series C — EMPT Bingerville",
    "work.eyebrow": "Work",
    "work.title": "My Work",
    "work.p1.title": "SOC Wazuh &amp; Attack Simulation",
    "work.p1.cat": "Blue Team · SOC",
    "work.p1.desc": "Deployed Wazuh agents on Proxmox infrastructure, set up the SIEM dashboard and ran attack tests (brute force, FIM) to validate detection.",
    "work.p2.title": "Hyperconverged Infrastructure",
    "work.p2.cat": "Infrastructure",
    "work.p2.desc": "Built a Proxmox + Ceph infrastructure with Active Directory synchronization to centralize identity and storage.",
    "work.p3.title": "Fortigate Firewall Deployment",
    "work.p3.cat": "Network Security",
    "work.p3.desc": "Installed and configured a Fortigate firewall, followed by continuous log analysis to detect network anomalies.",
    "work.p4.title": "Internal/External Security Audits",
    "work.p4.cat": "Pentest",
    "work.p4.desc": "Identified vulnerabilities across internal and external perimeters, with prioritized remediation proposals.",
    "work.p5.title": "CTF, Boot2root &amp; Steganography",
    "work.p5.cat": "Red Team · CTF",
    "work.p5.desc": "Built and solved CTF challenges, boot2root machines and steganography exercises, plus RPG &amp; Arcade games.",
    "work.note": "* Detailed case studies coming soon.",
    "tech.eyebrow": "Stack",
    "tech.title": "My Techstack",
    "tech.g1": "Cybersecurity",
    "tech.g2": "Programming",
    "tech.g3": "Network &amp; Infrastructure",
    "tech.g4": "Tools",
    "tech.logs2": "Log Analysis",
    "tech.recon2": "Reconnaissance &amp; Enumeration",
    "tech.netsec2": "Network Security",
    "tech.netarch": "Network Architecture",
    "tech.virtu2": "Virtualization",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's Talk",
    "contact.subtitle": "Available for internships, pentest/SOC missions or collaborations.",
    "contact.email.label": "Email",
    "contact.phone.label": "Phone",
    "contact.location.label": "Location",
    "contact.social.label": "Social",
    "footer.text": "Designed and developed by"
  }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelector('.lang-fr').classList.toggle('active', lang === 'fr');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');

  const captionEl = document.getElementById('avatarCaptionText');
  if (captionEl) typeText(captionEl, translations[lang]['avatar.caption'], 30);
}

function typeText(el, text, speed = 32) {
  if (el._typeTimer) clearInterval(el._typeTimer);
  el.textContent = '';
  let i = 0;
  el._typeTimer = setInterval(() => {
    i += 1;
    el.textContent = text.slice(0, i);
    if (i >= text.length) clearInterval(el._typeTimer);
  }, speed);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});

applyLang(currentLang);

// ---------- Loader ----------
const loaderBars = document.getElementById('loader-bars');
if (loaderBars) {
  const barCount = 22;
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('span');
    bar.style.animationDelay = (i * 0.07) + 's';
    bar.style.animationDuration = (0.9 + Math.random() * 0.6) + 's';
    loaderBars.appendChild(bar);
  }
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const pctEl = document.getElementById('loader-pct');
  let pct = 0;
  const step = () => {
    pct += Math.floor(Math.random() * 18) + 6;
    if (pct >= 100) pct = 100;
    pctEl.textContent = pct + '%';
    if (pct < 100) {
      setTimeout(step, 90);
    } else {
      setTimeout(() => {
        loader.classList.add('hide');
        document.body.classList.remove('lock');
      }, 250);
    }
  };
  document.body.classList.add('lock');
  step();
});

// ---------- Mobile nav ----------
const burger = document.getElementById('nav-burger');
const nav = document.getElementById('main-nav');
burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// ---------- Mouse-reactive avatar ----------
const avatarTilt = document.getElementById('avatarTilt');
const avatarPupil = document.querySelector('.avatar-pupil');
if (avatarTilt && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    const rect = avatarTilt.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));

    const maxShift = 10;
    const maxTilt = 6;
    avatarTilt.style.transform =
      `perspective(700px) rotateX(${(-dy * maxTilt).toFixed(2)}deg) rotateY(${(dx * maxTilt).toFixed(2)}deg) translate(${(dx * maxShift).toFixed(1)}px, ${(dy * maxShift).toFixed(1)}px)`;

    if (avatarPupil) {
      avatarPupil.style.transform = `translate(${(dx * 10).toFixed(1)}px, ${(dy * 6).toFixed(1)}px)`;
    }
  });
}

// ---------- Hero word rotator ----------
const rotatorWords = document.querySelectorAll('.rotator-word');
if (rotatorWords.length) {
  let idx = 0;
  setInterval(() => {
    rotatorWords[idx].classList.remove('is-active');
    idx = (idx + 1) % rotatorWords.length;
    rotatorWords[idx].classList.add('is-active');
  }, 2200);
}

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
  '.about-text, .about-stats, .do-card, .timeline-item, .education-list, .work-card, .tech-group, .contact-grid, .section-title'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// ---------- Footer year ----------
document.getElementById('footer-year').textContent = new Date().getFullYear();
