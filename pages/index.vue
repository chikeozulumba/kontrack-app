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
            <p class="font-firma-light text-sm">Jobs completed</p>
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
          Companies ({{ tableData.length }})
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
          @click.prevent="showAddNewJobModal = true"
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
              {{ td.job_categories.join(', ') }}
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

    <slide-over-modal
      :show="showAddNewJobModal"
      @close="showAddNewJobModal = false"
    >
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
                        for="budget_minimum"
                        class="block text-sm font-medium text-gray-700"
                        >Minimum budget</label
                      >
                      <div class="mt-1 relative rounded-md">
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
                            {{
                              form.budget_minimum_currency === 'EUR' ? '€' : '$'
                            }}
                          </span>
                        </div>
                        <input
                          id="budget_minimum"
                          v-model="form.budget_minimum"
                          type="number"
                          name="budget_minimum"
                          class="
                            pl-7
                            pr-12
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
                        <div
                          class="absolute inset-y-0 right-0 flex items-center"
                        >
                          <label for="currency" class="sr-only">Currency</label>
                          <select
                            id="currency"
                            v-model="form.budget_minimum_currency"
                            name="currency"
                            class="
                              focus:ring-regalRed-200 focus:border-regalRed-200
                              h-full
                              py-0
                              pl-2
                              pr-7
                              border-transparent
                              bg-transparent
                              text-gray-500
                              sm:text-sm
                              rounded-md
                            "
                          >
                            <option value="CAD">CAD</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                          </select>
                        </div>
                      </div>
                      <span
                        v-if="serverValidationErrors.budget_minimum"
                        class="text-customRed-100 text-xs"
                        >{{ serverValidationErrors.budget_minimum[0] }}</span
                      >
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="budget_maximum"
                        class="block text-sm font-medium text-gray-700"
                        >Maximum budget</label
                      >
                      <div class="mt-1 relative rounded-md">
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
                            {{
                              form.budget_maximum_currency === 'EUR' ? '€' : '$'
                            }}
                          </span>
                        </div>
                        <input
                          id="budget_maximum"
                          v-model="form.budget_maximum"
                          type="number"
                          name="budget_maximum"
                          class="
                            pl-7
                            pr-12
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
                        <div
                          class="absolute inset-y-0 right-0 flex items-center"
                        >
                          <label for="currency" class="sr-only">Currency</label>
                          <select
                            id="currency"
                            v-model="form.budget_maximum_currency"
                            name="currency"
                            class="
                              focus:ring-regalRed-200 focus:border-regalRed-200
                              h-full
                              py-0
                              pl-2
                              pr-7
                              border-transparent
                              bg-transparent
                              text-gray-500
                              sm:text-sm
                              rounded-md
                            "
                          >
                            <option value="CAD">CAD</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                          </select>
                        </div>
                      </div>
                      <span
                        v-if="serverValidationErrors.budget_maximum"
                        class="text-customRed-100 text-xs"
                        >{{ serverValidationErrors.budget_maximum[0] }}</span
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
                          sm:text-lg
                          border-gray-200
                          rounded-md
                          p-3
                          text-sm
                          resize-none
                        "
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
                          sm:text-lg
                          border-gray-200
                          rounded-md
                          p-3
                          text-sm
                          resize-none
                        "
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
                        >{{
                          serverValidationErrors.language_preference[0]
                        }}</span
                      >
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

                    <div class="col-span-6 sm:col-span-3">
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

                    <div class="col-span-6">
                      <div class="flex items-center">
                        <input
                          id="is_24hr"
                          v-model="form.is_24hr"
                          name="is_24hr"
                          type="checkbox"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                        />
                        <label
                          for="is_24hr"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-500
                            font-firma-light
                          "
                        >
                          This is a 24hr job
                        </label>
                      </div>
                    </div>

                    <template v-if="!form.is_24hr">
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
                      <div class="flex items-center">
                        <input
                          id="recurring"
                          v-model="form.recurring"
                          name="recurring"
                          type="checkbox"
                          class="
                            h-4
                            w-4
                            text-regalRed-200
                            focus:ring-regalRed-300
                            border-gray-300
                            rounded
                          "
                        />
                        <label
                          for="recurring"
                          class="
                            ml-2
                            mt-1
                            block
                            text-sm text-gray-500
                            font-firma-light
                          "
                        >
                          Set as recurring job
                        </label>
                      </div>
                    </div>

                    <template v-if="form.recurring">
                      <div class="col-span-6">
                        <label
                          for="recurring_bases"
                          class="block text-sm font-medium text-gray-700"
                          >Recurring bases</label
                        >
                        <select
                          id="recurring_bases"
                          v-model="form.recurring_bases"
                          name="recurring_bases"
                          autocomplete="recurring_bases"
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
                          <option :value="null">Choose</option>
                          <option value="daily">daily</option>
                          <option value="weekly">weekly</option>
                          <option value="monthly">monthly</option>
                          <option value="yearly">yearly</option>
                        </select>
                        <span
                          v-if="serverValidationErrors.recurring_bases"
                          class="text-customRed-100 text-xs"
                          >{{ serverValidationErrors.recurring_bases[0] }}</span
                        >
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="recurring_start_date"
                          class="block text-sm font-medium text-gray-700"
                          >Recurring start date</label
                        >
                        <v-date-picker
                          v-model="form.recurring_start_date"
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
                              placeholder="Choose recurring start date"
                              v-on="inputEvents"
                            />
                          </template>
                        </v-date-picker>

                        <span
                          v-if="serverValidationErrors.recurring_start_date"
                          class="text-customRed-100 text-xs"
                          >{{
                            serverValidationErrors.recurring_start_date[0]
                          }}</span
                        >
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="recurring_end_date"
                          class="block text-sm font-medium text-gray-700"
                          >Recurring end date</label
                        >
                        <v-date-picker
                          v-model="form.recurring_end_date"
                          mode="date"
                          :min-date="form.recurring_start_date || new Date()"
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
                              placeholder="Choose recurring end date"
                              :disabled="!form.recurring_start_date"
                              v-on="inputEvents"
                            />
                          </template>
                        </v-date-picker>
                        <span
                          v-if="serverValidationErrors.recurring_end_date"
                          class="text-customRed-100 text-xs"
                          >{{
                            serverValidationErrors.recurring_end_date[0]
                          }}</span
                        >
                      </div>
                    </template>
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
  </div>
</template>

<script>
/* eslint-disable no-undef */

import numeral from 'numeral'
import dayjs from 'dayjs'

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
  budget_minimum: null,
  budget_maximum: null,
  budget_minimum_currency: 'CAD',
  budget_maximum_currency: 'CAD',
  recurring_start_date: null,
  recurring_end_date: null,
  recurring: false,
  recurring_bases: null,
  is_24hr: true,
  time_starts: new Date(),
  time_ends: new Date(),
  address: null,
  city: null,
}

export default {
  name: 'CompaniesPage',
  components: {
    'slide-over-modal': () => import('~/components/modals/slideover-modal.vue'),
  },
  layout: 'authenticated',
  data() {
    return {
      showAddNewJobModal: false,
      summary: {},
      form: defaultForm,
      serverValidationErrors: {},
      formDirty: false,
      tableData: Array.from({ length: 10 }).map((td) => ({
        id: '00191ffa-c2f5-4d02-8676-85620357e500',
        company_name: 'Hygeia',
        company_email: 'hygeia@props.co',
        company_phone: '1-540-360-1089',
        company_state: 'Nevada',
        company_country: 'Mayotte',
        job_categories: [
          'Retail',
          'Extraction',
          'Installation',
          'Food',
          'Other',
        ],
      })),
      jobCategories: [],
      allLanguages: [],
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
      return this.$auth.user
    },
  },
  watch: {
    form: {
      handler() {
        this.formDirty = true
      },
      deep: true,
    },
  },
  mounted() {
    this.jobCategories = (this.user.profile.job_categories || []).map((j) => ({
      name: j,
    }))
    this.allLanguages = (this.user.profile.languages || []).map((j) => ({
      name: j,
    }))
    this.instantiateDropDown()
  },
  updated() {
    this.instantiateDropDown()
  },
  methods: {
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
          // this.form = Object.assign({}, { ...defaultForm })
          this.$toast({
            text: message || `Job offer added successfully.`,
            type: 'info',
            time: 4,
          })
          this.$store.dispatch('jobs/setViewedJob', data)
          this.$router.push({ name: 'jobs-id', params: { id: data.id } })
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
    instantiateDropDown() {
      $(document).ready(() => {
        const fields = ['job_categories', 'language_preference']
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
