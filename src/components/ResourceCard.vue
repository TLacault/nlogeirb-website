<template>
  <a
    :href="url"
    class="resource-card"
    target="_blank"
    rel="noopener noreferrer"
    :class="{ featured: isFeatured }"
  >
    <div class="resource-icon">
      <i :class="iconClass"></i>
    </div>
    <div class="resource-content">
      <h3 class="resource-name">{{ name }}</h3>
      <p class="resource-description">{{ description }}</p>
    </div>
    <div class="resource-arrow">
      <i class="ri-external-link-line"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: "ResourceCard",
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
.resource-card {
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
  position: relative;
  overflow: hidden;
}

.resource-card:hover {
  transform: translateY(-2px);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: var(--shadow-md);
}

.resource-card.featured {
  background: linear-gradient(
    135deg,
    rgba(96, 165, 250, 0.1),
    rgba(59, 130, 246, 0.05)
  );
  border-color: rgba(96, 165, 250, 0.4);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.15);
}

.resource-card.featured:hover {
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.25);
  border-color: rgba(96, 165, 250, 0.6);
}

.resource-icon {
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

.resource-card.featured .resource-icon {
  background: rgba(96, 165, 250, 0.2);
  color: var(--color-accent-2);
}

.resource-content {
  flex: 1;
  min-width: 0;
}

.resource-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 8px;
  line-height: 1.2;
}

.resource-card.featured .resource-name {
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.resource-description {
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.4;
}

.resource-arrow {
  color: var(--color-text-muted);
  font-size: 16px;
  opacity: 0;
  transition: opacity 200ms ease;
}

.resource-card:hover .resource-arrow {
  opacity: 1;
}

@media (max-width: 768px) {
  .resource-card {
    padding: 16px;
    gap: 12px;
  }

  .resource-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .resource-name {
    font-size: 16px;
  }

  .resource-description {
    font-size: 13px;
  }
}
</style>
