// ============================================
// MAIN PORTFOLIO LOGIC — Enhanced
// ============================================

// ===== LOADING =====
const loaderBar = document.getElementById('loader-bar');
const loader = document.getElementById('loader');
let loadProgress = 0;

const loadInterval = setInterval(() => {
  loadProgress += Math.random() * 15;
  if (loadProgress >= 100) {
    loadProgress = 100;
    clearInterval(loadInterval);
    setTimeout(() => {
      loader.classList.add('hidden');
      initHero();
      initScrollAnimations();
      initGame1();
      initGame2();
      initTerminal();
      initNavSmoothScroll();
    }, 500);
  }
  loaderBar.style.width = loadProgress + '%';
}, 150);

// ===== THREE.JS HERO =====
let heroScene, heroCamera, heroRenderer, heroParticles;
let mouseX = 0, mouseY = 0;

function initHero() {
  const canvas = document.getElementById('hero-canvas');
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  heroScene = new THREE.Scene();
  heroCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
  heroCamera.position.z = 50;

  heroRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  heroRenderer.setSize(w, h);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particleCount = 400;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

    const colorChoice = Math.random();
    if (colorChoice < 0.4) {
      colors[i * 3] = 0.96; colors[i * 3 + 1] = 0.62; colors[i * 3 + 2] = 0.04;
    } else if (colorChoice < 0.7) {
      colors[i * 3] = 0.23; colors[i * 3 + 1] = 0.51; colors[i * 3 + 2] = 0.96;
    } else {
      colors[i * 3] = 0.58; colors[i * 3 + 1] = 0.65; colors[i * 3 + 2] = 0.78;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  heroParticles = new THREE.Points(geometry, material);
  heroScene.add(heroParticles);

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  animateHero();
  window.addEventListener('resize', () => {
    if (!heroCamera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    heroCamera.aspect = w / h;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(w, h);
  });
}

function animateHero() {
  requestAnimationFrame(animateHero);

  const positions = heroParticles.geometry.attributes.position.array;
  const time = Date.now() * 0.001;

  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.02;

    const dx = positions[i] - mouseX * 30;
    const dy = positions[i + 1] - mouseY * 20;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 15) {
      positions[i] += dx * 0.01;
      positions[i + 1] += dy * 0.01;
    }
  }

  heroParticles.geometry.attributes.position.needsUpdate = true;
  heroParticles.rotation.y = time * 0.05;

  heroRenderer.render(heroScene, heroCamera);
}

// ===== GSAP SCROLL =====
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    start: 'top -100',
    onUpdate: (self) => {
      document.getElementById('navbar').classList.toggle('scrolled', self.direction === 1 && self.scroll() > 100);
    }
  });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        delay: i % 3 * 0.1
      }
    );
  });

  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const width = bar.dataset.width;
    gsap.to(bar, {
      width: width + '%',
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  });

  gsap.to('.hero-content', {
    y: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

// ===== NAV =====
function initNavSmoothScroll() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ===== GAME 1 =====
function initGame1() {
  const canvas = document.getElementById('controller-canvas');
  const ctx = canvas.getContext('2d');
  let g1Score = 0;
  let g1Connected = 0;
  const g1Total = 5;

  function resizeG1() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 500;
  }
  resizeG1();
  window.addEventListener('resize', resizeG1);

  const esp32 = { x: 0, y: 0, w: 140, h: 180, color: '#1E293B', border: '#F59E0B' };
  const components = [
    { id: 'temp', name: 'Temp Sensor', x: 50, y: 50, w: 100, h: 50, color: '#EF4444', target: 'top', connected: false },
    { id: 'vfd', name: 'VFD Modbus', x: 50, y: 130, w: 100, h: 50, color: '#3B82F6', target: 'right', connected: false },
    { id: 'relay', name: 'Relay Board', x: 50, y: 210, w: 100, h: 50, color: '#10B981', target: 'bottom', connected: false },
    { id: 'wifi', name: 'WiFi Module', x: 50, y: 290, w: 100, h: 50, color: '#8B5CF6', target: 'left', connected: false },
    { id: 'watchdog', name: 'Watchdog', x: 50, y: 370, w: 100, h: 50, color: '#F59E0B', target: 'center', connected: false },
  ];

  let dragged = null;
  let dragOffset = { x: 0, y: 0 };

  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      if (r > w/2) r = w/2;
      if (r > h/2) r = h/2;
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.quadraticCurveTo(x + w, y, x + w, y + r);
      this.lineTo(x + w, y + h - r);
      this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      this.lineTo(x + r, y + h);
      this.quadraticCurveTo(x, y + h, x, y + h - r);
      this.lineTo(x, y + r);
      this.quadraticCurveTo(x, y, x + r, y);
      return this;
    };
  }

  function drawG1() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(30,41,59,0.5)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    esp32.x = w / 2 - esp32.w / 2;
    esp32.y = h / 2 - esp32.h / 2;

    ctx.shadowColor = esp32.border;
    ctx.shadowBlur = 20;
    ctx.fillStyle = esp32.color;
    ctx.strokeStyle = esp32.border;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(esp32.x, esp32.y, esp32.w, esp32.h, 8);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 14px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText('ESP32', esp32.x + esp32.w/2, esp32.y + 30);
    ctx.fillStyle = '#64748B';
    ctx.font = '10px JetBrains Mono';
    ctx.fillText('240MHz Dual Core', esp32.x + esp32.w/2, esp32.y + 48);

    const targets = {
      top: { x: esp32.x + esp32.w/2, y: esp32.y },
      right: { x: esp32.x + esp32.w, y: esp32.y + esp32.h/2 },
      bottom: { x: esp32.x + esp32.w/2, y: esp32.y + esp32.h },
      left: { x: esp32.x, y: esp32.y + esp32.h/2 },
      center: { x: esp32.x + esp32.w/2, y: esp32.y + esp32.h/2 + 20 },
    };

    for (const [key, pos] of Object.entries(targets)) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = key === 'center' ? '#F59E0B' : '#334155';
      ctx.fill();
      ctx.strokeStyle = key === 'center' ? '#F59E0B' : '#475569';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    components.forEach(comp => {
      if (comp.connected) {
        const target = targets[comp.target];
        comp.x = target.x - comp.w/2;
        comp.y = target.y - comp.h/2;
        if (comp.target === 'top') comp.y -= comp.h/2 + 8;
        if (comp.target === 'bottom') comp.y += comp.h/2 + 8;
        if (comp.target === 'left') comp.x -= comp.w/2 + 8;
        if (comp.target === 'right') comp.x += comp.w/2 + 8;
        if (comp.target === 'center') comp.y += 25;
      }

      if (comp.connected) {
        ctx.shadowColor = comp.color;
        ctx.shadowBlur = 15;
      }

      ctx.fillStyle = comp.color + '20';
      ctx.strokeStyle = comp.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(comp.x, comp.y, comp.w, comp.h, 6);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = comp.color;
      ctx.font = 'bold 11px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText(comp.name, comp.x + comp.w/2, comp.y + comp.h/2 + 4);
    });

    components.forEach(comp => {
      if (comp.connected) {
        const target = targets[comp.target];
        ctx.strokeStyle = comp.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.beginPath();
        ctx.moveTo(comp.x + comp.w/2, comp.y + comp.h/2);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    });

    if (g1Connected === g1Total) {
      ctx.fillStyle = 'rgba(16,185,129,0.1)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 24px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText('SYSTEM ONLINE', w/2, h/2 - 20);
      ctx.font = '14px JetBrains Mono';
      ctx.fillText('Controller booted successfully. All modules connected.', w/2, h/2 + 10);
    }

    requestAnimationFrame(drawG1);
  }

  drawG1();

  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    components.forEach(comp => {
      if (comp.connected) return;
      if (mx >= comp.x && mx <= comp.x + comp.w && my >= comp.y && my <= comp.y + comp.h) {
        dragged = comp;
        dragOffset.x = mx - comp.x;
        dragOffset.y = my - comp.y;
      }
    });
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!dragged) return;
    const rect = canvas.getBoundingClientRect();
    dragged.x = e.clientX - rect.left - dragOffset.x;
    dragged.y = e.clientY - rect.top - dragOffset.y;
  });

  canvas.addEventListener('mouseup', () => {
    if (!dragged) return;

    const w = canvas.width;
    const h = canvas.height;
    esp32.x = w / 2 - esp32.w / 2;
    esp32.y = h / 2 - esp32.h / 2;

    const targets = {
      top: { x: esp32.x + esp32.w/2, y: esp32.y, range: 40 },
      right: { x: esp32.x + esp32.w, y: esp32.y + esp32.h/2, range: 40 },
      bottom: { x: esp32.x + esp32.w/2, y: esp32.y + esp32.h, range: 40 },
      left: { x: esp32.x, y: esp32.y + esp32.h/2, range: 40 },
      center: { x: esp32.x + esp32.w/2, y: esp32.y + esp32.h/2 + 20, range: 50 },
    };

    const compCX = dragged.x + dragged.w/2;
    const compCY = dragged.y + dragged.h/2;

    for (const [key, pos] of Object.entries(targets)) {
      const dist = Math.sqrt((compCX - pos.x)**2 + (compCY - pos.y)**2);
      if (dist < pos.range && dragged.target === key) {
        dragged.connected = true;
        g1Connected++;
        g1Score += 200;
        document.getElementById('game1-score').textContent = g1Score;
        document.getElementById('game1-status').textContent = g1Connected === g1Total ? 'ONLINE' : 'BOOTING...';
        document.getElementById('game1-status').style.color = g1Connected === g1Total ? '#10B981' : '#F59E0B';
        break;
      }
    }

    dragged = null;
  });
}

// ===== GAME 2 =====
function initGame2() {
  const canvas = document.getElementById('network-canvas');
  const ctx = canvas.getContext('2d');
  let g2Budget = 50000;
  let g2Coverage = 0;
  let g2Latency = 0;
  let g2Score = 0;
  let g2Tool = 'router';
  let g2Placed = [];

  function resizeG2() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 500;
  }
  resizeG2();
  window.addEventListener('resize', resizeG2);

  const deviceTypes = {
    router: { name: 'Router', cost: 5000, range: 120, color: '#F59E0B', latency: 2 },
    switch: { name: 'Switch', cost: 3000, range: 80, color: '#3B82F6', latency: 1 },
    camera: { name: 'Camera', cost: 1000, range: 40, color: '#10B981', latency: 5 },
    storage: { name: 'Storage', cost: 8000, range: 60, color: '#8B5CF6', latency: 3 },
  };

  const zones = [];
  for (let i = 0; i < 8; i++) {
    zones.push({
      x: 100 + Math.random() * (canvas.width - 200),
      y: 80 + Math.random() * (canvas.height - 160),
      r: 30,
      covered: false
    });
  }

  function drawG2() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(30,41,59,0.4)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 50) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    zones.forEach(zone => {
      zone.covered = false;
      g2Placed.forEach(dev => {
        const d = Math.sqrt((dev.x - zone.x)**2 + (dev.y - zone.y)**2);
        if (d < deviceTypes[dev.type].range) zone.covered = true;
      });

      ctx.beginPath();
      ctx.arc(zone.x, zone.y, zone.r, 0, Math.PI * 2);
      ctx.fillStyle = zone.covered ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.1)';
      ctx.fill();
      ctx.strokeStyle = zone.covered ? '#10B981' : '#EF4444';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = zone.covered ? '#10B981' : '#EF4444';
      ctx.font = '10px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText(zone.covered ? 'COVERED' : 'NEEDS COV', zone.x, zone.y + 4);
    });

    g2Placed.forEach(dev => {
      const type = deviceTypes[dev.type];

      ctx.beginPath();
      ctx.arc(dev.x, dev.y, type.range, 0, Math.PI * 2);
      ctx.fillStyle = type.color + '08';
      ctx.fill();
      ctx.strokeStyle = type.color + '30';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = type.color + '20';
      ctx.strokeStyle = type.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(dev.x, dev.y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = type.color;
      ctx.font = 'bold 10px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText(dev.type[0].toUpperCase(), dev.x, dev.y + 4);
    });

    ctx.strokeStyle = 'rgba(148,163,184,0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < g2Placed.length; i++) {
      for (let j = i + 1; j < g2Placed.length; j++) {
        const d = Math.sqrt((g2Placed[i].x - g2Placed[j].x)**2 + (g2Placed[i].y - g2Placed[j].y)**2);
        if (d < 200) {
          ctx.beginPath();
          ctx.moveTo(g2Placed[i].x, g2Placed[i].y);
          ctx.lineTo(g2Placed[j].x, g2Placed[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawG2);
  }

  drawG2();

  function updateG2Stats() {
    const covered = zones.filter(z => z.covered).length;
    g2Coverage = Math.round((covered / zones.length) * 100);
    g2Latency = g2Placed.length > 0 ? Math.round(g2Placed.reduce((a, b) => a + deviceTypes[b.type].latency, 0) / g2Placed.length) : 0;

    document.getElementById('budget').textContent = '$' + (g2Budget/1000).toFixed(0) + 'K';
    document.getElementById('coverage').textContent = g2Coverage + '%';
    document.getElementById('latency').textContent = g2Latency + 'ms';
    document.getElementById('game2-score').textContent = g2Score;
  }

  function selectTool(tool) {
    g2Tool = tool;
    document.querySelectorAll('.game2-toolbar .tool-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tool === tool);
    });
  }

  function resetNetwork() {
    g2Placed = [];
    g2Budget = 50000;
    g2Score = 0;
    updateG2Stats();
  }

  function checkNetwork() {
    const covered = zones.filter(z => z.covered).length;
    if (covered === zones.length && g2Budget >= 0) {
      g2Score = Math.round((g2Budget / 50000) * 1000 + g2Coverage * 10);
      alert('NETWORK VALIDATED! Score: ' + g2Score + ' | Full coverage achieved with $' + (g2Budget/1000).toFixed(0) + 'K remaining.');
    } else if (g2Budget < 0) {
      alert('BUDGET EXCEEDED! Remove some devices and try again.');
    } else {
      alert('INCOMPLETE COVERAGE! ' + (zones.length - covered) + ' zones still need devices.');
    }
    updateG2Stats();
  }

  document.querySelectorAll('.game2-toolbar .tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      if (tool) selectTool(tool);
    });
  });

  document.getElementById('reset-network').addEventListener('click', resetNetwork);
  document.getElementById('validate-network').addEventListener('click', checkNetwork);

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const type = deviceTypes[g2Tool];
    if (g2Budget >= type.cost) {
      g2Placed.push({ x, y, type: g2Tool });
      g2Budget -= type.cost;
      updateG2Stats();
    } else {
      document.getElementById('budget').style.color = '#EF4444';
      setTimeout(() => document.getElementById('budget').style.color = '', 500);
    }
  });

  updateG2Stats();
}

// ===== TERMINAL =====
function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');

  const commands = {
    help: () => [
      'Available commands:',
      '  email    - Show email address',
      '  phone    - Show phone number',
      '  linkedin - Show LinkedIn profile',
      '  github   - Show GitHub profile',
      '  website  - Show website URL',
      '  send     - Open contact form',
      '  clear    - Clear terminal',
      '  whoami   - About this profile',
    ],
    email: () => ['til_mer@yahoo.com'],
    phone: () => ['+251 920 088 733'],
    linkedin: () => ['linkedin.com/in/tilaye-merera-219470338'],
    github: () => ['github.com/tilaye1'],
    website: () => ['www.winglife.net'],
    whoami: () => [
      'Tilaye Merera Dinka — Systems Architect',
      '7+ years | 1,000+ cameras | 70% cost reduction',
      'EU Relocation Ready | Immediate Availability',
    ],
    send: () => {
      setTimeout(() => {
        addTerminalLine('Opening secure contact channel...', 'info');
        setTimeout(() => {
          addTerminalLine('Email: til_mer@yahoo.com', 'success');
          addTerminalLine('Phone: +251 920 088 733', 'success');
          addTerminalLine('LinkedIn: linkedin.com/in/tilaye-merera-219470338', 'success');
          addTerminalLine('GitHub: github.com/tilaye1', 'success');
          addTerminalLine('Website: www.winglife.net', 'success');
          addTerminalLine('Ready to build the future together.', 'info');
        }, 800);
      }, 300);
      return ['Initiating contact sequence...'];
    },
    clear: () => {
      const lines = terminalBody.querySelectorAll('.terminal-line');
      lines.forEach((line, i) => { if (i < lines.length - 1) line.remove(); });
      return ['Terminal cleared.'];
    },
  };

  function addTerminalLine(text, type = '') {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-output ${type}">${text}</span>`;
    terminalBody.insertBefore(line, terminalBody.lastElementChild);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value.trim().toLowerCase();
      if (cmd) {
        addTerminalLine(cmd, '');
        if (commands[cmd]) {
          const output = commands[cmd]();
          if (output && Array.isArray(output)) {
            output.forEach(line => addTerminalLine(line, ''));
          }
        } else {
          addTerminalLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
        }
      }
      terminalInput.value = '';
    }
  });

  terminalBody.addEventListener('click', () => terminalInput.focus());
}