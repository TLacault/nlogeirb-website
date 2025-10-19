<template>
  <div
    ref="element"
    :class="['scroll-reveal', { 'is-visible': isVisible }]"
    :style="animationStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ScrollReveal",
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 600,
    },
    distance: {
      type: Number,
      default: 30,
    },
    direction: {
      type: String,
      default: "up", // up, down, left, right
      validator: (value) => ["up", "down", "left", "right"].includes(value),
    },
    once: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isVisible: false,
      observer: null,
    };
  },
  computed: {
    animationStyle() {
      if (this.isVisible) {
        return {
          transition: `all ${this.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${this.delay}ms`,
          transform: "translateY(0) translateX(0)",
          opacity: "1",
        };
      }

      const transforms = {
        up: `translateY(${this.distance}px)`,
        down: `translateY(-${this.distance}px)`,
        left: `translateX(${this.distance}px)`,
        right: `translateX(-${this.distance}px)`,
      };

      return {
        transition: `all ${this.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${this.delay}ms`,
        transform: transforms[this.direction],
        opacity: "0",
      };
    },
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: "0px 0px -10% 0px", // Trigger when element is 10% from bottom
        threshold: 0.1,
      };

      this.observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.isVisible = true;
            if (this.once && this.observer) {
              this.observer.unobserve(entry.target);
            }
          } else if (!this.once) {
            this.isVisible = false;
          }
        }
      }, options);

      if (this.$refs.element) {
        this.observer.observe(this.$refs.element);
      }
    },
  },
};
</script>

<style scoped>
.scroll-reveal {
  will-change: transform, opacity;
}
</style>
