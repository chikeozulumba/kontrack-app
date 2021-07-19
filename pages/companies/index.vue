<template>
  <div class="max-w-8xl mx-auto grid gap-y-8 w-full mt-8">
    <div class="w-full">
      <legend class="font-firma-semibold md:text-2xl text-xl">Overview</legend>
      <div class="mt-4 grid grid-cols-12 gap-x-4 md:gap-x-8 md:gap-y-0 gap-y-4">
        <div
          class="
            md:col-span-4
            col-span-12
            border border-gray-200
            md:h-32
            rounded-2xl
            flex
            items-center
            justify-start
            py-4
            pl-8
            gap-x-8
          "
        >
          <svg
            class="hidden xl:block"
            width="60"
            height="60"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="#EBF4FF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.6987 29.0038C43.8466 23.7592 39.3919 19.8576 34.0808 19.704C33.8283 19.6941 33.5822 19.785 33.3968 19.9567C33.2114 20.1284 33.1018 20.3668 33.0923 20.6193V20.7047L33.6903 29.6506C33.7295 30.2528 34.2472 30.7106 34.8497 30.6758L43.82 30.0777C44.0727 30.059 44.3076 29.9403 44.4725 29.7479C44.6375 29.5555 44.7189 29.3052 44.6987 29.0526V29.0038Z"
              fill="#007AFF"
              stroke="#007AFF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.8688 25.0252C28.4395 24.8932 29.0234 25.1852 29.2601 25.7208C29.3222 25.8468 29.3595 25.9836 29.37 26.1236C29.492 27.8566 29.7483 31.6522 29.8948 33.7025C29.9198 34.0719 30.0909 34.416 30.3704 34.6588C30.6498 34.9016 31.0145 35.023 31.3837 34.9962L38.9138 34.5324C39.25 34.5122 39.5796 34.6318 39.8246 34.8629C40.0695 35.094 40.2081 35.4161 40.2075 35.7529C39.9024 40.3 36.6354 44.1014 32.1858 45.0868C27.7362 46.0721 23.1697 44.0054 20.9733 40.0122C20.3177 38.8629 19.9025 37.5924 19.7529 36.2777C19.689 35.8742 19.6644 35.4655 19.6797 35.0572C19.6926 30.2012 23.103 26.0171 27.8566 25.0252"
              fill="#007AFF"
            />
            <path
              d="M27.8688 25.0252C28.4395 24.8932 29.0234 25.1852 29.2601 25.7208C29.3222 25.8468 29.3595 25.9836 29.37 26.1236C29.492 27.8566 29.7483 31.6522 29.8948 33.7025C29.9198 34.0719 30.0909 34.416 30.3704 34.6588C30.6498 34.9016 31.0145 35.023 31.3837 34.9962V34.9962L38.9138 34.5324C39.25 34.5122 39.5796 34.6318 39.8246 34.8629C40.0695 35.094 40.2081 35.4161 40.2075 35.7529V35.7529C39.9024 40.3 36.6354 44.1014 32.1858 45.0868C27.7362 46.0721 23.1697 44.0054 20.9733 40.0122C20.3177 38.8629 19.9025 37.5924 19.7529 36.2777C19.689 35.8742 19.6644 35.4655 19.6797 35.0572C19.6926 30.2012 23.103 26.0171 27.8566 25.0252"
              stroke="#007AFF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="grid">
            <p class="font-firma-light text-sm">Total amount spent</p>
            <p class="text-3xl font-firma-semibold">
              <sup class="text-sm font-firma-semibold">CAD</sup>
              {{ numberFormatter(summary.totalLoanVolume).format('0,0.0') }}
            </p>
          </div>
        </div>
        <div
          class="
            md:col-span-4
            col-span-12
            border border-gray-200
            md:h-32
            rounded-2xl
            flex
            items-center
            justify-start
            py-4
            pl-8
            gap-x-8
          "
        >
          <svg
            class="hidden xl:block"
            width="60"
            height="60"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="#EBFAF4" />
            <ellipse
              cx="30.9532"
              cy="25.7041"
              rx="6.58307"
              ry="6.37071"
              fill="#02AA65"
              stroke="#02AA65"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5113 40.9352C20.5095 40.4873 20.613 40.0449 20.8139 39.6415C21.4445 38.4211 23.2227 37.7742 24.6982 37.4813C25.7623 37.2615 26.8412 37.1147 27.9267 37.042C29.9364 36.8711 31.9577 36.8711 33.9674 37.042C35.0529 37.1156 36.1316 37.2624 37.1959 37.4813C38.6714 37.7742 40.4496 38.36 41.0802 39.6415C41.4843 40.4639 41.4843 41.4186 41.0802 42.241C40.4496 43.5225 38.6714 44.1083 37.1959 44.389C36.133 44.6179 35.0538 44.7688 33.9674 44.8406C32.3317 44.9748 30.6883 44.9992 29.0491 44.9138C28.6707 44.9138 28.305 44.9138 27.9267 44.8406C26.8444 44.7697 25.7693 44.6187 24.7108 44.389C23.2227 44.1083 21.4571 43.5225 20.8139 42.241C20.614 41.8329 20.5106 41.3868 20.5113 40.9352Z"
              fill="#02AA65"
              stroke="#02AA65"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div class="grid">
            <p class="font-firma-light text-sm">Companies available</p>
            <p class="text-3xl font-firma-semibold">
              <sup class="text-sm font-firma-semibold">No.</sup>
              {{
                numberFormatter(summary.totalNumberOfLoanApplication).format(
                  '0,0'
                )
              }}
            </p>
          </div>
        </div>
        <div
          class="
            md:col-span-4
            col-span-12
            border border-gray-200
            md:h-32
            rounded-2xl
            flex
            items-center
            justify-start
            py-4
            pl-8
            gap-x-8
          "
        >
          <svg
            class="hidden xl:block"
            width="60"
            height="60"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="#FEF7EE" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.8193 26.8281L29.7395 34.4303L21.4508 28.9886C20.3647 28.2754 20.5848 26.516 21.8084 26.1372L41.3777 20.0632C42.4906 19.7197 43.5195 20.8326 43.1863 22.0252L37.3799 42.8776C37.0163 44.1825 35.3853 44.4085 34.7261 43.2434L29.7395 34.4303"
              fill="#D5AD7A"
            />
            <path
              d="M36.8193 26.8281L29.7395 34.4303L21.4508 28.9886C20.3647 28.2754 20.5848 26.516 21.8084 26.1372L41.3777 20.0632C42.4906 19.7197 43.5195 20.8326 43.1863 22.0252L37.3799 42.8776C37.0163 44.1825 35.3853 44.4085 34.7261 43.2434L29.7395 34.4303"
              stroke="#FEF7EE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div class="grid">
            <p class="font-firma-light text-sm">Pending Job Applications</p>
            <p class="text-3xl font-firma-semibold">
              <sup class="text-sm font-firma-semibold">No.</sup>
              {{
                numberFormatter(summary.totalNumberOfLoanApplication).format(
                  '0,0'
                )
              }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-8 sm:mt-16 flex justify-between w-full items-center">
        <legend class="font-firma-semibold md:text-2xl text-xl">
          Companies (2)
        </legend>
        <nuxt-link
          to="/companies/new"
          type="submit"
          class="
            px-6
            py-3
            bg-gray-400
            text-white
            rounded-lg
            text-sm
            hover:bg-gray-800
            focus:outline-none focus:bg-gray-800
          "
        >
          Add company
        </nuxt-link>
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
              >Company name</label
            >
            <label
              class="md:col-span-2 col-span-4 text-sm font-firma-medium flex"
              >Email/Phone</label
            >
            <label
              class="hidden md:block md:col-span-2 text-sm font-firma-medium"
              >State/Country</label
            >
            <label
              class="hidden md:block md:col-span-3 text-sm font-firma-medium"
              >Jobs needed</label
            >
            <label
              class="hidden md:block md:col-span-2 text-sm font-firma-medium"
            ></label>
          </div>
        </div>
        <div
          v-for="(td, i) in tableData"
          :key="i"
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
              <div
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
              </div>
              <div class="grid gap-y-0">
                <h3
                  class="text-sm font-firma-medium hidden md:block capitalize"
                >
                  {{ td.company_name }}
                </h3>
                <nuxt-link
                  to="/loans/"
                  class="
                    text-sm
                    font-firma-medium
                    md:hidden
                    underline
                    text-custom-blue-2
                    capitalize
                  "
                >
                  {{ td.company_name }}
                </nuxt-link>
                <h3 class="text-sm font-firma-light underline hidden md:block">
                  ID-{{ shortenID(td.id) }}
                </h3>
              </div>
            </div>
            <label class="col-span-2 text-sm font-firma-light"
              ><span class="md:block hidden text-sm font-firma-light">
                {{ td.company_email }}
              </span>
              <span class="md:block hidden text-sm">
                {{ td.company_phone }}
              </span></label
            >
            <label class="col-span-2 text-sm font-firma-light"
              ><span class="md:block hidden text-sm font-firma-light">
                {{ td.company_state }}
              </span>
              <span class="md:block hidden text-sm">
                {{ td.company_country }}
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
              {{ td.company_job_needed.join(', ') }}
            </label>
            <nuxt-link
              :to="'/companies/' + td.id"
              class="
                col-span-2
                underline
                text-sm
                font-firma-light
                text-regalRed-200
                hidden
                md:block
              "
            >
              View details
            </nuxt-link>
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
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import dayjs from 'dayjs'

export default {
  name: 'CompaniesPage',
  layout: 'authenticated',
  data() {
    return {
      summary: {},
      tableData: Array.from({ length: 10 }).map((td) => ({
        id: '00191ffa-c2f5-4d02-8676-85620357e500',
        company_name: 'Hygeia',
        company_email: 'hygeia@props.co',
        company_phone: '1-540-360-1089',
        company_state: 'Nevada',
        company_country: 'Mayotte',
        company_job_needed: [
          'Retail',
          'Extraction',
          'Installation',
          'Food',
          'Other',
        ],
      })),
    }
  },
  computed: {
    numberFormatter() {
      return numeral
    },
    dateFormatter() {
      return dayjs
    },
  },
  methods: {
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
