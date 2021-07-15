<template>
  <div class="max-w-8xl mx-auto grid gap-y-8 w-full mt-8">
    <div class="w-full grid grid-cols-4 md:gap-x-8">
      <div class="col-span-1">
        <div class="grid sticky top-10">
          <div>
            <div class="flex justify-between items-center">
              <legend class="font-firma-semibold text-gray-600 uppercase">
                Menu
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
                    ? 'bg-red-50 text-regalRed-300 font-firma-medium'
                    : 'text-gray-500 hover:bg-red-50',
                ]"
                @click.prevent="() => changeMenu(menu.path)"
              >
                {{ menu.title }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <keep-alive>
        <component
          :is="view"
          v-if="profileFetched"
          :user="user"
          @profile="profileUpdated"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import numeral from 'numeral'
import slugify from 'slugify'

const menus = ['Profile', 'Change Password', 'Notifications', 'Settings'].map(
  (m) => ({ title: m, path: slugify(m, { lower: true, replacement: '-' }) })
)

export default {
  name: 'Profile',
  components: {
    profile: () => import('~/components/pages/profile/profile'),
    'change-password': () =>
      import('~/components/pages/profile/change-password'),
    notifications: () => import('~/components/pages/profile/notifications'),
    settings: () => import('~/components/pages/profile/settings'),
  },
  layout: 'authenticated',
  data() {
    return {
      menus,
      profileMenu: 'profile',
      avatar: null,
      view: 'profile',
    }
  },
  computed: {
    numberFormatter() {
      return numeral
    },
    ...mapGetters({
      profileFetched: 'profile/fetched',
    }),
    user() {
      let user = this.$store.getters['profile/profile']
      user = {
        ...user,
        email: user.user_email,
        languages: user.languages || [],
      }
      return user
    },
  },
  watch: {
    $route(props) {
      const hash = props.hash.split('#')
      this.view = hash[1] || 'profile'
      this.profileMenu = hash[1] || 'profile'
    },
  },
  async mounted() {
    const hash = this.$route.hash.split('#')
    this.view = hash[1] || 'profile'
    this.profileMenu = hash[1] || 'profile'
    if (!this.profileFetched) {
      const profile = await this.fetchUser()
      this.$store.dispatch('profile/setProfile', profile)
    }
  },
  methods: {
    async profileUpdated() {
      this.$store.dispatch('profile/setProfile', await this.fetchUser())
    },
    async fetchUser() {
      try {
        const {
          data: { data },
        } = await this.$axios.get('/profile/me')
        return { fetched: true, data }
      } catch (error) {
        this.$toast({
          text:
            error?.response?.data?.message ||
            'Error while retrieving user profile data',
          type: 'error',
          time: 4,
        })
        return { fetched: false, data: {} }
      }
    },
    changeMenu(path) {
      this.$router.push({ path: 'profile', hash: path })
    },
  },
}
</script>
