<template>
  <div class="contact-page">
    <!-- Contact Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="contact-hero-content">
          <h1 class="contact-title">Get in Touch</h1>
          <p class="contact-description">
            Connect with us and join the NLog'Eirb community
          </p>
        </div>
      </div>
    </section>

    <!-- Social Links Section -->
    <section class="contact-socials">
      <div class="container">
        <div class="socials-grid">
          <SocialCard
            v-for="social in socialLinks"
            :key="social.id"
            :name="social.name"
            :description="social.description"
            :url="social.url"
            :icon-class="social.iconClass"
            :is-featured="social.isFeatured"
          />
        </div>
      </div>
    </section>

    <!-- Info Banner -->
    <section class="contact-info">
      <div class="container">
        <div class="info-banner">
          <div class="info-icon">
            <i class="ri-information-line"></i>
          </div>
          <div class="info-content">
            <h3 class="info-title">Feel free to contact us</h3>
            <p class="info-description">
              We usually spend time at Eirbware. If you have any questions,
              don't hesitate to ask us there or on Discord - we're very active
              there and happy to help !
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SocialCard from "@/components/SocialCard.vue";

export default {
  name: "ContactView",
  components: { SocialCard },
  data() {
    return {
      socialLinks: [
        {
          id: 1,
          name: "Discord",
          description:
            "Join our Discord server for discussions, announcements, and community support",
          url: "#",
          iconClass: "ri-discord-fill",
          isFeatured: true,
        },
        {
          id: 2,
          name: "GitHub",
          description:
            "Check out our projects, repositories, and open-source contributions",
          url: "#",
          iconClass: "ri-github-fill",
          isFeatured: false,
        },
        {
          id: 3,
          name: "LinkedIn",
          description:
            "Connect with us professionally and stay updated on our activities",
          url: "#",
          iconClass: "ri-linkedin-fill",
          isFeatured: false,
        },
        {
          id: 4,
          name: "Email",
          description:
            "Send us an email for formal inquiries and official communications",
          url: "mailto:nlog@enseirb-matmeca.fr",
          iconClass: "ri-mail-line",
          isFeatured: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-hero {
  padding: 80px 0 60px;
  text-align: center;
}

.contact-hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 6vw, 48px);
  font-weight: 700;
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 16px;
}

.contact-description {
  font-size: 18px;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.6;
}

.contact-socials {
  padding: 0 0 60px;
}

.socials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  padding: 0 0 80px;
}

.info-banner {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 32px;
  background: var(--glass);
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: var(--radius-lg);
  max-width: 800px;
  margin: 0 auto;
}

.info-icon {
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

.info-content {
  flex: 1;
}

.info-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 8px;
}

.info-description {
  font-size: 16px;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 60px 0 40px;
  }

  .socials-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-banner {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }

  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .info-title {
    font-size: 18px;
  }

  .info-description {
    font-size: 14px;
  }
}
</style>
