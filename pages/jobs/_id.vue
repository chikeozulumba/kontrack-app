<template>
  <div v-if="job" class="lg:max-w-8xl mx-auto grid gap-y-4 w-full mt-8">
    <breadcrumbs :links="navLinks" />
    <div class="w-full grid grid-cols-12 gap-4">
      <div
        class="
          md:col-span-6
          xl:col-span-7
          col-span-12
          border border-gray-100
          bg-white
          h-auto
          rounded-2xl
          sm:p-8
          p-4
        "
      >
        <div
          class="
            flex flex-col
            lg:flex-row
            justify-between
            items-start
            gap-y-1
            sm:gap-y-0 sm:mb-0
            mb-4
          "
        >
          <legend class="font-firma-medium md:text-2xl text-xl">
            {{ job.job_title }}
          </legend>
          <p class="text-xs font-firma-light">
            Last updated:
            <span class="text-xs font-firma-light md:font-firma-medium">{{
              dateFormatter(job.updated_at).format('dddd, MMMM D, YYYY h:mm A')
            }}</span>
          </p>
        </div>

        <div class="sm:mt-4 mt-2 max-w-lg grid gap-y-4">
          <div>
            <div>
              <span
                class="
                  text-lg text-regalRed-300
                  rounded-lg
                  font-firma-medium
                  capitalize
                "
              >
                CAD {{ numberFormatter(job.hourly_rate).format('0,0.00') }}
                <sup class="lowercase">/ hour</sup>
              </span>
            </div>
          </div>
          <div>
            <label class="text-sm">Employees needed</label>
            <div class="flex flex-row w-full flex-wrap mt-2">
              <p class="text-lg font-firma-semibold text-gray-500">
                {{ job.number_of_workers }}
              </p>
            </div>
          </div>
          <div class="flex sm:flex-row flex-col gap-x-4">
            <div>
              <label class="text-sm">Starts</label>
              <div class="flex flex-row w-full flex-wrap mt-2">
                <p class="text-sm font-firma-light text-gray-500">
                  {{
                    dateFormatter(job.start_date).format('dddd, MMMM D, YYYY')
                  }}
                </p>
              </div>
            </div>
            <div v-if="job.duration !== 'one-off'">
              <label class="text-sm">Ends</label>
              <div class="flex flex-row w-full flex-wrap mt-2">
                <p class="text-sm font-firma-light text-gray-500">
                  {{ dateFormatter(job.end_date).format('dddd, MMMM D, YYYY') }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex sm:flex-row flex-col gap-x-4">
            <div>
              <label class="text-sm">Time</label>
              <div class="flex flex-row w-full gap-x-2 mt-2">
                <p class="text-sm font-firma-light text-gray-500">
                  {{ dateFormatter(job.time_starts).format('h:mm A') }}
                </p>
                <span class="text-sm font-firma-light text-gray-500">-</span>
                <p class="text-sm font-firma-light text-gray-500">
                  {{ dateFormatter(job.time_ends).format('h:mm A') }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <label class="text-sm">Location address</label>
            <div class="flex flex-row w-full flex-wrap mt-2">
              <p class="text-sm font-firma-light text-gray-500">
                {{ job.address }}
              </p>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <label class="text-sm">State</label>
              <div class="flex flex-row w-full flex-wrap mt-2">
                <p class="text-sm font-firma-light text-gray-500">
                  {{ job.state }}
                </p>
              </div>
            </div>
            <div>
              <label class="text-sm">City</label>
              <div class="flex flex-row w-full flex-wrap mt-2">
                <p class="text-sm font-firma-light text-gray-500">
                  {{ job.city || 'Not specified' }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <label class="text-sm">Categories</label>
            <ul class="flex flex-row w-full flex-wrap gap-2 mt-2">
              <li v-for="(cat, i) in job.job_categories" :key="i">
                <nuxt-link
                  class="
                    text-xs
                    border border-gray-200
                    text-gray-500
                    bg-gray-100
                    rounded-lg
                    px-2
                    py-1.5
                    font-firma-light
                    hover:border-regalRed-200
                    hover:text-regalRed-300
                    hover:bg-red-50
                    capitalize
                  "
                  :to="'/jobs?job_categories=' + cat"
                  >{{ cat }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div>
            <label class="text-sm">Language preference</label>
            <ul class="flex gap-x-2 mt-2">
              <li v-for="(cat, i) in job.language_preference" :key="i">
                <nuxt-link
                  class="
                    text-xs
                    border border-gray-200
                    text-gray-500
                    bg-gray-100
                    rounded-lg
                    px-2
                    py-1.5
                    font-firma-light
                    hover:border-regalRed-200
                    hover:text-regalRed-300
                    hover:bg-red-50
                    capitalize
                  "
                  :to="'/jobs?language_preference=' + cat"
                  >{{ cat }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:mt-8 mt-4 max-w-xl">
          <h4 class="font-firma-medium sm:text-lg text-gray-800">
            Description
          </h4>
          <p
            class="
              font-firma-light
              md:text-md
              text-sm
              mt-4
              text-gray-700
              leading-7
            "
          >
            {{ job.job_description }}
          </p>
        </div>

        <div v-if="job.arrival_instructions" class="sm:mt-8 mt-4 max-w-xl">
          <h4 class="font-firma-medium sm:text-lg text-gray-800">
            Arrival instructions
          </h4>
          <p
            class="
              font-firma-light
              md:text-md
              text-sm
              mt-4
              text-gray-700
              leading-7
            "
          >
            {{ job.arrival_instructions }}
          </p>
        </div>
      </div>
      <div
        class="
          md:col-span-4
          xl:col-span-3
          col-span-12
          border border-gray-100
          bg-white
          h-auto
          rounded-2xl
          sm:p-8
          p-4
          h-fit
        "
      >
        <legend class="font-firma-light text-sm text-gray-600">
          Recieved applications ({{ job.applications_count || 0 }})
        </legend>
      </div>
      <div class="md:col-span-1 col-span-12 sm:inline-flex flex-col hidden">
        <button
          class="
            w-fit
            h-fit
            bg-gray-700
            hover:bg-gray-900
            focus:outline-none focus:bg-gray-900
            p-2
            rounded-lg
            text-white
            has-tooltip
          "
          @click.prevent="showModifyJobModal = true"
        >
          <span
            class="
              tooltip
              text-xs text-gray-600
              ml-0
              bg-white
              px-1
              py-0.5
              rounded-lg
              border border-gray-100
            "
            >modify</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          class="
            mt-0
            sm:mt-2
            w-fit
            h-fit
            p-2
            rounded-lg
            text-white
            has-tooltip
            focus:outline-none
          "
          :class="[
            job.status === 'active'
              ? ' bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500'
              : 'bg-green-400 hover:bg-green-500 focus:outline-none focus:bg-green-500',
          ]"
          @click.prevent="changeJobStatus"
        >
          <span
            class="
              tooltip
              text-xs text-gray-600
              ml-0
              bg-white
              px-1
              py-0.5
              rounded-lg
              border border-gray-100
            "
            >{{ job.status === 'active' ? 'de-activate' : 'activate' }}</span
          >
          <svg
            v-if="job.status === 'active'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          class="
            mt-0
            sm:mt-2
            w-fit
            h-fit
            bg-regalRed-200
            hover:bg-regalRed-300
            focus:outline-none focus:bg-regalRed-300
            p-2
            rounded-lg
            text-white
            has-tooltip
          "
          @click.prevent="deleteJobOffer"
        >
          <span
            class="
              tooltip
              text-xs text-gray-600
              ml-0
              bg-white
              px-1
              py-0.5
              rounded-lg
              border border-gray-100
            "
            >trash</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex gap-x-4 sm:hidden">
      <button
        class="
          py-4
          px-8
          bg-gray-700
          text-white
          rounded-lg
          sm:text-sm
          text-sm
          hover:bg-gray-900
          focus:outline-none focus:bg-gray-900
        "
        @click.prevent="showModifyJobModal = true"
      >
        Modify Job Offer
      </button>
      <button
        class="
          py-4
          px-8
          text-white
          rounded-lg
          sm:text-sm
          text-sm
          focus:outline-none
        "
        :class="[
          job.status === 'active'
            ? ' bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500'
            : 'bg-green-400 hover:bg-green-500 focus:bg-green-500',
        ]"
        @click.prevent="changeJobStatus"
      >
        {{ job.status === 'active' ? 'De-activate' : 'Activate' }} Job Offer
      </button>
      <button
        class="
          py-4
          px-8
          text-white
          rounded-lg
          sm:text-sm
          text-sm
          bg-regalRed-200
          hover:bg-regalRed-300
          focus:outline-none focus:bg-regalRed-300
        "
        @click.prevent="deleteJobOffer"
      >
        Delete Job Offer
      </button>
    </div>

    <modify-job-offer
      mode="edit"
      title="Edit job offer"
      :user="user"
      :show="showModifyJobModal"
      :all-languages="(user.profile.languages || []).map((name) => ({ name }))"
      :job-categories="
        (user.company.company_job_needed || []).map((name) => ({
          name,
        }))
      "
      :job-offer="job"
      @close="showModifyJobModal = false"
      @offer="(data) => navigateToJobOffer(data, true, false)"
    />
  </div>
</template>

<script>
import numeral from 'numeral'
import dayjs from 'dayjs'

const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const defaultNavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Jobs',
    path: '/jobs',
  },
]

export default {
  name: 'ViewJobPage',
  components: {
    breadcrumbs: () => import('~/components/shared/breadcrumbs.vue'),
    'modify-job-offer': () =>
      import('~/components/pages/index/modify-job-offer'),
  },
  layout: 'authenticated',
  data() {
    return {
      showModifyJobModal: false,
    }
  },
  computed: {
    numberFormatter() {
      return numeral
    },
    dateFormatter() {
      return dayjs
    },
    user() {
      const user = this.$store.getters['profile/profile']
      return {
        ...user,
        company: user.company?.id ? user.company : {},
      }
    },
    job: {
      get() {
        return this.$store.getters['jobs/viewJob'](this.$route.params.id)
      },
    },
    navLinks() {
      return [
        ...defaultNavLinks,
        {
          name: this.job?.job_title,
          path: '/jobs/' + this.job?.id,
          active: true,
        },
      ]
    },
  },
  watch: {
    job(val) {},
  },
  async mounted() {
    if (!this.job) {
      const { data, status, error } = await this.$getJobOffer(
        this.$route.params.id
      )
      if (status) {
        this.$store.dispatch('jobs/setViewedJob', data)
      } else {
        this.$toast({
          text: error.data?.message || `Job record not available.`,
          type: 'error',
          time: 4,
        })
      }
    }
  },
  methods: {
    async deleteJobOffer() {
      try {
        const { status, data = {} } = await this.$axios.post(
          `job/offer/delete`,
          {
            id: this.job.id,
          }
        )
        if (status === 200) {
          this.$toast({
            text: data?.message || `Job record successfully removed.`,
            type: 'info',
            time: 4,
          })
          await this.$router.replace('/jobs')
          this.$store.dispatch('jobs/removeJob', this.job.id)
        }
      } catch (error) {
        this.$toast({
          text:
            error?.response?.data?.message ||
            `Job record could not be modified.`,
          type: 'error',
          time: 4,
        })
      }
    },
    async changeJobStatus() {
      try {
        const s = this.job.status === 'active' ? 'deactivate' : 'activate'
        const { status, data = {} } = await this.$axios.post(`job/offer/${s}`, {
          id: this.job.id,
        })
        if (status === 200) {
          const job = Object.assign(
            {},
            {
              ...this.job,
              status: s === 'deactivate' ? 'inactive' : 'active',
            }
          )
          this.$store.dispatch('jobs/updateViewedJob', job)
          this.$toast({
            text: data?.message || `Job record successfully ${s}d.`,
            type: 'info',
            time: 4,
          })
        }
      } catch (error) {
        this.$toast({
          text:
            error?.response?.data?.message ||
            `Job record could not be modified.`,
          type: 'error',
          time: 4,
        })
      }
    },
    navigateToJobOffer(data, add = true, move = false) {
      this.$store.dispatch('jobs/setViewedJob', data)
      if (move) {
        this.$router.push({ name: 'jobs-id', params: { id: data.id } })
      }
    },
    async $getJobOffer(id) {
      try {
        const {
          data: { data },
        } = await this.$axios.get('/job/offer/show?id=' + id)
        return { status: true, data }
      } catch (error) {
        return { status: false, error: error.response || {} }
      }
    },
    handleClicked(path, active = false) {
      if (!active) {
        return this.$router.replace(path)
      }
    },
    shortenID(id) {
      const exploded = id?.split('-')
      return exploded[0].toUpperCase()
    },
    getInitials(name = '') {
      name = name?.replace(/\s\s+/g, ' ').toUpperCase().split(' ')
      if (name.length < 2) {
        const n = name[0].split('')
        return `${n[0]}${n[1]}`
      }
      const exploded = name
      return exploded.length > 1
        ? exploded[0][0] + exploded[1][0]
        : exploded[0][0] + exploded[0][1]
    },
  },
}
</script>
