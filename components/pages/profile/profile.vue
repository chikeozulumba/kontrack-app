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
                  text-center text-regalRed-300
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
                    v-if="serverValidationErrors.first_name"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.first_name[0] }}</span
                  >
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
                    v-if="serverValidationErrors.middle_name"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.middle_name[0] }}</span
                  >
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
                    v-if="serverValidationErrors.last_name"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.last_name[0] }}</span
                  >
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
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
                      sm:text-lg
                      text-sm
                      h-auto
                    "
                  >
                    <option :value="null">Choose</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                  <span
                    v-if="serverValidationErrors.gender"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.gender[0] }}</span
                  >
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
                    v-if="serverValidationErrors.email"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.email[0] }}</span
                  >
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
                    v-if="serverValidationErrors.phone"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.phone[0] }}</span
                  >
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="social_security_number"
                    class="block text-sm font-medium text-gray-700"
                    >Social security number</label
                  >
                  <input
                    id="social_security_number"
                    v-model="form.social_security_number"
                    type="text"
                    name="social_security_number"
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
                    v-if="serverValidationErrors.social_security_number"
                    class="text-customRed-100 text-xs"
                    >{{
                      serverValidationErrors.social_security_number[0]
                    }}</span
                  >
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="date_of_birth"
                    class="block text-sm font-medium text-gray-700"
                    >Date of birth</label
                  >
                  <v-date-picker
                    v-model="date"
                    mode="date"
                    :max-date="new Date()"
                    color="red"
                  >
                    <template #default="{ inputValue, inputEvents }">
                      <input
                        class="
                          focus:ring-2 focus:ring-regalRed-200
                          datepicker
                          block
                          w-full
                          sm:text-lg
                          border border-gray-200
                          rounded-md
                          p-3
                          text-sm
                        "
                        :value="inputValue"
                        v-on="inputEvents"
                      />
                    </template>
                  </v-date-picker>
                  <span
                    v-if="serverValidationErrors.dob"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.dob[0] }}</span
                  >
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
                    v-if="serverValidationErrors.address"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.address[0] }}</span
                  >
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
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
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
                  <span
                    v-if="serverValidationErrors.country"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.country[0] }}</span
                  >
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label
                    for="province"
                    class="block text-sm font-medium text-gray-700"
                    >Province</label
                  >
                  <input
                    id="province"
                    v-model="form.province"
                    type="text"
                    name="province"
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
                    v-if="serverValidationErrors.province"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.province[0] }}</span
                  >
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
                    v-if="serverValidationErrors.city"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.city[0] }}</span
                  >
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label
                    for="zip"
                    class="block text-sm font-medium text-gray-700"
                    >Zip</label
                  >
                  <input
                    id="zip"
                    v-model="form.zip"
                    type="text"
                    name="zip"
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
                    v-if="serverValidationErrors.zip"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.zip[0] }}</span
                  >
                </div>

                <div class="col-span-6 relative">
                  <label
                    for="educational_qualifications"
                    class="block text-sm font-medium text-gray-700"
                    >Education</label
                  >
                  <select
                    class="
                      educational_qualifications
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border border-gray-200
                      rounded-md
                      pl-3
                      text-sm
                    "
                    name="educational_qualifications[]"
                    multiple="multiple"
                  >
                    <option value="No formal education">
                      No formal education
                    </option>
                    <option value="Primary education">Primary education</option>
                    <option value="Secondary education">
                      Secondary education or high school
                    </option>
                    <option value="GED">GED</option>
                    <option value="Vocational qualification">
                      Vocational qualification
                    </option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Doctorate or higher">
                      Doctorate or higher
                    </option>
                  </select>
                  <span
                    v-if="serverValidationErrors.educational_qualifications"
                    class="text-customRed-100 text-xs"
                    >{{
                      serverValidationErrors.educational_qualifications[0]
                    }}</span
                  >
                </div>

                <div class="col-span-6 relative">
                  <label
                    for="languages"
                    class="block text-sm font-medium text-gray-700"
                    >Languages</label
                  >
                  <select
                    class="
                      languages
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border border-gray-200
                      rounded-md
                      pl-3
                      text-sm
                    "
                    name="languages[]"
                    multiple="multiple"
                  >
                    <option
                      v-for="(lang, i) in allLanguages"
                      :key="i"
                      :value="lang.name"
                    >
                      {{ lang.name }}
                    </option>
                  </select>
                  <span
                    v-if="serverValidationErrors.languages"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.languages[0] }}</span
                  >
                </div>

                <div class="col-span-6 relative">
                  <label
                    for="job_categories"
                    class="block text-sm font-medium text-gray-700"
                    >Job categories</label
                  >
                  <select
                    class="
                      job_categories
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border border-gray-200
                      rounded-md
                      pl-3
                      text-sm
                    "
                    name="job_categories[]"
                    multiple="multiple"
                  >
                    <option
                      v-for="(jc, i) in jobCategories"
                      :key="i"
                      :value="jc.name"
                    >
                      {{ jc.name }}
                    </option>
                  </select>
                  <span
                    v-if="serverValidationErrors.job_categories"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.job_categories[0] }}</span
                  >
                </div>
              </div>
              <div v-if="formDirty" class="grid grid-cols-1">
                <button
                  type="submit"
                  class="
                    p-4
                    bg-regalRed-200
                    text-white
                    mt-8
                    rounded-lg
                    sm:text-lg
                    text-sm
                    hover:bg-regalRed-300
                    focus:outline-none focus:bg-regalRed-300
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
/* eslint-disable no-undef */
import dayjs from 'dayjs'

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
      languages: [],
      allLanguages: [],
      jobCategories: [],
      date: new Date(),
      avatarBase64: [],
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
    date() {
      this.formDirty = true
    },
    avatarBase64(val) {
      if (val?.length > 0) {
        this.formDirty = true
      }
    },
  },
  async mounted() {
    this.jobCategories = await this.$getJobCategories()
    this.allLanguages = await this.$getLanguages()

    $(document).ready(() => {
      const fields = [
        'educational_qualifications',
        'languages',
        'job_categories',
      ]
      fields.forEach((field) => {
        const selector = `.${field}`
        $(selector).select2()
        $(selector).val(this.user[field])
        $(selector).trigger('change')
        $(selector).on('select2:select', (e) => {
          this.formDirty = true
        })
      })
    })
  },
  methods: {
    async $getJobCategories() {
      try {
        return (await this.$axios.get('/job/category/index')).data?.data
      } catch (error) {
        return []
      }
    },
    async $getLanguages() {
      try {
        return (await this.$axios.get('/language/index')).data?.data?.data
      } catch (error) {
        return []
      }
    },
    async saveChanges($evt) {
      this.serverValidationErrors = {}
      try {
        const { status } = await this.$axios.post('/profile/update', {
          ...this.form,
          languages: $('.languages')
            .select2('data')
            .map((l) => l.id),
          job_categories: $('.job_categories')
            .select2('data')
            .map((l) => l.id),
          educational_qualifications: $('.educational_qualifications')
            .select2('data')
            .map((l) => l.id),
          dob: dayjs(this.date).format('YYYY-MM-DD'),
          potraits: this.avatarBase64,
        })
        if (status === 200) {
          this.formDirty = false
          this.$emit('profile')
          this.$toast({
            text: 'Profile updated successfully.',
            type: 'info',
            time: 4,
          })
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

      if (FileReader && files?.length > 0) {
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
          this.avatarBase64 = [fr.result]
          this.$toast({
            text: 'Profile picture changed',
            time: 3,
            position: 'bottom',
            type: 'info',
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
