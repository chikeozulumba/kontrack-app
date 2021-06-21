<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="w-64 flex flex-col">
      <nav
        class="
          bg-grey-400
          border-r border-gray-200
          pb-4
          flex flex-col flex-grow
          overflow-y-auto
        "
      >
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
            class="w-auto w-auto"
            src="/images/dashboard-logo.svg"
            alt="Loanspot"
          />
        </div>
        <div class="flex-grow mt-6 pt-12 flex flex-col">
          <div class="flex-1 space-y-1">
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
                    ? 'text-white'
                    : 'text-grey-700 group-hover:text-white',
                  'mr-5 flex-shrink-0 h-4 w-4',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { navigation } from '~/fixtures/navigation'
export default {
  name: 'DesktopSidebar',
  data() {
    return {
      navigation,
      pathName: this.$route.path,
    }
  },
}
</script>
