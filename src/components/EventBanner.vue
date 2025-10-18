<template>
  <section class="event-banner">
    <div class="container">
      <div class="event-content">
        <div class="event-info">
          <h2 class="event-title">Next Session</h2>
          <p class="event-description">
            Join us for competitive programming practice every Thursday
          </p>
          <div class="event-time">
            <i class="ri-time-line"></i>
            <span>16:00 - 18:00</span>
          </div>
        </div>

        <div class="countdown">
          <div class="countdown-item">
            <span class="countdown-value">{{ timeLeft.days }}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-item">
            <span class="countdown-value">{{ timeLeft.hours }}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-item">
            <span class="countdown-value">{{ timeLeft.minutes }}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-item">
            <span class="countdown-value">{{ timeLeft.seconds }}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventBanner",
  data() {
    return {
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      countdownInterval: null,
    };
  },
  mounted() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const nextThursday = this.getNextThursday(now);
      const timeDiff = nextThursday.getTime() - now.getTime();

      if (timeDiff > 0) {
        this.timeLeft = {
          days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
        };
      } else {
        // If we're past the session time, get next week's Thursday
        const nextWeekThursday = this.getNextThursday(
          new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
        );
        const nextWeekDiff = nextWeekThursday.getTime() - now.getTime();
        this.timeLeft = {
          days: Math.floor(nextWeekDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (nextWeekDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((nextWeekDiff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((nextWeekDiff % (1000 * 60)) / 1000),
        };
      }
    },
    getNextThursday(date) {
      const thursday = new Date(date);
      thursday.setDate(date.getDate() + ((4 - date.getDay() + 7) % 7)); // Thursday is day 4
      thursday.setHours(16, 0, 0, 0); // 16:00
      return thursday;
    },
  },
};
</script>

<style scoped>
.event-banner {
  background: var(--color-bg-elevated);
  border-top: 1px solid rgba(59, 130, 246, 0.15);
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
  padding: 32px 0;
}

.event-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
}

.event-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.event-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(92deg, var(--color-text), #9ec7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.event-description {
  color: var(--color-text-muted);
  font-size: 16px;
  margin: 0;
}

.event-time {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-accent-2);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 14px;
}

.countdown {
  display: flex;
  align-items: center;
  gap: 16px;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.countdown-value {
  font-family: var(--font-mono);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.countdown-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.countdown-separator {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-accent-2);
  margin: 0 4px;
}

@media (max-width: 768px) {
  .event-content {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .countdown {
    justify-content: center;
    gap: 12px;
  }

  .countdown-value {
    font-size: 24px;
  }

  .countdown-separator {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .countdown {
    gap: 8px;
  }

  .countdown-value {
    font-size: 20px;
  }

  .countdown-label {
    font-size: 10px;
  }

  .countdown-separator {
    font-size: 16px;
  }
}
</style>
