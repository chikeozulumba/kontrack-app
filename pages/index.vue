<template>
  <div class="max-w-8xl mx-auto grid gap-y-8 w-full mt-8">
    <div class="w-full">
      <form action="" class="grid grid-cols-8 divide-x divide-gray-100">
        <div class="col-span-3 relative">
          <input
            class="
              px-8
              py-6
              pl-16
              focus:outline-none
              text-xl
              font-firma-light
              w-full
              rounded-l-xl
              border-l border-t border-b border-gray-100
            "
            placeholder="Search for jobs e.g. Plumbing, Mechanic"
          />
          <svg
            class="h-4 absolute top-8 left-5 text-custom-blue-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M225.474 0C101.151 0 0 101.151 0 225.474c0 124.33 101.151 225.474 225.474 225.474 124.33 0 225.474-101.144 225.474-225.474C450.948 101.151 349.804 0 225.474 0zm0 409.323c-101.373 0-183.848-82.475-183.848-183.848S124.101 41.626 225.474 41.626s183.848 82.475 183.848 183.848-82.475 183.849-183.848 183.849z"
            />
            <path
              d="M505.902 476.472L386.574 357.144c-8.131-8.131-21.299-8.131-29.43 0-8.131 8.124-8.131 21.306 0 29.43l119.328 119.328A20.74 20.74 0 00491.187 512a20.754 20.754 0 0014.715-6.098c8.131-8.124 8.131-21.306 0-29.43z"
            />
          </svg>
        </div>
        <div class="col-span-2 relative w-full">
          <input
            class="
              px-8
              py-6
              pl-16
              focus:outline-none
              text-xl
              font-firma-light
              border-t border-b border-gray-100
              w-full
            "
            placeholder="Enter location"
          />
          <svg
            class="h-4 absolute top-8 left-5 text-custom-blue-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 0C156.748 0 76 80.748 76 180c0 33.534 9.289 66.26 26.869 94.652l142.885 230.257A15 15 0 00258.499 512h.119a14.997 14.997 0 0012.75-7.292L410.611 272.22C427.221 244.428 436 212.539 436 180 436 80.748 355.252 0 256 0zm128.866 256.818L258.272 468.186l-129.905-209.34C113.734 235.214 105.8 207.95 105.8 180c0-82.71 67.49-150.2 150.2-150.2S406.1 97.29 406.1 180c0 27.121-7.411 53.688-21.234 76.818z"
            />
            <path
              d="M256 90c-49.626 0-90 40.374-90 90 0 49.309 39.717 90 90 90 50.903 0 90-41.233 90-90 0-49.626-40.374-90-90-90zm0 150.2c-33.257 0-60.2-27.033-60.2-60.2 0-33.084 27.116-60.2 60.2-60.2s60.1 27.116 60.1 60.2c0 32.683-26.316 60.2-60.1 60.2z"
            />
          </svg>
        </div>
        <!-- <div>
          <input
            class="
              px-8
              py-6
              focus:outline-none
              text-xl
              font-firma-light
              border-t border-b border-gray-100
            "
          />
        </div> -->
        <div class="w-full relative col-span-2">
          <input
            class="
              px-8
              py-6
              pl-16
              focus:outline-none
              text-xl
              font-firma-light
              border-t border-b border-gray-100
              w-full
            "
            placeholder="Enter amount expected"
          />
          <svg
            class="h-4 absolute top-8 left-5 text-custom-blue-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 339.004 339.004"
          >
            <path
              d="M262.122 232.344c.197-26.82-10.405-48.031-31.552-63.01-16.333-11.533-36.154-17.549-55.325-23.33-39.936-12.107-51.521-18.484-51.521-37.582 0-21.273 27.646-28.842 51.313-28.842 17.236 0 37.066 5.359 49.381 13.301l24.415-37.812c-16.095-10.434-38.123-17.551-59.875-19.76V0H143.92v37.785c-40.035 8.807-65.255 34.973-65.255 70.637 0 24.977 10.379 44.785 30.79 58.756 15.524 10.666 34.457 16.393 52.746 21.938 39.172 11.84 55.079 19.055 54.898 42.949l-.001.176c0 20.055-26.577 27.184-49.346 27.184-21.508 0-44.897-9.426-58.155-23.441l-32.719 30.949c16.79 17.758 41.184 30.313 67.041 35.234v36.838h45.039V302.96c44.487-6.368 73.12-33.151 73.164-70.616z"
            />
          </svg>
        </div>
        <div class="overflow-hidden">
          <button
            class="
              px-8
              h-full
              w-full
              text-white
              font-firma-medium
              bg-regalBlue-200
              rounded-r-xl
            "
          >
            Find Job
          </button>
        </div>
      </form>
    </div>
    <div class="w-full grid grid-cols-4 md:gap-x-8">
      <div class="col-span-1">
        <div class="grid sticky top-10">
          <div class="p-6 rounded-2xl bg-custom-blue-lighter h-fit">
            <h3 class="font-firma-bold">Create job alert</h3>
            <h6 class="text-sm font-firma-light text-custom-dark-lighter">
              Create job alert now and never miss a job
            </h6>
            <div class="mt-8 grid gap-y-4">
              <input
                class="
                  border border-custom-blue-lighter
                  rounded-xl
                  w-full
                  p-4
                  focus:outline-none
                  font-firma-light
                "
                type="text"
                placeholder="Enter keyword"
              />
              <button
                class="
                  p-3
                  px-4
                  text-sm
                  font-firma-light
                  text-white
                  bg-regalBlue-200
                  rounded-xl
                  mt-2
                "
                style="width: fit-content"
              >
                Create job alerts
              </button>
            </div>
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <legend class="font-firma-medium">Type of employement</legend>
            </div>
            <div class="mt-4 grid gap-y-0.5">
              <!-- <div class="flex justify-between"></div> -->

              <div
                v-for="(e, i) in typeOfEmployment"
                :key="i"
                class="flex items-center cursor-pointer"
              >
                <div class="flex items-center">
                  <input
                    :id="e.slug"
                    v-model="typeOfEmployment[i].checked"
                    :name="e.slug"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      text-regalBlue-200
                      focus:ring-regalBlue-200
                      border-gray-200
                      rounded
                    "
                  />
                </div>
                <div class="ml-3 mt-2 flex justify-between w-full">
                  <label
                    :for="e.slug"
                    class="font-firma-light text-custom-dark text-sm"
                    >{{ e.name }}</label
                  >
                  <label
                    :for="e.slug"
                    class="
                      px-2
                      py-1
                      rounded
                      text-xs
                      font-firma-semibold
                      opacity-70
                      cursor-pointer
                    "
                    :class="[
                      typeOfEmployment[i].checked
                        ? 'bg-custom-blue-lighter text-regalBlue-200'
                        : 'bg-custom-gray-bg text-custom-dark',
                    ]"
                    >{{ e.value }}</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <div class="flex justify-between items-center">
              <legend class="font-firma-medium">Salary range</legend>
            </div>
            <div class="mt-4 grid gap-y-0.5">
              <div
                v-for="(e, i) in salaryRange"
                :key="i"
                class="flex items-center cursor-pointer"
              >
                <div class="flex items-center">
                  <input
                    :id="e.slug"
                    v-model="salaryRange[i].checked"
                    :name="e.slug"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      text-regalBlue-200
                      focus:ring-regalBlue-200
                      border-gray-200
                      rounded
                    "
                  />
                </div>
                <div class="ml-3 mt-2 flex justify-between w-full">
                  <label
                    :for="e.slug"
                    class="font-firma-light text-custom-dark text-sm"
                    >{{ e.name }}</label
                  >
                  <label
                    :for="e.slug"
                    class="
                      px-2
                      py-1
                      rounded
                      text-xs
                      font-firma-semibold
                      opacity-70
                      cursor-pointer
                    "
                    :class="[
                      salaryRange[i].checked
                        ? 'bg-custom-blue-lighter text-regalBlue-200'
                        : 'bg-custom-gray-bg text-custom-dark',
                    ]"
                    >{{ e.quantity }}</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <div class="flex justify-between items-center">
              <legend class="font-firma-medium">Duration</legend>
            </div>
            <div class="mt-4 grid gap-y-0.5">
              <div
                v-for="(e, i) in hourlyDuration"
                :key="i"
                class="flex items-center cursor-pointer"
              >
                <div class="flex items-center">
                  <input
                    :id="e.slug"
                    v-model="hourlyDuration[i].checked"
                    :name="e.slug"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      text-regalBlue-200
                      focus:ring-regalBlue-200
                      border-gray-200
                      rounded
                    "
                  />
                </div>
                <div class="ml-3 mt-2 flex justify-between w-full">
                  <label
                    :for="e.slug"
                    class="font-firma-light text-custom-dark text-sm"
                    >{{ e.name }}</label
                  >
                  <label
                    :for="e.slug"
                    class="
                      px-2
                      py-1
                      rounded
                      text-xs
                      font-firma-semibold
                      opacity-70
                      cursor-pointer
                    "
                    :class="[
                      hourlyDuration[i].checked
                        ? 'bg-custom-blue-lighter text-regalBlue-200'
                        : 'bg-custom-gray-bg text-custom-dark',
                    ]"
                    >{{ e.quantity }}</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 grid h-fit">
        <header class="grid justify-between">
          <legend class="font-firma-semibold md:text-xl text-xl">
            Showing 46 jobs
          </legend>
        </header>

        <section class="grid grid-cols-3 gap-8 md:mt-8">
          <div
            v-for="n in 27"
            :key="n"
            class="col-span-1 rounded-xl bg-white p-6 grid"
          >
            <div class="h-16 w-16 bg-custom-dark-lighter rounded-xl"></div>
            <h6 class="mt-4 font-firma-medium text-xl">Mechanic Village</h6>
            <h6 class="mt-4 font-firma-light text-sm text-custom-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when ...
            </h6>

            <div class="flex flex-wrap gap-3 mt-4">
              <label
                class="
                  px-3
                  py-1
                  text-regalBlue-200
                  rounded-lg
                  text-xs
                  bg-custom-blue-lighter
                "
                >Fintech</label
              >
              <label
                class="
                  px-3
                  py-1
                  text-regalBlue-200
                  rounded-lg
                  text-xs
                  bg-custom-blue-lighter
                "
                >SEO</label
              >
              <label
                class="
                  px-3
                  py-1
                  text-regalBlue-200
                  rounded-lg
                  text-xs
                  bg-custom-blue-lighter
                "
                >Laundry</label
              >
            </div>

            <div class="flex gap-x-4 mt-8 w-full">
              <button
                class="
                  px-4
                  py-2
                  bg-regalBlue-200
                  rounded-lg
                  font-firma-light
                  text-custom-blue-lighter
                  w-full
                "
              >
                Apply now
              </button>
              <button
                class="
                  px-4
                  py-2
                  bg-custom-gray-bg
                  rounded-lg
                  font-firma-light
                  text-custom-dark
                  w-full
                "
              >
                Message
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import slugify from 'slugify'

const typeOfEmployment = [
  { name: 'Full time', value: 53 },
  { name: 'Part time', value: 60 },
  { name: 'Remote', value: 89 },
  { name: 'Internship', value: 21 },
  { name: 'Training', value: 12 },
].map((te, i) => ({
  ...te,
  slug: slugify(te.name, { lower: true, replacement: '-' }),
  checked: i === 2,
}))

let salaryRange = [700, 1000, 1200, 1400, 1500, 1800, 2000, 3000]

salaryRange = salaryRange.map((value, i) => {
  const nextValue = salaryRange[i + 1]
  const name = `$${value} ${nextValue ? '- $' + nextValue : 'and above'}`
  return {
    value,
    quantity: Math.floor(Math.random() * 99) + 1,
    name,
    slug: slugify(name, { lower: true, replacement: '-' }),
    checked: i === 1,
  }
})

let hourlyDuration = [1, 2, 3, 4, 5, 6]

hourlyDuration = hourlyDuration.map((value, i) => {
  const name = `${value} ${value > 1 ? 'hours' : 'hour'}`
  return {
    value,
    quantity: Math.floor(Math.random() * 99) + 1,
    name,
    slug: slugify(name, { lower: true, replacement: '-' }),
    checked:
      i === Math.floor(Math.random() * (hourlyDuration.length - 1 - 1 + 1) + 0),
  }
})

export default {
  name: 'Home',
  components: {},
  layout: 'authenticated',
  data() {
    return {
      typeOfEmployment,
      salaryRange,
      hourlyDuration,
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
