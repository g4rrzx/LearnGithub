/**
 * LearnGithub — Module Content Data
 * Single source of truth for all learning content.
 * Each module: id, icon, title, section, level, isWelcome, content (HTML), quiz
 */

const MODULES = [
  // ═══════════════════════════════════════
  // MODULE 0: Welcome Screen
  // ═══════════════════════════════════════
  {
    id: 'welcome',
    icon: '🚀',
    title: 'Selamat Datang',
    section: 'Mulai',
    level: null,
    isWelcome: true,
    content: '',
    quiz: null
  },

  // ═══════════════════════════════════════
  // DASAR (Modules 1-4)
  // ═══════════════════════════════════════

  // Module 1: Apa itu Git & GitHub?
  {
    id: 'apa-itu-git',
    icon: '📦',
    title: 'Apa itu Git & GitHub?',
    section: 'Dasar',
    level: 'pemula',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Buku Diary dengan Mesin Waktu</div>
        <p>Bayangkan kamu punya buku diary. Setiap hari kamu menulis halaman baru. Sekarang bayangkan ada mesin yang bisa memotret setiap halaman diary-mu, menyimpannya, dan kapan saja kamu bisa kembali ke versi sebelumnya tanpa kehilangan yang baru. Git adalah "mesin waktu" itu, dan GitHub adalah "cloud" tempat kamu menyimpan semua foto tersebut agar bisa diakses dari mana saja dan berkolaborasi dengan teman.</p>
      </div>

      <h2>Git vs GitHub - Apa Bedanya?</h2>
      <p>Banyak pemula yang bingung antara Git dan GitHub. Meskipun sering disebut bersamaan, keduanya adalah hal yang berbeda:</p>

      <div class="concept-visual">
        <svg viewBox="0 0 800 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="concept-svg">
          <!-- Left: Local Computer (Git) -->
          <rect x="40" y="30" width="300" height="200" rx="16" fill="var(--bg-tertiary)" stroke="var(--border)" stroke-width="1.5"/>
          <rect x="60" y="50" width="260" height="120" rx="8" fill="var(--bg-primary)" stroke="var(--border)" stroke-width="1"/>
          <!-- Screen content: code lines -->
          <rect x="80" y="70" width="120" height="6" rx="3" fill="var(--green)" opacity="0.6"/>
          <rect x="80" y="86" width="180" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.4"/>
          <rect x="80" y="102" width="140" height="6" rx="3" fill="var(--accent)" opacity="0.5"/>
          <rect x="80" y="118" width="200" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.4"/>
          <rect x="80" y="134" width="100" height="6" rx="3" fill="var(--orange)" opacity="0.5"/>
          <!-- Keyboard -->
          <rect x="100" y="185" width="180" height="30" rx="6" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>
          <rect x="115" y="193" width="20" height="14" rx="2" fill="var(--bg-tertiary)"/>
          <rect x="140" y="193" width="20" height="14" rx="2" fill="var(--bg-tertiary)"/>
          <rect x="165" y="193" width="20" height="14" rx="2" fill="var(--bg-tertiary)"/>
          <rect x="190" y="193" width="60" height="14" rx="2" fill="var(--bg-tertiary)"/>
          <!-- Label -->
          <text x="190" y="252" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="13" font-weight="600">GIT (Lokal)</text>

          <!-- Center: Arrows -->
          <line x1="360" y1="100" x2="430" y2="100" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6"/>
          <polygon points="428,94 440,100 428,106" fill="var(--accent)" opacity="0.6"/>
          <line x1="440" y1="140" x2="370" y2="140" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6"/>
          <polygon points="372,134 360,140 372,146" fill="var(--green)" opacity="0.6"/>
          <text x="400" y="88" text-anchor="middle" fill="var(--text-tertiary)" font-family="var(--font-mono)" font-size="10">push</text>
          <text x="400" y="160" text-anchor="middle" fill="var(--text-tertiary)" font-family="var(--font-mono)" font-size="10">pull/clone</text>

          <!-- Right: Cloud (GitHub) -->
          <rect x="460" y="30" width="300" height="200" rx="16" fill="var(--bg-tertiary)" stroke="var(--accent-border)" stroke-width="1.5"/>
          <!-- Cloud icon -->
          <path d="M560 90 C560 70 580 55 600 55 C620 55 635 65 640 75 C650 68 665 70 672 80 C682 80 690 90 690 100 C690 112 680 120 668 120 L565 120 C552 120 542 110 542 100 C542 90 550 82 560 90Z" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
          <!-- Repo icons -->
          <rect x="500" y="140" width="100" height="30" rx="6" fill="var(--bg-primary)" stroke="var(--border)" stroke-width="1"/>
          <circle cx="516" cy="155" r="5" fill="var(--green)" opacity="0.6"/>
          <rect x="526" y="151" width="60" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.5"/>
          <rect x="500" y="178" width="100" height="30" rx="6" fill="var(--bg-primary)" stroke="var(--border)" stroke-width="1"/>
          <circle cx="516" cy="193" r="5" fill="var(--accent)" opacity="0.6"/>
          <rect x="526" y="189" width="50" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.5"/>
          <!-- People icons -->
          <circle cx="660" cy="155" r="12" fill="var(--purple)" opacity="0.2" stroke="var(--purple)" stroke-width="1"/>
          <circle cx="690" cy="155" r="12" fill="var(--orange)" opacity="0.2" stroke="var(--orange)" stroke-width="1"/>
          <circle cx="720" cy="155" r="12" fill="var(--green)" opacity="0.2" stroke="var(--green)" stroke-width="1"/>
          <text x="690" y="192" text-anchor="middle" fill="var(--text-tertiary)" font-family="var(--font-mono)" font-size="10">kolaborasi</text>
          <!-- Label -->
          <text x="610" y="252" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="13" font-weight="600">GITHUB (Cloud)</text>
        </svg>
      </div>

      <table>
        <thead>
          <tr>
            <th>Aspek</th>
            <th>Git</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Apa itu?</strong></td>
            <td>Software version control yang dipasang di komputermu</td>
            <td>Website/platform hosting repository Git di internet</td>
          </tr>
          <tr>
            <td><strong>Analogi</strong></td>
            <td>Kamera di HP-mu yang memotret setiap perubahan</td>
            <td>Google Photos/iCloud tempat foto-foto disimpan</td>
          </tr>
          <tr>
            <td><strong>Fungsi</strong></td>
            <td>Melacak perubahan file secara lokal</td>
            <td>Menyimpan, berbagi, dan berkolaborasi secara online</td>
          </tr>
          <tr>
            <td><strong>Dibuat oleh</strong></td>
            <td>Linus Torvalds (2005)</td>
            <td>Tom Preston-Werner dkk (2008)</td>
          </tr>
          <tr>
            <td><strong>Butuh internet?</strong></td>
            <td>Tidak (bekerja offline)</td>
            <td>Ya (platform online)</td>
          </tr>
        </tbody>
      </table>

      <h2>Alur Kerja Dasar Git</h2>
      <p>Sebelum masuk ke perintah-perintah Git, pahami dulu alur kerja dasarnya:</p>

      <div class="diagram">
        <div class="diagram-flow">
          <div class="diagram-node">File</div>
          <div class="diagram-arrow">→</div>
          <div class="diagram-node">Stage</div>
          <div class="diagram-arrow">→</div>
          <div class="diagram-node">Commit</div>
          <div class="diagram-arrow">→</div>
          <div class="diagram-node">Push</div>
        </div>
      </div>

      <p>Setiap perubahan yang kamu buat melewati 4 tahap ini:</p>
      <ol>
        <li><strong>File</strong> - Kamu mengedit file di komputermu (working directory)</li>
        <li><strong>Stage</strong> - Kamu memilih file mana yang ingin "difoto" (<code>git add</code>)</li>
        <li><strong>Commit</strong> - Kamu mengambil "foto" perubahan tersebut (<code>git commit</code>)</li>
        <li><strong>Push</strong> - Kamu mengirim foto ke GitHub (<code>git push</code>)</li>
      </ol>

      <h2>Cek Versi Git</h2>
      <p>Untuk memastikan Git sudah terpasang di komputermu, buka terminal dan ketik:</p>

      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
          </div>
          <span class="terminal-title">Terminal</span>
        </div>
        <div class="terminal-body">
<span class="prompt">$</span> <span class="command">git --version</span>
<span class="output">git version 2.43.0</span>
        </div>
      </div>

      <div class="callout-tip">
        <div class="callout-title">✅ Tips</div>
        <p>Jika perintah di atas menampilkan versi Git, berarti Git sudah terpasang dengan benar di komputermu. Jika tidak, lanjutkan ke modul berikutnya untuk panduan instalasi.</p>
      </div>

      <h2>Kenapa Harus Belajar Git?</h2>
      <p>Git bukan hanya untuk programmer senior. Berikut alasan kenapa kamu harus belajar Git sekarang:</p>
      <ul>
        <li><strong>Syarat kerja</strong> - Hampir semua lowongan developer mencantumkan Git sebagai syarat</li>
        <li><strong>Kolaborasi</strong> - Bisa kerja bareng tim tanpa takut file bentrok</li>
        <li><strong>Backup otomatis</strong> - Setiap commit adalah snapshot yang bisa dikembalikan kapan saja</li>
        <li><strong>Portfolio</strong> - GitHub profile-mu adalah CV terbaik untuk developer</li>
        <li><strong>Open source</strong> - Bisa berkontribusi ke proyek-proyek besar dunia</li>
      </ul>
    `,
    quiz: {
      question: 'Apa perbedaan utama antara Git dan GitHub?',
      options: [
        'Git dan GitHub adalah hal yang sama, hanya beda nama',
        'Git adalah software version control lokal, GitHub adalah platform hosting repository online',
        'GitHub lebih dulu dibuat daripada Git',
        'Git hanya bisa digunakan untuk proyek kecil, GitHub untuk proyek besar'
      ],
      correct: 1,
      explanation: 'Git adalah software version control yang dipasang di komputer (lokal), berfungsi melacak perubahan file. Sedangkan GitHub adalah website/platform yang menyimpan repository Git di internet, memungkinkan kolaborasi dan backup online. Keduanya saling melengkapi tapi bukan hal yang sama.'
    }
  },

  // Module 2: Instalasi & Setup
  {
    id: 'instalasi-setup',
    icon: '⚙️',
    title: 'Instalasi & Setup',
    section: 'Dasar',
    level: 'pemula',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Memasang Aplikasi Kamera</div>
        <p>Instalasi Git itu seperti memasang aplikasi kamera di HP-mu. Setelah terpasang, kamu perlu mengatur nama dan identitas (seperti mengatur watermark di foto). SSH Key itu seperti kartu akses gedung - sekali tap, pintu terbuka tanpa perlu memasukkan password berulang kali.</p>
      </div>

      <h2>Langkah 1: Install Git</h2>

      <h3>Windows</h3>
      <ol>
        <li>Download Git dari <strong>git-scm.com/download/win</strong></li>
        <li>Jalankan installer, pilih opsi default (Next terus)</li>
        <li>Pastikan centang <strong>"Git Bash Here"</strong> agar bisa klik kanan di folder</li>
        <li>Setelah selesai, buka <strong>Git Bash</strong> atau <strong>Command Prompt</strong></li>
      </ol>

      <h3>macOS</h3>
      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
          </div>
          <span class="terminal-title">Terminal macOS</span>
        </div>
        <div class="terminal-body">
<span class="prompt">$</span> <span class="command">xcode-select --install</span>
<span class="output">Akan muncul popup instalasi, klik "Install"</span>
        </div>
      </div>

      <h3>Linux (Ubuntu/Debian)</h3>
      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
          </div>
          <span class="terminal-title">Terminal Linux</span>
        </div>
        <div class="terminal-body">
<span class="prompt">$</span> <span class="command">sudo apt update && sudo apt install git -y</span>
<span class="output">Reading package lists... Done</span>
<span class="success">git is already the newest version (2.43.0)</span>
        </div>
      </div>

      <h2>Langkah 2: Konfigurasi Identitas</h2>
      <p>Setelah Git terpasang, kamu perlu memberitahu Git siapa kamu. Informasi ini akan tercantum di setiap commit yang kamu buat:</p>

      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
          </div>
          <span class="terminal-title">Terminal - Setup Identitas</span>
        </div>
        <div class="terminal-body">
<span class="prompt">$</span> <span class="command">git config --global user.name "Budi Santoso"</span>
<span class="prompt">$</span> <span class="command">git config --global user.email "budi@example.com"</span>
<span class="prompt">$</span> <span class="command">git config --global core.editor "code --wait"</span>

<span class="highlight"># Cek konfigurasi yang sudah dibuat:</span>
<span class="prompt">$</span> <span class="command">git config --list</span>
<span class="output">user.name=Budi Santoso</span>
<span class="output">user.email=budi@example.com</span>
<span class="output">core.editor=code --wait</span>
        </div>
      </div>

      <div class="callout-warning">
        <div class="callout-title">⚠️ Perhatian</div>
        <p>Pastikan email yang kamu gunakan sama dengan email yang terdaftar di akun GitHub-mu. Jika berbeda, GitHub tidak akan mengenali commit-mu sebagai kontribusimu.</p>
      </div>

      <h2>Langkah 3: Buat Akun GitHub</h2>
      <ol>
        <li>Buka <strong>github.com</strong> dan klik <strong>Sign up</strong></li>
        <li>Gunakan email yang sama dengan konfigurasi Git di atas</li>
        <li>Pilih username yang profesional (misalnya <code>budi-santoso</code>, bukan <code>budi_ganteng_99</code>)</li>
        <li>Verifikasi email dan selesaikan setup</li>
      </ol>

      <h2>Langkah 4: Setup SSH Key</h2>
      <p>SSH Key memungkinkan kamu push ke GitHub tanpa memasukkan password setiap kali:</p>

      <div class="concept-visual">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="concept-svg">
          <!-- Left: You (User) -->
          <circle cx="100" cy="80" r="28" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
          <circle cx="100" cy="70" r="10" fill="var(--accent)" opacity="0.4"/>
          <path d="M80 95 Q100 110 120 95" stroke="var(--accent)" stroke-width="1.5" fill="none" opacity="0.4"/>
          <text x="100" y="130" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="12">Kamu</text>

          <!-- Center: SSH Key (card) -->
          <rect x="240" y="45" width="160" height="90" rx="12" fill="var(--bg-tertiary)" stroke="var(--orange)" stroke-width="1.5" stroke-dasharray="4 3"/>
          <rect x="260" y="60" width="40" height="28" rx="4" fill="var(--orange)" opacity="0.2"/>
          <rect x="264" y="64" width="32" height="20" rx="2" fill="var(--orange)" opacity="0.3"/>
          <rect x="310" y="65" width="70" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.4"/>
          <rect x="310" y="78" width="50" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.3"/>
          <rect x="260" y="100" width="120" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.2"/>
          <rect x="260" y="112" width="80" height="6" rx="3" fill="var(--text-tertiary)" opacity="0.2"/>
          <text x="320" y="160" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="11">SSH Key = Kartu Akses</text>

          <!-- Arrows -->
          <line x1="140" y1="80" x2="230" y2="80" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
          <polygon points="228,75 238,80 228,85" fill="var(--accent)" opacity="0.4"/>
          <line x1="410" y1="80" x2="500" y2="80" stroke="var(--green)" stroke-width="1.5" opacity="0.4"/>
          <polygon points="498,75 508,80 498,85" fill="var(--green)" opacity="0.4"/>
          <text x="185" y="70" text-anchor="middle" fill="var(--text-tertiary)" font-family="var(--font-mono)" font-size="9">tap</text>
          <text x="455" y="70" text-anchor="middle" fill="var(--text-tertiary)" font-family="var(--font-mono)" font-size="9">verified</text>

          <!-- Right: GitHub (door/building) -->
          <rect x="520" y="35" width="180" height="130" rx="14" fill="var(--bg-tertiary)" stroke="var(--green)" stroke-width="1.5"/>
          <rect x="540" y="55" width="140" height="70" rx="8" fill="var(--bg-primary)" stroke="var(--border)" stroke-width="1"/>
          <!-- Door with checkmark -->
          <rect x="590" y="65" width="40" height="50" rx="4" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1"/>
          <path d="M600 90 L608 98 L622 82" stroke="var(--green)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- Repos inside -->
          <rect x="545" y="60" width="35" height="12" rx="3" fill="var(--accent)" opacity="0.2"/>
          <rect x="545" y="78" width="35" height="12" rx="3" fill="var(--purple)" opacity="0.2"/>
          <rect x="545" y="96" width="35" height="12" rx="3" fill="var(--orange)" opacity="0.2"/>
          <text x="610" y="185" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="12">GitHub</text>
        </svg>
      </div>

      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
          </div>
          <span class="terminal-title">Terminal - Generate SSH Key</span>
        </div>
        <div class="terminal-body">
<span class="prompt">$</span> <span class="command">ssh-keygen -t ed25519 -C "budi@example.com"</span>
<span class="output">Generating public/private ed25519 key pair.</span>
<span class="output">Enter file in which to save the key: <span class="highlight">[tekan Enter]</span></span>
<span class="output">Enter passphrase: <span class="highlight">[tekan Enter atau buat password]</span></span>
<span class="success">Your identification has been saved in /home/budi/.ssh/id_ed25519</span>

<span class="highlight"># Tampilkan public key untuk dicopy ke GitHub:</span>
<span class="prompt">$</span> <span class="command">cat ~/.ssh/id_ed25519.pub</span>
<span class="output">ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIB...</span>
        </div>
      </div>

      <p>Setelah membuat SSH Key, copy output di atas lalu tambahkan ke GitHub:</p>
      <ol>
        <li>Buka <strong>github.com/settings/keys</strong></li>
        <li>Klik <strong>"New SSH key"</strong></li>
        <li>Beri nama (misal: "Laptop Budi")</li>
        <li>Paste key yang sudah dicopy</li>
        <li>Klik <strong>"Add SSH key"</strong></li>
      </ol>

      <h2>Langkah 5: Setup VS Code</h2>
      <p>VS Code adalah code editor paling populer untuk development. Install extension berikut:</p>
      <ul>
        <li><strong>GitLens</strong> - Melihat sejarah perubahan setiap baris kode</li>
        <li><strong>Git Graph</strong> - Visualisasi branch dan commit secara grafis</li>
        <li><strong>GitHub Pull Requests</strong> - Review PR langsung dari editor</li>
      </ul>

      <div class="callout-tip">
        <div class="callout-title">✅ Tips</div>
        <p>Buka terminal langsung dari VS Code dengan shortcut <code>Ctrl + \`</code> (backtick). Ini memudahkan kamu menjalankan perintah Git tanpa berpindah aplikasi.</p>
      </div>
    `,
    quiz: {
      question: 'Perintah apa yang digunakan untuk mengatur nama pengguna Git secara global?',
      options: [
        'git set user.name "Nama Kamu"',
        'git config --global user.name "Nama Kamu"',
        'git username --set "Nama Kamu"',
        'git init --name "Nama Kamu"'
      ],
      correct: 1,
      explanation: 'Perintah `git config --global user.name "Nama Kamu"` digunakan untuk mengatur nama pengguna secara global. Flag `--global` berarti pengaturan ini berlaku untuk semua repository di komputermu, bukan hanya satu proyek tertentu.'
    }
  },

  // ═══════════════════════════════════════
  // Module 3-12: Skeleton (nav structure only)
  // ═══════════════════════════════════════

  {
    id: 'repository',
    icon: '📁',
    title: 'Repository (Repo)',
    section: 'Dasar',
    level: 'pemula',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Folder Ajaib</div>
        <p>Repository itu seperti "folder ajaib" yang mengingat setiap perubahan yang terjadi di dalamnya. Setiap kali kamu membuat commit, folder ini menyimpan snapshot lengkap. <code>.gitignore</code> itu seperti daftar barang yang harus disembunyikan sebelum foto diambil.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
      <p>Modul ini akan membahas <code>git init</code>, <code>git clone</code>, struktur repository, dan file <code>.gitignore</code>.</p>
    `,
    quiz: {
      question: 'Apa fungsi file .gitignore?',
      options: [
        'Menghapus file dari repository',
        'Menentukan file/folder yang tidak perlu dilacak oleh Git',
        'Mengenkripsi file sensitif',
        'Membuat backup otomatis'
      ],
      correct: 1,
      explanation: 'File .gitignore berisi daftar file dan folder yang tidak ingin dilacak oleh Git. Contohnya: node_modules/, .env, file build, dan cache. Ini menjaga repository tetap bersih dari file yang tidak perlu.'
    }
  },

  {
    id: 'add-commit-push',
    icon: '📤',
    title: 'Add, Commit & Push',
    section: 'Dasar',
    level: 'pemula',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Mengirim Paket</div>
        <p>Bayangkan kamu mau mengirim paket. <code>git add</code> = memasukkan barang ke kotak. <code>git commit</code> = menutup kotak dan memberi label. <code>git push</code> = mengirim paket ke alamat tujuan.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
      <p>Modul ini akan membahas alur working directory ke staging ke repository ke remote, <code>git status</code>, best practices commit message, dan <code>git push</code>.</p>
    `,
    quiz: {
      question: 'Apa yang dilakukan perintah `git add .`?',
      options: [
        'Mengirim semua file ke GitHub',
        'Menambahkan semua perubahan ke staging area',
        'Membuat commit baru dengan semua file',
        'Menghapus semua file yang tidak terpakai'
      ],
      correct: 1,
      explanation: 'Perintah `git add .` menambahkan SEMUA perubahan (file baru, termodifikasi, dan terhapus) di direktori saat ini ke staging area. Tanda `.` berarti "semua file di folder ini". Setelah di-add, file siap untuk di-commit.'
    }
  },

  // MENENGAH (Modules 5-8)
  {
    id: 'branching',
    icon: '🌿',
    title: 'Branching (Percabangan)',
    section: 'Menengah',
    level: 'menengah',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Timeline Avengers Endgame</div>
        <p>Branch itu seperti alternate timeline di Avengers: Endgame. Kamu bisa membuat timeline alternatif untuk bereksperimen tanpa mempengaruhi timeline utama (main). Kalau eksperimen berhasil, timeline digabungkan kembali (merge).</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
      <p>Modul ini akan membahas <code>git branch</code>, <code>git checkout</code>, <code>git checkout -b</code>, <code>git merge</code>, dan konvensi penamaan branch.</p>
    `,
    quiz: {
      question: 'Perintah paling efisien untuk membuat DAN langsung pindah ke branch baru adalah?',
      options: [
        'git branch baru lalu git checkout baru',
        'git checkout -b baru',
        'git new-branch baru',
        'git create branch baru'
      ],
      correct: 1,
      explanation: 'Perintah `git checkout -b nama-branch` adalah cara paling efisien karena menggabungkan dua langkah (membuat branch + pindah ke branch) menjadi satu perintah. Ini shortcut dari `git branch nama-branch` diikuti `git checkout nama-branch`.'
    }
  },

  {
    id: 'pull-request',
    icon: '🔀',
    title: 'Pull Request (PR)',
    section: 'Menengah',
    level: 'menengah',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Mengajukan Proposal ke Bos</div>
        <p>Pull Request itu seperti mengajukan proposal perubahan ke bos. Kamu tidak bisa langsung mengubah tata letak kantor, kamu perlu mengajukan proposal dulu. Bos (maintainer) akan review, mungkin minta revisi, lalu approve atau reject.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
    `,
    quiz: {
      question: 'Apa tujuan utama Pull Request?',
      options: [
        'Menghapus branch yang tidak terpakai',
        'Mengunduh kode dari repository lain',
        'Mengajukan perubahan kode untuk direview sebelum digabungkan ke branch utama',
        'Membuat branch baru secara otomatis'
      ],
      correct: 2,
      explanation: 'Pull Request (PR) adalah cara mengajukan perubahan kode untuk direview oleh tim sebelum digabungkan (merge) ke branch utama. Ini memastikan kualitas kode dan memungkinkan diskusi sebelum perubahan diterapkan.'
    }
  },

  {
    id: 'fork-kontribusi',
    icon: '🍴',
    title: 'Fork & Kontribusi',
    section: 'Menengah',
    level: 'menengah',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Memfotokopi Buku Resep</div>
        <p>Fork itu seperti memfotokopi buku resep orang lain, menambahkan resep rendang versimu sendiri, lalu mengirimkannya ke penerbit (membuat PR ke repo asli).</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
    `,
    quiz: {
      question: 'Apa arti "upstream" dalam konteks fork?',
      options: [
        'Branch utama di repo fork-mu',
        'Repository asli yang kamu fork',
        'Server tempat GitHub berjalan',
        'Versi terbaru dari Git'
      ],
      correct: 1,
      explanation: '"Upstream" merujuk ke repository asli yang kamu fork. Ini digunakan untuk menyinkronkan fork-mu dengan perubahan terbaru dari repo asli. Kamu bisa menambah remote upstream dengan perintah `git remote add upstream <url-repo-asli>`.'
    }
  },

  {
    id: 'merge-conflict',
    icon: '⚡',
    title: 'Merge Conflict',
    section: 'Menengah',
    level: 'menengah',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Dua Orang Edit Slide PowerPoint yang Sama</div>
        <p>Merge conflict terjadi ketika dua orang mengubah bagian yang sama dari file yang sama. Git tidak tahu versi mana yang benar, jadi dia meminta kamu untuk memilih.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
    `,
    quiz: {
      question: 'Langkah pertama saat menghadapi merge conflict adalah?',
      options: [
        'Langsung jalankan git push --force',
        'Hapus repository dan clone ulang',
        'Buka file yang konflik, lihat conflict markers, lalu pilih/edit kode yang diinginkan',
        'Jalankan git merge --abort tanpa melihat apapun'
      ],
      correct: 2,
      explanation: 'Saat menghadapi merge conflict, buka file yang ditandai konflik. Git akan menandai area konflik dengan `<<<<<<<`, `=======`, dan `>>>>>>>`. Pilih versi yang benar atau gabungkan keduanya, lalu hapus conflict markers, add, dan commit.'
    }
  },

  // LANJUTAN (Modules 9-12)
  {
    id: 'fitur-github',
    icon: '🛠️',
    title: 'Fitur GitHub',
    section: 'Lanjutan',
    level: 'lanjutan',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Robot Asisten & Papan Sticky Notes</div>
        <p>GitHub Actions itu seperti robot asisten yang otomatis menjalankan tes setiap kali kamu push kode. Issues itu seperti sticky notes di papan kantor - siapa saja bisa menempelkan catatan tentang bug atau fitur yang diinginkan.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
    `,
    quiz: {
      question: 'Apa fungsi utama GitHub Actions?',
      options: [
        'Menyimpan file secara online',
        'Otomatisasi workflow seperti CI/CD (testing, build, deploy)',
        'Membuat dokumentasi otomatis',
        'Mengirim notifikasi ke email'
      ],
      correct: 1,
      explanation: 'GitHub Actions adalah fitur otomatisasi yang memungkinkan kamu menjalankan workflow secara otomatis. Contoh: setiap push, otomatis jalankan test. Setiap merge ke main, otomatis deploy ke production. Ini disebut CI/CD (Continuous Integration/Continuous Deployment).'
    }
  },

  {
    id: 'git-advanced',
    icon: '🔧',
    title: 'Git Advanced Commands',
    section: 'Lanjutan',
    level: 'lanjutan',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Piring Kotor & Diary yang Dirapikan</div>
        <p><code>git stash</code> itu seperti menaruh piring kotor di wastafel sementara - kamu bisa lanjut kerja, nanti piringnya dicuci (di-apply) lagi. <code>git rebase</code> itu seperti merapikan halaman diary agar lebih rapi dan kronologis.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
    `,
    quiz: {
      question: 'Kapan sebaiknya menggunakan `git stash`?',
      options: [
        'Saat ingin menghapus perubahan permanen',
        'Saat ingin menyimpan perubahan sementara tanpa commit, agar bisa pindah branch',
        'Saat ingin mengirim kode ke GitHub',
        'Saat ingin membuat branch baru'
      ],
      correct: 1,
      explanation: 'Git stash digunakan ketika kamu punya perubahan yang belum selesai tapi perlu pindah branch atau pull kode terbaru. Stash menyimpan perubahanmu "di samping" sementara, sehingga working directory bersih. Nanti bisa di-apply kembali dengan `git stash pop`.'
    }
  },

  {
    id: 'git-workflow',
    icon: '🔄',
    title: 'Git Workflow',
    section: 'Lanjutan',
    level: 'lanjutan',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Dapur Restoran</div>
        <p>Git Flow itu seperti dapur restoran profesional. <strong>main</strong> = menu final yang disajikan ke pelanggan. <strong>develop</strong> = dapur utama tempat chef bereksperimen. <strong>feature branches</strong> = stasiun persiapan (prep station) di mana masing-masing chef menyiapkan hidangannya.</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
    `,
    quiz: {
      question: 'Apa perbedaan utama Git Flow dan GitHub Flow?',
      options: [
        'Tidak ada perbedaan, keduanya sama',
        'Git Flow lebih kompleks dengan banyak branch (main, develop, feature, release, hotfix), GitHub Flow lebih simpel hanya dengan main + feature branch',
        'GitHub Flow lebih kompleks dari Git Flow',
        'Git Flow hanya untuk proyek kecil, GitHub Flow untuk proyek besar'
      ],
      correct: 1,
      explanation: 'Git Flow memiliki banyak branch (main, develop, feature, release, hotfix) cocok untuk proyek dengan release cycle yang terjadwal. GitHub Flow lebih simpel: hanya main + feature branches + pull requests, cocok untuk continuous deployment. Kebanyakan startup modern menggunakan GitHub Flow.'
    }
  },

  {
    id: 'penutup',
    icon: '🎓',
    title: 'Penutup & Next Steps',
    section: 'Lanjutan',
    level: 'lanjutan',
    isWelcome: false,
    content: `
      <div class="callout-analogy">
        <div class="callout-analogy-icon">💡</div>
        <div class="callout-analogy-title">Analogi: Belajar Naik Sepeda</div>
        <p>Belajar Git itu seperti belajar naik sepeda. Kamu pasti jatuh (merge conflict, salah push, branch berantakan), tapi semakin sering berlatih, semakin lancar. Jangan takut membuat kesalahan - Git dirancang untuk bisa di-undo!</p>
      </div>
      <h2>Konten modul ini sedang dalam pengembangan...</h2>
      <p>Modul penutup akan berisi ringkasan semua materi, challenge levels, dan rekomendasi langkah selanjutnya.</p>
    `,
    quiz: {
      question: 'Cara terbaik untuk melatih skill Git adalah?',
      options: [
        'Hanya membaca dokumentasi tanpa praktik',
        'Membuat proyek nyata, rutin commit, coba kolaborasi, dan jangan takut bereksperimen',
        'Menghafal semua perintah Git',
        'Menggunakan Git hanya saat ada bug'
      ],
      correct: 1,
      explanation: 'Cara terbaik belajar Git adalah dengan praktik langsung! Buat proyek nyata (sekecil apapun), commit secara rutin, coba fitur branching dan PR, kolaborasi dengan teman, dan berkontribusi ke open source. Semakin sering kamu pakai, semakin natural perintah-perintah Git terasa.'
    }
  }
];
