<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <router-link to="/" class="brand">
        <span class="brand-logo" aria-hidden="true">
          <img src="../assets/img/logo.webp" alt="NLog'Eirb Logo" />
        </span>
        <span class="brand-text">NLog'Eirb</span>
      </router-link>

      <nav class="nav-links" aria-label="Primary">
        <router-link
          to="/"
          class="nav-link"
          active-class="nav-link-active"
          exact
          >Home</router-link
        >
        <router-link to="/team" class="nav-link" active-class="nav-link-active"
          >Team</router-link
        >
        <router-link to="/tools" class="nav-link" active-class="nav-link-active"
          >Resources</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          active-class="nav-link-active"
          >Contact</router-link
        >
      </nav>

      <button
        class="burger"
        @click="toggleDrawer"
        aria-label="Open menu"
        :aria-expanded="isOpen"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <div
      class="drawer"
      :class="{ open: isOpen }"
      @click.self="toggleDrawer(false)"
    >
      <div class="drawer-panel">
        <div class="drawer-header">
          <h3 class="drawer-title">Menu</h3>
          <button
            class="drawer-close"
            @click="toggleDrawer(false)"
            aria-label="Close menu"
          >
            <i class="ri-close-line"></i>
          </button>
        </div>
        <nav class="drawer-nav" aria-label="Mobile navigation">
          <router-link to="/" class="drawer-link" @click="toggleDrawer(false)"
            >Home</router-link
          >
          <router-link
            to="/team"
            class="drawer-link"
            @click="toggleDrawer(false)"
            >Team</router-link
          >
          <router-link
            to="/tools"
            class="drawer-link"
            @click="toggleDrawer(false)"
            >Resources</router-link
          >
          <router-link
            to="/contact"
            class="drawer-link"
            @click="toggleDrawer(false)"
            >Contact</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteNavbar",
  data() {
    return { isOpen: false };
  },
  methods: {
    toggleDrawer(force) {
      this.isOpen = typeof force === "boolean" ? force : !this.isOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: linear-gradient(rgba(16, 24, 48, 0.6), rgba(16, 24, 48, 0.3)),
    var(--glass);
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.brand-logo {
  width: 36px; /* larger logo */
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px; /* 10px rounding */
  overflow: hidden;
  background: radial-gradient(
    120% 120% at 20% 20%,
    rgba(96, 165, 250, 0.25),
    rgba(30, 64, 175, 0.35)
  );
  box-shadow: inset 0 0 0 1px rgba(96, 165, 250, 0.35), var(--shadow-sm);
}
.brand-text {
  font-size: 18px;
  font-weight: 800;
  background: linear-gradient(
    92deg,
    var(--color-accent-2),
    #9ec7ff 45%,
    #7aa7ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* gradient text */
}
.brand-emph {
  opacity: 0.9;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
}
.nav-link {
  padding: 0.5rem 1rem;
  color: var(--color-text-muted);
  border-radius: 8px;
  border: 1px solid rgba(96, 165, 250, 0.22);
  background: linear-gradient(
      rgba(59, 130, 246, 0.06),
      rgba(59, 130, 246, 0.04)
    ),
    var(--glass);
  box-shadow: 0 0 0 0 rgba(96, 165, 250, 0), var(--shadow-sm);
  transition: transform 160ms ease, box-shadow 200ms ease,
    border-color 160ms ease, color 160ms ease, background-color 160ms ease;
  font-family: var(--font-mono);
  font-weight: 600;
}
.nav-link:hover {
  color: var(--color-text);
  transform: translateY(-1px);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 0 0 18px 2px rgba(96, 165, 250, 0.18), var(--shadow-md);
}
.nav-link-active {
  color: var(--color-text);
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(96, 165, 250, 0.5);
}

/* Burger for mobile */
.burger {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}
.burger:hover {
  background: rgba(59, 130, 246, 0.12);
}

@media (max-width: 800px) {
  .nav-links {
    display: none;
  }
  .burger {
    display: inline-flex;
  }
}

/* Mobile drawer with slide animation */
.drawer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: opacity 240ms ease, visibility 240ms ease;
}
.drawer.open {
  opacity: 1;
  visibility: visible;
}
.drawer-panel {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  background: linear-gradient(
    135deg,
    rgba(16, 25, 51, 0.95),
    rgba(11, 16, 32, 0.98)
  );
  backdrop-filter: blur(12px);
  border-left: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: var(--shadow-md);
  transform: translateX(100%);
  transition: transform 240ms ease;
  display: flex;
  flex-direction: column;
}
.drawer.open .drawer-panel {
  transform: translateX(0%);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px;
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
}

.drawer-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.drawer-close {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.25);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 160ms ease;
}

.drawer-close:hover {
  background: rgba(96, 165, 250, 0.2);
  border-color: rgba(96, 165, 250, 0.4);
}

.drawer-nav {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.drawer-link {
  padding: 16px 20px;
  border-radius: 12px;
  color: var(--color-text);
  border: 1px solid rgba(96, 165, 250, 0.4);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 160ms ease;
  display: block;
  background: rgba(96, 165, 250, 0.2);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.drawer-link:hover {
  background: rgba(59, 130, 246, 0.15);
  color: var(--color-text);
  border-color: rgba(96, 165, 250, 0.5);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}
</style>
