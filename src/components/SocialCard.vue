<template>
  <a
    :href="url"
    class="social-card"
    target="_blank"
    rel="noopener noreferrer"
    :class="{ featured: isFeatured }"
  >
    <div class="social-icon">
      <i :class="iconClass"></i>
    </div>
    <div class="social-content">
      <h3 class="social-name">{{ name }}</h3>
      <p class="social-description">{{ description }}</p>
    </div>
    <div class="social-arrow">
      <i class="ri-external-link-line"></i>
    </div>
    <div v-if="isFeatured" class="featured-badge">
      <i class="ri-pushpin-fill"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: "SocialCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.social-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--glass);
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: inherit;
  transition: all 200ms ease;
  overflow: hidden;
}

.social-card:hover {
  transform: translateY(-2px);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: var(--shadow-md);
}

.social-card.featured {
  background: linear-gradient(
    135deg,
    rgba(96, 165, 250, 0.1),
    rgba(59, 130, 246, 0.05)
  );
  border-color: rgba(96, 165, 250, 0.4);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.15);
}

.social-card.featured:hover {
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.25);
  border-color: rgba(96, 165, 250, 0.6);
}

.social-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: rgba(96, 165, 250, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-2);
  font-size: 24px;
  flex-shrink: 0;
}

.social-card.featured .social-icon {
  background: rgba(96, 165, 250, 0.2);
  color: var(--color-accent-2);
}

.social-content {
  flex: 1;
  min-width: 0;
}

.social-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 8px;
  line-height: 1.2;
}

.social-card.featured .social-name {
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.social-description {
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.4;
}

.social-arrow {
  color: var(--color-text-muted);
  font-size: 16px;
  opacity: 0;
  transition: opacity 200ms ease;
}

.social-card:hover .social-arrow {
  opacity: 1;
}

.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  background: rgba(96, 165, 250, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .social-card {
    padding: 16px;
    gap: 12px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .social-name {
    font-size: 16px;
  }

  .social-description {
    font-size: 13px;
  }
}
</style>
