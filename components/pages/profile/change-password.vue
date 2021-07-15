<template>
  <div class="bg-white p-12 w-full col-span-3">
    <div class="grid h-fit">
      <header class="grid justify-between">
        <legend class="font-firma-semibold md:text-xl text-xl">
          Change password
        </legend>
      </header>

      <section class="grid grid-cols-1 gap-8 md:mt-8 max-w-sm">
        <div class="col-span-1">
          <form @submit.prevent="savePassword">
            <div class="grid gap-y-8">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="old_password"
                    class="block text-sm font-medium text-gray-700"
                    >Current password</label
                  >
                  <input
                    id="old_password"
                    v-model="form.old_password"
                    type="password"
                    placeholder="********"
                    name="old_password"
                    autocomplete="given-name"
                    class="
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  /><span
                    v-if="serverValidationErrors.password"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.password[0] }}</span
                  >
                </div>
                <div class="col-span-6">
                  <label
                    for="new_password"
                    class="block text-sm font-medium text-gray-700"
                    >New password</label
                  >
                  <input
                    id="new_password"
                    v-model="form.new_password"
                    type="password"
                    placeholder="********"
                    name="new_password"
                    autocomplete="given-name"
                    class="
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  /><span
                    v-if="serverValidationErrors.new_password"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.new_password[0] }}</span
                  >
                </div>
                <div class="col-span-6">
                  <label
                    for="new_password_confirmation"
                    class="block text-sm font-medium text-gray-700"
                    >Confirm new password</label
                  >
                  <input
                    id="new_password_confirmation"
                    v-model="form.new_password_confirmation"
                    type="password"
                    placeholder="********"
                    name="new_password_confirmation"
                    autocomplete="given-name"
                    class="
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                  <span
                    v-if="serverValidationErrors.new_password_confirmation"
                    class="text-customRed-100 text-xs"
                    >{{
                      serverValidationErrors.new_password_confirmation[0]
                    }}</span
                  >
                </div>
              </div>
              <div class="grid grid-cols-1">
                <button
                  type="submit"
                  class="
                    p-3
                    bg-regalRed-200
                    text-white
                    rounded-lg
                    sm:text-lg
                    text-sm
                    hover:bg-regalRed-300
                    focus:outline-none focus:bg-regalRed-300
                  "
                >
                  Change password
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePageBio',
  props: {
    user: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    const user = this.user
    return {
      form: Object.assign({}, {}, user),
      formDirty: false,
      serverValidationErrors: {},
    }
  },
  watch: {
    form: {
      handler() {
        this.formDirty = true
      },
      deep: true,
    },
  },
  mounted() {},
  methods: {
    async savePassword($evt) {
      try {
        const { status } = await this.$axios.post('/auth/change', this.form)
        if (status === 200) {
          this.$toast({
            text: 'Password changed successfully, please login.',
            type: 'success',
            time: 4,
          })
          this.$auth.logout()
        }
      } catch (error) {
        if (error?.response?.status === 422) {
          this.serverValidationErrors = error?.response?.data.error
        }
        this.$toast({
          text:
            error?.response?.data?.message ||
            'You are not allowed to access your account due to an internal error that would be resolved soon.',
          type: 'error',
          time: 4,
        })
      }
    },
    handleImageUpload($evt) {
      const tgt = $evt.target
      const files = tgt.files

      if (FileReader && files && files.length > 0) {
        const fr = new FileReader()
        fr.onload = () => {
          this.$refs.avatar.style.objectFit = 'cover'
          this.$refs.avatar.style.backgroundSize = 'cover'
          this.$refs.avatar.src = fr.result
          const navAvatar = document.getElementById('nav-avatar')
          if (navAvatar) {
            navAvatar.style = 'cover'
            navAvatar.backgroundSize = 'cover'
            navAvatar.src = fr.result
          }
          this.avatar = files[0]
          this.$toast({
            text: 'Profile picture changed',
            time: 3,
            position: 'bottom',
            type: 'success',
          })
        }
        fr.readAsDataURL(files[0])
      }
    },
    modifyAvatar(e, mode = 'enter') {
      if (mode === 'enter') {
        e.target.style.opacity = '0.8'
      }
      if (mode === 'leave') {
        e.target.style.opacity = '0'
      }
    },
  },
}
</script>
