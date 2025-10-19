<template>
  <footer class="footer">
    <div class="container footer-inner">
      <!-- Brand section -->
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="@/assets/img/logo.webp" alt="NLog'Eirb Logo" />
        </div>
        <div class="footer-brand-text">
          <h3 class="footer-title">NLog'Eirb</h3>
          <p class="footer-tagline">Competitive Programming Club</p>
        </div>
      </div>

      <!-- Navigation links -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <div class="footer-nav-section">
          <h4 class="footer-nav-title">Navigate</h4>
          <ul class="footer-nav-links">
            <li>
              <router-link to="/" class="footer-link">Home</router-link>
            </li>
            <li>
              <router-link to="/team" class="footer-link">Team</router-link>
            </li>
            <li>
              <router-link to="/tools" class="footer-link"
                >Resources</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="footer-link"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </nav>

      <!-- Social links -->
      <div class="footer-social">
        <h4 class="footer-social-title">Connect</h4>
        <div class="footer-social-links">
          <a
            href="https://discord.gg/bSBBM5kgRf"
            class="footer-social-link"
            aria-label="Discord"
          >
            <i class="ri-discord-fill"></i>
          </a>
          <a
            href="https://t.me/+apRnSJjOvY0wZWM8"
            class="footer-social-link"
            aria-label="Telegram"
          >
            <i class="ri-telegram-2-fill"></i>
          </a>
          <a
            href="https://github.com/TLacault/nlogeirb-website"
            class="footer-social-link"
            aria-label="GitHub"
          >
            <i class="ri-github-fill"></i>
          </a>
          <a
            href="mailto:nlog@enseirb-matmeca.fr"
            class="footer-social-link"
            aria-label="Email"
          >
            <i class="ri-mail-line"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container">
        <p class="footer-copyright">
          © {{ currentYear }} NLog'Eirb. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background: var(--color-bg-elevated);
  border-top: 1px solid rgba(59, 130, 246, 0.15);
  margin-top: auto;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: start;
  padding: 48px 0;
}

.footer-brand {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.footer-logo {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);
}

.footer-logo img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
  object-fit: contain;
}

.footer-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.footer-tagline {
  color: var(--color-text-muted);
  font-size: 14px;
  margin: 4px 0 0;
}

.footer-nav {
  display: flex;
  justify-content: center;
}

.footer-nav-section {
  text-align: center;
}

.footer-nav-title {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.footer-nav-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-link {
  color: var(--color-text-muted);
  font-size: 14px;
  transition: color 160ms ease;
}

.footer-link:hover {
  color: var(--color-text);
}

.footer-social {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-social-title {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.footer-social-links {
  display: flex;
  gap: 12px;
}

.footer-social-link {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--glass);
  border: 1px solid rgba(96, 165, 250, 0.25);
  color: var(--color-text-muted);
  transition: all 160ms ease;
  font-size: 20px;
}

.footer-social-link:hover {
  color: var(--color-text);
  border-color: rgba(96, 165, 250, 0.5);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.footer-bottom {
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding: 20px 0;
}

.footer-copyright {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .footer-brand {
    justify-content: center;
  }

  .footer-nav {
    justify-content: center;
  }

  .footer-nav-links {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .footer-social {
    align-items: center;
  }
}
</style>
