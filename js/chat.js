// ============================================
// AI CHATBOT — Enhanced Knowledge Base
// ============================================

const KNOWLEDGE_BASE = {
  greetings: [
    "Hello! I'm Tilaye's AI assistant. I know everything about his engineering work, projects, and experience.",
    "Hi there! Ready to tell you all about Tilaye's systems architecture experience. What would you like to know?",
    "Welcome! I can answer questions about Tilaye's projects, skills, or how to get in touch."
  ],

  washing: `Tilaye designed a complete **ESP32-based replacement controller** for industrial washing machines.\n\n**Key Features:**\n• 6-stage washing cycles (Flushing → Detergent → Chemical → Rinse 1 → Rinse 2 → High-Speed Spin)\n• **Triple-layer safety** (watchdog + hardware + predictive unbalance detection)\n• Black-box fault logging for forensic analysis\n• WiFi remote management with responsive dashboard\n• OTA firmware updates without disassembly\n• Dual heating modes (hot tap or active heating)\n\n**Results:** 70% cost reduction, same-day replacement instead of 3-6 month OEM wait, deployed at 10+ commercial sites.`,

  usv: `Tilaye built an **autonomous Unmanned Surface Vehicle (USV)** for river and lake depth surveying.\n\n**Key Features:**\n• GPS waypoint navigation with autonomous piloting\n• Sonar-based bathymetric data collection\n• Real-time telemetry transmission to ground station\n• C++ firmware on ESP32 platform\n\n**Impact:** Eliminates manual boat surveying, reduces cost by 80%, increases coverage accuracy.\n\n**Tech Stack:** ESP32, GPS module, sonar sensor, LoRa telemetry, C++, custom ground station software.`,

  modbus: `The **Modbus Ultimate Scanner v2.2** is a complete industrial communication tool.\n\n**Key Features:**\n• Auto-discovery of baud rate, parity, and slave ID\n• Device fingerprinting against 273+ known manufacturer register maps\n• Jaccard similarity matching algorithm\n• Real-time dark-mode dashboard with SSE updates\n• Read/Write registers (commissioning panel)\n• Device profile storage and loading\n\n**Stack:** Python, Flask, Server-Sent Events (SSE), ESP32, HTML/CSS/JS.\n\n**Results:** Reduces commissioning from hours to minutes, zero operator complexity.`,

  aviation: `Tilaye led a comprehensive security audit for **Ethiopian Airlines** — Africa's largest airline.\n\n**Scope:**\n• 2,000+ cameras across terminals, hangars, and cargo areas\n• Network security assessment\n• Access control systems evaluation\n• ICAO/IATA international aviation standards compliance\n\n**Deliverables:**\n• Risk-based vulnerability assessment\n• Modernization roadmap with phased implementation\n• Budget estimates and priority recommendations\n\n**Impact:** Strengthened aviation security posture, aligned infrastructure with international regulations.`,

  police: `Tilaye served as Technical Manager for a **Federal Police city-wide surveillance** project in Addis Ababa.\n\n**Scale:**\n• 1,000+ IP cameras city-wide\n• Fiber optic backbone network\n• Cisco routing and switching infrastructure\n• Centralized Security Operations Center (SOC)\n• Petabyte-level enterprise storage (SAN/NAS)\n\n**Integration:** Real-time crime monitoring, traffic management, video evidence archiving.\n\n**Impact:** Enhanced law enforcement capabilities with reliable video evidence and real-time monitoring.`,

  prison: `Tilaye designed a **zero-compromise security ecosystem** for a high-security federal prison.\n\n**Security Layers:**\n• 500+ HD cameras with comprehensive coverage\n• Advanced Intrusion Detection Systems (IDS)\n• Biometric access control (fingerprint + facial recognition)\n• Centralized jail management platform\n• Real-time situational awareness for correctional officers\n\n**Outcome:** Zero blind spots, enhanced staff and inmate safety, scalable architecture.`,

  bank: `Tilaye implemented **fire detection and suppression systems** for major banking datacenters.\n\n**Clients:**\n• Commercial Bank of Ethiopia\n• Dashen Bank\n• Tsehay Bank\n• Siinqee Bank\n\n**Technologies:**\n• VESDA early warning smoke detection\n• FM200 clean agent suppression\n• Novec 1230 clean agent suppression\n• Fully NFPA compliant\n• Integration with building management systems\n\n**Impact:** Protected critical banking infrastructure, ensured business continuity.`,

  website: `Tilaye built the **Wing Life corporate website** — a comprehensive enterprise platform.\n\n**Architecture:**\n• Backend: Node.js + Express.js\n• Database: MongoDB with Mongoose ODM\n• Frontend: Pug templates + Vanilla JS\n• 3D Graphics: Three.js interactive models\n\n**Features:**\n• 6 service pages with detailed technical specs\n• Portfolio module with 24+ case studies\n• Blog system with infinite scroll\n• Full admin panel with CRUD operations\n• Enterprise-grade security (Helmet.js, rate limiting, account lockout)\n\n**Lighthouse Scores:**\n• Performance: 92\n• Accessibility: 98\n• Best Practices: 95\n• SEO: 100`,

  household: `The **Household Worker Digital Platform** formalizes Ethiopia's household worker sector.\n\n**Key Features:**\n• National ID verification via OCR + government API\n• Digital contracts with e-signatures and version control\n• Emergency alert system with GPS location\n• Comprehensive audit logging (who, when, what changed)\n• Role-based access control (workers, employers, agents, admins)\n• Soft deletion with justification for accountability\n\n**Tech Stack:**\n• Backend: Node.js + Express.js + MongoDB\n• Frontend: React (Admin Panel) + React Native (Mobile)\n• File Storage: Multer + GridFS\n• Security: JWT, Helmet.js, rate limiting`,

  storage: `Tilaye architects **petabyte-level enterprise storage** solutions.\n\n**Platforms:**\n• Dell EMC (PowerVault, Unity, Isilon)\n• NetApp (FAS, AFF)\n• Huawei OceanStor\n• Dahua EVS (video surveillance storage)\n\n**Architecture:**\n• SAN (Fibre Channel, iSCSI)\n• NAS (NFS, SMB/CIFS)\n• Direct-Attached Storage (DAS)\n• Hybrid cloud integration\n\n**Applications:**\n• Video surveillance archival\n• Enterprise application data\n• Backup and disaster recovery`,

  skills: `**INDUSTRIAL AUTOMATION**\n• PLC (Siemens S7-1200/1500, Wago, Beckhoff)\n• HMI/SCADA (WinCC, TIA Portal)\n• ESP32/ESP8266 with FreeRTOS\n• Modbus RTU/TCP, PROFIBUS, PROFINET, EtherCAT\n• VFD Control, Motor Management\n• Embedded C/C++, Arduino IDE, ESP-IDF\n• PCB Design (Proteus)\n\n**SECURITY & INFRASTRUCTURE**\n• Enterprise CCTV (IP/Analog, Dahua, Hikvision, Axis)\n• Cisco Routing & Switching (OSPF, EIGRP, BGP, VLANs)\n• SAN/NAS (Dell EMC, NetApp, Huawei OceanStor)\n• Network Security (Firewalls, ACLs, VPNs)\n• Fire Safety (FM200, Novec 1230, VESDA, NFPA)\n• Access Control & Intrusion Detection\n\n**SOFTWARE ENGINEERING**\n• Node.js / Express.js (REST APIs, WebSocket, SSE)\n• MongoDB / Mongoose (ODM, Aggregation)\n• React.js / React Native\n• JavaScript (ES6+), C++, Python\n• Three.js (3D Graphics)\n• JWT Authentication, Passport.js\n\n**PROJECT & SYSTEMS**\n• Technical Project Management\n• HLD/LLD Documentation\n• Risk & Security Audits\n• RFP/Proposal Development\n• Team Leadership\n• Entrepreneurship`,

  eu: `Tilaye is **fully prepared for EU/Schengen relocation** with immediate availability.\n\n**Visa Status:** Blue Card eligible, ready for national visa pathways.\n\n**Why EU companies hire him:**\n\n1. **Unique Dual-Role Experience** — Government-scale security + commercial engineering agility\n2. **End-to-End Engineering** — PCB design to cloud deployment, eliminates handoff friction\n3. **Industry 4.0 Ready** — ESP32, Modbus, PLC expertise for EU manufacturing digitalization\n4. **Critical Infrastructure Mindset** — NIS2-aligned security thinking from national agency experience\n5. **Large-Scale Delivery** — 1,000+ cameras, petabyte storage, aviation security audits\n6. **Security-First Architecture** — Encryption, audit logging, rate limiting, secure authentication\n7. **Cost-Effective Innovation** — 70% cost reduction track record without compromising safety\n8. **Multidisciplinary Perspective** — Hardware + software + networking + security + business\n9. **Documentation Excellence** — Comprehensive HLD, LLD, proposals, specifications\n10. **Immediate Availability** — No delays, ready to contribute from day one`,

  contact: `**Email:** til_mer@yahoo.com\n**Phone:** +251 920 088 733\n**LinkedIn:** linkedin.com/in/tilaye-merera-219470338\n**GitHub:** github.com/tilaye1\n**Website:** www.winglife.net\n\nFeel free to reach out directly — he's ready to build the future together.`,

  experience: `Tilaye has **7+ years** of multidisciplinary experience.\n\n**Current Roles:**\n• Systems Engineer at **INSA** (Ethiopia's cybersecurity agency) — 2018-Present\n• Co-Founder & Technical Director at **Wing Life Trading PLC** — 2021-Present\n\n**Education:**\n• B.Sc. Electrical and Computer Engineering, Addis Ababa Science and Technology University (2012-2017)\n• Focus: Power Systems, Industrial Automation, Embedded Systems\n• Capstone: PLC optimization at Metehara Sugar Factory`,

  philosophy: `Tilaye's engineering philosophy:\n\n*"Many advanced technologies remain inaccessible because of high acquisition costs. My approach is developing affordable alternatives without compromising functionality and reliability."*\n\n**Core Principles:**\n• Practical Innovation — Solve real problems with real solutions\n• Cost-Effectiveness — Maximum value at minimum cost\n• Reliability — Systems that work, consistently\n• Scalability — Design for growth from day one\n• Security — Integrated from the ground up\n• Documentation — Enable knowledge transfer and maintenance\n• Continuous Improvement — Always evolve and refine`,

  timeline: `Tilaye's engineering journey:\n\n**2018** — Joined INSA as Systems Engineer\n**2019** — Deployed banking fire systems for Commercial Bank of Ethiopia\n**2020** — Designed 500+ camera federal prison security ecosystem\n**2021** — Co-founded Wing Life Trading PLC\n**2022** — Led 1,000+ camera city-wide surveillance deployment\n**2023** — Completed Ethiopian Airlines aviation security audit (2,000+ cameras)\n**2024** — Built autonomous USV for depth surveying\n**2025** — Deployed washing machine controller to 10+ commercial sites\n**2026** — Launched AI-powered interactive portfolio`,

  fallback: `I can tell you about Tilaye's **projects** (USV, washing controller, Modbus scanner, aviation audit, surveillance systems), **skills** (industrial automation, MERN stack, embedded C/C++, security), **EU availability**, or **contact info**. What would you like to know?`
};

// ===== Helper Functions =====
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getLocalResponse(input) {
  const text = input.toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|greetings|howdy|sup|yo|hola)$/.test(text)) {
    return pickRandom(KNOWLEDGE_BASE.greetings);
  }

  // Help
  if (/help|commands|what can you do|what do you know/.test(text)) {
    return `I can answer questions about:\n• **Projects** — USV, washing controller, Modbus scanner, aviation audit, surveillance, prison security, banking fire systems, website\n• **Skills** — Industrial automation, MERN stack, embedded C/C++, security, networking\n• **Experience** — INSA, Wing Life, 7+ years\n• **EU Availability** — Relocation ready, Blue Card eligible\n• **Contact** — Email, phone, LinkedIn, GitHub\n• **Timeline** — Career journey\n\nWhat would you like to explore?`;
  }

  // USV
  if (/usv|unmanned surface|survey boat|depth survey|bathymetry|sonar|river survey|lake survey|autonomous boat|water survey|loRa|telemetry/.test(text)) {
    return KNOWLEDGE_BASE.usv;
  }

  // Washing
  if (/wash|laundry|controller|oem|milnor|primus|lavamac|grandimpianti|vfd|heating|spin|6-stage/.test(text)) {
    return KNOWLEDGE_BASE.washing;
  }

  // Modbus
  if (/modbus|scanner|commission|baud|slave id|rs485|device discovery|jaccard|fingerprint|sse/.test(text)) {
    return KNOWLEDGE_BASE.modbus;
  }

  // Aviation
  if (/aviat|airline|ethiopian|icao|iata|airport|hangar|cargo|terminal|audit/.test(text)) {
    return KNOWLEDGE_BASE.aviation;
  }

  // Police / city-wide
  if (/police|city-wide|law enforcement|crime|traffic|1000|soc|video wall/.test(text)) {
    return KNOWLEDGE_BASE.police;
  }

  // Prison
  if (/prison|jail|correctional|inmate|biometric|500/.test(text)) {
    return KNOWLEDGE_BASE.prison;
  }

  // Bank / Fire
  if (/bank|fire|fm200|novec|vesda|datacenter|suppression|commercial bank|dashen|tsehay|siinqee/.test(text)) {
    return KNOWLEDGE_BASE.bank;
  }

  // Website
  if (/website|wing life|three\.js|lighthouse|seo|admin panel|blog|pug/.test(text)) {
    return KNOWLEDGE_BASE.website;
  }

  // Household
  if (/household|worker|platform|delala|digital marketplace|national id|contract|agreement|ocr|react native/.test(text)) {
    return KNOWLEDGE_BASE.household;
  }

  // Storage
  if (/storage|san|nas|petabyte|dell|netapp|huawei|oceanstor|evs|emc/.test(text)) {
    return KNOWLEDGE_BASE.storage;
  }

  // Skills / tech stack
  if (/skill|tech stack|technology|programming|language|mern|react|node|express|mongo|javascript|embedded|c\+\+|arduino|esp32|plc|scada|wincc|modbus|vfd|pcb|cisco|firewall/.test(text)) {
    return KNOWLEDGE_BASE.skills;
  }

  // EU
  if (/eu|schengen|relocation|visa|blue card|europe|germany|france|available|hire|relocate|move|remote|bluecard/.test(text)) {
    return KNOWLEDGE_BASE.eu;
  }

  // Contact
  if (/contact|email|phone|linkedin|github|reach|touch|message|call|connect/.test(text)) {
    return KNOWLEDGE_BASE.contact;
  }

  // Experience
  if (/experience|background|career|history|insa|wing life|7 years|education|degree|university|metehara/.test(text)) {
    return KNOWLEDGE_BASE.experience;
  }

  // Philosophy
  if (/philosophy|approach|mindset|principle|cost reduction|affordable|innovation/.test(text)) {
    return KNOWLEDGE_BASE.philosophy;
  }

  // Timeline
  if (/timeline|journey|chronology|history|progression/.test(text)) {
    return KNOWLEDGE_BASE.timeline;
  }

  // Who / about
  if (/who|what|about|summary|overview|yourself|portfolio|profile|cv|resume/.test(text)) {
    return `Tilaye Merera Dinka is a **Systems Architect** with 7+ years across industrial automation, enterprise security, embedded systems, and full-stack software.\n\nHe currently works at **INSA** (Ethiopia's cybersecurity agency) on national infrastructure, and co-founded **Wing Life Trading PLC** delivering commercial engineering services.\n\n**Signature projects:** USV autonomous survey vessel, ESP32 washing machine controller, 1,000+ camera city-wide surveillance, Ethiopian Airlines security audit, and banking datacenter fire systems.\n\nHe is **EU relocation ready** with immediate availability. Ask me about any specific project or skill!`;
  }

  // API key mention
  if (/setup api key|api key|grok|gemini|openai/.test(text)) {
    return `This chatbot runs entirely **locally** using Tilaye's portfolio knowledge base — no API keys, no payments, no external services needed. It answers instantly and works for every visitor.\n\nIf you want to integrate a cloud AI later, you can modify the code, but the local mode is designed to be fast, free, and reliable.`;
  }

  return KNOWLEDGE_BASE.fallback;
}

// ============================================
// CHAT UI CONTROLS
// ============================================
let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chat-window');
  const toggle = document.getElementById('chat-toggle');

  if (chatOpen) {
    win.classList.add('open');
    toggle.classList.add('hidden');
    document.getElementById('chat-input').focus();
  } else {
    win.classList.remove('open');
    toggle.classList.remove('hidden');
  }
}

function addMessage(text, isUser = false, isError = false) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message ' + (isUser ? 'user' : 'bot');

  const avatar = isUser ?
    '<div class="chat-avatar-small"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>' :
    '<div class="chat-avatar-small"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div>';

  let formattedText = text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>');

  messageDiv.innerHTML = avatar + '<div class="message-content' + (isError ? ' message-error' : '') + '"><p>' + formattedText + '</p></div>';
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function showTyping() {
  const messagesDiv = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message bot';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = '<div class="chat-avatar-small"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div><div class="message-content"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
  messagesDiv.appendChild(typingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function hideTyping() {
  const typing = document.getElementById('typing-indicator');
  if (typing) typing.remove();
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const text = input.value.trim();

  if (!text) return;

  addMessage(text, true);
  input.value = '';
  sendBtn.disabled = true;
  showTyping();

  const delay = 500 + Math.random() * 700;
  await new Promise(r => setTimeout(r, delay));

  const response = getLocalResponse(text);
  hideTyping();
  addMessage(response);
  sendBtn.disabled = false;
}

function sendSuggestion(text) {
  document.getElementById('chat-input').value = text;
  sendMessage();
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('chat-toggle').addEventListener('click', toggleChat);
  document.getElementById('chat-close-btn').addEventListener('click', toggleChat);

  document.getElementById('chat-send-btn').addEventListener('click', sendMessage);
  document.getElementById('chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sendSuggestion(chip.dataset.suggestion);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatOpen) toggleChat();
  });

  document.getElementById('api-key-save-btn').addEventListener('click', () => {
    document.getElementById('api-key-modal').style.display = 'none';
  });
  document.getElementById('api-key-overlay').addEventListener('click', () => {
    document.getElementById('api-key-modal').style.display = 'none';
  });
});