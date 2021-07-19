<template>
  <div class="bg-white p-12 w-full col-span-3">
    <div v-show="editCompanyData" class="grid h-fit">
      <header class="grid justify-between">
        <legend class="font-firma-semibold md:text-xl text-xl">
          Company Profile
        </legend>
        <p class="text-md font-firma-light max-w-2xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          molestiae voluptas eligendi eum consequuntur ullam explicabo tempora
        </p>
      </header>

      <section class="grid grid-cols-1 gap-8 md:mt-8 max-w-2xl">
        <div class="col-span-1">
          <form @submit.prevent="saveChanges">
            <div class="grid divide-y divide-gray-200 divide-solid gap-y-8">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="company_name"
                    class="block text-sm font-medium text-gray-700"
                    >Company name</label
                  >
                  <input
                    id="company_name"
                    v-model="form.company.company_name"
                    type="text"
                    name="company_name"
                    autocomplete="given-name"
                    placeholder="Enter company registered name"
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
                    v-if="serverValidationErrors.company_name"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.company_name[0] }}</span
                  >
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Company email</label
                  >
                  <input
                    id="email"
                    :value="form.email"
                    type="email"
                    name="email"
                    autocomplete="none"
                    placeholder="Enter company email address"
                    class="
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      bg-gray-50
                      rounded-md
                      p-3
                      text-sm
                    "
                    readonly
                    disabled
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
                    >Phone number</label
                  >
                  <input
                    id="phone"
                    v-model="form.company.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    placeholder="Enter company phone number"
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

                <div class="col-span-6">
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                    >Address</label
                  >
                  <input
                    id="address"
                    v-model="form.company.address"
                    type="text"
                    name="address"
                    autocomplete="street-address"
                    placeholder="Enter company address"
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
                    v-model="form.company.country"
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
                    for="state"
                    class="block text-sm font-medium text-gray-700"
                    >State</label
                  >
                  <input
                    id="state"
                    v-model="form.company.province"
                    type="text"
                    name="state"
                    placeholder="Enter state location"
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

                <div class="col-span-6 relative">
                  <label
                    for="languages"
                    class="block text-sm font-medium text-gray-700"
                    >Job categories</label
                  >
                  <select
                    class="
                      company_job_needed
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border border-gray-200
                      rounded-md
                      pl-3
                      text-sm
                    "
                    name="company_job_needed[]"
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
                    v-if="serverValidationErrors.company_job_needed"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.company_job_needed[0] }}</span
                  >
                </div>

                <div class="col-span-6">
                  <label
                    for="company_description"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <textarea
                    id="company_description"
                    v-model="form.company.company_description"
                    name="company_description"
                    placeholder="Fill in company description"
                    class="
                      focus:ring-regalRed-200 focus:border-regalRed-200
                      block
                      w-full
                      sm:text-lg
                      border-gray-200
                      rounded-md
                      p-3
                      text-sm
                      resize-none
                    "
                  />
                  <span
                    v-if="serverValidationErrors.company_description"
                    class="text-customRed-100 text-xs"
                    >{{ serverValidationErrors.company_description[0] }}</span
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
    <div
      v-show="!editCompanyData"
      class="text-center grid items-center justify-center gap-y-4"
    >
      <legend class="text-2xl font-firma-semibold">
        Create company profile
      </legend>
      <p class="text-md font-firma-light max-w-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
        molestiae voluptas eligendi eum consequuntur ullam explicabo tempora
        ipsum ut! Doloribus, fugiat. Rem alias voluptates dolorem dolor ducimus,
        dolore necessitatibus sint?
      </p>
      <button
        type="submit"
        class="
          px-8
          py-4
          bg-regalRed-200
          text-white
          mt-8
          rounded-lg
          sm:text-md
          text-sm
          hover:bg-regalRed-300
          focus:outline-none focus:bg-regalRed-300
          w-fit
          mx-auto
        "
        @click.prevent="editCompanyData = true"
      >
        Add company
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */

const defaultCompanyObj = {
  id: null,
  company_name: null,
  email: 'chike@roi.co',
  phone: null,
  address: null,
  province: null,
  country: null,
  company_description: null,
  company_job_needed: [],
}

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
      form: Object.assign({}, user, {
        company: { ...defaultCompanyObj, ...(user.company || {}) },
      }),
      formDirty: false,
      languages: [],
      allLanguages: [],
      jobCategories: [],
      date: new Date(),
      avatarBase64: [],
      editCompanyData: !!user.company?.id,
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
    editCompanyData(val) {
      if (val) {
        this.instantiateDropDown()
      }
    },
  },
  async mounted() {
    this.jobCategories = await this.$getJobCategories()
    if (this.editCompanyData) {
      this.instantiateDropDown()
    }
  },
  methods: {
    instantiateDropDown() {
      $(document).ready(() => {
        const fields = ['company_job_needed']
        fields.forEach((field) => {
          const selector = `.${field}`
          $(selector).select2()
          $(selector).val(this.user?.company?.[field] || [])
          $(selector).trigger('change')
          $(selector).on('select2:select', (e) => {
            this.formDirty = true
          })
        })
      })
    },
    async $getJobCategories() {
      try {
        return (await this.$axios.get('/job/category/index')).data?.data
      } catch (error) {
        return []
      }
    },
    async saveChanges($evt) {
      this.serverValidationErrors = {}
      try {
        const { status } = await this.$axios.post(
          '/company/' + (!this.form.company.id ? 'store' : 'update'),
          {
            ...this.form.company,
            company_job_needed: $('.company_job_needed')
              .select2('data')
              .map((l) => l.id),
            potraits: this.avatarBase64,
            user_id: this.$auth.user.id,
          }
        )
        if ([200, 201].includes(status)) {
          this.formDirty = false
          this.$emit('profile')
          this.$toast({
            // text: `Company profile ${
            //   status === 201 ? 'created' : 'updated'
            // } successfully.`,
            text: `Company profile updated successfully.`,
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

<style>
.datepicker:focus-visible {
  outline: none !important;
}
</style>
