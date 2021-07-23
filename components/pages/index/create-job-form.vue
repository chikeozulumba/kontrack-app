<template>
  <slide-over-modal :show="show" @close="$emit('close')">
    <template #title>
      <div class="p-4 sm:p-8 text-gray-800 font-medium bg-custom-dark-5">
        <legend
          id="slide-over-title"
          class="font-semibold tracking-wider text-2xl font-firma-semibold"
        >
          Post Job
        </legend>
        <p class="text-sm mt-4 font-firma-light max-w-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          molestiae voluptas eligendi eum consequuntur ullam explicabo tempora
        </p>
      </div>
    </template>
    <template #content>
      <div class="px-4 sm:px-8 pb-12 text-gray-800">
        <section class="grid grid-cols-1 gap-8 md:mt-8 max-w-2xl">
          <div class="col-span-1">
            <form @submit.prevent="saveChanges">
              <div class="grid divide-y divide-gray-200 divide-solid gap-y-8">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6">
                    <label
                      for="job_title"
                      class="block text-sm font-medium text-gray-700"
                      >Job title</label
                    >
                    <input
                      id="job_title"
                      v-model="form.job_title"
                      type="text"
                      name="job_title"
                      autocomplete="given-name"
                      placeholder="Enter job title"
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
                      v-if="serverValidationErrors.job_title"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.job_title[0] }}</span
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="number_of_workers"
                      class="block text-sm font-medium text-gray-700"
                      >Number of workers needed</label
                    >
                    <input
                      id="number_of_workers"
                      v-model="form.number_of_workers"
                      type="number"
                      name="number_of_workers"
                      placeholder="Number of workers needed"
                      class="
                        focus:ring-regalRed-200 focus:border-regalRed-200
                        block
                        w-full
                        sm:text-lg
                        border-gray-200
                        rounded-md
                        p-3
                        text-sm
                        appearance-none
                      "
                    />
                    <span
                      v-if="serverValidationErrors.number_of_workers"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.number_of_workers[0] }}</span
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="hourly_rate"
                      class="block text-sm font-medium text-gray-700"
                      >Hourly rate</label
                    >
                    <div class="relative rounded-md">
                      <div
                        class="
                          absolute
                          inset-y-0
                          left-0
                          pl-3
                          flex
                          items-center
                          pointer-events-none
                        "
                      >
                        <span class="text-gray-500 sm:text-sm">
                          {{ user.company.currency === 'EUR' ? '€' : '$' }}
                        </span>
                      </div>
                      <input
                        id="hourly_rate"
                        v-model="form.hourly_rate"
                        type="number"
                        name="hourly_rate"
                        class="
                          pl-8
                          pr-8
                          focus:ring-regalRed-200 focus:border-regalRed-200
                          block
                          w-full
                          sm:text-lg
                          border-gray-200
                          rounded-md
                          p-3
                          text-sm
                        "
                        placeholder="0.00"
                      />
                    </div>
                    <span
                      v-if="serverValidationErrors.hourly_rate"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.hourly_rate[0] }}</span
                    >
                  </div>

                  <div class="col-span-6">
                    <label
                      for="job_description"
                      class="block text-sm font-medium text-gray-700"
                      >Description</label
                    >
                    <textarea
                      id="job_description"
                      v-model="form.job_description"
                      name="job_description"
                      placeholder="Fill in job description"
                      class="
                        focus:ring-regalRed-200 focus:border-regalRed-200
                        block
                        w-full
                        sm:text-sm
                        border-gray-200
                        rounded-md
                        p-3
                        text-sm
                        resize-none
                        font-firma-light
                      "
                      rows="8"
                    />
                    <span
                      v-if="serverValidationErrors.job_description"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.job_description[0] }}</span
                    >
                  </div>

                  <div class="col-span-6">
                    <label
                      for="arrival_instructions"
                      class="block text-sm font-medium text-gray-700"
                      >Arrival instructions</label
                    >
                    <textarea
                      id="arrival_instructions"
                      v-model="form.arrival_instructions"
                      name="arrival_instructions"
                      placeholder="Fill in necessary instructions or leave empty"
                      class="
                        focus:ring-regalRed-200 focus:border-regalRed-200
                        block
                        w-full
                        sm:text-sm
                        border-gray-200
                        rounded-md
                        p-3
                        text-sm
                        resize-none
                        font-firma-light
                      "
                      rows="5"
                    />
                    <span
                      v-if="serverValidationErrors.arrival_instructions"
                      class="text-customRed-100 text-xs"
                      >{{
                        serverValidationErrors.arrival_instructions[0]
                      }}</span
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="dress_code_preference"
                      class="block text-sm font-medium text-gray-700"
                      >Preferrd dress code</label
                    >
                    <select
                      id="dress_code_preference"
                      v-model="form.dress_code_preference"
                      name="dress_code_preference"
                      autocomplete="dress_code_preference"
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
                        capitalize
                      "
                    >
                      <option value="any">Any</option>
                      <option
                        v-for="(d, i) in [
                          'casual',
                          'formal',
                          'labour',
                          'professional',
                          'uniform',
                          'religious',
                        ]"
                        :key="i"
                      >
                        {{ d }}
                      </option>
                    </select>
                    <span
                      v-if="serverValidationErrors.dress_code_preference"
                      class="text-customRed-100 text-xs"
                      >{{
                        serverValidationErrors.dress_code_preference[0]
                      }}</span
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="gender_preference"
                      class="block text-sm font-medium text-gray-700"
                      >Preferred gender</label
                    >
                    <select
                      id="gender_preference"
                      v-model="form.gender_preference"
                      name="gender_preference"
                      autocomplete="gender_preference"
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
                        capitalize
                      "
                    >
                      <option value="both">Both</option>
                      <option v-for="(g, i) in ['male', 'female']" :key="i">
                        {{ g }}
                      </option>
                    </select>
                    <span
                      v-if="serverValidationErrors.gender_preference"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.gender_preference[0] }}</span
                    >
                  </div>

                  <div class="col-span-6">
                    <label
                      for="address"
                      class="block text-sm font-medium text-gray-700"
                      >Location address</label
                    >
                    <input
                      id="address"
                      v-model="form.address"
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
                      for="state"
                      class="block text-sm font-medium text-gray-700"
                      >Province/State</label
                    >
                    <select
                      id="state"
                      v-model="form.state"
                      name="state"
                      autocomplete="state"
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
                      <option>Alabama</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <span
                      v-if="serverValidationErrors.state"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.state[0] }}</span
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
                      placeholder="Enter city location"
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

                  <div class="col-span-6 relative">
                    <label
                      for="language_preference"
                      class="block text-sm font-medium text-gray-700"
                      >Preferred languages spoken</label
                    >
                    <select
                      class="
                        language_preference
                        focus:ring-regalRed-200 focus:border-regalRed-200
                        block
                        w-full
                        sm:text-lg
                        border border-gray-200
                        rounded-md
                        pl-3
                        text-sm
                      "
                      name="language_preference[]"
                      multiple="multiple"
                    >
                      <option
                        v-for="(jc, i) in allLanguages"
                        :key="i"
                        :value="jc.name"
                      >
                        {{ jc.name }}
                      </option>
                    </select>
                    <span
                      v-if="serverValidationErrors.language_preference"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.language_preference[0] }}</span
                    >
                  </div>

                  <div class="col-span-6">
                    <label
                      for="job_type"
                      class="block text-sm font-medium text-gray-700"
                      >Duration</label
                    >
                    <div class="flex items-center mt-2 gap-x-4">
                      <div class="flex items-center">
                        <input
                          id="duration"
                          v-model="form.duration"
                          name="duration"
                          type="radio"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                          value="one-off"
                        />
                        <label
                          for="duration"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-600
                            font-firma-light
                          "
                        >
                          One-off job offer
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="duration"
                          v-model="form.duration"
                          name="duration"
                          type="radio"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                          value="periodic"
                        />
                        <label
                          for="duration"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-600
                            font-firma-light
                          "
                        >
                          Periodic job offer
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="start_date"
                      class="block text-sm font-medium text-gray-700"
                      >Start date</label
                    >
                    <v-date-picker
                      v-model="form.start_date"
                      mode="date"
                      :min-date="new Date()"
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
                          placeholder="Choose start date"
                          v-on="inputEvents"
                        />
                      </template>
                    </v-date-picker>

                    <span
                      v-if="serverValidationErrors.start_date"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.start_date[0] }}</span
                    >
                  </div>

                  <div
                    v-if="form.duration === 'periodic'"
                    class="col-span-6 sm:col-span-3"
                  >
                    <label
                      for="end_date"
                      class="block text-sm font-medium text-gray-700"
                      >End date</label
                    >
                    <v-date-picker
                      v-model="form.end_date"
                      mode="date"
                      :min-date="form.start_date || new Date()"
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
                          placeholder="Choose end date"
                          :disabled="!form.start_date"
                          v-on="inputEvents"
                        />
                      </template>
                    </v-date-picker>

                    <span
                      v-if="serverValidationErrors.end_date"
                      class="text-customRed-100 text-xs"
                      >{{ serverValidationErrors.end_date[0] }}</span
                    >
                  </div>

                  <template v-if="form.duration">
                    <div class="col-span-6 sm:col-span-3 custom">
                      <label
                        for="time_starts"
                        class="block text-sm font-medium text-gray-700"
                        >Starts at</label
                      >

                      <v-date-picker
                        v-model="form.time_starts"
                        color="red"
                        mode="time"
                        :timezone="'utc'"
                      />

                      <span
                        v-if="serverValidationErrors.time_starts"
                        class="text-customRed-100 text-xs"
                        >{{ serverValidationErrors.time_starts[0] }}</span
                      >
                    </div>

                    <div class="col-span-6 sm:col-span-3 custom">
                      <label
                        for="time_ends"
                        class="block text-sm font-medium text-gray-700"
                        >Ends at</label
                      >

                      <v-date-picker
                        v-model="form.time_ends"
                        color="red"
                        mode="time"
                        :timezone="'utc'"
                      />

                      <span
                        v-if="serverValidationErrors.time_ends"
                        class="text-customRed-100 text-xs"
                        >{{ serverValidationErrors.time_ends[0] }}</span
                      >
                    </div>
                  </template>
                  <div class="col-span-6">
                    <label
                      for="social_media_profile_links"
                      class="block text-sm font-medium text-gray-700"
                      >Require additional information</label
                    >
                    <div class="grid items-center mt-2 gap-y-2">
                      <div class="flex items-center">
                        <input
                          id="social_media_profile_links"
                          v-model="form.social_media_profile_links"
                          name="social_media_profile_links"
                          type="checkbox"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                          value="one-off"
                        />
                        <label
                          for="social_media_profile_links"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-600
                            font-firma-light
                          "
                        >
                          Social media
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="additional_links"
                          v-model="form.additional_links"
                          name="additional_links"
                          type="checkbox"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                          value="one-off"
                        />
                        <label
                          for="additional_links"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-600
                            font-firma-light
                          "
                        >
                          Additional links
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="allow_resume_upload"
                          v-model="form.allow_resume_upload"
                          name="allow_resume_upload"
                          type="checkbox"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                          value="one-off"
                        />
                        <label
                          for="allow_resume_upload"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-600
                            font-firma-light
                          "
                        >
                          Resume/C.V.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="formDirty" class="grid grid-cols-1">
                  <button
                    type="submit"
                    class="
                      p-4
                      bg-gray-700
                      text-white
                      mt-8
                      rounded-lg
                      sm:text-lg
                      text-sm
                      hover:bg-gray-900
                      focus:outline-none focus:bg-gray-900
                    "
                  >
                    Create job offer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </template>
  </slide-over-modal>
</template>

<script>
/* eslint-disable no-undef */

const defaultForm = {
  job_title: null,
  job_description: null,
  arrival_instructions: null,
  gender_preference: 'both',
  dress_code_preference: 'any',
  country: null,
  state: null,
  start_date: null,
  end_date: null,
  job_categories: [],
  language_preference: [],
  hourly_rate: null,
  budget_maximum: null,
  hourly_rate_currency: 'CAD',
  budget_maximum_currency: 'CAD',
  recurring_start_date: null,
  recurring_end_date: null,
  recurring: false,
  recurring_bases: null,
  duration: 'one-off',
  time_starts: new Date(),
  time_ends: new Date(),
  address: null,
  city: null,
  number_of_workers: null,
  additional_links: false,
  allow_resume_upload: false,
  social_media_profile_links: false,
}

export default {
  name: 'CreateJobOffer',
  components: {
    'slide-over-modal': () => import('~/components/modals/slideover-modal.vue'),
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => ({}),
    },
    jobCategories: {
      type: Array,
      default: () => [],
    },
    allLanguages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: Object.assign({}, {}, defaultForm),
      serverValidationErrors: {},
      formDirty: false,
    }
  },
  watch: {
    form: {
      handler(val) {
        console.log(val)
        this.formDirty = true
      },
      deep: true,
    },
  },
  updated() {
    this.instantiateDropDown()
  },
  mounted() {
    this.instantiateDropDown()
  },
  methods: {
    instantiateDropDown() {
      $(document).ready(() => {
        const fields = ['job_categories', 'language_preference']
        fields.forEach((field) => {
          const selector = `.${field}`
          $(selector).select2()
          $(selector).val(this.user?.company?.[field] || [])
          $(selector).trigger('change')
          $(selector).on('select2:select', (e) => (this.formDirty = true))
        })
      })
    },
    async saveChanges($evt) {
      this.serverValidationErrors = {}
      const data = {
        ...this.form,
        job_categories: $('.job_categories')
          .select2('data')
          .map((l) => l.id),
        language_preference: $('.language_preference')
          .select2('data')
          .map((l) => l.id),
        company_id: this.user.company.id,
      }
      try {
        const { status, data: responseData } = await this.$axios.post(
          '/job/offer/store',
          data
        )
        if ([201].includes(status)) {
          const { data, message } = responseData
          this.showAddNewJobModal = false
          this.form = Object.assign({}, {}, defaultForm)
          this.$toast({
            text: message || `Job offer added successfully.`,
            type: 'info',
            time: 4,
          })
          this.$emit('offer', data)
          this.$emit('close')
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
  },
}
</script>
