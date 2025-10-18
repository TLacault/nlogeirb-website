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
        <router-link to="/" class="drawer-link" @click="toggleDrawer(false)"
          >Home</router-link
        >
        <router-link to="/team" class="drawer-link" @click="toggleDrawer(false)"
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
  display: none;
  background: rgba(0, 0, 0, 0.4);
}
.drawer.open {
  display: block;
}
.drawer-panel {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: min(78%, 340px);
  background: var(--color-bg-elevated);
  border-left: 1px solid rgba(59, 130, 246, 0.15);
  box-shadow: var(--shadow-md);
  padding: 24px;
  transform: translateX(100%);
  transition: transform 240ms ease;
}
.drawer.open .drawer-panel {
  transform: translateX(0%);
}
.drawer-links {
  display: grid;
  gap: 8px;
  margin-top: 16px;
}
.drawer-link {
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--color-text-muted);
  border: 1px solid rgba(96, 165, 250, 0.2);
  font-family: var(--font-mono);
  font-weight: 600;
}
.drawer-link:hover {
  background: rgba(59, 130, 246, 0.1);
  color: var(--color-text);
  border-color: rgba(96, 165, 250, 0.45);
}
</style>
