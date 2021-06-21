<template>
  <div
    v-show="isOpen"
    class="fixed inset-0 z-40 flex md:hidden"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />

    <div
      v-show="isOpen"
      class="
        relative
        max-w-xs
        w-full
        bg-grey-400
        pt-5
        pb-4
        flex-1 flex flex-col
      "
      @close="toggleSidebar"
    >
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button
          class="
            ml-1
            flex
            items-center
            justify-center
            h-10
            w-10
            rounded-full
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
          "
          @click="toggleSidebar"
        >
          <span class="sr-only">Close sidebar</span>
          <svg
            class="h-6 w-6 text-white"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        class="
          flex-shrink-0
          px-7
          py-5
          flex
          items-center
          border-b border-grey-600 border-opacity-20
        "
      >
        <img
          class="h-auto w-auto"
          src="/images/dashboard-logo.svg"
          alt="Loanspot"
        />
      </div>
      <div class="mt-5 flex-1 h-0 overflow-y-auto">
        <nav class="mt-5 px-0 space-y-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              pathName === item.href
                ? 'bg-grey-500 border-white text-white bg-opacity-20'
                : 'border-transparent text-grey-700 hover:text-white hover:bg-grey-500 hover:bg-opacity-20',
              'group border-l-4 py-2 px-3 py-4 flex items-center text-sm px-7',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                pathName === item.href
                  ? 'text-gray-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'mr-4 flex-shrink-0 h-6 w-6',
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </nav>
      </div>
    </div>

    <div class="flex-shrink-0 w-14" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { navigation } from '~/fixtures/navigation'
export default {
  name: 'MobileSidebar',
  data() {
    return {
      navigation,
      pathName: this.$route.path,
    }
  },
  computed: {
    ...mapGetters({
      isOpen: 'sidebar/isOpen',
    }),
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('sidebar/toggleSideBar')
    },
  },
}
</script>
