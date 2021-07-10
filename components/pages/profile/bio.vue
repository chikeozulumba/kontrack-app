<template>
  <div class="bg-white p-12 w-full col-span-3">
    <div class="grid h-fit">
      <header class="grid justify-between">
        <legend class="font-firma-semibold md:text-xl text-xl">
          Your Profile
        </legend>
      </header>

      <section class="grid grid-cols-12 gap-8 md:mt-8">
        <div class="col-span-12">
          <div class="rounded-full w-fit relative">
            <img
              ref="avatar"
              class="h-36 w-36 rounded-full"
              src="/images/avatar-default.svg"
            />
            <label
              class="
                absolute
                z-10
                w-36
                h-36
                rounded-full
                bg-blue-50
                opacity-0
                flex
                items-center
                justify-center
                top-0
                cursor-pointer
              "
              for="avatar"
              @mouseenter.prevent="modifyAvatar"
              @mouseleave.prevent="($evt) => modifyAvatar($evt, 'leave')"
            >
              <span
                class="
                  uppercase
                  text-xs
                  cursor-pointer
                  text-center text-custom-blue-3
                "
                >Change profile picture</span
              >
            </label>
            <input
              id="avatar"
              type="file"
              class="hidden"
              name="avatar"
              accept="image/*"
              @change.prevent="handleImageUpload"
            />
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 gap-8 md:mt-8 max-w-2xl">
        <div class="col-span-1">
          <form @submit.prevent="saveChanges">
            <div class="grid divide-y divide-gray-200 divide-solid gap-y-8">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    id="first_name"
                    v-model="form.first_name"
                    type="text"
                    name="first_name"
                    autocomplete="given-name"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="middle_name"
                    class="block text-sm font-medium text-gray-700"
                    >Middle name</label
                  >
                  <input
                    id="middle_name"
                    v-model="form.middle_name"
                    type="text"
                    name="middle_name"
                    autocomplete="none"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <input
                    id="last_name"
                    v-model="form.last_name"
                    type="text"
                    name="last_name"
                    autocomplete="family-name"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="gender"
                    class="block text-sm font-medium text-gray-700"
                    >Gender</label
                  >
                  <select
                    id="gender"
                    v-model="form.gender"
                    name="gender"
                    autocomplete="gender"
                    class="
                      block
                      w-full
                      p-3
                      border border-gray-200
                      bg-white
                      rounded-md
                      focus:outline-none
                      focus:ring-custom-blue-2
                      focus:border-custom-blue-2
                      sm:text-lg
                      text-sm
                      h-auto
                    "
                  >
                    <option :value="null">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >Phone</label
                  >
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                    >Street address</label
                  >
                  <input
                    id="address"
                    v-model="form.address"
                    type="text"
                    name="address"
                    autocomplete="street-address"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Country / Region</label
                  >
                  <select
                    id="country"
                    v-model="form.country"
                    name="country"
                    autocomplete="country"
                    class="
                      block
                      w-full
                      p-3
                      border border-gray-200
                      bg-white
                      rounded-md
                      focus:outline-none
                      focus:ring-custom-blue-2
                      focus:border-custom-blue-2
                      sm:text-lg
                      text-sm
                      h-auto
                    "
                  >
                    <option :value="null">Choose</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    >City</label
                  >
                  <input
                    id="city"
                    v-model="form.city"
                    type="text"
                    name="city"
                    class="
                      focus:ring-custom-blue-2 focus:border-custom-blue-2
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                    "
                  />
                </div>
              </div>
              <div v-if="formDirty" class="grid grid-cols-1">
                <button
                  type="submit"
                  class="
                    p-3
                    bg-custom-blue-2
                    text-white
                    mt-8
                    rounded-lg
                    sm:text-lg
                    text-sm
                  "
                >
                  Save changes
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
    saveChanges() {
      console.log(this.form)
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
