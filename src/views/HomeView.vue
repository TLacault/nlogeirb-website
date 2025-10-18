<template>
  <div>
    <HeroSection />
    <EventBanner />
    <GoalsSection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import EventBanner from "@/components/EventBanner.vue";
import GoalsSection from "@/components/GoalsSection.vue";

export default {
  name: "HomeView",
  components: { HeroSection, EventBanner, GoalsSection },
};
</script>
