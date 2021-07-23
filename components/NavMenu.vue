<template>
  <nav
    :class="[
      customClass ||
        'bg-white px-6 md:px-12 flex items-center justify-between border-b border-gray-100 w-full',
    ]"
  >
    <h3>Kontrack</h3>
    <ul class="flex gap-x-8">
      <li>
        <nuxt-link class="font-firma-light" to="/">Overview</nuxt-link>
      </li>
      <li>
        <nuxt-link class="font-firma-light" to="/jobs">Jobs</nuxt-link>
      </li>
      <li>
        <nuxt-link class="font-firma-light" to="/applications"
          >Applications</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="font-firma-light" to="/profile"
          >Your profile</nuxt-link
        >
      </li>
    </ul>
    <nuxt-link
      to="settings#profile"
      class="flex flex-row items-center justify-center gap-x-4 cursor-pointer"
    >
      <img
        id="nav-avatar"
        ref="navavatar"
        class="h-10 w-10 rounded-full"
        src="/images/default-person.svg"
      />

      <span class="md:flex flex-col justify-center hidden">
        <span class="text-regalRed-300 font-firma-light text-xs truncate">{{
          user.email
        }}</span>
        <span class="font-firma-normal"
          >{{ user.profile.first_name }} {{ user.profile.last_name }}</span
        >
      </span>
      <span class="md:block hidden">
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2001 0.300049L11.0486 1.14858L5.82436 6.37284L0.600098 1.14858L1.44863 0.300049L5.82436 4.67579L10.2001 0.300049Z"
            fill="#6D7D93"
          />
        </svg>
      </span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'NavMenuComponent',
  props: {
    customClass: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    user() {
      return this.$store.getters['profile/profile'] || {}
    },
  },
}
</script>

<style scoped>
nav {
  height: 68px;
}
</style>
