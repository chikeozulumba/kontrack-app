<template>
  <div class="h-screen bg-white overflow-hidden flex">
    <div class="flex-1 w-0 flex flex-col md:px-0 xl:px-0">
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div>
          <div class="px-4 sm:px-6 md:px-0">
            <h1 class="text-2xl font-firma-semibold text-gray-900">
              Loan Overview
            </h1>
          </div>
          <div
            class="px-4 sm:px-6 md:px-4 border border-gray-200 rounded-lg mt-5"
          >
            <div class="py-3">
              <div class="flex items:start items-center flex-col sm:flex-row">
                <h1
                  class="
                    text-sm
                    font-firma-light
                    text-grey-300
                    mr-3
                    mb-4
                    sm:mb-0
                  "
                >
                  Filter by:
                </h1>
                <div
                  class="
                    md:flex
                    hidden
                    flex-row
                    font-light
                    items-end
                    text-xs
                    justify-end
                  "
                >
                  <v-date-picker
                    v-model="loanApplication.dateRange"
                    mode="date"
                    :masks="loanApplication.masks"
                    color="blue"
                    is-range
                    class="inline-block h-full"
                    trim-weeks
                    :max-date="new Date()"
                  >
                    <template #default="{ inputValue, togglePopover }">
                      <a
                        class="
                          flex
                          items-center
                          cursor-pointer
                          px-3
                          py-2
                          border-l border-t border-b border-theme-gray-1
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
                      i === loanApplication.range.length - 1
                        ? 'rounded-r-lg'
                        : '',
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
            </div>
            <div class="px-1 sm:px-0 md:px-4 border-t border-gray-200">
              <div
                class="
                  sm:grid
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-5
                  sm:gap-4 sm:items-start sm:pt-5
                  mt-1
                "
              >
                <div
                  class="
                    sm:col-span-1
                    py-6
                    md:py-3
                    pl-0
                    pr-2
                    border-b
                    sm:border-b
                    lg:border-b-0 lg:border-r
                    border-gray-200
                  "
                >
                  <p class="text-sm font-grey-200 font-firma-light">
                    Number of Borrowers
                  </p>
                  <h2
                    class="
                      block
                      text-2xl
                      font-semibold
                      text-grey-300
                      sm:mt-px
                      font-firma-semibold
                    "
                  >
                    6,768,886
                  </h2>
                </div>
                <div
                  class="
                    sm:col-span-1
                    py-6
                    md:py-3
                    px-0
                    lg:px-2
                    border-b
                    sm:border-b
                    lg:border-b-0 lg:border-r
                    border-gray-200
                  "
                >
                  <p class="text-sm font-grey-200 font-firma-light">
                    Loan Amount Disbursed
                  </p>
                  <h2
                    class="
                      block
                      text-2xl
                      font-semibold
                      text-grey-300
                      sm:mt-px
                      font-firma-semibold
                    "
                  >
                    NGN 76,765,901
                  </h2>
                </div>
                <div
                  class="
                    sm:col-span-1
                    py-6
                    md:py-3
                    px-0
                    lg:px-2
                    border-b
                    sm:border-b
                    lg:border-b-0 lg:border-r
                    border-gray-200
                  "
                >
                  <p class="text-sm font-grey-200 font-firma-light">
                    Interest Earnings
                  </p>
                  <h2
                    class="
                      block
                      text-2xl
                      font-semibold
                      text-grey-300
                      sm:mt-px
                      font-firma-semibold
                    "
                  >
                    NGN 26,765,901
                  </h2>
                </div>
                <div
                  class="
                    sm:col-span-1
                    py-6
                    md:py-3
                    px-0
                    lg:px-2
                    border-b
                    sm:border-b
                    lg:border-b-0 lg:border-r
                    border-gray-200
                  "
                >
                  <p class="text-sm font-grey-200 font-firma-light">
                    Total Collections
                  </p>
                  <h2
                    class="
                      block
                      text-2xl
                      font-semibold
                      text-grey-300
                      sm:mt-px
                      font-firma-semibold
                    "
                  >
                    NGN 6,765,901
                  </h2>
                </div>
                <div class="sm:col-span-1 py-6 md:py-3 px-0 lg:px-2">
                  <p class="text-sm font-grey-200 font-firma-light">
                    Overdue Amount
                  </p>
                  <h2
                    class="
                      block
                      text-2xl
                      font-semibold
                      text-grey-300
                      sm:mt-px
                      font-firma-semibold
                    "
                  >
                    NGN 6,765,901
                  </h2>
                </div>
                <div />
              </div>
            </div>
          </div>
          <div class="py-6 mt-4">
            <div class="flex items-end">
              <h1 class="text-2xl font-semibold text-gray-900 mr-3">
                Applications
              </h1>
              <span>Showing 1 - 10 of 97</span>
            </div>
            <div
              class="
                px-4
                sm:px-6
                md:px-4
                border border-gray-200
                rounded-lg
                mt-5
              "
            >
              <div class="">
                <div>
                  <div
                    class="
                      grid
                      sm:grid-cols-3
                      flex
                      items-start
                      border-b border-gray-200
                      justify-between
                    "
                  >
                    <nav class="sm:col-span-2 -mb-px grid md:flex md:space-x-8">
                      <a
                        v-for="tab in tabs"
                        :key="tab.name"
                        :href="tab.href"
                        :class="[
                          tab.current
                            ? 'border-regalBlue-200 border-b-4 text-regalBlue-200'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                        ]"
                      >
                        {{ tab.name }}
                        <span
                          :class="[
                            tab.current
                              ? 'text-regalBlue-200'
                              : 'text-grey-300',
                            'inline-flex ml-2 items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-regalBlue-500',
                          ]"
                          >{{ tab.total }}</span
                        >
                      </a>
                    </nav>
                    <div
                      class="
                        sm:col-span-1
                        -mb-px
                        grid
                        md:flex md:space-x-8
                        items-center
                      "
                    >
                      <div
                        class="
                          md:flex
                          hidden
                          flex-row
                          font-light
                          items-center
                          text-xs
                        "
                      >
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
                                border-l border-t border-b border-theme-gray-1
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
                            i === loanApplication.range.length - 1
                              ? 'rounded-r-lg'
                              : '',
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
                  </div>
                </div>

                <div class="mt-6 sm:mt-5">
                  <div class="flex flex-col">
                    <div class="overflow-x-auto">
                      <div class="align-middle inline-block min-w-full">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  class="
                                    px-3
                                    py-2
                                    text-left text-xs
                                    font-bold
                                    text-grey-300
                                    tracking-wider
                                  "
                                >
                                  Loan ID
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    px-3
                                    py-2
                                    text-left text-xs
                                    font-bold
                                    text-grey-300
                                    tracking-wider
                                  "
                                >
                                  Borrowers Name
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    px-3
                                    py-2
                                    text-left text-xs
                                    font-bold
                                    text-grey-300
                                    tracking-wider
                                  "
                                >
                                  Email Address
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    px-3
                                    py-2
                                    text-left text-xs
                                    font-bold
                                    text-grey-300
                                    tracking-wider
                                  "
                                >
                                  Phone Number
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    px-3
                                    py-2
                                    text-left text-xs
                                    font-bold
                                    text-grey-300
                                    tracking-wider
                                  "
                                >
                                  Amount Requested
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    px-3
                                    py-2
                                    text-left text-xs
                                    font-bold
                                    text-grey-300
                                    tracking-wider
                                  "
                                >
                                  Loan Type
                                </th>
                                <th scope="col" class="relative px-3 py-2">
                                  <span class="sr-only">Action</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white">
                              <tr
                                v-for="(person, i) in people"
                                :key="person.loanId"
                                :class="[
                                  i === people.length - 1
                                    ? ''
                                    : 'border-b border-gray-200',
                                ]"
                              >
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-left
                                    underline
                                    text-sm text-grey-300
                                  "
                                >
                                  {{ person.loanId }}
                                </td>
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-left text-sm text-grey-300
                                  "
                                >
                                  {{ person.name }}
                                </td>
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-left text-sm text-grey-300
                                  "
                                >
                                  {{ person.email }}
                                </td>
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-left text-sm text-grey-300
                                  "
                                >
                                  {{ person.phone }}
                                </td>
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-left text-sm text-grey-300
                                  "
                                >
                                  {{ person.amount }}
                                </td>
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-left text-sm text-grey-300
                                  "
                                >
                                  {{ person.loanType }}
                                </td>
                                <td
                                  class="
                                    px-3
                                    py-4
                                    whitespace-nowrap
                                    text-right text-xs
                                    font-medium
                                  "
                                >
                                  <a
                                    href="#"
                                    class="
                                      text-regalBlue-200
                                      hover:text-grey-100
                                      underline
                                      text-sm
                                      font-firma-light
                                    "
                                    >View details</a
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                px-4
                mt-6
                py-3
                flex
                items-center
                justify-between
                sm:px-1
              "
            >
              <div class="flex-1 flex justify-between sm:hidden">
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                  "
                >
                  Previous
                </a>
                <a
                  href="#"
                  class="
                    ml-3
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                  "
                >
                  Next
                </a>
              </div>
              <div
                class="
                  hidden
                  sm:flex-1 sm:flex sm:items-center sm:justify-between
                "
              >
                <div class="flex flex-row items-center">
                  <span
                    class="text-sm text-grey-300 font-medium font-firma-light"
                  >
                    Show
                  </span>
                  {{ ' ' }}
                  <select
                    id="size"
                    name="size"
                    class="
                      ml-2
                      mr-2
                      block
                      focus:ring-indigo-500 focus:border-indigo-500
                      sm:max-w-xs sm:text-sm
                      border
                      px-2
                      pr-8
                      py-1
                      border-gray-300
                      rounded-md
                      font-firma-light
                    "
                  >
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                  <span
                    class="text-sm text-grey-300 font-medium font-firma-light"
                  >
                    enteries per page
                  </span>
                </div>
                <div>
                  <nav
                    class="relative z-0 inline-flex rounded-md space-x-2"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      class="
                        bg-white
                        border-gray-300
                        rounded-md
                        text-grey-300
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-2
                        py-1
                        border
                        text-sm
                        font-medium font-firma-light
                      "
                    >
                      First
                    </a>
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-3
                        py-1
                        bg-white
                        text-sm
                        font-medium
                        text-grey-300
                        hover:bg-gray-50
                        font-firma-light
                      "
                    >
                      <span class="sr-only">Previous</span>
                      <ChevronLeftIcon class="h-3 w-3" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      class="
                        z-10
                        bg-regalBlue-200
                        border-regalBlue-200
                        rounded-md
                        text-white
                        relative
                        inline-flex
                        items-center
                        px-3
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="
                        bg-white
                        border-gray-300
                        rounded-md
                        text-grey-300
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-3
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      2
                    </a>
                    <a
                      href="#"
                      class="
                        bg-white
                        border-gray-300
                        rounded-md
                        text-grey-300
                        hover:bg-gray-50
                        hidden
                        md:inline-flex
                        relative
                        items-center
                        px-3
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      3
                    </a>
                    <a
                      href="#"
                      class="
                        bg-white
                        border-gray-300
                        rounded-md
                        text-grey-300
                        hover:bg-gray-50
                        hidden
                        md:inline-flex
                        relative
                        items-center
                        px-3
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      4
                    </a>
                    <a
                      href="#"
                      class="
                        bg-white
                        border-gray-300
                        rounded-md
                        text-grey-300
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-3
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      5
                    </a>
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-3
                        py-1
                        bg-white
                        text-sm
                        font-medium
                        text-grey-300
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Next</span>
                      <ChevronRightIcon class="h-3 w-3" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      class="
                        bg-white
                        border-gray-300
                        rounded-md
                        text-grey-300
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-2
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      Last
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Applications',
  components: {},
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
    }
  },
}
</script>
