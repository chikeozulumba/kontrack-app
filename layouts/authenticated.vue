<template>
  <div class="flex w-screen">
    <div class="w-full content-wrapper">
      <nav-menu-component />
      <div
        id="layout-wrapper"
        class="md:py-8 md:px-14 p-4 min-h-screen bg-custom-gray-bg pb-64"
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavMenuComponent from '~/components/NavMenu'

export default {
  name: 'AuthLayout',
  components: { NavMenuComponent },
  middleware: ['auth', 'check-company'],
  data() {
    return {
      contentOffset: 0,
      width: 0,
    }
  },
  computed: {
    ...mapGetters({
      profileFetched: 'profile/fetched',
    }),
  },
  beforeMount() {
    const user = this.$auth.user
    const data = {
      ...user,
      profile_id: user?.profile?.id,
    }
    this.$store.dispatch('profile/setProfile', { data, fetched: true })
  },
  methods: {},
}
</script>

<style>
#layout-wrapper {
  background: #fafafb;
}
</style>
