<template>
  <div class="max-w-8xl mx-auto grid gap-y-8 w-full mt-8">
    <div class="w-full">
      <div class="sm:mt-8 mt-8 flex justify-between w-full items-center">
        <legend class="font-firma-semibold md:text-2xl text-lg">
          Jobs ({{ tableData.length }})
        </legend>
        <button
          class="
            px-6
            py-3
            bg-gray-400
            text-white
            rounded-lg
            hover:bg-gray-800
            focus:outline-none focus:bg-gray-800
            flex
            items-center
            gap-x-2
            font-firma-light
          "
          @click.prevent="showModifyJobModal = true"
        >
          <span>
            <svg
              class="stroke-current h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Post new job
        </button>
      </div>

      <div
        v-if="tableData.length > 0"
        class="
          md:col-span-8
          col-span-12
          border border-gray-200
          h-auto
          rounded-2xl
          md:px-8 md:py-4
          p-4
          mt-4
        "
      >
        <div class="mt-4 border-b border-gray-200 pb-2">
          <div class="grid grid-cols-12 w-full">
            <label class="md:col-span-3 col-span-8 text-sm font-firma-medium"
              >Job title</label
            >
            <label
              class="md:col-span-2 col-span-4 text-sm font-firma-medium flex"
              >City/State</label
            >
            <label
              class="hidden md:block md:col-span-3 text-sm font-firma-medium"
              >Category</label
            >
            <label
              class="hidden md:block md:col-span-2 text-sm font-firma-medium"
              >Status</label
            >
            <label
              class="hidden md:block md:col-span-2 text-sm font-firma-medium"
              >Added on</label
            >
          </div>
        </div>
        <div
          v-for="(td, i) in tableData"
          :key="i"
          :set="(status = generateStatus(td))"
          class="mt-4 pt-2 pb-3"
          :class="[
            i === tableData.length - 1 ? '' : 'border-b border-gray-200',
          ]"
        >
          <div class="grid grid-cols-12 w-full items-center">
            <div
              class="
                md:col-span-3
                col-span-8
                flex
                gap-x-4
                items-center
                truncate
              "
            >
              <!-- <div
                class="
                  bg-red-50
                  rounded-full
                  text-sm text-center
                  h-10
                  w-10
                  items-center
                  justify-center
                  pt-0.5
                  hidden
                  md:flex
                "
              >
                <span class="font-firma-semibold text-regalRed-300 text-xs">{{
                  getInitials(td.company_name)
                }}</span>
              </div> -->
              <div class="grid gap-y-0">
                <h3
                  class="text-sm font-firma-medium hidden md:block capitalize"
                >
                  {{ td.job_title }}
                </h3>
                <a
                  class="
                    text-xs
                    font-firma-medium
                    md:hidden
                    underline
                    text-custom-blue-2
                    capitalize
                    hover:text-regalRed-200
                    cursor-pointer
                  "
                  @click.prevent="() => navigateToJobOffer(td, false, true)"
                >
                  {{ td.job_title }}
                </a>
                <a
                  class="
                    text-xs
                    font-firma-light
                    underline
                    hidden
                    md:block
                    hover:text-regalRed-300
                    cursor-pointer
                  "
                  @click.prevent="() => navigateToJobOffer(td, false, true)"
                >
                  ID-{{ shortenID(td.id) }}
                </a>
              </div>
            </div>
            <label class="col-span-2 text-sm font-firma-light"
              ><span class="md:block hidden text-sm font-firma-light">
                {{ td.city }}
              </span>
              <span class="md:block hidden text-sm">
                {{ td.state }}
              </span></label
            >
            <label
              class="
                md:col-span-3
                truncate
                text-sm
                hidden
                md:block
                font-firma-light
              "
            >
              {{ td.job_categories.join(', ') }}
            </label>
            <label class="col-span-2 text-sm font-firma-light">
              <span
                class="text-xs rounded-md px-3 py-1.5"
                :class="status.class"
              >
                {{ status.text }}
              </span>
            </label>
            <label class="col-span-2 text-sm font-firma-light">
              {{ dateFormatter(td.created_at).format('MMM, D YYYY') }}
            </label>
          </div>
        </div>
      </div>
      <div v-else class="py-8 text-center">
        <p
          class="
            text-sm text-gray-600
            font-firma-medium
            flex
            justify-center
            items-center
            h-full
          "
        >
          No data available
        </p>
      </div>

      <modify-job-offer
        :user="user"
        :show="showModifyJobModal"
        :all-languages="
          (user.profile.languages || []).map((name) => ({ name }))
        "
        :job-categories="
          (user.company.company_job_needed || []).map((name) => ({
            name,
          }))
        "
        @close="showModifyJobModal = false"
        @offer="(data) => navigateToJobOffer(data, true, false)"
      />
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import dayjs from 'dayjs'

const now = dayjs(new Date().toUTCString())

export default {
  name: 'JobsPage',
  components: {
    'modify-job-offer': () =>
      import('~/components/pages/index/modify-job-offer'),
  },
  layout: 'authenticated',
  data() {
    return {
      showModifyJobModal: false,
      serverValidationErrors: {},
      formDirty: false,
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
    tableData() {
      return this.$store.getters['jobs/all']
    },
    isFetched() {
      return this.$store.getters['jobs/fetched']
    },
  },
  async beforeMount() {
    if (!this.isFetched) {
      let data = await this.$getJobOffers()
      data = data.map((d) =>
        Object.assign(
          {},
          {
            ...d,
            time_starts: dayjs(
              `${now.format('YYYY-MM-DD')}T${d.time_starts}.000Z`
            ).toISOString(),
            time_ends: dayjs(
              `${now.format('YYYY-MM-DD')}T${d.time_ends}.000Z`
            ).toISOString(),
          }
        )
      )
      this.$store.dispatch('jobs/setJobs', { data, fetched: true })
    }
  },
  methods: {
    generateStatus(data) {
      const endD = dayjs(data.end_date)
      const now = dayjs(new Date())
      if (endD.isBefore(now)) {
        return {
          text: 'Expired',
          class: 'text-regalRed-300 bg-red-50 border border-red-200',
        }
      }
      return {
        text: 'Active',
        class: 'text-green-600 bg-green-50 border border-green-200',
      }
    },
    async $getJobOffers() {
      try {
        const { data } = await this.$axios.get('job/offer/me')
        return data.data
      } catch (error) {
        return []
      }
    },
    navigateToJobOffer(data, add = true, move = false) {
      const d = Object.assign(
        {},
        {
          ...data,
          // time_starts: dayjs(
          //   `${now.format('YYYY-MM-DD')}T${data.time_starts}.000Z`
          // ).toISOString(),
          // time_ends: dayjs(
          //   `${now.format('YYYY-MM-DD')}T${data.time_ends}.000Z`
          // ).toISOString(),
        }
      )
      this.$store.dispatch('jobs/setViewedJob', d)
      if (add) {
        this.$store.dispatch('jobs/addJob', d)
      }
      if (move) {
        this.$router.push({ name: 'jobs-id', params: { id: d.id } })
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

<style>
.custom .vc-date {
  display: none !important;
}

.custom > .vc-container {
  /* display: none !important; */
  border-color: rgba(229, 231, 235, 1) !important;
}

.custom .vc-select-arrow {
  /* display: none !important; */
}

.custom select {
  background-image: none !important;
}
</style>
