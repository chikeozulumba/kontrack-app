<template>
  <div class="lg:max-w-7xl mx-auto grid gap-y-4 w-full mt-8">
    <breadcrumbs :links="navLinks" />
    <div class="w-full grid grid-cols-12 gap-x-4">
      <div
        class="
          md:col-span-7
          xl:col-span-8
          col-span-12
          border border-gray-100
          bg-white
          h-auto
          rounded-2xl
          sm:p-8
          p-4
        "
      >
        <div class="flex justify-between items-start">
          <!-- <legend
            class="
              font-firma-medium
              md:text-xl
              text-md
              opacity-60
              text-gray-600
            "
          >
            Job details
          </legend> -->
          <legend class="font-firma-medium md:text-2xl text-xl">
            {{ job.job_title }}
          </legend>
          <p class="text-xs font-firma-light">
            Last updated:
            <span class="text-xs">{{
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
                CAD {{ numberFormatter(job.hourly_rate).format('0,0.0') }}
              </span>
              <span class="text-regalRed-300">-</span>
              <span
                class="
                  text-lg text-regalRed-300
                  rounded-lg
                  font-firma-medium
                  capitalize
                "
              >
                CAD {{ numberFormatter(job.budget_maximum).format('0,0.0') }}
              </span>
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
            <label class="text-sm">Languages</label>
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
          md:col-span-5
          xl:col-span-4
          col-span-12
          border border-gray-100
          bg-white
          h-auto
          rounded-2xl
          sm:p-8
          p-4
        "
      >
        <legend class="font-firma-light text-sm text-gray-600">
          Recieved applications (0)
        </legend>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import dayjs from 'dayjs'
import breadcrumbs from '~/components/shared/breadcrumbs.vue'

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
  components: { breadcrumbs },
  layout: 'authenticated',
  data() {
    return {}
  },
  computed: {
    numberFormatter() {
      return numeral
    },
    dateFormatter() {
      return dayjs
    },
    user() {
      return this.$auth.user
    },
    job() {
      return this.$store.getters['jobs/viewJob'](this.$route.params.id)
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
  mounted() {
    if (typeof this.job !== 'object') {
      this.$toast({
        text: `Job record not available.`,
        type: 'error',
        time: 4,
      })
    }
  },
  methods: {
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
