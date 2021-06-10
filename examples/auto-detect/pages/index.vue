<template>
  <section>
    <div v-if="$browser.is('mobile')">
      <h3>Mobile</h3>
    </div>
    <div v-else-if="$browser.is('tablet')">
      <h3>Tablet</h3>
    </div>
    <div v-else>
      <h3>Desktop</h3>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Is Platform
    console.log(this.$browser.isPlatform('mobile'))

    // Is OS
    console.log(this.$browser.isOS('macos'))

    // Is Browser
    console.log(this.$browser.isBrowser('chrome'))

    // Is Engine
    console.log(this.$browser.isEngine('blink'))
  }
}
</script>
