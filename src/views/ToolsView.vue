<template>
  <div class="resources-page">
    <!-- Resources Hero Section -->
    <section class="resources-hero">
      <div class="container">
        <div class="resources-hero-content">
          <h1 class="resources-title">Resources</h1>
          <p class="resources-description">
            Essential tools and platforms for competitive programming and
            technical interviews
          </p>
        </div>
      </div>
    </section>

    <!-- Leetcode & Interview Section -->
    <section class="resources-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <i class="ri-code-s-slash-line"></i>
            Leetcode & Interview
          </h2>
          <p class="section-description">
            Master technical interviews and algorithm problem-solving
          </p>
        </div>
        <div class="resources-grid">
          <ResourceCard
            v-for="resource in leetcodeResources"
            :key="resource.id"
            :name="resource.name"
            :description="resource.description"
            :url="resource.url"
            :icon-class="resource.iconClass"
            :is-featured="resource.isFeatured"
          />
        </div>
      </div>
    </section>

    <!-- ICPC & Codeforces Section -->
    <section class="resources-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <i class="ri-trophy-line"></i>
            ICPC & Codeforces
          </h2>
          <p class="section-description">
            Competitive programming platforms and algorithmic resources
          </p>
        </div>
        <div class="resources-grid">
          <ResourceCard
            v-for="resource in icpcResources"
            :key="resource.id"
            :name="resource.name"
            :description="resource.description"
            :url="resource.url"
            :icon-class="resource.iconClass"
            :is-featured="resource.isFeatured"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ResourceCard from "@/components/ResourceCard.vue";

export default {
  name: "ToolsView",
  components: { ResourceCard },
  data() {
    return {
      leetcodeResources: [
        {
          id: 1,
          name: "NLog'Eirb Formations",
          description:
            "Our comprehensive training materials and practice sessions for competitive programming",
          url: "https://tlacault.github.io/formations-nlog/",
          iconClass: "ri-graduation-cap-line",
          isFeatured: true,
        },
        {
          id: 2,
          name: "LeetCode Problems",
          description:
            "Practice coding problems and prepare for technical interviews with curated problem sets",
          url: "https://leetcode.com/problemset/",
          iconClass: "ri-code-box-line",
          isFeatured: false,
        },
        {
          id: 3,
          name: "Grind 75",
          description:
            "A curated list of 75 coding questions to prepare for technical interviews",
          url: "https://www.techinterviewhandbook.org/grind75/",
          iconClass: "ri-list-check-3",
          isFeatured: false,
        },
        {
          id: 4,
          name: "GeeksforGeeks C++",
          description:
            "Comprehensive C++ tutorials and reference materials for competitive programming",
          url: "https://www.geeksforgeeks.org/cpp/c-plus-plus/",
          iconClass: "ri-code-s-slash-line",
          isFeatured: false,
        },
      ],
      icpcResources: [
        {
          id: 5,
          name: "Codeforces",
          description:
            "The premier competitive programming platform with contests and problem archives",
          url: "https://codeforces.com/",
          iconClass: "ri-trophy-line",
          isFeatured: true,
        },
        {
          id: 6,
          name: "CP Algorithms",
          description:
            "Comprehensive collection of algorithms and data structures for competitive programming",
          url: "https://cp-algorithms.com/",
          iconClass: "ri-brain-line",
          isFeatured: false,
        },
        {
          id: 7,
          name: "CSES Problem Set",
          description:
            "High-quality competitive programming problems with educational value",
          url: "https://cses.fi/",
          iconClass: "ri-book-open-line",
          isFeatured: false,
        },
        {
          id: 8,
          name: "NLog'Eirb Program",
          description:
            "Our official program and curriculum for competitive programming training",
          url: "https://nlog.eirb.fr/Program_nlog.pdf",
          iconClass: "ri-file-pdf-line",
          isFeatured: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.resources-page {
  min-height: 100vh;
}

.resources-hero {
  padding: 80px 0 60px;
  text-align: center;
}

.resources-hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.resources-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 6vw, 48px);
  font-weight: 700;
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 16px;
}

.resources-description {
  font-size: 18px;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.6;
}

.resources-section {
  padding: 0 0 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.section-title i {
  color: var(--color-accent-2);
  font-size: 24px;
}

.section-description {
  font-size: 16px;
  color: var(--color-text-muted);
  margin: 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .resources-hero {
    padding: 60px 0 40px;
  }

  .resources-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-title i {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: 20px;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
