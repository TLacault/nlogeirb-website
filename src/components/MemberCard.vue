<template>
  <a
    :href="linkedinUrl"
    class="member-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="member-image">
      <img :src="imageSrc" :alt="`${fullName} profile`" />
    </div>
    <div class="member-info">
      <h3 class="member-name">{{ fullName }}</h3>
      <p class="member-role">{{ role }}</p>
    </div>
    <div class="member-overlay">
      <i class="ri-linkedin-fill"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    linkedinUrl: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
.member-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--glass);
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all 200ms ease;
  text-decoration: none;
  color: inherit;
}

.member-card:hover {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: var(--shadow-md);
}

.member-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 200ms ease;
}

.member-card:hover .member-image img {
  transform: scale(1.05);
}

.member-info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.member-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  line-height: 1.2;
}

.member-role {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-accent-2);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.member-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  opacity: 0;
  transition: opacity 200ms ease;
}

.member-card:hover .member-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .member-image {
    height: 180px;
  }

  .member-info {
    padding: 16px;
  }

  .member-name {
    font-size: 16px;
  }

  .member-role {
    font-size: 12px;
  }
}
</style>
