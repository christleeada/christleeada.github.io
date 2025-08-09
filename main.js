
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
    };
    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    };
    openers.forEach(b => b.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Services accordion
    document.querySelectorAll('[data-acc]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.getAttribute('data-acc'));
        if (!target) return;
        const show = target.classList.contains('hidden');
        target.classList.toggle('hidden', !show);
        btn.textContent = show ? 'Show less' : 'Learn more';
      });
    });

    // ROI Calculator
    const $ = (id) => document.getElementById(id);
    const inputs = {
      leads: $('inLeads'),
      close: $('inClose'),
      value: $('inValue'),
      hours: $('inHours'),
      hourly: $('inHourly')
    };
    const outputs = {
      revenue: $('outRevenue'),
      savings: $('outSavings'),
      impact: $('outImpact')
    };

    function formatCurrency(n) {
      return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    }
    function animateNumber(el, to) {
      const from = Number((el.dataset.val || '0'));
      const start = performance.now();
      const dur = 700;
      function step(t) {
        const k = Math.min(1, (t - start) / dur);
        const ease = 1 - Math.pow(1 - k, 3);
        const v = Math.round(from + (to - from) * ease);
        el.textContent = formatCurrency(v);
        if (k < 1) requestAnimationFrame(step);
        else el.dataset.val = String(to);
      }
      requestAnimationFrame(step);
    }
    function recalc() {
      const leads = Math.max(0, Number(inputs.leads.value || 0));
      const close = Math.min(100, Math.max(0, Number(inputs.close.value || 0))) / 100;
      const value = Math.max(0, Number(inputs.value.value || 0));
      const hours = Math.max(0, Number(inputs.hours.value || 0));
      const hourly = Math.max(0, Number(inputs.hourly.value || 0));

      const addedRevenue = Math.round(leads * close * value);
      const timeSavings = Math.round(hours * 4.33 * hourly);
      const impact = addedRevenue + timeSavings;

      animateNumber(outputs.revenue, addedRevenue);
      animateNumber(outputs.savings, timeSavings);
      animateNumber(outputs.impact, impact);
    }
    Object.values(inputs).forEach(i => i.addEventListener('input', recalc));
    document.querySelectorAll('[data-step]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-step');
        const dir = Number(btn.getAttribute('data-dir'));
        const el = inputs[key];
        const step = key === 'close' ? 1 : (key === 'hours' ? 1 : (key === 'hourly' ? 5 : (key === 'value' ? 50 : 10)));
        el.value = Math.max(0, Number(el.value || 0) + dir * step);
        recalc();
      });
    });
    recalc();

    // Case carousel
    const track = document.getElementById('caseTrack');
    const cards = Array.from(track.children);
    let caseIndex = 0;
    function updateCarousel() {
      const width = cards[0].getBoundingClientRect().width + 24; // card width + gap
      track.style.transform = `translateX(${-caseIndex * width}px)`;
    }
    function nextCase() {
      caseIndex = Math.min(cards.length - 1, caseIndex + 1);
      updateCarousel();
    }
    function prevCase() {
      caseIndex = Math.max(0, caseIndex - 1);
      updateCarousel();
    }
    ['nextCase','nextCase_m'].forEach(id => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', nextCase);
    });
    ['prevCase','prevCase_m'].forEach(id => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', prevCase);
    });
    window.addEventListener('resize', updateCarousel);

    // Hero counters animation
    function animateValue(el, to, prefix = '', suffix = '') {
      const from = Number(el.dataset.val || 0);
      const start = performance.now();
      const dur = 1200;
      function step(t) {
        const k = Math.min(1, (t - start) / dur);
        const ease = 1 - Math.pow(1 - k, 3);
        const v = Math.round(from + (to - from) * ease);
        el.textContent = prefix + v.toLocaleString() + suffix;
        if (k < 1) requestAnimationFrame(step);
        else el.dataset.val = String(to);
      }
      requestAnimationFrame(step);
    }
    setTimeout(() => {
      animateValue(document.getElementById('heroLeads'), 468);
      animateValue(document.getElementById('heroCalls'), 92);
      animateValue(document.getElementById('heroValue'), 128000, '$');
      document.getElementById('heroBar1').style.width = '78%';
      document.getElementById('heroBar2').style.width = '65%';
    }, 400);

    // Demo booking behavior
    const fields = {
      name: document.getElementById('fName'),
      email: document.getElementById('fEmail'),
      company: document.getElementById('fCompany'),
      website: document.getElementById('fWebsite'),
      goals: document.getElementById('fGoals'),
      date: document.getElementById('fDate'),
      time: document.getElementById('fTime')
    };

    function getPayload() {
      return {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        company: fields.company.value.trim(),
        website: fields.website.value.trim(),
        goals: fields.goals.value.trim(),
        date: fields.date.value,
        time: fields.time.value
      };
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      document.getElementById('toastMsg').textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 2500);
    }

    document.getElementById('sendRequest').addEventListener('click', () => {
      const payload = getPayload();
      // Required: name and email for demo
      if (!payload.name || !payload.email) {
        showToast('Please add your name and email.');
        return;
      }
      try {
        const list = JSON.parse(localStorage.getItem('demo_audits') || '[]');
        list.push({ ...payload, ts: new Date().toISOString() });
        localStorage.setItem('demo_audits', JSON.stringify(list));
        showToast('Saved! You can copy or open an email draft.');
      } catch (e) {
        showToast('Saved in memory for this session.');
        window.__lastAudit = payload;
      }
    });

    document.getElementById('copyRequest').addEventListener('click', async () => {
      const payload = getPayload();
      const txt = [
        'Free Growth Audit Request',
        '---------------------------',
        `Name: ${payload.name || '-'}`,
        `Email: ${payload.email || '-'}`,
        `Company: ${payload.company || '-'}`,
        `Website: ${payload.website || '-'}`,
        `Goals: ${payload.goals || '-'}`,
        `Preferred: ${payload.date || '-'} ${payload.time || ''}`.trim(),
      ].join('\n');
      try {
        await navigator.clipboard.writeText(txt);
        showToast('Details copied to clipboard!');
      } catch (e) {
        showToast('Could not copy automatically. Select and copy manually.');
      }
    });

    document.getElementById('draftEmail').addEventListener('click', () => {
      const payload = getPayload();
      const recipient = 'hello@example.com'; // Update later with your email
      const subject = encodeURIComponent('Free Growth Audit Request');
      const body = encodeURIComponent(
        `Hi,\n\nI'd like a free growth audit.\n\nName: ${payload.name || '-'}\nEmail: ${payload.email || '-'}\nCompany: ${payload.company || '-'}\nWebsite: ${payload.website || '-'}\nGoals: ${payload.goals || '-'}\nPreferred: ${payload.date || '-'} ${payload.time || ''}\n\nThanks!`
      );
      window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
    });

    // Mobile CTA closes when scrolling near footer (avoid overlap)
    function updateMobileCtaVisibility() {
      const footer = document.querySelector('footer');
      const cta = document.getElementById('mobileCta');
      const rect = footer.getBoundingClientRect();
      const overlap = rect.top < window.innerHeight - 100;
      cta.style.opacity = overlap ? '0' : '1';
      cta.style.pointerEvents = overlap ? 'none' : 'auto';
    }
    window.addEventListener('scroll', updateMobileCtaVisibility, { passive: true });
    window.addEventListener('resize', updateMobileCtaVisibility);
    updateMobileCtaVisibility();
  

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96c3b5cb91ed9d1f',t:'MTc1NDcwNTM1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();