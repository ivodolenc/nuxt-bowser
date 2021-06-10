<template>
  <section>
    <div v-if="$device.is('mobile')">
      <h3>Mobile</h3>
    </div>
    <div v-else-if="$device.is('tablet')">
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
    console.log(this.$device.isPlatform('mobile'))

    // Is OS
    console.log(this.$device.isOS('macos'))

    // Is Browser
    console.log(this.$device.isBrowser('chrome'))

    // Is Engine
    console.log(this.$device.isEngine('blink'))
  }
}
</script>
