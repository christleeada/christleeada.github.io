module.exports = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          colors: {
            brand: {
              50: '#edfaff',
              100: '#d7f2ff',
              200: '#b0e7ff',
              300: '#78d8ff',
              400: '#34c6ff',
              500: '#00aef3',
              600: '#008bcc',
              700: '#006aa0',
              800: '#064c75',
              900: '#0b3958',
              950: '#0a2b43'
            },
            accent: {
              400: '#34f5c5',
              500: '#21e2b2',
              600: '#15c39a'
            }
          },
          boxShadow: {
            glow: '0 10px 30px 0 rgba(33, 226, 178, 0.35)',
            card: '0 10px 25px rgba(0,0,0,0.25)'
          },
          backdropBlur: { 12: '12px' }
        }
      }
    }
  </script>
  <style>
    /* Subtle animated gradient background */
    .bg-orbit {
      background: radial-gradient(1200px 800px at 10% 10%, rgba(52, 197, 255, 0.12), transparent 60%),
                  radial-gradient(800px 600px at 90% 20%, rgba(33, 226, 178, 0.12), transparent 60%),
                  radial-gradient(1000px 700px at 50% 110%, rgba(0, 174, 243, 0.1), transparent 60%),
                  linear-gradient(180deg, #0b1d3a 0%, #0a2b43 40%, #0b3958 100%);
      animation: floatBg 20s ease-in-out infinite alternate;
    }
    @keyframes floatBg {
      0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0 0; }
      100% { background-position: 10px 20px, -20px 15px, 15px -10px, 0 0; }
    }
    .glass {
      background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(10px);
    }
    .heading-gradient {
      background: linear-gradient(90deg, #ffffff, #78d8ff 40%, #21e2b2 80%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .btn-primary {
      background: linear-gradient(90deg, #00aef3, #21e2b2);
    }
    .btn-primary:hover {
      filter: brightness(1.05);
      box-shadow: 0 8px 24px rgba(33, 226, 178, 0.35);
      transform: translateY(-1px);
    }
    .btn-secondary:hover {
      background: rgba(255,255,255,0.08);
    }
    .ring-focus:focus {
      outline: none;
      box-shadow: 0 0 0 4px rgba(33,226,178,0.35);
    }
  </style>
</head>
<body class="font-sans text-white bg-orbit antialiased selection:bg-accent-500/30 selection:text-white">
  <!-- Mobile sticky CTA -->
  <div class="fixed bottom-4 inset-x-4 z-40 md:hidden">
    <button id="mobileCta" class="w-full btn-primary text-slate-900 font-semibold rounded-xl py-3.5 shadow-glow ring-focus">
      Book Free Audit
    </button>
  </div>

  <!-- Toast -->
  <div id="toast" class="fixed top-4 right-4 z-50 hidden">
    <div class="glass rounded-xl px-4 py-3 flex items-start gap-3 shadow-card">
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-500/20 text-accent-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 13 4 4L19 7"/>
        </svg>
      </span>
      <div>
        <p class="font-semibold">Saved!</p>
        <p class="text-white/80 text-sm" id="toastMsg">Your request is stored locally.</p>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-30 backdrop-blur-12 bg-slate-900/40 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6">
      <div class="h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-3 group">
          <span class="relative inline-flex w-9 h-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500">
            <svg class="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.8 5.7L21 9l-4.5 4.4L17.6 21 12 17.8 6.4 21l1.1-7.6L3 9l6.2-1.3L12 2z"/>
            </svg>
          </span>
          <div>
            <p class="font-extrabold tracking-tight leading-tight">GoHighLevel Specialist</p>
            <p class="text-xs text-white/60 -mt-0.5">Funnels • Automation • Growth</p>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" class="text-white/80 hover:text-white">Services</a>
          <a href="#roi" class="text-white/80 hover:text-white">ROI</a>
          <a href="#cases" class="text-white/80 hover:text-white">Results</a>
          <a href="#process" class="text-white/80 hover:text-white">Process</a>
          <a href="#testimonials" class="text-white/80 hover:text-white">Love</a>
          <a href="#pricing" class="text-white/80 hover:text-white">Pricing</a>
          <a href="#contact" class="text-white/80 hover:text-white">Contact</a>
        </nav>

        <div class="flex items-center gap-3">
          <button id="openAudit" class="hidden md:inline-flex btn-primary text-slate-900 font-semibold rounded-xl px-4 py-2.5 shadow-glow ring-focus">
            Book Free Audit
          </button>
          <button id="mobileMenuBtn" class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg btn-secondary border border-white/15 hover:border-white/25 ring-focus"
            aria-label="Open menu">
            <svg class="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div id="mobileMenu" class="hidden md:hidden pb-4">
        <div class="glass rounded-xl p-3 space-y-1">
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#services">Services</a>
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#roi">ROI</a>
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#cases">Results</a>
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#process">Process</a>
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#testimonials">Love</a>
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#pricing">Pricing</a>
          <a class="block rounded-lg px-3 py-2 hover:bg-white/5" href="#contact">Contact</a>
          <button id="openAuditMobile" class="w-full mt-1 btn-primary text-slate-900 font-semibold rounded-lg px-4 py-2.5 shadow-glow">Book Free Audit</button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="relative">
    <div class="absolute inset-0 -z-10">
      <div class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-500/20 blur-3xl"></div>
      <div class="absolute top-24 -right-24 w-80 h-80 rounded-full bg-accent-500/20 blur-3xl"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 pt-16 pb-10 md:py-24">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div class="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-6">
            <span class="inline-flex w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span class="text-xs text-white/80">Improving efficiency, finances, and growth with GoHighLevel</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight heading-gradient">
            Build Funnels That Print Confidence, Not Just Clicks
          </h1>
          <p class="text-lg text-white/80 mt-5">
            I help businesses capture more leads, close more deals, and save time with automated funnels, CRM, and reporting inside GoHighLevel.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <button id="heroAudit" class="btn-primary text-slate-900 font-semibold rounded-xl px-5 py-3 shadow-glow ring-focus">
              Get a Free Growth Audit
            </button>
            <a href="#roi" class="btn-secondary border border-white/15 rounded-xl px-5 py-3 font-medium text-white/90 ring-focus text-center">
              Estimate Your ROI
            </a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-6 text-white/70">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-white/10 inline-flex items-center justify-center">
                <svg class="w-5 h-5 text-accent-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm4.3 7.3-5.2 5.2-3-3a1 1 0 1 0-1.4 1.4l3.7 3.7a1 1 0 0 0 1.4 0l5.9-5.9a1 1 0 1 0-1.4-1.4Z"/></svg>
              </div>
              <div><p class="font-semibold">+38% Lead-to-Call</p><p class="text-xs -mt-0.5">Avg across funnels</p></div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-white/10 inline-flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12Zm8-5h2v6h-2V7Zm1 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>
              </div>
              <div><p class="font-semibold">Hours Back Weekly</p><p class="text-xs -mt-0.5">Automation focused</p></div>
            </div>
          </div>
        </div>

        <div class="glass rounded-2xl p-6 md:p-8 shadow-card">
          <p class="text-white/70 text-sm mb-3">Live Snapshot</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-xl bg-white/5 p-4">
              <p class="text-white/60 text-xs">Leads this Month</p>
              <p id="heroLeads" class="text-3xl font-extrabold mt-1">0</p>
              <div class="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div id="heroBar1" class="h-full bg-brand-400 rounded-full" style="width: 0%"></div>
              </div>
            </div>
            <div class="rounded-xl bg-white/5 p-4">
              <p class="text-white/60 text-xs">Booked Calls</p>
              <p id="heroCalls" class="text-3xl font-extrabold mt-1">0</p>
              <div class="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div id="heroBar2" class="h-full bg-accent-500 rounded-full" style="width: 0%"></div>
              </div>
            </div>
            <div class="rounded-xl bg-white/5 p-4 col-span-2">
              <p class="text-white/60 text-xs">Pipeline Value</p>
              <p id="heroValue" class="text-3xl font-extrabold mt-1">$0</p>
              <div class="mt-3 grid grid-cols-3 gap-2">
                <span class="inline-flex items-center gap-2 text-white/80 text-sm">
                  <span class="w-2 h-2 rounded-full bg-brand-400"></span> New
                </span>
                <span class="inline-flex items-center gap-2 text-white/80 text-sm">
                  <span class="w-2 h-2 rounded-full bg-accent-500"></span> Qualified
                </span>
                <span class="inline-flex items-center gap-2 text-white/80 text-sm">
                  <span class="w-2 h-2 rounded-full bg-white/60"></span> Won
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4 text-xs text-white/60">Demo data animates to show momentum.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust bar -->
  <section class="py-6">
    <div class="max-w-7xl mx-auto px-6">
      <div class="glass rounded-2xl p-4 flex items-center justify-between gap-6 overflow-x-auto">
        <div class="flex items-center gap-2 text-white/60 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-accent-500"></span> CRM Automation
        </div>
        <div class="flex items-center gap-2 text-white/60 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-brand-400"></span> Funnel Optimization
        </div>
        <div class="flex items-center gap-2 text-white/60 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-white/60"></span> Reporting & Attribution
        </div>
        <div class="flex items-center gap-2 text-white/60 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span> SMS & Email
        </div>
        <div class="flex items-center gap-2 text-white/60 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-fuchsia-400"></span> Integrations
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-extrabold">Services that compound results</h2>
        <p class="text-white/70 mt-2">Built inside GoHighLevel to centralize, automate, and scale.</p>
      </div>

      <div class="mt-10 grid md:grid-cols-3 gap-6">
        <!-- Service Card Template -->
        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-lg bg-brand-500/15 inline-flex items-center justify-center text-brand-300">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm10 0a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6ZM3 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2Zm10 2a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3Z"/></svg>
            </span>
            <h3 class="font-bold text-lg">Funnel & Landing Pages</h3>
          </div>
          <p class="text-white/70 mt-3 text-sm">Strategy, structure, and split-tests to turn clicks into calls and customers.</p>
          <button data-acc="#svc1" class="mt-4 text-brand-300 hover:text-brand-200 font-semibold ring-focus">Learn more</button>
          <div id="svc1" class="mt-3 hidden text-white/75 text-sm">
            Templates, offer positioning, copy flow, and on-page tracking tied to pipeline stages.
          </div>
        </div>

        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-lg bg-accent-500/15 inline-flex items-center justify-center text-accent-400">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4zM4 10h10v4H4zM4 16h16v4H4z"/></svg>
            </span>
            <h3 class="font-bold text-lg">Automation & Workflows</h3>
          </div>
          <p class="text-white/70 mt-3 text-sm">Nurture, speed-to-lead, no-show rescue, and win-back campaigns that run 24/7.</p>
          <button data-acc="#svc2" class="mt-4 text-brand-300 hover:text-brand-200 font-semibold ring-focus">Learn more</button>
          <div id="svc2" class="mt-3 hidden text-white/75 text-sm">
            SMS + email drips, dynamic routing, pipeline moves, and AI-assisted responses.
          </div>
        </div>

        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-lg bg-fuchsia-500/15 inline-flex items-center justify-center text-fuchsia-300">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18M12 3v18"/></svg>
            </span>
            <h3 class="font-bold text-lg">Reporting & Attribution</h3>
          </div>
          <p class="text-white/70 mt-3 text-sm">See what’s working with clear dashboards tied to revenue, not vanity stats.</p>
          <button data-acc="#svc3" class="mt-4 text-brand-300 hover:text-brand-200 font-semibold ring-focus">Learn more</button>
          <div id="svc3" class="mt-3 hidden text-white/75 text-sm">
            Source tracking, cost per stage, appointment rates, and close rates by campaign.
          </div>
        </div>

        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-lg bg-amber-500/15 inline-flex items-center justify-center text-amber-300">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v10H7z"/></svg>
            </span>
            <h3 class="font-bold text-lg">CRM & Pipelines</h3>
          </div>
          <p class="text-white/70 mt-3 text-sm">Clean stages, tasks, reminders, and SLAs that make follow-up inevitable.</p>
          <button data-acc="#svc4" class="mt-4 text-brand-300 hover:text-brand-200 font-semibold ring-focus">Learn more</button>
          <div id="svc4" class="mt-3 hidden text-white/75 text-sm">
            Custom layouts, smart views, and automations triggered by movement and outcomes.
          </div>
        </div>

        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-lg bg-emerald-500/15 inline-flex items-center justify-center text-emerald-300">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m3 7 9 6 9-6-9-5zM3 9v8l9 5 9-5V9"/></svg>
            </span>
            <h3 class="font-bold text-lg">Integrations</h3>
          </div>
          <p class="text-white/70 mt-3 text-sm">Zapier, webhooks, and API connections that keep data flowing both ways.</p>
          <button data-acc="#svc5" class="mt-4 text-brand-300 hover:text-brand-200 font-semibold ring-focus">Learn more</button>
          <div id="svc5" class="mt-3 hidden text-white/75 text-sm">
            Calendars, payment links, ads platforms, spreadsheets, and internal tools connected.
          </div>
        </div>

        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-lg bg-sky-500/15 inline-flex items-center justify-center text-sky-300">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6v6l4 2"/></svg>
            </span>
            <h3 class="font-bold text-lg">Speed-to-Lead</h3>
          </div>
          <p class="text-white/70 mt-3 text-sm">Instant outreach and routing so hot leads never go cold.</p>
          <button data-acc="#svc6" class="mt-4 text-brand-300 hover:text-brand-200 font-semibold ring-focus">Learn more</button>
          <div id="svc6" class="mt-3 hidden text-white/75 text-sm">
            Auto-replies, call connects, round-robin rules, and missed-call text-backs.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ROI Calculator -->
  <section id="roi" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold">Estimate your monthly ROI</h2>
          <p class="text-white/70 mt-2 max-w-lg">Use simple inputs below to see potential added revenue and time savings from your funnel and automation setup.</p>

          <div class="glass rounded-2xl p-6 mt-6">
            <div class="grid grid-cols-2 gap-4">
              <label class="block">
                <span class="text-sm text-white/70">Leads per month</span>
                <div class="mt-2 flex items-center gap-2">
                  <button data-step="leads" data-dir="-1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">-</button>
                  <input id="inLeads" type="number" min="0" value="200" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
                  <button data-step="leads" data-dir="1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">+</button>
                </div>
              </label>
              <label class="block">
                <span class="text-sm text-white/70">Close rate %</span>
                <div class="mt-2 flex items-center gap-2">
                  <button data-step="close" data-dir="-1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">-</button>
                  <input id="inClose" type="number" min="0" max="100" value="15" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
                  <button data-step="close" data-dir="1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">+</button>
                </div>
              </label>
              <label class="block">
                <span class="text-sm text-white/70">Avg deal value ($)</span>
                <div class="mt-2 flex items-center gap-2">
                  <button data-step="value" data-dir="-1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">-</button>
                  <input id="inValue" type="number" min="0" value="1200" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
                  <button data-step="value" data-dir="1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">+</button>
                </div>
              </label>
              <label class="block">
                <span class="text-sm text-white/70">Hours saved / week</span>
                <div class="mt-2 flex items-center gap-2">
                  <button data-step="hours" data-dir="-1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">-</button>
                  <input id="inHours" type="number" min="0" value="6" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
                  <button data-step="hours" data-dir="1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">+</button>
                </div>
              </label>
              <label class="block col-span-2">
                <span class="text-sm text-white/70">Hourly cost ($)</span>
                <div class="mt-2 flex items-center gap-2">
                  <button data-step="hourly" data-dir="-1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">-</button>
                  <input id="inHourly" type="number" min="0" value="35" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
                  <button data-step="hourly" data-dir="1" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">+</button>
                </div>
              </label>
            </div>

            <div class="mt-6 grid grid-cols-3 gap-4">
              <div class="rounded-xl bg-white/5 p-4">
                <p class="text-white/60 text-xs">Added revenue</p>
                <p id="outRevenue" class="text-2xl font-extrabold mt-1">$0</p>
              </div>
              <div class="rounded-xl bg-white/5 p-4">
                <p class="text-white/60 text-xs">Time savings</p>
                <p id="outSavings" class="text-2xl font-extrabold mt-1">$0</p>
              </div>
              <div class="rounded-xl bg-white/5 p-4">
                <p class="text-white/60 text-xs">Monthly impact</p>
                <p id="outImpact" class="text-2xl font-extrabold mt-1">$0</p>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <button id="auditFromRoi" class="btn-primary text-slate-900 font-semibold rounded-xl px-4 py-2.5 shadow-glow ring-focus">Get a Free Audit</button>
              <span class="text-white/60 text-sm">No pressure. Quick insights you can use.</span>
            </div>
          </div>
        </div>

        <div class="glass rounded-2xl p-6 md:p-8">
          <h3 class="font-bold text-xl">What the audit includes</h3>
          <ul class="mt-4 space-y-3 text-white/80">
            <li class="flex items-start gap-3">
              <span class="mt-0.5 w-5 h-5 rounded-full bg-accent-500/20 inline-flex items-center justify-center text-accent-400">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12.5 9 16l10-10"/></svg>
              </span>
              Funnel teardown with quick wins
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 w-5 h-5 rounded-full bg-accent-500/20 inline-flex items-center justify-center text-accent-400">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12.5 9 16l10-10"/></svg>
              </span>
              Automation gaps & speed-to-lead map
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 w-5 h-5 rounded-full bg-accent-500/20 inline-flex items-center justify-center text-accent-400">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12.5 9 16l10-10"/></svg>
              </span>
              Tracking to revenue, not just clicks
            </li>
          </ul>

          <div class="mt-6 grid sm:grid-cols-3 gap-4">
            <div class="rounded-xl bg-white/5 p-4 text-center">
              <p class="text-3xl font-extrabold">3–5x</p>
              <p class="text-white/70 text-sm -mt-1">Typical ROI</p>
            </div>
            <div class="rounded-xl bg-white/5 p-4 text-center">
              <p class="text-3xl font-extrabold">14d</p>
              <p class="text-white/70 text-sm -mt-1">Quick wins</p>
            </div>
            <div class="rounded-xl bg-white/5 p-4 text-center">
              <p class="text-3xl font-extrabold">50%+</p>
              <p class="text-white/70 text-sm -mt-1">Faster follow-up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Case Studies -->
  <section id="cases" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold">Selected results</h2>
          <p class="text-white/70 mt-2">Small sample to show the flavor of wins.</p>
        </div>
        <div class="hidden md:flex items-center gap-2">
          <button id="prevCase" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <button id="nextCase" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m9 6 6 6-6 6"/></svg>
          </button>
        </div>
      </div>

      <div class="relative mt-8">
        <div id="caseTrack" class="flex transition-transform duration-500 gap-6">
          <!-- Card 1 -->
          <article class="min-w-[85%] sm:min-w-[46%] md:min-w-[32%] glass rounded-2xl p-6">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-lg bg-accent-500/15 inline-flex items-center justify-center text-accent-400">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18M12 3v18"/></svg>
              </span>
              <h3 class="font-bold">Local Services</h3>
            </div>
            <p class="text-white/70 mt-3 text-sm">Rebuilt funnel, added speed-to-lead, implemented 4-step nurture.</p>
            <div class="mt-4 grid grid-cols-3 gap-3">
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">+62%</p><p class="text-xs text-white/70 -mt-1">Booked</p>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">-37%</p><p class="text-xs text-white/70 -mt-1">No-show</p>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">+$38k</p><p class="text-xs text-white/70 -mt-1">Value</p>
              </div>
            </div>
          </article>
          <!-- Card 2 -->
          <article class="min-w-[85%] sm:min-w-[46%] md:min-w-[32%] glass rounded-2xl p-6">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-lg bg-brand-500/15 inline-flex items-center justify-center text-brand-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4zM4 10h10v4H4zM4 16h16v4H4z"/></svg>
              </span>
              <h3 class="font-bold">B2B SaaS</h3>
            </div>
            <p class="text-white/70 mt-3 text-sm">Top-of-funnel split-tests and retargeting nurture to demo.</p>
            <div class="mt-4 grid grid-cols-3 gap-3">
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">+41%</p><p class="text-xs text-white/70 -mt-1">SQLs</p>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">-22%</p><p class="text-xs text-white/70 -mt-1">CPA</p>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">2.3x</p><p class="text-xs text-white/70 -mt-1">ROAS</p>
              </div>
            </div>
          </article>
          <!-- Card 3 -->
          <article class="min-w-[85%] sm:min-w-[46%] md:min-w-[32%] glass rounded-2xl p-6">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-lg bg-emerald-500/15 inline-flex items-center justify-center text-emerald-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6v6l4 2"/></svg>
              </span>
              <h3 class="font-bold">Coaching</h3>
            </div>
            <p class="text-white/70 mt-3 text-sm">Calendar routing + no-show rescue increased attendance significantly.</p>
            <div class="mt-4 grid grid-cols-3 gap-3">
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">+54%</p><p class="text-xs text-white/70 -mt-1">Attendance</p>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">+19%</p><p class="text-xs text-white/70 -mt-1">Close</p>
              </div>
              <div class="bg-white/5 rounded-xl p-3 text-center">
                <p class="text-lg font-extrabold">+$24k</p><p class="text-xs text-white/70 -mt-1">MRR</p>
              </div>
            </div>
          </article>
        </div>

        <div class="md:hidden mt-4 flex items-center justify-center gap-2">
          <button id="prevCase_m" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <button id="nextCase_m" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 ring-focus">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m9 6 6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Process -->
  <section id="process" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-extrabold">Simple, fast, collaborative</h2>
      <div class="grid md:grid-cols-4 gap-6 mt-8">
        <div class="glass rounded-2xl p-6">
          <div class="w-10 h-10 rounded-lg bg-white/10 inline-flex items-center justify-center">1</div>
          <h3 class="font-bold mt-4">Free Audit</h3>
          <p class="text-white/70 text-sm mt-1">We map your funnel, automations, and tracking to find quick wins.</p>
        </div>
        <div class="glass rounded-2xl p-6">
          <div class="w-10 h-10 rounded-lg bg-white/10 inline-flex items-center justify-center">2</div>
          <h3 class="font-bold mt-4">Plan</h3>
          <p class="text-white/70 text-sm mt-1">Prioritized roadmap tied to clear outcomes and timeframes.</p>
        </div>
        <div class="glass rounded-2xl p-6">
          <div class="w-10 h-10 rounded-lg bg-white/10 inline-flex items-center justify-center">3</div>
          <h3 class="font-bold mt-4">Build</h3>
          <p class="text-white/70 text-sm mt-1">Funnels, workflows, and pipelines built to your offers.</p>
        </div>
        <div class="glass rounded-2xl p-6">
          <div class="w-10 h-10 rounded-lg bg-white/10 inline-flex items-center justify-center">4</div>
          <h3 class="font-bold mt-4">Measure</h3>
          <p class="text-white/70 text-sm mt-1">Dashboards and tests to keep improving what works.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section id="testimonials" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-extrabold">Client love</h2>
      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <!-- Testimonial -->
        <figure class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">AK</div>
            <figcaption>
              <p class="font-semibold">A. Khan</p>
              <p class="text-xs text-white/60 -mt-0.5">Agency Owner</p>
            </figcaption>
          </div>
          <div class="mt-3 text-amber-300">★★★★★</div>
          <blockquote class="text-white/80 text-sm mt-2">We finally see which campaigns produce revenue. Speed-to-lead doubled our booking rate.</blockquote>
        </figure>

        <figure class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">LS</div>
            <figcaption>
              <p class="font-semibold">L. Smith</p>
              <p class="text-xs text-white/60 -mt-0.5">Coaching</p>
            </figcaption>
          </div>
          <div class="mt-3 text-amber-300">★★★★★</div>
          <blockquote class="text-white/80 text-sm mt-2">We went from chaos to clarity. The pipeline and reminders made follow-up consistent.</blockquote>
        </figure>

        <figure class="glass rounded-2xl p-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">JR</div>
            <figcaption>
              <p class="font-semibold">J. Rivera</p>
              <p class="text-xs text-white/60 -mt-0.5">Home Services</p>
            </figcaption>
          </div>
          <div class="mt-3 text-amber-300">★★★★★</div>
          <blockquote class="text-white/80 text-sm mt-2">Automation plus calendar routing recovered 30% of missed calls—huge time saver.</blockquote>
        </figure>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-extrabold text-center">Flexible ways to start</h2>
      <p class="text-white/70 text-center mt-2">Pick what fits. We can expand as you grow.</p>

      <div class="mt-10 grid md:grid-cols-3 gap-6">
        <!-- Tier -->
        <div class="glass rounded-2xl p-6 flex flex-col">
          <h3 class="font-bold text-xl">Starter</h3>
          <p class="text-white/70 mt-1 text-sm">Quick wins to get momentum.</p>
          <p class="mt-4 text-3xl font-extrabold">$1.5k</p>
          <ul class="mt-4 space-y-2 text-white/80 text-sm">
            <li>1 Funnel page</li>
            <li>Basic nurture</li>
            <li>Pipeline setup</li>
          </ul>
          <button class="mt-6 btn-primary text-slate-900 font-semibold rounded-xl px-4 py-2.5 shadow-glow ring-focus openAuditAny">Start Free Audit</button>
        </div>

        <div class="glass rounded-2xl p-6 ring-2 ring-accent-500/50 flex flex-col">
          <h3 class="font-bold text-xl">Growth</h3>
          <p class="text-white/70 mt-1 text-sm">Optimization + attribution clarity.</p>
          <p class="mt-4 text-3xl font-extrabold">$3k</p>
          <ul class="mt-4 space-y-2 text-white/80 text-sm">
            <li>Multi-step funnel</li>
            <li>Advanced workflows</li>
            <li>Revenue dashboard</li>
          </ul>
          <button class="mt-6 btn-primary text-slate-900 font-semibold rounded-xl px-4 py-2.5 shadow-glow ring-focus openAuditAny">Start Free Audit</button>
        </div>

        <div class="glass rounded-2xl p-6 flex flex-col">
          <h3 class="font-bold text-xl">Scale</h3>
          <p class="text-white/70 mt-1 text-sm">Aggressive testing and expansion.</p>
          <p class="mt-4 text-3xl font-extrabold">$5k+</p>
          <ul class="mt-4 space-y-2 text-white/80 text-sm">
            <li>Multiple funnels</li>
            <li>Deep integrations</li>
            <li>Ongoing CRO</li>
          </ul>
          <button class="mt-6 btn-primary text-slate-900 font-semibold rounded-xl px-4 py-2.5 shadow-glow ring-focus openAuditAny">Start Free Audit</button>
        </div>
      </div>
      <p class="text-center text-white/60 text-sm mt-4">Prices are typical ranges; your plan is customized in the free audit.</p>
    </div>
  </section>

  <!-- Contact / CTA -->
  <section id="contact" class="py-16 md:py-24">
    <div class="max-w-4xl mx-auto px-6">
      <div class="glass rounded-3xl p-6 md:p-10">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 class="text-3xl font-extrabold">Ready to improve efficiency and growth?</h2>
            <p class="text-white/70 mt-2">Book a free audit and get a mini roadmap.</p>
          </div>
          <button id="contactAudit" class="btn-primary text-slate-900 font-semibold rounded-xl px-5 py-3 shadow-glow ring-focus">
            Book Free Audit
          </button>
        </div>
        <p class="text-white/50 text-xs mt-4">Demo: The booking flow below saves your request locally and prepares an email draft for you to send.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-10 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-white/60 text-sm">© <span id="year"></span> GoHighLevel Specialist — Funnels, Automation, Reporting</p>
      <div class="flex items-center gap-4 text-sm">
        <a href="#services" class="text-white/70 hover:text-white">Services</a>
        <a href="#roi" class="text-white/70 hover:text-white">ROI</a>
        <a href="#contact" class="text-white/70 hover:text-white">Contact</a>
      </div>
    </div>
  </footer>

  <!-- Booking Modal (Demo) -->
  <div id="modal" class="fixed inset-0 z-50 hidden">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative max-w-2xl mx-auto mt-10 md:mt-20 px-6">
      <div class="glass rounded-2xl p-6 md:p-8 shadow-card">
        <div class="flex items-start justify-between gap-6">
          <div>
            <h3 class="text-2xl font-extrabold">Free Growth Audit</h3>
            <p class="text-white/70 text-sm mt-1">Quick form. I’ll review and reply with next steps.</p>
          </div>
          <button id="closeModal" class="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 ring-focus flex items-center justify-center" aria-label="Close">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m6 6 12 12M6 18 18 6"/></svg>
          </button>
        </div>

        <div class="mt-6 grid md:grid-cols-2 gap-4">
          <label class="block">
            <span class="text-sm text-white/70">Name</span>
            <input id="fName" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" placeholder="Your name" />
          </label>
          <label class="block">
            <span class="text-sm text-white/70">Email</span>
            <input id="fEmail" type="email" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" placeholder="you@company.com" />
          </label>
          <label class="block">
            <span class="text-sm text-white/70">Company</span>
            <input id="fCompany" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" placeholder="Company name" />
          </label>
          <label class="block">
            <span class="text-sm text-white/70">Website</span>
            <input id="fWebsite" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" placeholder="https://..." />
          </label>
          <label class="block md:col-span-2">
            <span class="text-sm text-white/70">Your goals</span>
            <textarea id="fGoals" rows="3" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" placeholder="Tell me about your goals and challenges..."></textarea>
          </label>
          <label class="block">
            <span class="text-sm text-white/70">Preferred date</span>
            <input id="fDate" type="date" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
          </label>
          <label class="block">
            <span class="text-sm text-white/70">Preferred time</span>
            <input id="fTime" type="time" class="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 ring-focus" />
          </label>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <button id="sendRequest" class="btn-primary text-slate-900 font-semibold rounded-xl px-5 py-3 shadow-glow ring-focus">Send Request</button>
          <button id="copyRequest" class="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-focus">Copy Details</button>
          <button id="draftEmail" class="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-focus">Open Email Draft</button>
        </div>
        <p class="text-white/50 text-xs mt-3">
          Demo: This saves your details in your browser and opens a draft email to hello@example.com for you to send.
        </p>
      </div>
    </div>
  </div>

  <script>
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu if open
          if (window.getComputedStyle(document.getElementById('mobileMenu')).display !== 'none') {
            toggleMobileMenu(false);
          }
        }
      });
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    function toggleMobileMenu(force) {
      const show = typeof force === 'boolean' ? force : mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !show);
    }
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());

    // Modal controls
    const modal = document.getElementById('modal');
    const openers = [
      document.getElementById('openAudit'),
      document.getElementById('openAuditMobile'),
      document.getElementById('heroAudit'),
      document.getElementById('auditFromRoi'),
      document.getElementById('contactAudit'),
      document.getElementById('mobileCta'),
      ...document.querySelectorAll('.openAuditAny')
    ].filter(Boolean);
    const closeBtn = document.getElementById('closeModal');
    const openModal = () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
