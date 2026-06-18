/**
 * LearnGithub — Application Logic
 * Manages state, rendering, navigation, and interactivity.
 */

const App = (() => {
  // ── State ──
  const STORAGE_KEY = 'learnGithub';
  let state = {
    currentModule: 'welcome',
    theme: 'dark',
    completedModules: [],
    selectedQuizOption: null,
    quizAnswered: false
  };

  // ── Persistence ──
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) { /* First visit, use defaults */ }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentModule: state.currentModule,
        theme: state.theme,
        completedModules: state.completedModules
      }));
    } catch (e) { /* Storage full or blocked */ }
  }

  // ── Helpers ──
  function getModule(id) {
    return MODULES.find(m => m.id === id) || MODULES[0];
  }

  function getModuleIndex(id) {
    return MODULES.findIndex(m => m.id === id);
  }

  function getEducationalModules() {
    return MODULES.filter(m => !m.isWelcome);
  }

  function isCompleted(id) {
    return state.completedModules.includes(id);
  }

  function getProgressPct() {
    const edu = getEducationalModules();
    if (edu.length === 0) return 0;
    const done = edu.filter(m => isCompleted(m.id)).length;
    return Math.round((done / edu.length) * 100);
  }

  // ── Theme ──
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', state.theme === 'dark' ? '#0d1117' : '#faf9f7');
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
  }

  // ── Sidebar ──
  function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    const sections = {};
    MODULES.forEach(m => {
      if (!sections[m.section]) sections[m.section] = [];
      sections[m.section].push(m);
    });

    let html = '';
    const sectionOrder = ['Mulai', 'Dasar', 'Menengah', 'Lanjutan'];

    sectionOrder.forEach(sectionName => {
      const mods = sections[sectionName];
      if (!mods) return;

      html += `<div class="sidebar-section">`;
      if (sectionName !== 'Mulai') {
        html += `<div class="sidebar-section-title">${sectionName}</div>`;
      }

      mods.forEach(m => {
        const active = state.currentModule === m.id ? 'active' : '';
        const completed = isCompleted(m.id) ? 'completed' : '';
        html += `
          <a class="sidebar-item ${active} ${completed}"
             onclick="App.navigateTo('${m.id}'); return false;"
             href="#"
             role="link"
             data-module="${m.id}">
            <span class="sidebar-item-label">${m.title}</span>
            <svg class="sidebar-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </a>
        `;
      });

      html += `</div>`;
    });

    nav.innerHTML = html;
  }

  function updateSidebarActive() {
    document.querySelectorAll('.sidebar-item').forEach(el => {
      el.classList.toggle('active', el.dataset.module === state.currentModule);
      el.classList.toggle('completed', isCompleted(el.dataset.module));
    });
  }

  // ── Progress ──
  function updateProgress() {
    const pct = getProgressPct();
    const fill = document.getElementById('progressFill');
    const label = document.getElementById('progressPct');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
  }

  // ── Sidebar Toggle (Mobile) ──
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const isOpen = sidebar.classList.contains('open');

    if (isOpen) {
      closeSidebar();
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      document.body.classList.add('sidebar-open');
    }
  }

  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('sidebar-open');
  }

  // ── Navigation ──
  function navigateTo(moduleId) {
    const mod = getModule(moduleId);
    if (!mod) return;

    state.currentModule = moduleId;
    state.selectedQuizOption = null;
    state.quizAnswered = false;

    saveState();
    renderContent(mod);
    updateSidebarActive();
    updateProgress();
    updateTopbarTitle(mod);
    closeSidebar();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateTopbarTitle(mod) {
    const el = document.getElementById('topbarTitle');
    if (!el) return;
    if (mod.isWelcome) {
      el.innerHTML = '<strong>LearnGithub</strong>';
    } else {
      el.innerHTML = `<strong>${mod.section}</strong> / ${mod.title}`;
    }
  }

  // ── Content Rendering ──
  function renderContent(mod) {
    const area = document.getElementById('contentArea');
    if (!area) return;

    if (mod.isWelcome) {
      renderWelcome(area);
    } else {
      renderArticle(area, mod);
    }
  }

  // ── Welcome Screen ──
  function renderWelcome(container) {
    const firstDasar = MODULES.find(m => m.section === 'Dasar');
    const firstMenengah = MODULES.find(m => m.section === 'Menengah');
    const firstLanjutan = MODULES.find(m => m.section === 'Lanjutan');

    const dasarCount = MODULES.filter(m => m.section === 'Dasar').length;
    const menengahCount = MODULES.filter(m => m.section === 'Menengah').length;
    const lanjutanCount = MODULES.filter(m => m.section === 'Lanjutan').length;

    container.innerHTML = `
      <div class="content-fade">
        <div class="welcome-hero">
          <span class="welcome-rocket">🚀</span>
          <h1 class="welcome-title">
            Belajar GitHub dari<br>
            <span class="gradient-text">Nol Sampai Mahir</span>
          </h1>
          <p class="welcome-subtitle">
            Panduan lengkap berbahasa Indonesia dengan analogi sederhana
            dan contoh kontekstual. Dari pemula sampai mahir, semua dalam 12 modul terstruktur.
          </p>
          <button class="welcome-cta" onclick="App.navigateTo('${firstDasar?.id || 'apa-itu-git'}')">
            Mulai Belajar
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        <div class="feature-cards">
          <div class="feature-card" onclick="App.navigateTo('${firstDasar?.id || 'apa-itu-git'}')">
            <div class="feature-card-icon">📦</div>
            <div class="feature-card-title">Dasar</div>
            <div class="feature-card-desc">
              Pahami konsep Git & GitHub, instalasi, repository, dan alur kerja dasar add-commit-push.
            </div>
            <div class="feature-card-meta">${dasarCount} modul</div>
          </div>

          <div class="feature-card" onclick="App.navigateTo('${firstMenengah?.id || 'branching'}')">
            <div class="feature-card-icon">🔀</div>
            <div class="feature-card-title">Menengah</div>
            <div class="feature-card-desc">
              Branching, pull request, fork, dan cara menangani merge conflict.
            </div>
            <div class="feature-card-meta">${menengahCount} modul</div>
          </div>

          <div class="feature-card wide" onclick="App.navigateTo('${firstLanjutan?.id || 'fitur-github'}')">
            <div class="feature-card-icon">🚀</div>
            <div class="feature-card-title">Lanjutan</div>
            <div class="feature-card-desc">
              Fitur GitHub (Actions, Pages, Issues), perintah advanced, dan Git workflow profesional.
            </div>
            <div class="feature-card-meta">${lanjutanCount} modul</div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Article View ──
  function renderArticle(container, mod) {
    const idx = getModuleIndex(mod.id);
    const prevMod = idx > 0 ? MODULES[idx - 1] : null;
    const nextMod = idx < MODULES.length - 1 ? MODULES[idx + 1] : null;
    const completed = isCompleted(mod.id);

    let html = `<div class="content-fade">`;

    // Header
    html += `<div class="article-header">`;
    if (mod.level) {
      const badgeClass = mod.level;
      const badgeLabels = { pemula: '🟢 Pemula', menengah: '🟡 Menengah', lanjutan: '🟣 Lanjutan' };
      html += `<div class="article-badge ${badgeClass}">${badgeLabels[mod.level] || mod.level}</div>`;
    }
    html += `<h1 class="article-title">${mod.title}</h1>`;
    html += `</div>`;

    // Body
    html += `<div class="article-body">${mod.content}</div>`;

    // Quiz
    if (mod.quiz) {
      html += renderQuizHTML(mod.quiz, mod.id);
    }

    // Complete button
    html += `
      <button class="complete-btn ${completed ? 'completed' : ''}"
              onclick="App.toggleComplete('${mod.id}')"
              id="completeBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        ${completed ? 'Selesai! ✓' : 'Tandai Selesai'}
      </button>
    `;

    // Nav footer
    html += `<div class="nav-footer">`;
    if (prevMod) {
      html += `
        <button class="nav-btn prev" onclick="App.navigateTo('${prevMod.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <span class="nav-btn-label">${prevMod.title}</span>
        </button>
      `;
    } else {
      html += `<div></div>`;
    }
    if (nextMod) {
      html += `
        <button class="nav-btn next" onclick="App.navigateTo('${nextMod.id}')">
          <span class="nav-btn-label">${nextMod.title}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      `;
    }
    html += `</div>`;

    html += `</div>`;
    container.innerHTML = html;
  }

  // ── Quiz HTML ──
  function renderQuizHTML(quiz, moduleId) {
    const letters = ['A', 'B', 'C', 'D'];
    let html = `
      <div class="quiz-container" id="quizContainer" data-module="${moduleId}">
        <div class="quiz-header">
          <span class="quiz-header-icon">🧠</span>
          <span class="quiz-header-title">Quiz</span>
        </div>
        <div class="quiz-body">
          <div class="quiz-question">${quiz.question}</div>
          <div class="quiz-options">
    `;

    quiz.options.forEach((opt, i) => {
      html += `
        <div class="quiz-option" data-index="${i}" onclick="App.selectQuizOption(${i})">
          <span class="quiz-option-letter">${letters[i]}</span>
          <span class="quiz-option-text">${opt}</span>
        </div>
      `;
    });

    html += `
          </div>
          <button class="quiz-submit" id="quizSubmitBtn" onclick="App.submitQuiz()" disabled>
            Periksa Jawaban
          </button>
          <div id="quizExplanation"></div>
        </div>
      </div>
    `;

    return html;
  }

  // ── Quiz Interaction ──
  function selectQuizOption(index) {
    if (state.quizAnswered) return;

    state.selectedQuizOption = index;

    document.querySelectorAll('.quiz-option').forEach(el => {
      el.classList.toggle('selected', parseInt(el.dataset.index) === index);
    });

    const btn = document.getElementById('quizSubmitBtn');
    if (btn) btn.disabled = false;
  }

  function submitQuiz() {
    if (state.quizAnswered || state.selectedQuizOption === null) return;

    const mod = getModule(state.currentModule);
    if (!mod || !mod.quiz) return;

    state.quizAnswered = true;
    const isCorrect = state.selectedQuizOption === mod.quiz.correct;

    // Mark options
    document.querySelectorAll('.quiz-option').forEach(el => {
      const idx = parseInt(el.dataset.index);
      el.classList.add('disabled');
      el.classList.remove('selected');

      if (idx === mod.quiz.correct) {
        el.classList.add('correct');
      } else if (idx === state.selectedQuizOption && !isCorrect) {
        el.classList.add('wrong');
      }
    });

    // Disable submit
    const btn = document.getElementById('quizSubmitBtn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = isCorrect ? 'Benar!' : 'Salah';
      btn.style.background = isCorrect ? 'var(--green)' : 'var(--red)';
    }

    // Show explanation
    const expEl = document.getElementById('quizExplanation');
    if (expEl) {
      expEl.innerHTML = `
        <div class="quiz-explanation ${isCorrect ? 'correct' : 'wrong'}">
          <div class="quiz-explanation-label">${isCorrect ? '✓ Benar!' : '✗ Kurang tepat'}</div>
          <p>${mod.quiz.explanation}</p>
        </div>
      `;
    }
  }

  // ── Completion Toggle ──
  function toggleComplete(moduleId) {
    const idx = state.completedModules.indexOf(moduleId);
    if (idx === -1) {
      state.completedModules.push(moduleId);
    } else {
      state.completedModules.splice(idx, 1);
    }

    saveState();
    updateProgress();
    updateSidebarActive();

    // Update button
    const btn = document.getElementById('completeBtn');
    if (btn) {
      const done = isCompleted(moduleId);
      btn.classList.toggle('completed', done);
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        ${done ? 'Selesai! ✓' : 'Tandai Selesai'}
      `;
    }
  }

  // ── Copy Code ──
  function copyCode(btn) {
    const pre = btn.closest('.code-block')?.querySelector('pre code');
    if (!pre) return;

    navigator.clipboard.writeText(pre.textContent).then(() => {
      btn.classList.add('copied');
      const original = btn.innerHTML;
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M20 6L9 17l-5-5"/></svg> Copied!`;
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('copied');
      }, 2000);
    });
  }

  // ── Keyboard Shortcuts ──
  function handleKeyboard(e) {
    // Don't trigger if typing in input
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const idx = getModuleIndex(state.currentModule);

    switch (e.key) {
      case 'ArrowLeft':
        if (idx > 0) navigateTo(MODULES[idx - 1].id);
        break;
      case 'ArrowRight':
        if (idx < MODULES.length - 1) navigateTo(MODULES[idx + 1].id);
        break;
      case 't':
      case 'T':
        toggleTheme();
        break;
      case 'Escape':
        closeSidebar();
        break;
    }
  }

  // ── Init ──
  function init() {
    loadState();
    applyTheme();
    renderSidebar();

    const mod = getModule(state.currentModule);
    renderContent(mod);
    updateTopbarTitle(mod);
    updateProgress();

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);

    // Close sidebar on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeSidebar();
    });
  }

  // ── Public API ──
  return {
    init,
    navigateTo,
    toggleTheme,
    toggleSidebar,
    closeSidebar,
    toggleComplete,
    copyCode,
    selectQuizOption,
    submitQuiz
  };
})();

// Boot
document.addEventListener('DOMContentLoaded', App.init);
