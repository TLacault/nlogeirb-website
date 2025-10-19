<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <ScrollReveal>
          <h1 class="hero-title">NLog'Eirb Competitive Programming</h1>
        </ScrollReveal>
        <ScrollReveal delay="200">
          <p class="hero-sub">
            Train, solve, and compete with a focus on clarity and algorithmic
            excellence.
          </p>
        </ScrollReveal>

        <div class="hero-cta">
          <ScrollReveal delay="400">
            <router-link to="/tools" class="btn btn-primary"
              >Explore Resources</router-link
            >
          </ScrollReveal>
          <ScrollReveal delay="600">
            <router-link to="/team" class="btn btn-ghost"
              >Meet the Team</router-link
            >
          </ScrollReveal>
        </div>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="pulse">
          <img
            class="pulse-logo"
            src="@/assets/img/logo.webp"
            alt="NLog'Eirb"
          />
        </div>
      </div>
    </div>

    <button class="scroll-more" @click="scrollDown" aria-label="Scroll down">
      <span class="mouse">
        <span class="wheel"></span>
      </span>
      <span class="scroll-text">Scroll</span>
    </button>
  </section>
</template>

<script>
import ScrollReveal from "@/components/ScrollReveal.vue";

export default {
  name: "HeroSection",
  components: { ScrollReveal },
  methods: {
    scrollDown() {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: grid;
  align-items: center;
  padding: 48px 0 72px;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 6vw, 64px);
  line-height: 1.1; /* prevent cropping */
  padding-bottom: 4px; /* extra room for descenders */
  font-weight: 700;
  letter-spacing: 0.2px;
  background: linear-gradient(
    92deg,
    #dbe8ff,
    var(--color-text) 35%,
    #9ec7ff 65%,
    #7aa7ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 8px 36px rgba(30, 64, 175, 0.25);
}
.hero-sub {
  margin-top: 14px;
  color: var(--color-text-muted);
  font-size: clamp(14px, 1.6vw, 18px);
}
.hero-cta {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.btn-primary {
  border-color: rgba(96, 165, 250, 0.5);
  background: rgba(59, 130, 246, 0.12);
}
.btn-ghost {
  background: transparent;
  border-color: rgba(96, 165, 250, 0.25);
}
.btn-primary:hover {
  box-shadow: 0 0 24px 4px rgba(96, 165, 250, 0.22), var(--shadow-md);
}

.hero-art {
  position: relative;
  min-height: 320px;
}
.pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(48vmin, 420px);
  height: min(48vmin, 420px);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(96, 165, 250, 0.18),
    rgba(96, 165, 250, 0) 60%
  );
  box-shadow: 0 0 160px 30px rgba(30, 64, 175, 0.35);
  animation: pulse 3.8s ease-in-out infinite;
}

.pulse-logo {
  position: absolute;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 50%;
  opacity: 0.65;
  filter: drop-shadow(0 8px 24px rgba(30, 64, 175, 0.28));
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(0.98);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.03);
  }
}

.scroll-more {
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-muted);
}
.mouse {
  width: 26px;
  height: 40px;
  border-radius: 16px;
  border: 2px solid rgba(96, 165, 250, 0.5);
  display: grid;
  place-items: start center;
  padding-top: 6px;
}
.wheel {
  width: 3px;
  height: 8px;
  border-radius: 2px;
  background: var(--color-accent-2);
  animation: wheel 1.6s ease-in-out infinite;
}
@keyframes wheel {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  70% {
    transform: translateY(8px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
.scroll-text {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 12px;
}

@media (max-width: 980px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }
  .hero-art {
    order: -1;
    min-height: 220px;
  }
}
</style>
