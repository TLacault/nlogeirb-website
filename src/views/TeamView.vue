<template>
  <div class="team-page">
    <!-- Team Hero Section -->
    <section class="team-hero">
      <div class="container">
        <div class="team-hero-content">
          <h1 class="team-title">Our Team</h1>
          <p class="team-description">
            Meet the passionate members driving NLog'Eirb forward
          </p>
          <div class="team-stats">
            <div class="stat-item">
              <span class="stat-number">{{ teamMembers.length }}</span>
              <span class="stat-label">Team Members</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3</span>
              <span class="stat-label">Leadership Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Members Grid -->
    <section class="team-members">
      <div class="container">
        <div class="members-grid">
          <MemberCard
            v-for="member in teamMembers"
            :key="member.id"
            :full-name="member.fullName"
            :role="member.role"
            :image-src="member.imageSrc"
            :linkedin-url="member.linkedinUrl"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";

export default {
  name: "TeamView",
  components: { MemberCard },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          fullName: "Nasr-allah HITAR",
          role: "Président",
          imageSrc: require("@/assets/team/nasr.jpg"),
          linkedinUrl: "#",
        },
        {
          id: 2,
          fullName: "Nemo D'acremont",
          role: "Co-Fondateur",
          imageSrc: require("@/assets/team/nemo.png"),
          linkedinUrl: "#",
        },
        {
          id: 3,
          fullName: "Tim Lacault",
          role: "Vice Président - Respo Forma",
          imageSrc: require("@/assets/team/tim.jpg"),
          linkedinUrl: "#",
        },
        {
          id: 4,
          fullName: "Raphaël Bourgouin",
          role: "Vice Président",
          imageSrc: require("@/assets/team/raphael.png"),
          linkedinUrl: "#",
        },
        {
          id: 5,
          fullName: "Gaspard Mongenet",
          role: "Trésorier",
          imageSrc: require("@/assets/team/gaspard.png"),
          linkedinUrl: "#",
        },
        {
          id: 6,
          fullName: "ThomasTrepant",
          role: "Secrétaire général",
          imageSrc: require("@/assets/team/thomas.png"),
          linkedinUrl: "#",
        },
        {
          id: 7,
          fullName: "Yassine Berrhazi",
          role: "Respo Com",
          imageSrc: require("@/assets/team/yassine.png"),
          linkedinUrl: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-page {
  min-height: 100vh;
}

.team-hero {
  padding: 80px 0 60px;
  text-align: center;
}

.team-hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.team-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 6vw, 48px);
  font-weight: 700;
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 16px;
}

.team-description {
  font-size: 18px;
  color: var(--color-text-muted);
  margin: 0 0 32px;
  line-height: 1.6;
}

.team-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-number {
  font-family: var(--font-mono);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-accent-2);
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.team-members {
  padding: 0 0 80px;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .team-hero {
    padding: 60px 0 40px;
  }

  .team-stats {
    gap: 32px;
  }

  .stat-number {
    font-size: 24px;
  }

  .members-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
}
</style>
