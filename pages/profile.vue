<template>
  <div class="max-w-8xl mx-auto grid gap-y-8 w-full mt-8">
    <div class="w-full grid grid-cols-4 md:gap-x-8">
      <div class="col-span-1">
        <div class="grid sticky top-10">
          <div>
            <div class="flex justify-between items-center">
              <legend class="font-firma-medium text-regalBlue-300 uppercase">
                Links
              </legend>
            </div>
            <div class="mt-4 grid gap-y-1">
              <a
                v-for="(menu, i) in menus"
                :key="i"
                class="
                  flex
                  items-center
                  cursor-pointer
                  pl-4
                  py-2
                  rounded-lg
                  w-fit-content
                  text-sm
                  font-firma-light
                "
                :class="[
                  profileMenu === menu.path
                    ? 'bg-blue-50 text-regalBlue-300 font-firma-medium'
                    : 'text-gray-500 hover:bg-custom-dark-lighter-4',
                ]"
                @click.prevent="() => changeMenu(menu.path)"
              >
                {{ menu.title }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <component :is="view"></component>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import slugify from 'slugify'

const menus = ['Bio', 'Change Password', 'Notifications', 'Settings'].map(
  (m) => ({ title: m, path: slugify(m, { lower: true, replacement: '-' }) })
)

export default {
  name: 'Profile',
  components: {
    bio: () => import('~/components/pages/profile/bio'),
    'change-password': () =>
      import('~/components/pages/profile/change-password'),
    notifications: () => import('~/components/pages/profile/notifications'),
    settings: () => import('~/components/pages/profile/settings'),
  },
  layout: 'authenticated',
  data() {
    return {
      menus,
      profileMenu: 'bio',
      avatar: null,
      view: 'bio',
    }
  },
  computed: {
    numberFormatter() {
      return numeral
    },
  },
  watch: {
    $route(props) {
      const hash = props.hash.split('#')
      this.view = hash[1] || 'bio'
      this.profileMenu = hash[1] || 'bio'
    },
  },
  mounted() {
    const hash = this.$route.hash.split('#')
    this.view = hash[1] || 'bio'
    this.profileMenu = hash[1] || 'bio'
  },
  methods: {
    changeMenu(path) {
      this.$router.push({ path: 'profile', hash: path })
    },
    selectDateFilter(r) {
      this.loanApplication.dateFilter = r
      this.loanApplication.dateRange = {
        start: new Date(),
        end: null,
      }
    },
  },
}
</script>
