// ===== MODAL SYSTEM =====
// Enhanced modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Close modal buttons
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', e => {
    const modal = e.target.closest('.modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});

// Escape key and backdrop click
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(modal => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// ===== ENHANCED FUNCTIONALITY =====

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  }, 2000);
});

// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.classList.remove('active');
    if (navToggle) navToggle.classList.remove('active');
  });
});

// Enhanced Modal System
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
  }
}

// Gallery Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 100);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Gallery Image Modal
document.querySelectorAll('.gallery-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const galleryItem = btn.closest('.gallery-item');
    const title = galleryItem.querySelector('h4').textContent;
    const placeholder = galleryItem.querySelector('.image-placeholder').textContent;
    
    const imageModalTitle = document.getElementById('imageModalTitle');
    const imageModalContent = document.getElementById('imageModalContent');
    const imageModal = document.getElementById('imageModal');
    
    if (imageModalTitle) imageModalTitle.textContent = title;
    if (imageModalContent) imageModalContent.textContent = placeholder;
    if (imageModal) imageModal.classList.add('show');
  });
});

// Copy Bedrock IP Function
function copyBedrockIP() {
  const bedrockIP = 'islandcraft.cluehosting.de:19132';
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(bedrockIP).then(() => {
      showNotification('Bedrock IP kopiert! 📋');
    }).catch(() => {
      fallbackCopyTextToClipboard(bedrockIP);
    });
  } else {
    fallbackCopyTextToClipboard(bedrockIP);
  }
}

// Enhanced Notification System
function showNotification(message, type = 'success') {
  const container = document.getElementById('notificationContainer');
  if (!container) {
    // Create container if it doesn't exist
    const newContainer = document.createElement('div');
    newContainer.id = 'notificationContainer';
    newContainer.className = 'notification-container';
    document.body.appendChild(newContainer);
    return showNotification(message, type);
  }
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  container.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
}

// Cookie Banner
const cookieBanner = document.getElementById('cookieBanner');

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  if (cookieBanner) cookieBanner.classList.remove('show');
}

function declineCookies() {
  localStorage.setItem('cookiesAccepted', 'false');
  if (cookieBanner) cookieBanner.classList.remove('show');
}

// Show cookie banner if not already accepted/declined
if (!localStorage.getItem('cookiesAccepted') && cookieBanner) {
  setTimeout(() => {
    cookieBanner.classList.add('show');
  }, 2000);
}

// Enhanced Canvas Animation for Hero
const canvas = document.getElementById('heroCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      color: `rgba(245, 158, 11, ${Math.random() * 0.5 + 0.3})`
    };
  }
  
  let particles = [];
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Add new particles
    if (Math.random() < 0.1) {
      particles.push(createParticle());
    }
    
    // Update and draw particles
    particles = particles.filter(particle => {
      particle.y -= particle.speed;
      particle.opacity -= 0.002;
      
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      return particle.y > -10 && particle.opacity > 0;
    });
    
    requestAnimationFrame(animate);
  }
  
  resizeCanvas();
  animate();
  
  window.addEventListener('resize', resizeCanvas);
}

// ===== NAVIGATION =====
function updateActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('scroll', updateActiveNavigation);

// ===== PLAYER COUNT ONLY (NO NAMES) =====
// Only show player count numbers, no individual player names or lists

// ===== DISCORD STATUS (NO NUMBERS) =====
function updateDiscordStatus() {
  // Discord zeigt jetzt nur "Jetzt beitreten" Button - keine Zahlen mehr
  console.log('✅ Discord Status: "Jetzt beitreten" Button aktiv');
}

// ===== SERVER STATUS =====
async function updateServerStatus() {
  try {
    // Try to fetch real server status - replace with actual API endpoint
    // For now, simulate real player count
    const response = await fetch('https://api.mcsrvstat.us/2/islandcraft.cluehosting.de');
    const data = await response.json();
    
    const mcCount = document.getElementById('mcCount');
    const dcCount = document.getElementById('dcCount');
    const footerStatus = document.getElementById('footerStatus');
    const serverPlayerCount = document.getElementById('serverPlayerCount');
    
    if (data.online) {
      const playerCount = data.players ? data.players.online : 0;
      const maxPlayers = data.players ? data.players.max : 100;
      const playerList = data.players && data.players.list ? data.players.list.map(p => p.name || p) : [];
      
      if (mcCount) mcCount.textContent = `${playerCount}/${maxPlayers} Online`;
      if (serverPlayerCount) serverPlayerCount.textContent = `Online - ${playerCount}/${maxPlayers} Spieler`;
      if (footerStatus) footerStatus.textContent = 'Online';
      
      // Only show player count, no individual names
      
      // Update status indicators
      const indicators = document.querySelectorAll('.status-indicator');
      indicators.forEach(indicator => {
        indicator.className = 'status-indicator online';
      });
      
      console.log(`🎮 Server: ${playerCount}/${maxPlayers} Spieler online`, playerList);
    } else {
      if (mcCount) mcCount.textContent = 'Server Offline';
      if (serverPlayerCount) serverPlayerCount.textContent = 'Server Offline';
      if (footerStatus) footerStatus.textContent = 'Offline';
      
      // Server offline - no players to show
      
      // Update status indicators
      const indicators = document.querySelectorAll('.status-indicator');
      indicators.forEach(indicator => {
        indicator.className = 'status-indicator offline';
      });
    }
    
    // Discord shows "Jetzt beitreten" button - no member count needed
    updateDiscordStatus();
    
  } catch (error) {
    console.log('Could not fetch server status, using fallback');
    const mcCount = document.getElementById('mcCount');
    const dcCount = document.getElementById('dcCount');
    const footerStatus = document.getElementById('footerStatus');
    const serverPlayerCount = document.getElementById('serverPlayerCount');
    
    if (mcCount) mcCount.textContent = 'Nicht verbunden';
    // Discord shows "Jetzt beitreten" button - no fallback needed
    updateDiscordStatus();
    if (footerStatus) footerStatus.textContent = 'Server Status';
    if (serverPlayerCount) serverPlayerCount.textContent = 'Nicht verbunden';
  }
}

// ===== UTILITY FUNCTIONS =====
function copyServerIP() {
  const serverIP = 'islandcraft.cluehosting.de';
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(serverIP).then(() => {
      showNotification('Server IP kopiert! 📋');
    }).catch(() => {
      fallbackCopyTextToClipboard(serverIP);
    });
  } else {
    fallbackCopyTextToClipboard(serverIP);
  }
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showNotification('Server IP kopiert! 📋');
  } catch (err) {
    showNotification('Kopieren fehlgeschlagen', 'error');
  }
  
  document.body.removeChild(textArea);
}

// ===== STATS COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Animate counters when stats section comes into view
      if (entry.target.classList.contains('stat-number')) {
        animateCounters();
      }
    }
  });
}, observerOptions);

// ===== TEAM APPLICATION FUNCTIONALITY =====
function redirectToDiscordApplication() {
  window.open('https://discord.gg/TTSg6SQNNz', '_blank');
  showNotification('Discord wird geöffnet - Bewirb dich dort für eine Teamposition! 🚀');
}

// ===== DEMO PLAYERS (for testing) =====
function showDemoPlayers() {
  // Demo-Spieler für Testzwecke - entferne diese Funktion wenn echte API funktioniert
  const demoPlayers = ['clashbauer', 'wizard', 'its_EliasMC', 'VortexGHG', 'Luca', 'JulienCamera'];
  updatePlayersList(demoPlayers);
  
  const mcCount = document.getElementById('mcCount');
  if (mcCount) mcCount.textContent = `${demoPlayers.length}/100 Online`;
  
  console.log('🎮 Demo: Zeige Beispiel-Spieler mit Skins');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavigation();
  updateServerStatus();
  
  // Update server status every 30 seconds
  setInterval(updateServerStatus, 30000);
  
  // Discord status is static now - no need for updates
  updateDiscordStatus();
  
  // Add click handlers for free positions to redirect to Discord
  document.querySelectorAll('.position-free').forEach(card => {
    card.addEventListener('click', redirectToDiscordApplication);
    card.style.cursor = 'pointer';
  });
  
  // Observe elements for animations
  const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-up-delay, .animate-fade-up-delay-2, .animate-fade-up-delay-3, .member-card, .rule-category');
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
  
  // Initialize countdowns
  if (document.querySelector('.event-countdown')) {
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  }
  
  // Zeige Demo-Spieler nach 3 Sekunden (nur für Testzwecke)
  setTimeout(showDemoPlayers, 3000);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('🚨 JavaScript Error:', e.error);
});

// ===== EVENT COUNTDOWN =====
function updateCountdowns() {
  const countdowns = document.querySelectorAll('.event-countdown');
  
  countdowns.forEach(countdown => {
    const targetDate = new Date(countdown.dataset.date).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
      // Event has passed
      countdown.innerHTML = '<div style="text-align: center; width: 100%; color: var(--text-muted);">Event beendet</div>';
      const badge = countdown.closest('.event-card').querySelector('.event-badge');
      if (badge) {
        badge.textContent = 'Beendet';
        badge.classList.remove('upcoming', 'live');
        badge.classList.add('ended');
      }
      return;
    }
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update countdown display
    const daysEl = countdown.querySelector('[data-days]');
    const hoursEl = countdown.querySelector('[data-hours]');
    const minutesEl = countdown.querySelector('[data-minutes]');
    const secondsEl = countdown.querySelector('[data-seconds]');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    // Check if event is live (within 1 hour)
    if (distance < 3600000 && distance > 0) {
      const badge = countdown.closest('.event-card').querySelector('.event-badge');
      if (badge) {
        badge.textContent = 'Live';
        badge.classList.remove('upcoming', 'ended');
        badge.classList.add('live');
      }
    }
  });
}

// ===== SUCCESS MESSAGE =====
console.log('🏝️ IslandCraft Website loaded successfully with enhanced features!');
