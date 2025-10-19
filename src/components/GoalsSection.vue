<template>
  <section class="goals-section">
    <div class="container">
      <div class="goals-header">
        <ScrollReveal>
          <h2 class="goals-title">Why Join NLog'Eirb?</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p class="goals-subtitle">
            Master competitive programming and ace technical interviews with our
            comprehensive training program
          </p>
        </ScrollReveal>
      </div>

      <div class="goals-grid">
        <ScrollReveal>
          <div class="goal-card">
            <div class="goal-icon">
              <i class="ri-code-s-slash-line"></i>
            </div>
            <div class="goal-content">
              <h3 class="goal-title">Master DSA & Technical Interviews</h3>
              <p class="goal-description">
                Learn to solve efficiently and quickly DSA problems to prepare
                for interviews and programming contests. Master C++ and its
                libraries to code faster and become a true expert at solving
                algorithmic challenges.
              </p>
              <div class="goal-features">
                <div class="feature-item">
                  <i class="ri-check-line"></i>
                  <span>Data Structures & Algorithms</span>
                </div>
                <div class="feature-item">
                  <i class="ri-check-line"></i>
                  <span>C++ Optimization & Libraries</span>
                </div>
                <div class="feature-item">
                  <i class="ri-check-line"></i>
                  <span>Technical Interview Prep</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="200">
          <div class="goal-card">
            <div class="goal-icon">
              <i class="ri-trophy-line"></i>
            </div>
            <div class="goal-content">
              <h3 class="goal-title">Compete at the Highest Level</h3>
              <p class="goal-description">
                Learn how to progress in the competitive environment and prepare
                for SWERC/ICPC and weekly Codeforces competitions. Discover
                advanced algorithms and data structures that go beyond regular
                coursework.
              </p>
              <div class="goal-features">
                <div class="feature-item">
                  <i class="ri-check-line"></i>
                  <span>ICPC & SWERC Preparation</span>
                </div>
                <div class="feature-item">
                  <i class="ri-check-line"></i>
                  <span>Weekly Codeforces Contests</span>
                </div>
                <div class="feature-item">
                  <i class="ri-check-line"></i>
                  <span>Advanced Algorithm Theory</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div class="goals-cta">
        <ScrollReveal>
          <router-link to="/team" class="btn btn-primary">
            <i class="ri-team-line"></i>
            Meet the Team
          </router-link>
        </ScrollReveal>
        <ScrollReveal delay="200">
          <router-link to="/tools" class="btn btn-ghost">
            <i class="ri-book-open-line"></i>
            Explore Resources
          </router-link>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollReveal from "@/components/ScrollReveal.vue";

export default {
  name: "GoalsSection",
  components: { ScrollReveal },
};
</script>

<style scoped>
.goals-section {
  padding: 80px 0;
  background: linear-gradient(
    135deg,
    rgba(16, 25, 51, 0.3),
    rgba(11, 16, 32, 0.5)
  );
  position: relative;
  overflow: hidden;
}

.goals-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(59, 130, 246, 0.1),
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(96, 165, 250, 0.08),
      transparent 50%
    );
  pointer-events: none;
}

.goals-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.goals-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 700;
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 16px;
}

.goals-subtitle {
  font-size: 18px;
  color: var(--color-text-muted);
  margin: 0 auto;
  line-height: 1.6;
  max-width: 600px;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}

.goal-card {
  background: var(--glass);
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all 200ms ease;
  position: relative;
  overflow: hidden;
}

.goal-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(96, 165, 250, 0.05),
    rgba(59, 130, 246, 0.02)
  );
  opacity: 0;
  transition: opacity 200ms ease;
}

.goal-card:hover {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.4);
  box-shadow: var(--shadow-md);
}

.goal-card:hover::before {
  opacity: 1;
}

.goal-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  background: linear-gradient(
    135deg,
    rgba(96, 165, 250, 0.2),
    rgba(59, 130, 246, 0.1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-2);
  font-size: 28px;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.goal-content {
  position: relative;
  z-index: 1;
}

.goal-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 16px;
  line-height: 1.2;
}

.goal-description {
  font-size: 16px;
  color: var(--color-text-muted);
  margin: 0 0 24px;
  line-height: 1.6;
}

.goal-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--color-text-muted);
  font-weight: 500;
}

.feature-item i {
  color: var(--color-accent-2);
  font-size: 16px;
  flex-shrink: 0;
}

.goals-cta {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 160ms ease;
  border: 1px solid transparent;
}

.btn-primary {
  background: linear-gradient(
    135deg,
    var(--color-accent),
    var(--color-accent-2)
  );
  color: white;
  border-color: var(--color-accent);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.btn-ghost {
  background: rgba(96, 165, 250, 0.1);
  color: var(--color-accent-2);
  border-color: rgba(96, 165, 250, 0.3);
}

.btn-ghost:hover {
  background: rgba(96, 165, 250, 0.2);
  border-color: rgba(96, 165, 250, 0.5);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .goals-section {
    padding: 60px 0;
  }

  .goals-header {
    margin-bottom: 40px;
  }

  .goals-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }

  .goal-card {
    padding: 24px;
  }

  .goal-icon {
    width: 56px;
    height: 56px;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .goal-title {
    font-size: 20px;
  }

  .goal-description {
    font-size: 15px;
  }

  .goals-cta {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
