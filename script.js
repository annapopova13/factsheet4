/* ---------------- data ---------------- */
const countryModels = [
  {
    tag: "🇨🇿 Czechia",
    title: "Policy-cycle performance monitoring",
    objective: "Track progress on the Gender Equality Strategy through institutional monitoring, not ad-hoc reports.",
    keyElements: [
      "Strategy translated into an implementation matrix: each measure has actions, a deadline, an indicator and a responsible body.",
      "Permanent reporting cycle: annual analytical report plus a biennial implementation report.",
      "Built-in performance control: external evaluation plus two revisions during the cycle.",
      "Evidence-to-policy loop: 1–1.5 year revisions with consultations and roundtables."
    ],
    adopt: [
      "Schedule at least one external evaluation mid-cycle.",
      "Introduce periodicity of monitoring — how rapidly changes or implementation are checked."
    ]
  },
  {
    tag: "🇧🇪 Belgium",
    title: "Multi-level coordination",
    objective: "Ensure national monitoring even when competences are fragmented across governance levels.",
    keyElements: [
      "Inclusive Gender Equality Platform (GEP) — Commission for International Cooperation (CIS).",
      "Functions: national ERA positioning, exchange of monitoring practices and alignment across levels.",
      "Informal federal-level network on Diversity, Inclusion and Equality (IDE): bottom-up follow-up of GEP actions across HR, working conditions and accessibility."
    ],
    adopt: [
      "Set up a standing coordination platform that produces shared templates, timelines and shared learning.",
      "Build an institutional network that turns implementation issues into monitoring evidence."
    ]
  },
  {
    tag: "🇩🇰 Denmark",
    title: "Legal obligation & transparency enforcement",
    objective: "Use law and annual public scrutiny to ensure implementation and accountability.",
    keyElements: [
      "Three pillars: legal mainstreaming obligation, an annual national plan/report, and official statistics.",
      "Annual report submitted to Parliament; the annual debate enables questioning and follow-up.",
      "Soft enforcement through transparency — accountability is political and dialogue-based."
    ],
    adopt: [
      "Make equality reporting an annual, public, parliamentary moment.",
      "Tie national reports to EU frameworks and funding obligations."
    ]
  },
  {
    tag: "🇳🇴 Norway",
    title: "Implementation support-based monitoring",
    objective: "Strengthen organisational implementation and monitor real institutional change.",
    keyElements: [
      "National implementation support body: site visits, guidance, tools, workshops and annual plan collection.",
      "Evidence mix: existing statistics, survey data and commissioned studies.",
      "Focus of assessment: responsibility allocation, tracking structural measures, integration into ordinary processes."
    ],
    adopt: [
      "Create a national \u201cimplementation support hub\u201d with annual plan collection and hands-on guidance.",
      "Use targeted studies to evaluate the measures that indicators miss."
    ]
  }
];

const recommendations = [
  {
    id: "ec", label: "European Commission", level: "Strategic level",
    items: [
      "Consider establishing a permanent ERA equality monitoring coordination mechanism — common indicators, reporting logic and peer learning.",
      { text: "Provide EU-level guidance enabling lawful, ethical collection of sensitive equality data, to address \u201cGDPR misinterpretations\u201d.", href: "https://commission.europa.eu/document/8731d6c1-3716-4c9e-a179-6db6de6064a6_en", linkLabel: "Read the EU guidelines" },
      "Further integrate intersectional perspectives into ERA-level monitoring expectations and funding instruments.",
      "Fund capacity building."
    ]
  },
  {
    id: "ms", label: "Member States", level: "National system level",
    items: [
      "Move from \u201cpolicy documents\u201d to implementation mechanisms: mandate, staff, budget and a data system.",
      "Choose one governance pathway.",
      "Ensure regular validation rounds — mid-cycle evaluation plus a revision mechanism.",
      "Integrate monitoring with public expenditure tracking to enable gender budgeting."
    ]
  },
  {
    id: "rfo", label: "RFOs", level: "Operational / funding level",
    items: [
      "Link equality monitoring to funding logic: targeted calls, conditionality, post-award follow-up.",
      "Require outcome-oriented indicators — culture change, leadership diversity, gender dimension in content — not only plan existence.",
      "Provide practical reporting guidance and templates to reduce compliance burden and improve comparability."
    ]
  },
  {
    id: "rpo", label: "RPOs", level: "Institutional level",
    items: [
      "Institutional monitoring: an equality unit or contact point, a baseline, and routine data production and use.",
      "Track \u201chard\u201d measures — culture, integration into ordinary practices, GBV handling — with mixed methods.",
      "Use monitoring results to adjust measures before the end of the GEP cycle: a continuous-improvement logic."
    ]
  }
];

const categories = [
  {id:"statistics", label:"Statistics", color:"var(--cat-assessment)"},
  {id:"framework", label:"EU framework", color:"var(--cat-framework)"},
  {id:"project", label:"Horizon project", color:"var(--cat-infrastructure)"},
  {id:"agency", label:"EU agency", color:"var(--cat-guidance)"}
];

const tools = [
  {name:"She Figures", desc:"The Commission's triannual statistical report presenting comparable indicators on gender equality in research and innovation.", cat:"statistics", href:"https://research-and-innovation.ec.europa.eu/knowledge-publications-tools-and-data/interactive-reports_en"},
  {name:"ERA monitoring reports & tools", desc:"Recurring EU-level reporting that tracks how ERA Policy Agenda actions — including gender equality — are being implemented.", cat:"framework", href:"https://research-and-innovation.ec.europa.eu/strategy/strategy-2020-2024/our-digital-future/era_en"},
  {name:"UniSAFE", desc:"Horizon 2020 project providing data, tools and recommendations to prevent and address gender-based violence in research and higher education.", cat:"project", href:"https://www.inspiring-era.eu/gender-equality/"},
  {name:"GENDERACTIONplus", desc:"Coordinates gender equality and inclusiveness policy through Communities of Practice of national authorities and research funders.", cat:"project", href:"https://www.inspiring-era.eu/gender-equality/"},
  {name:"GenderSAFE", desc:"Supports institutions in building zero-tolerance policies, staff training and monitoring systems on gender-based violence.", cat:"project", href:"https://www.inspiring-era.eu/gender-equality/"},
  {name:"INSPIRE", desc:"Europe's Centre of Excellence on inclusive gender equality in R&I, providing evidence, guidance and capacity-building.", cat:"project", href:"https://www.inspiring-era.eu/gender-equality/"},
  {name:"EIGE", desc:"Since 2012, the European Institute for Gender Equality has run EU-wide comparable monitoring of institutional gender-equality mechanisms — a model the ERA can draw on.", cat:"agency", href:"https://eige.europa.eu/"}
];

/* ---------------- render: accordion (country models) ---------------- */
const accordionEl = document.getElementById('accordion');
countryModels.forEach((c) => {
  const item = document.createElement('div');
  item.className = 'accordion-item';
  item.innerHTML = `
    <button class="accordion-trigger" aria-expanded="false">
      <span class="tag">${c.tag}</span>
      <h3>${c.title}<span class="objective">${c.objective}</span></h3>
      <span class="plus" aria-hidden="true"></span>
    </button>
    <div class="accordion-panel">
      <div class="accordion-panel-inner">
        <div class="col-elements">
          <p class="solutions-label">Key elements</p>
          <ul class="solutions-list">
            ${c.keyElements.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z"/></svg><span>${s}</span></li>`).join('')}
          </ul>
        </div>
        <div class="col-adopt">
          <p class="solutions-label">What others can adopt</p>
          <ul class="solutions-list">
            ${c.adopt.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z"/></svg><span>${s}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`;
  const trigger = item.querySelector('.accordion-trigger');
  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.accordion-trigger').setAttribute('aria-expanded','false');
    });
    if (!isOpen){
      item.classList.add('open');
      trigger.setAttribute('aria-expanded','true');
    }
  });
  accordionEl.appendChild(item);
});
// open first by default
accordionEl.querySelector('.accordion-item').classList.add('open');
accordionEl.querySelector('.accordion-trigger').setAttribute('aria-expanded','true');

/* ---------------- render: tabs (recommendations) ---------------- */
const tabbarEl = document.getElementById('tabbar');
const tabpanelsEl = document.getElementById('tabpanels');
recommendations.forEach((r, i) => {
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (i===0 ? ' active' : '');
  btn.textContent = r.label;
  btn.setAttribute('role','tab');
  btn.dataset.target = r.id;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-'+r.id).classList.add('active');
  });
  tabbarEl.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'tab-panel' + (i===0 ? ' active' : '');
  panel.id = 'panel-'+r.id;
  panel.innerHTML = `
    <span class="level">${r.level}</span>
    <ul class="solutions-list">
      ${r.items.map(it => {
        const text = typeof it === 'string' ? it : it.text;
        const link = (typeof it === 'object' && it.href) ? ` <a class="tool-link" href="${it.href}" target="_blank" rel="noopener">${it.linkLabel || 'Learn more'}</a>` : '';
        return `<li><svg viewBox="0 0 20 20" fill="#0EA5A5"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z"/></svg><span>${text}${link}</span></li>`;
      }).join('')}
    </ul>`;
  tabpanelsEl.appendChild(panel);
});

/* ---------------- render: tools filter + grid ---------------- */
const filterRowEl = document.getElementById('filterRow');
const gridEl = document.getElementById('toolsGrid');

const allChip = document.createElement('button');
allChip.className = 'filter-chip active';
allChip.textContent = 'All';
allChip.dataset.cat = 'all';
filterRowEl.appendChild(allChip);

categories.forEach(c => {
  const chip = document.createElement('button');
  chip.className = 'filter-chip';
  chip.textContent = c.label;
  chip.dataset.cat = c.id;
  filterRowEl.appendChild(chip);
});

tools.forEach(t => {
  const cat = categories.find(c => c.id === t.cat);
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.dataset.cat = t.cat;
  card.style.setProperty('--cat-color', cat.color);
  card.innerHTML = `
    <h3>${t.name}</h3>
    <p>${t.desc}</p>
    <span class="cat-tag"><span class="dot"></span>${cat.label}</span>
    ${t.href ? `<a class="tool-link" href="${t.href}" target="_blank" rel="noopener">Visit site \u2192</a>` : ''}`;
  gridEl.appendChild(card);
});

filterRowEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;
  filterRowEl.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const cat = chip.dataset.cat;
  gridEl.querySelectorAll('.tool-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
  });
});

/* ---------------- video overlay ---------------- */
const videoPlayer = document.getElementById('videoPlayer');
const videoOverlay = document.getElementById('videoOverlay');
if (videoPlayer && videoOverlay){
  videoOverlay.addEventListener('click', () => {
    videoPlayer.play();
  });
  videoPlayer.addEventListener('play', () => {
    videoOverlay.classList.add('hidden');
  });
  videoPlayer.addEventListener('pause', () => {
    if (videoPlayer.currentTime === 0 || videoPlayer.ended) videoOverlay.classList.remove('hidden');
  });
}

/* ---------------- header: nav toggle + search toggle ---------------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');
searchToggle.addEventListener('click', () => {
  const isOpen = searchBox.classList.toggle('open');
  if (isOpen) searchBox.querySelector('input').focus();
});
