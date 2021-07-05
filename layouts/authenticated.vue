<template>
  <div class="flex w-screen">
    <div class="w-full content-wrapper">
      <nav-menu-component />
      <div
        id="layout-wrapper"
        class="md:py-8 md:px-14 p-4 min-h-screen bg-custom-gray-bg"
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import NavMenuComponent from '~/components/NavMenu'

export default {
  name: 'AuthLayout',
  components: { NavMenuComponent },
  middleware: ['auth'],
  data() {
    return {
      contentOffset: 0,
      width: 0,
    }
  },
  mounted() {
    // this.contentOffset = (this.$children[0]?.$el?.clientWidth || 0) + 'px'
    // this.width = `calc(100vw - ${this.contentOffset})`
  },
}
</script>

<style>
#layout-wrapper {
  background: #fafafb;
}
</style>
