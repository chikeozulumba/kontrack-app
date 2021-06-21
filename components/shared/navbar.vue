<template>
  <div
    class="
      relative
      z-10
      flex-shrink-0
      h-16
      bg-white
      border-b border-gray-200
      flex
    "
  >
    <button
      class="
        border-r border-gray-200
        px-4
        text-gray-500
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
        md:hidden
      "
      @click="toggleSidebar"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </button>
    <div class="flex-1 flex justify-between px-8">
      <div class="flex-1 flex" />
      <div class="ml-4 flex items-center md:ml-6">
        <div class="ml-3 relative">
          <div class="text-xs">
            <button
              id="user-menu-button"
              type="button"
              class="flex items-center text-tiny focus:outline-none"
              aria-expanded="false"
              aria-haspopup="true"
              @click="toggleNavBar"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="/images/user-photo.png"
                alt=""
              />
              <p class="flex text-xs flex-col items-start ml-2">
                <span class="text-grey-700 text-xs block font-firma-light"
                  >Administrator</span
                >
                <span class="text-regalBlue-400 text-xs block font-firma-light"
                  >Emmanuel Ajayi - Adeniyi</span
                >
              </p>
              <component :is="ChevronIcon" class="ml-2" />
            </button>
          </div>
          <div
            v-show="navOpen"
            class="
              origin-top-right
              absolute
              right-0
              mt-2
              w-48
              rounded-md
              shadow-lg
              bg-white
              ring-1 ring-black ring-opacity-5
              py-1
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            <a
              id="user-menu-item-0"
              href="#"
              class="block py-2 px-4 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              >Your Profile</a
            >

            <a
              id="user-menu-item-2"
              href="/login"
              class="block py-2 px-4 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChevronIcon from '@/components/icons/ChevronIcon.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      ChevronIcon,
    }
  },
  computed: {
    ...mapGetters({
      navOpen: 'navbar/navOpen',
    }),
  },
  methods: {
    toggleNavBar() {
      this.$store.dispatch('navbar/toggleNavBar')
    },
    toggleSidebar() {
      this.$store.dispatch('sidebar/toggleSideBar')
    },
  },
}
</script>
