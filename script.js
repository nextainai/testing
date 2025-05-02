// Particles.js Background
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Navigation Tabs
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.querySelectorAll('.nav-tabs button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Domain Checker
function checkDomain() {
  const domainInput = document.getElementById('domainInput').value.trim();
  const loader = document.getElementById('loader');
  const result = document.getElementById('result');
  const domainStatus = document.getElementById('domainStatus');
  const domainPrice = document.getElementById('domainPrice');
  const buyLinks = document.getElementById('buyLinks');

  if (!domainInput || !domainInput.includes('.')) {
    alert('Please enter a valid domain name (e.g., example.com)');
    return;
  }

  loader.style.display = 'block';
  result.style.display = 'none';

  setTimeout(() => {
    loader.style.display = 'none';
    result.style.display = 'block';

    const isAvailable = Math.random() > 0.5;
    const price = isAvailable ? '$9.99/year' : 'Not available for purchase';
    const statusText = isAvailable
      ? `${domainInput} is available! 🎉`
      : `${domainInput} is not available. 😔`;

    domainStatus.textContent = statusText;
    domainPrice.textContent = `Price: ${price}`;

    buyLinks.innerHTML = `
      <li><a href="https://www.namecheap.com" target="_blank">Namecheap - Starting at $0.99/year</a></li>
      <li><a href="https://www.hostinger.in" target="_blank">Hostinger - Starting at ₹89.00</a></li>
      <li><a href="https://www.bluehost.in" target="_blank">Bluehost - Free with hosting plans</a></li>
      <li><a href="https://www.godaddy.com" target="_blank">GoDaddy - Starting at $1.99/year</a></li>
      <li><a href="https://domains.google" target="_blank">Google Domains - Starting at $12/year</a></li>
    `;
  }, 2000);
}

document.getElementById('domainInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkDomain();
});

// Typing Speed Checker
let typingStartTime, typingTimer;
function startTypingTest() {
  const typingInput = document.getElementById('typingInput');
  const typingSpeed = document.getElementById('typingSpeed');
  typingInput.disabled = false;
  typingInput.value = '';
  typingSpeed.textContent = 'Test in progress...';

  typingStartTime = new Date();
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    const timeElapsed = (new Date() - typingStartTime) / 1000 / 60; // in minutes
    const words = typingInput.value.trim().split(/\s+/).length;
    const wpm = Math.round(words / timeElapsed);
    typingSpeed.textContent = `Your typing speed: ${wpm} WPM`;
    typingInput.disabled = true;
  }, 60000); // 60 seconds
}

// Clicking Speed Checker
let clickCount = 0, clickTimer, isClicking = false;
function countClick() {
  const clickButton = document.getElementById('clickButton');
  const clickingSpeed = document.getElementById('clickingSpeed');

  if (!isClicking) {
    isClicking = true;
    clickCount = 0;
    clickButton.textContent = 'Keep Clicking!';
    clickingSpeed.textContent = 'Test in progress...';

    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      const cps = (clickCount / 10).toFixed(2); // 10 seconds
      clickingSpeed.textContent = `Your clicking speed: ${cps} CPS (Clicks Per Second)`;
      clickButton.textContent = 'Click Me!';
      isClicking = false;
    }, 10000); // 10 seconds
  }

  clickCount++;
}

// Tic-Tac-Toe Game
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

function makeMove(index) {
  if (!gameActive || board[index]) return;

  board[index] = currentPlayer;
  document.getElementById('gameBoard').children[index].textContent = currentPlayer;

  if (checkWin()) {
    document.getElementById('gameStatus').textContent = `Player ${currentPlayer} Wins! 🎉`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell)) {
    document.getElementById('gameStatus').textContent = `It's a Draw! 🤝`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('gameStatus').textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('gameStatus').textContent = `Player ${currentPlayer}'s Turn`;
  document.querySelectorAll('#gameBoard div').forEach(cell => cell.textContent = '');
}

// Secure Search (nhiosrch)
function secureSearch() {
  const searchInput = document.getElementById('secureSearchInput').value.trim();
  const category = document.getElementById('searchCategory').value;
  const region = document.getElementById('regionFilter').value;
  const anonymousMode = document.getElementById('anonymousMode').checked;
  const loader = document.getElementById('secureSearchLoader');
  const result = document.getElementById('secureSearchResult');
  const searchResults = document.getElementById('searchResults');

  if (!searchInput) {
    alert('Please enter a search query');
    return;
  }

  loader.style.display = 'block';
  result.style.display = 'none';

  setTimeout(() => {
    loader.style.display = 'none';
    result.style.display = 'block';

    // Mock search results based on category and region
    let mockResults = [];
    if (category === 'web') {
      mockResults = [
        { title: 'Example Website', url: 'https://example.com', snippet: 'This is an example website from a .com domain.', domain: '.com' },
        { title: 'European News', url: 'https://eu-news.eu', snippet: 'Latest news from Europe.', domain: '.eu' },
        { title: 'Indian Tech Blog', url: 'https://techblog.in', snippet: 'Tech updates from India.', domain: '.in' }
      ];
    } else if (category === 'images') {
      mockResults = [
        { title: 'Nature Photos', url: 'https://naturephotos.org', snippet: 'Beautiful nature images from a .org domain.', domain: '.org' },
        { title: 'Art Gallery', url: 'https://artgallery.co.uk', snippet: 'Art images from the UK.', domain: '.co.uk' },
        { title: 'Japanese Culture', url: 'https://culture.jp', snippet: 'Cultural images from Japan.', domain: '.jp' }
      ];
    } else if (category === 'news') {
      mockResults = [
        { title: 'Global News', url: 'https://globalnews.net', snippet: 'Worldwide news updates.', domain: '.net' },
        { title: 'Australian Updates', url: 'https://ausnews.au', snippet: 'News from Australia.', domain: '.au' },
        { title: 'Canadian Reports', url: 'https://canadareports.ca', snippet: 'Reports from Canada.', domain: '.ca' }
      ];
    }

    // Filter by region (mocked)
    if (region !== 'global') {
      mockResults = mockResults.filter(result => {
        if (region === 'north-america' && ['.com', '.net', '.ca'].includes(result.domain)) return true;
        if (region === 'europe' && ['.eu', '.co.uk'].includes(result.domain)) return true;
        if (region === 'asia' && ['.in', '.jp'].includes(result.domain)) return true;
        return false;
      });
    }

    // Display results
    searchResults.innerHTML = mockResults.map(result => `
      <div class="result-card">
        <h4><a href="${result.url}" target="_blank">${result.title}</a></h4>
        <p>${result.snippet}</p>
        <p class="domain-origin">Domain: ${result.domain} <span class="privacy-shield">Securely Fetched 🔒</span></p>
      </div>
    `).join('');
  }, 2000);
}

document.getElementById('secureSearchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') secureSearch();
});

// Chat Window
function openChatWindow() {
  const chatWindow = document.getElementById('chatWindow');
  chatWindow.style.display = 'block';

  const chatHeader = document.getElementById('chatHeader');
  let isDragging = false, currentX, currentY, initialX, initialY;

  chatHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - currentX;
    initialY = e.clientY - currentY;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      chatWindow.style.left = currentX + 'px';
      chatWindow.style.top = currentY + 'px';
      chatWindow.style.bottom = 'auto';
      chatWindow.style.right = 'auto';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

function closeChatWindow() {
  document.getElementById('chatWindow').style.display = 'none';
}
