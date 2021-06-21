<template>
  <div class="w-full">
    <legend class="font-firma-semibold md:text-2xl text-xl">Portfolio</legend>
    <div class="border border-gray-200 rounded-2xl mt-4 md:px-8 md:py-4 p-4">
      <div
        class="border-b border-gray-200 pb-4 flex items-center justify-between"
      >
        <div class="flex gap-x-8">
          <div class="flex gap-x-2 items-center">
            <label class="text-sm">Loan product</label>
            <select
              v-model="selectedLoanProducts.product"
              class="
                py-2
                border border-gray-200
                appearance-none
                rounded-lg
                font-firma-light
                text-xs
              "
            >
              <option :value="null">Choose</option>
              <option
                v-for="(p, i) in selectedLoanProducts.range"
                :key="i"
                :value="p"
              >
                {{ p }}
              </option>
            </select>
          </div>
          <div class="md:flex hidden flex-row font-light items-center text-xs">
            <label class="text-sm font-firma-light mr-2">Filter by:</label>
            <v-date-picker
              v-model="loanApplication.dateRange"
              mode="date"
              :masks="loanApplication.masks"
              color="blue"
              is-range
              class="inline-block h-full"
              trim-weeks
            >
              <template #default="{ inputValue, togglePopover }">
                <a
                  class="
                    flex
                    items-center
                    cursor-pointer
                    px-3
                    py-2
                    border-l border-t border-b border-r border-theme-gray-1
                    cursor-pointer
                    hover:bg-theme-dark
                    rounded-l-lg
                  "
                  :class="[
                    loanApplication.dateFilter === 'custom'
                      ? 'bg-custom-gray-lighter hover:bg-custom-gray-lighter text-custom-black'
                      : 'hover:bg-custom-dark-lighter-2',
                  ]"
                  @click.prevent="
                    () => {
                      loanApplication.dateFilter = 'custom'
                      togglePopover()
                    }
                  "
                >
                  <span
                    v-if="!inputValue.start"
                    class="font-firma-light text-xs"
                    >Custom</span
                  >
                  <div
                    v-if="inputValue.start"
                    class="flex gap-x-1 text-xs font-firma-light"
                  >
                    <h6 class="text-xs font-firma-light">
                      {{ inputValue.start }}
                    </h6>
                    to
                    <h6 class="text-xs font-firma-light">
                      {{ inputValue.end }}
                    </h6>
                  </div>
                </a>
                <input
                  :value="inputValue"
                  class="
                    bg-white
                    hidden
                    text-gray-700
                    w-full
                    py-1
                    px-2
                    appearance-none
                    border
                    rounded-r
                    focus:outline-none focus:border-blue-500
                  "
                  readonly
                />
              </template>
            </v-date-picker>
            <a
              v-for="(r, i) in loanApplication.range"
              :key="i"
              class="
                px-3
                py-2
                border-r border-t border-b border-theme-gray-1
                cursor-pointer
                font-firma-light
                text-xs
              "
              :class="[
                i === loanApplication.range.length - 1 ? 'rounded-r-lg' : '',
                r === loanApplication.dateFilter
                  ? 'bg-custom-gray-lighter hover:bg-custom-gray-lighter text-custom-black'
                  : 'hover:bg-custom-dark-lighter-2',
              ]"
              @click.prevent="() => selectDateFilter(r)"
            >
              {{ r }}
            </a>
          </div>
        </div>
        <a
          class="
            font-firma-medium
            text-custom-blue-2 text-sm
            cursor-pointer
            rounded-lg
          "
        >
          Create loan product
        </a>
      </div>

      <div
        class="
          mt-8
          rounded-xl
          grid grid-cols-12
          px-8
          py-4
          rounded-lg
          border border-gray-200
        "
      >
        <div class="col-span-4 border-r border-gray-200">
          <label class="text-sm text-custom-black font-firma-light"
            >Total Number of Borrowers</label
          >
          <h4 class="text-3xl font-firma-semibold mt-2">768,886</h4>
        </div>
        <div class="col-span-4 pl-8">
          <label class="text-sm text-custom-black font-firma-light"
            >Loan Amount Disbursed</label
          >
          <h4 class="text-3xl font-firma-semibold mt-2">NGN 33,768,886</h4>
        </div>
        <div class="col-span-4 border-l border-gray-200 pl-8">
          <label class="text-sm text-custom-black font-firma-light"
            >Expected Repayment</label
          >
          <h4 class="text-3xl font-firma-semibold mt-2">NGN 6,768,886</h4>
        </div>
      </div>

      <legend class="mt-16 font-firma-semibold md:text-2xl text-xl">
        Demographics
      </legend>
      <div class="mt-4 border border-gray-200 rounded-2xl p-4">
        <div class="grid grid-cols-12 divide-x divide-gray-200 w-full">
          <div class="col-span-12 md:col-span-8">
            <div class="pr-8">
              <div
                class="
                  flex
                  gap-x-8
                  items-center
                  justify-between
                  border-gray-200 border-b
                  pb-3
                "
              >
                <label class="text-sm">Loan amount</label>
                <div
                  class="
                    md:flex
                    hidden
                    flex-row
                    font-light
                    items-center
                    text-xs
                    justify-between
                  "
                >
                  <v-date-picker
                    v-model="loanAmount.dateRange"
                    mode="date"
                    :masks="loanAmount.masks"
                    color="blue"
                    is-range
                    class="inline-block h-full"
                    trim-weeks
                  >
                    <template #default="{ inputValue, togglePopover }">
                      <a
                        class="
                          flex
                          items-center
                          cursor-pointer
                          px-3
                          py-2
                          border-l
                          border-t
                          border-b
                          border-r
                          border-theme-gray-1
                          cursor-pointer
                          hover:bg-theme-dark
                          rounded-l-lg
                        "
                        :class="[
                          loanAmount.dateFilter === 'custom'
                            ? 'bg-custom-gray-lighter hover:bg-custom-gray-lighter text-custom-black'
                            : 'hover:bg-custom-dark-lighter-2',
                        ]"
                        @click.prevent="
                          () => {
                            loanAmount.dateFilter = 'custom'
                            togglePopover()
                          }
                        "
                      >
                        <span
                          v-if="!inputValue.start"
                          class="font-firma-light text-xs"
                          >Custom</span
                        >
                        <div
                          v-if="inputValue.start"
                          class="flex gap-x-1 text-xs font-firma-light"
                        >
                          <h6 class="text-xs font-firma-light">
                            {{ inputValue.start }}
                          </h6>
                          to
                          <h6 class="text-xs font-firma-light">
                            {{ inputValue.end }}
                          </h6>
                        </div>
                      </a>
                      <input
                        :value="inputValue"
                        class="
                          bg-white
                          hidden
                          text-gray-700
                          w-full
                          py-1
                          px-2
                          appearance-none
                          border
                          rounded-r
                          focus:outline-none focus:border-blue-500
                        "
                        readonly
                      />
                    </template>
                  </v-date-picker>
                  <a
                    v-for="(r, i) in loanAmount.range"
                    :key="i"
                    class="
                      px-3
                      py-2
                      border-r border-t border-b border-theme-gray-1
                      cursor-pointer
                      font-firma-light
                      text-xs
                    "
                    :class="[
                      i === loanAmount.range.length - 1 ? 'rounded-r-lg' : '',
                      r === loanAmount.dateFilter
                        ? 'bg-custom-gray-lighter hover:bg-custom-gray-lighter text-custom-black'
                        : 'hover:bg-custom-dark-lighter-2',
                    ]"
                    @click.prevent="() => selectDateFilter(r)"
                  >
                    {{ r }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="pl-8">
              <div
                class="
                  flex flex-col
                  gap-x-8
                  justify-center
                  py-3
                  h-full
                  border-b border-gray-200
                "
              >
                <label class="text-sm">Industry of borrowers</label>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 divide-x divide-gray-200 w-full md:mt-8">
          <div class="col-span-12 md:col-span-4">
            <div class="md:pr-8">
              <div
                class="
                  flex flex-col
                  gap-x-8
                  justify-center
                  py-3
                  h-full
                  border-b border-gray-200
                "
              >
                <label class="text-sm">Location</label>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="px-8">
              <div
                class="
                  flex flex-col
                  gap-x-8
                  justify-center
                  py-3
                  h-full
                  border-b border-gray-200
                "
              >
                <label class="text-sm">Age of borrowers</label>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4">
            <div class="px-8">
              <div
                class="
                  flex flex-col
                  gap-x-8
                  justify-center
                  py-3
                  h-full
                  border-b border-gray-200
                "
              >
                <label class="text-sm">Gender of borrowers</label>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'

export default {
  name: 'Portfolio',
  layout: 'authenticated',
  data() {
    return {
      loanApplication: {
        range: ['7D', '30D', '3M', '6M', '9M'],
        date: new Date(),
        dateRange: {
          start: new Date(),
          end: null,
        },
        masks: {
          input: 'DD-MM-YY',
        },
        dateFilter: '7D',
      },
      loanAmount: {
        range: ['Today', 'Yesterday', '7D', '30D', '3M', '6M', '9M'],
        date: new Date(),
        dateRange: {
          start: new Date(),
          end: null,
        },
        masks: {
          input: 'DD-MM-YY',
        },
        dateFilter: '7D',
      },
      selectedLoanProducts: {
        product: null,
        range: ['Individual', 'SME', 'Payday', 'Car loan'],
      },
    }
  },
  computed: {
    numberFormatter() {
      return numeral
    },
  },
  methods: {
    selectDateFilter(r) {
      this.loanApplication.dateFilter = r
      this.loanApplication.dateRange = {
        start: new Date(),
        end: null,
      }
    },
  },
}
</script>
