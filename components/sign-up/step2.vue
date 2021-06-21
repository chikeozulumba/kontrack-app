<template>
  <ValidationObserver ref="step2">
    <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 w-full">
      <div class="col-span-12 md:col-span-2">
        <label
          for="name"
          class="font-firma-medium block text-tiny font-bold text-grey-300"
          >Company name</label
        >
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="relative font-normal text-grey-300 mt-1">
            <input
              id="name"
              v-model="name"
              class="
                font-firma-light
                text-small text-grey-300
                w-full
                pl-12
                pr-3
                appearance-none
                block
                py-4
                px-4
                border border-grey-200
                rounded-md
                shadow-none
                placeholder-grey-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Enter company name"
              name="name"
              type="text"
            />
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                px-2
                ml-2
                pointer-events-none
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5455 15.6H18V17H2V15.6H3.45455V3.7C3.45455 3.51435 3.53117 3.3363 3.66756 3.20503C3.80395 3.07375 3.98893 3 4.18182 3H15.8182C16.0111 3 16.1961 3.07375 16.3324 3.20503C16.4688 3.3363 16.5455 3.51435 16.5455 3.7V15.6ZM15.0909 15.6V4.4H4.90909V15.6H15.0909ZM7.09091 9.3H9.27273V10.7H7.09091V9.3ZM7.09091 6.5H9.27273V7.9H7.09091V6.5ZM7.09091 12.1H9.27273V13.5H7.09091V12.1ZM10.7273 12.1H12.9091V13.5H10.7273V12.1ZM10.7273 9.3H12.9091V10.7H10.7273V9.3ZM10.7273 6.5H12.9091V7.9H10.7273V6.5Z"
                  fill="#6D7D93"
                />
              </svg>
            </div>
          </div>
          <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-span-12 md:col-span-2">
        <label
          for="companyEmail"
          class="font-firma-medium block text-tiny font-bold text-grey-300"
          >Company email</label
        >
        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <div class="relative font-normal text-grey-300 mt-1">
            <input
              v-model="officialEmail"
              class="
                font-firma-light
                text-small text-grey-300
                w-full
                pl-12
                pr-3
                appearance-none
                block
                py-4
                px-4
                border border-grey-200
                rounded-md
                shadow-none
                placeholder-grey-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Enter official company email address"
              name="officalEmail"
              type="email"
            />
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                px-2
                ml-2
                pointer-events-none
              "
            >
              <svg
                class="fill-current"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.666667 0H12.6667C12.8435 0 13.013 0.0702379 13.1381 0.195262C13.2631 0.320286 13.3333 0.489856 13.3333 0.666667V11.3333C13.3333 11.5101 13.2631 11.6797 13.1381 11.8047C13.013 11.9298 12.8435 12 12.6667 12H0.666667C0.489856 12 0.320286 11.9298 0.195262 11.8047C0.0702379 11.6797 0 11.5101 0 11.3333V0.666667C0 0.489856 0.0702379 0.320286 0.195262 0.195262C0.320286 0.0702379 0.489856 0 0.666667 0ZM12 2.82533L6.71467 7.55867L1.33333 2.81067V10.6667H12V2.82533ZM1.674 1.33333L6.70733 5.77467L11.668 1.33333H1.674Z"
                  fill="#6D7D93"
                />
              </svg>
            </div>
          </div>
          <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-span-12 md:col-span-2">
        <label
          for="officalPhonenumber"
          class="font-firma-medium block text-tiny font-bold text-grey-300"
          >Company number</label
        >
        <ValidationProvider
          v-slot="{ errors }"
          :rules="{ required: true, regex: /^0[0-9]{10}$/ }"
        >
          <div class="relative font-normal text-grey-300 mt-1">
            <input
              v-model="officialPhonenumber"
              class="
                font-firma-light
                text-small text-grey-300
                pl-12
                pr-3
                appearance-none
                block
                w-full
                py-4
                px-4
                border border-grey-200
                rounded-md
                shadow-none
                placeholder-grey-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Enter official company number"
              name="officalPhonenumber"
              type="tel"
            />
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                px-2
                ml-2
                pointer-events-none
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.244 9.12133C8.86956 10.2203 9.77968 11.1304 10.8787 11.756L11.468 10.9307C11.5628 10.798 11.7029 10.7046 11.8619 10.6682C12.0208 10.6319 12.1876 10.655 12.3307 10.7333C13.2735 11.2486 14.3148 11.5585 15.386 11.6427C15.5532 11.6559 15.7092 11.7317 15.823 11.8549C15.9368 11.9781 16 12.1396 16 12.3073V15.282C16 15.4471 15.9388 15.6063 15.8282 15.7288C15.7177 15.8513 15.5655 15.9285 15.4013 15.9453C15.048 15.982 14.692 16 14.3333 16C8.62667 16 4 11.3733 4 5.66667C4 5.308 4.018 4.952 4.05467 4.59867C4.0715 4.43446 4.14866 4.28235 4.27119 4.17176C4.39373 4.06116 4.55294 3.99996 4.718 4H7.69267C7.86037 3.99998 8.02193 4.06317 8.14512 4.17697C8.26831 4.29077 8.34408 4.44682 8.35733 4.614C8.44148 5.68519 8.75138 6.72645 9.26667 7.66933C9.34498 7.81238 9.36814 7.97916 9.33178 8.13813C9.29541 8.2971 9.20204 8.43723 9.06933 8.532L8.244 9.12133ZM6.56267 8.68333L7.82933 7.77867C7.46986 7.00273 7.22357 6.17923 7.098 5.33333H5.34C5.336 5.444 5.334 5.55533 5.334 5.66667C5.33333 10.6373 9.36267 14.6667 14.3333 14.6667C14.4447 14.6667 14.556 14.6647 14.6667 14.66V12.902C13.8208 12.7764 12.9973 12.5301 12.2213 12.1707L11.3167 13.4373C10.9524 13.2958 10.5987 13.1287 10.258 12.9373L10.2193 12.9153C8.91172 12.1711 7.82885 11.0883 7.08467 9.78067L7.06267 9.742C6.87127 9.40133 6.70419 9.04756 6.56267 8.68333Z"
                  fill="#6D7D93"
                />
              </svg>
            </div>
          </div>
          <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-span-12 md:col-span-1">
        <label
          for="countryId"
          class="font-firma-medium block text-tiny font-bold text-grey-300"
        >
          Country
        </label>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="relative font-normal text-grey-300 mt-1">
            <select
              id="countryId"
              v-model="countryId"
              name="countryId"
              class="
                sm:max-w-full
                font-firma-light
                text-small
                max-w-none
                text-grey-300
                block
                py-4
                px-2
                pl-4
                border border-grey-200
                rounded-md
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                w-full
                shadow-none
                sm:text-sm
              "
            >
              <option value="">Choose country</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="col-span-12 md:col-span-1">
        <label
          for="stateId"
          class="font-firma-medium block text-tiny font-bold text-grey-300"
        >
          State
        </label>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="relative font-normal text-grey-300 mt-1">
            <select
              id="stateId"
              v-model="stateId"
              name="stateId"
              class="
                font-firma-light
                text-small text-grey-300
                block
                py-4
                px-2
                border border-grey-200
                rounded-md
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                w-full
                pl-4
                shadow-none
                sm:max-w-xs sm:text-sm
              "
            >
              <option value="">Choose state</option>
              <option value="Lagos state">Lagos state</option>
              <option value="Abia state">Abia State</option>
            </select>
          </div>
          <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-span-12 md:col-span-2">
        <label
          for="address"
          class="font-firma-medium block text-tiny font-bold text-grey-300"
          >Company address</label
        >
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="relative font-normal text-grey-300 mt-1">
            <input
              id="address"
              v-model="address"
              class="
                font-firma-light
                text-small text-grey-300
                w-full
                pl-12
                pr-3
                appearance-none
                block
                py-4
                px-4
                border border-grey-200
                rounded-md
                shadow-none
                placeholder-grey-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Enter official company address"
              name="address"
              type="text"
            />
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                px-2
                ml-2
                pointer-events-none
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17.4853L5.75734 13.2426C4.91823 12.4035 4.34679 11.3344 4.11529 10.1705C3.88378 9.00663 4.0026 7.80023 4.45673 6.70388C4.91086 5.60753 5.6799 4.67046 6.66659 4.01118C7.65328 3.35189 8.81332 3 10 3C11.1867 3 12.3467 3.35189 13.3334 4.01118C14.3201 4.67046 15.0891 5.60753 15.5433 6.70388C15.9974 7.80023 16.1162 9.00663 15.8847 10.1705C15.6532 11.3344 15.0818 12.4035 14.2427 13.2426L10 17.4853ZM13.3 12.2999C13.9526 11.6473 14.397 10.8158 14.577 9.91053C14.7571 9.0053 14.6646 8.06701 14.3114 7.21432C13.9582 6.36162 13.36 5.63282 12.5926 5.12006C11.8252 4.6073 10.923 4.33362 10 4.33362C9.07704 4.33362 8.17481 4.6073 7.40739 5.12006C6.63997 5.63282 6.04183 6.36162 5.68861 7.21432C5.33539 8.06701 5.24294 9.0053 5.42297 9.91053C5.603 10.8158 6.04741 11.6473 6.7 12.2999L10 15.5999L13.3 12.2999ZM10 10.3333C9.64638 10.3333 9.30724 10.1928 9.05719 9.94276C8.80715 9.69271 8.66667 9.35357 8.66667 8.99995C8.66667 8.64633 8.80715 8.30719 9.05719 8.05714C9.30724 7.80709 9.64638 7.66661 10 7.66661C10.3536 7.66661 10.6928 7.80709 10.9428 8.05714C11.1929 8.30719 11.3333 8.64633 11.3333 8.99995C11.3333 9.35357 11.1929 9.69271 10.9428 9.94276C10.6928 10.1928 10.3536 10.3333 10 10.3333Z"
                  fill="#6D7D93"
                />
              </svg>
            </div>
          </div>
          <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="flex mt-6">
          <div class="flex-grow-0 w-2/12 mr-1">
            <button
              class="
                w-full
                py-4
                px-4
                border border-grey-200
                rounded-lg
                shadow-none
                text-small3
                font-medium
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-grey-200
                text-center
              "
              @click.prevent="() => $emit('viewchanged', 'step-1')"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 14.6667L12.0572 15.6095L6.25245 9.80474L12.0572 4L13 4.94281L8.13807 9.80474L13 14.6667Z"
                  fill="#6D7D93"
                />
              </svg>
            </button>
          </div>
          <div class="flex-grow ml-2">
            <button
              type="submit"
              class="
                font-firma-medium
                w-full
                py-4
                px-4
                border border-transparent
                rounded-lg
                shadow-none
                text-small3
                font-medium
                text-white
                bg-regalBlue-200
                hover:bg-regalBlue-300
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              @click.prevent="step2"
            >
              Register
              <!-- <component
                :is="LoadingSpinnerIcon"
                :v-show="!!submitting"
                class="ml-2"
              /> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import LoadingSpinnerIcon from '@/components/icons/LoadingSpinnerIcon.vue'

export default {
  name: 'Step2',
  data: () => ({
    LoadingSpinnerIcon,
    name: null,
    officialEmail: null,
    officialPhonenumber: null,
    countryId: null,
    stateId: null,
    address: null,
  }),
  methods: {
    step2() {
      this.$refs.step2.validate().then((success) => {
        if (success) {
          const companyData = {
            name: this.name,
            officialEmail: this.officialEmail,
            officialPhonenumber: this.officialPhonenumber,
            countryId: this.countryId,
            stateId: this.stateId,
            address: this.address,
          }
          this.$store.dispatch('user/setUser', companyData)
          this.$emit('register')
          // alert('cool')
          // this.$emit('viewchanged', 'step-2')
        }
      })
    },
  },
}
</script>
