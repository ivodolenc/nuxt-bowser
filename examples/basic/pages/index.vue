<template>
  <section>
    <div v-if="$browser.is('mobile')">
      <h3>Mobile</h3>
    </div>
    <div v-else-if="$browser.is('tablet')">
      <h3>Tablet</h3>
    </div>
    <div v-else-if="$browser.is('desktop')">
      <h3>Desktop</h3>
    </div>
    <div v-else-if="$browser.is('tv')">
      <h3>TV</h3>
    </div>
    <div v-else>
      <h3>Other</h3>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$browser.getResult())
  }
}
</script>
