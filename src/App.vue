<template>
  <div class="app">
    <SiteNavbar />
    <main class="main-content">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavbar from "./components/Navbar.vue";
import SiteFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: { SiteNavbar, SiteFooter },
};
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
