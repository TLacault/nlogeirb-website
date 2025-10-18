<template>
  <div>
    <HeroSection />
    <EventBanner />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import EventBanner from "@/components/EventBanner.vue";

export default {
  name: "HomeView",
  components: { HeroSection, EventBanner },
};
</script>
