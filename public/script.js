
const GIFS = {
  welcome: 'https://64.media.tumblr.com/c7bca1967b970a78676f1584583ed1c5/b208c8d863f41a09-af/s640x960/f663a9f47203bbf62cc6e6ce088170020c6ecacb.gif',
  dance: 'https://i.redd.it/wz0snnslhjrb1.gif',
  funny: 'https://media.tenor.com/gg4XA5zaLdkAAAAM/spooky-month-pumpkin.gif'
}

const pages = {
  'index.html': {
    title: 'HOME',
    content: `
      <section class="window">
        <h2 class="window-title">WELCOME_TO_MY_WEBSITE.TXT</h2>
        <div class="window-content center">
          <p class="eyebrow">★ YOU HAVE ENTERED THE INTERNET ★</p>
          <h1>WELCOME, INTERNET TRAVELER!</h1>
          <p>Welcome to my little corner of the World Wide Web!</p>
          <p>Made with HTML, CSS, JavaScript and questionable amounts of caffeine.</p>
          <div class="construction">🚧 UNDER CONSTRUCTION 🚧</div>
          <pre class="ascii">   .----------------.
   |  N0TE'S WEB    |
   |      ZONE      |
   |  EST. 2026     |
   '----------------'</pre>
          <p class="small">Best viewed with a snack at 3 AM.</p>
        </div>
      </section>

      <section class="window">
        <h2 class="window-title">WELCOME.GIF</h2>
        <div class="window-content center">
          <h2>HEY YOU! WELCOME TO MY WEBSITE!</h2>
          <img class="retro-gif" src="${GIFS.welcome}" alt="Animated welcome greeting" width="320">
          <p class="gif-caption">✨ YOU ARE NOW ENTERING THE WEB ZONE ✨</p>
        </div>
      </section>

      <section class="window">
        <h2 class="window-title">DANCE_PARTY.GIF</h2>
        <div class="window-content center">
          <div class="rainbow-text">★ STOP EVERYTHING! IT'S DANCE TIME! ★</div>
          <img class="retro-gif" src="${GIFS.dance}" alt="Funny dancing animation" width="320">
          <p>♪♫♪ THE INTERNET DISCO IS OPEN! ♪♫♪</p>
          <button id="dance-button" type="button">MAKE THIS PAGE DANCE!</button>
        </div>
      </section>

      <section class="window">
        <h2 class="window-title">RANDOM_INTERNET.MEME</h2>
        <div class="window-content center">
          <img class="retro-gif" src="${GIFS.funny}" alt="Spooky Month animated pumpkin" width="320">
          <p class="gif-caption">🎃 THE INTERNET HAS BLESSED YOU 🎃</p>
        </div>
      </section>

      <section class="window">
        <h2 class="window-title">VISITOR_COUNTER.EXE</h2>
        <div class="window-content center">
          <p>You are visitor number:</p>
          <div class="counter" id="counter">000001</div>
          <p class="small">Counter stored in this browser.</p>
          <p>Current time: <span id="clock">loading...</span></p>
        </div>
      </section>

      <section class="window">
        <h2 class="window-title">MESSAGE_FROM_WEBMASTER.TXT</h2>
        <div class="window-content">
          <p>Hi, stranger from the Internet!</p>
          <p>Explore my pages, check out the projects and leave a message in the guestbook.</p>
          <p id="random-message">Loading a very important message...</p>
          <button id="message-button" type="button">GIVE ME INTERNET WISDOM</button>
        </div>
      </section>`
  },

  'about.html': {
    title: 'ABOUT ME',
    content: `
      <section class="window">
        <h2 class="window-title">WHO_IS_N0TE.TXT</h2>
        <div class="window-content">
          <h1>ABOUT THE WEBMASTER</h1>
          <p>Hey! I'm the person behind this little Internet corner.</p>
          <p>This site is a tiny tribute to old-school personal websites, bright colours, pixel vibes and chaotic GIFs.</p>
          <div class="badges">
            <span>HTML ENTHUSIAST</span>
            <span>CSS WIZARD</span>
            <span>JS EXPLORER</span>
            <span>CAFFEINE POWERED</span>
          </div>
        </div>
      </section>
      <section class="window">
        <h2 class="window-title">CURRENT_STATUS.EXE</h2>
        <div class="window-content">
          <p>Connection: <strong>ONLINE-ish</strong></p>
          <p>Mood: <strong id="mood">Loading...</strong></p>
          <p>Favourite activity: making the Internet weird again.</p>
          <img class="retro-gif" src="${GIFS.welcome}" alt="Welcome animation" width="320">
        </div>
      </section>`
  },

  'projects.html': {
    title: 'MY PROJECTS',
    content: `
      <section class="window">
        <h2 class="window-title">PROJECTS_FOLDER</h2>
        <div class="window-content">
          <h1>MY COOL PROJECTS</h1>
          <h2>01. Hello Static</h2>
          <p>This retro website, built as a static-site CI/CD project and deployed using GitHub Pages.</p>
          <h2>02. Go Projects</h2>
          <p>Experiments with Go, builds, tests and GitHub Actions.</p>
          <h2>03. Python Projects</h2>
          <p>Python applications and executable builds.</p>
          <h2>04. Future Experiments</h2>
          <p>More code, more chaos, more questionable design decisions.</p>
          <p><a href="https://github.com/N0TEthis" target="_blank" rel="noopener noreferrer">VISIT MY GITHUB →</a></p>
        </div>
      </section>
      <section class="window">
        <h2 class="window-title">SPOOKY_INTERNET.GIF</h2>
        <div class="window-content center">
          <h2>⚠️ UNEXPECTED INTERNET EVENT ⚠️</h2>
          <img class="retro-gif" src="${GIFS.funny}" alt="Spooky Month pumpkin animation" width="320">
          <p>100% certified Internet nonsense.</p>
        </div>
      </section>`
  },

  'guestbook.html': {
    title: 'GUESTBOOK',
    content: `
      <section class="window">
        <h2 class="window-title">SIGN_MY_GUESTBOOK.TXT</h2>
        <div class="window-content">
          <h1>THE GUESTBOOK</h1>
          <p>You found my website! Leave a message for the next Internet traveller.</p>
          <form id="guestbook-form">
            <label for="guest-name">Your nickname:</label>
            <input id="guest-name" name="name" maxlength="30" required placeholder="CoolInternetPerson">
            <label for="guest-message">Your message:</label>
            <textarea id="guest-message" name="message" maxlength="300" required placeholder="This website is totally rad!"></textarea>
            <button type="submit">SIGN THE GUESTBOOK!</button>
          </form>
          <p id="guestbook-status" class="message" role="status"></p>
        </div>
      </section>
      <section class="window">
        <h2 class="window-title">VISITORS_MESSAGES.TXT</h2>
        <div class="window-content">
          <div id="guestbook-entries"></div>
          <button id="clear-guestbook" type="button">CLEAR LOCAL MESSAGES</button>
          <p class="small">Messages are stored only in this browser.</p>
        </div>
      </section>`
  },

  'links.html': {
    title: 'COOL LINKS',
    content: `
      <section class="window">
        <h2 class="window-title">COOL_PLACES_ON_THE_WEB.URL</h2>
        <div class="window-content">
          <h1>MY FAVOURITE LINKS</h1>
          <p>Some useful places to explore on the World Wide Web:</p>
          <ul class="link-list">
            <li>🌐 <a href="https://github.com/N0TEthis" target="_blank" rel="noopener noreferrer">My GitHub</a> — code and experiments.</li>
            <li>📚 <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> — learn web development.</li>
            <li>🕸️ <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">W3C</a> — web standards.</li>
            <li>💾 <a href="https://neocities.org/" target="_blank" rel="noopener noreferrer">Neocities</a> — personal website inspiration.</li>
          </ul>
          <p>Have a cool link? Sign the guestbook!</p>
        </div>
      </section>
      <section class="window">
        <h2 class="window-title">DANCE_BREAK.GIF</h2>
        <div class="window-content center">
          <img class="retro-gif" src="${GIFS.dance}" alt="Dancing animation" width="320">
          <p>♪ The Web never sleeps! ♪</p>
        </div>
      </section>`
  }
}

const siteNavigation = [
  ['index.html', '🏠 HOME'],
  ['about.html', '👾 ABOUT'],
  ['projects.html', '💾 PROJECTS'],
  ['guestbook.html', '✉ GUESTBOOK'],
  ['links.html', '🔗 LINKS']
]

const currentFile = window.location.pathname.split('/').pop() || 'index.html'
const page = pages[currentFile] || pages['index.html']

document.title = `★ N0TE'S WEB ZONE :: ${page.title} ★`

document.getElementById('app').innerHTML = `
  <div class="page">
    <div class="top">
      <p class="top-small">PERSONAL HOMEPAGE • EST. 2026 • 100% HUMAN-MADE CHAOS</p>
      <div class="logo">★ N0TE'S WEB ZONE ★</div>
      <p class="blink">WELCOME TO MY HOMEPAGE!!!</p>
      <p class="small">Best viewed in 800x600 • Netscape Navigator recommended</p>
      <div class="status-bar">● SYSTEM ONLINE <span id="live-clock">00:00:00</span> ● INTERNET MAGIC ACTIVE</div>
    </div>

    <nav class="menu" aria-label="Main navigation">
     ${siteNavigation.map(([file, label]) =>
    `<a href="./${file}" ${file === currentFile ? 'aria-current="page"' : ''}>${label}</a>`
  ).join('')}
    </nav>

    <div class="ticker">
      ★ WELCOME TO THE WEB ZONE ★ YOU ARE AWESOME! ★ STAY A LITTLE WEIRD ★
    </div>

    <div class="layout">
      <aside class="sidebar">
        <section class="window">
          <h2 class="window-title">SYSTEM.INFO</h2>
          <div class="window-content center">
            <div class="pixel-face">٩(◕‿◕｡)۶</div>
            <p><strong>USER:</strong> INTERNET TRAVELLER</p>
            <p><strong>STATUS:</strong> ONLINE</p>
            <p class="small">Thanks for visiting!</p>
          </div>
        </section>
        <section class="window">
          <h2 class="window-title">QUICK_LINKS</h2>
          <div class="window-content">
            <p><a href="./index.html">★ Home</a></p>
            <p><a href="./projects.html">★ My projects</a></p>
            <p><a href="./guestbook.html">★ Sign guestbook</a></p>
          </div>
        </section>
        <section class="window">
          <h2 class="window-title">WEB_BADGES</h2>
          <div class="window-content center">
            <div class="badge88">BEST<br>VIEWED<br>ONLINE</div>
            <div class="badge88">MADE WITH<br>JAVASCRIPT</div>
            <div class="badge88">NO<br>CORPORATE<br>VIBES</div>
          </div>
        </section>
      </aside>

      <main class="main-content">
        ${page.content}
      </main>
    </div>

    <footer>
      <p>★ THIS WEBSITE IS BEST ENJOYED WITH A SNACK ★</p>
      <p>Made with HTML, CSS, JavaScript and Internet nostalgia.</p>
      <p>© 2026 N0TE'S WEB ZONE • Thanks for surfing!</p>
      <a href="./index.html">BACK TO THE TOP ↑</a>
    </footer>
  </div>
`

const counterElement = document.getElementById('counter')

if (counterElement) {
  const visits = Number(localStorage.getItem('n0te-visits') || '0') + 1
  localStorage.setItem('n0te-visits', String(visits))
  counterElement.textContent = String(visits).padStart(6, '0')
}

function updateClock() {
  const now = new Date().toLocaleTimeString()
  const clock = document.getElementById('clock')
  const liveClock = document.getElementById('live-clock')

  if (clock) clock.textContent = now
  if (liveClock) liveClock.textContent = now
}

updateClock()
window.setInterval(updateClock, 1000)

const messages = [
  'YOU HAVE DISCOVERED A SECRET INTERNET CORNER!',
  'THE INTERNET IS JUST COMPUTERS TALKING TO EACH OTHER.',
  'YOU LOOK VERY COOL TODAY. THIS IS A FACT.',
  'REMEMBER TO SAVE YOUR WORK.',
  'SOMEWHERE, SOMEONE IS STILL USING INTERNET EXPLORER.',
  'YOU HAVE UNLOCKED: ABSOLUTELY NOTHING.',
  '404: BORING PERSONALITY NOT FOUND.'
]

const messageButton = document.getElementById('message-button')
const randomMessage = document.getElementById('random-message')

if (messageButton && randomMessage) {
  messageButton.addEventListener('click', () => {
    randomMessage.textContent = messages[Math.floor(Math.random() * messages.length)]
  })
}

const danceButton = document.getElementById('dance-button')

if (danceButton) {
  danceButton.addEventListener('click', () => {
    document.body.classList.toggle('party-mode')
    danceButton.textContent = document.body.classList.contains('party-mode')
      ? 'STOP THE CHAOS!'
      : 'MAKE THIS PAGE DANCE!'
  })
}

const mood = document.getElementById('mood')

if (mood) {
  const moods = ['CAFFEINATED ☕', 'CHAOTIC 👾', 'LOADING... 💾', 'FEELING RETRO 🕸️']
  mood.textContent = moods[Math.floor(Math.random() * moods.length)]
}

function getGuestbookEntries() {
  try {
    return JSON.parse(localStorage.getItem('n0te-guestbook') || '[]')
  } catch {
    return []
  }
}

function renderGuestbook() {
  const container = document.getElementById('guestbook-entries')
  if (!container) return

  container.replaceChildren()
  const entries = getGuestbookEntries().reverse()

  if (entries.length === 0) {
    container.textContent = 'No messages yet. Be the first Internet traveller!'
    return
  }

  entries.forEach((entry) => {
    const article = document.createElement('article')
    article.className = 'guest-entry'

    const heading = document.createElement('h3')
    heading.textContent = `✉ ${entry.name}`

    const message = document.createElement('p')
    message.textContent = entry.message

    const date = document.createElement('p')
    date.className = 'small'
    date.textContent = entry.date

    article.append(heading, message, date)
    container.append(article)
  })
}

const guestbookForm = document.getElementById('guestbook-form')

if (guestbookForm) {
  renderGuestbook()

  guestbookForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('guest-name').value.trim()
    const message = document.getElementById('guest-message').value.trim()
    const status = document.getElementById('guestbook-status')

    if (!name || !message) {
      status.textContent = 'Please fill in both fields!'
      return
    }

    const entries = getGuestbookEntries()
    entries.push({
      name: name.slice(0, 30),
      message: message.slice(0, 300),
      date: new Date().toLocaleString()
    })

    localStorage.setItem('n0te-guestbook', JSON.stringify(entries))
    guestbookForm.reset()
    status.textContent = 'MESSAGE SAVED! THANK YOU, INTERNET TRAVELLER!'
    renderGuestbook()
  })
}

const clearButton = document.getElementById('clear-guestbook')

if (clearButton) {
  clearButton.addEventListener('click', () => {
    localStorage.removeItem('n0te-guestbook')
    renderGuestbook()
  })
}
