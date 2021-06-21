<template>
  <div class="h-screen bg-white overflow-hidden flex">
    <div class="flex-1 w-0 flex flex-col md:px-0 xl:px-0">
      <Navbar />
      <main class="flex-1 relative overflow-y-auto focus:outline-none px-12">
        <div class="py-6">
          <div class="px-4 sm:px-6 md:px-0">
            <h1 class="text-2xl font-semibold text-gray-900">Settings</h1>
          </div>
          <div
            class="px-4 sm:px-6 md:px-4 border border-gray-100 rounded-lg mt-5"
          >
            <div class="py-3">
              <!-- Tabs -->
              <div class="lg:hidden">
                <label for="selected-tab" class="sr-only">Select a tab</label>
                <select
                  id="selected-tab"
                  name="selected-tab"
                  class="
                    mt-1
                    block
                    w-full
                    pl-3
                    pr-10
                    py-2
                    text-base
                    border border-gray-300
                    focus:outline-none
                    focus:ring-purple-500
                    focus:border-purple-500
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option
                    v-for="tab in tabs"
                    :key="tab.name"
                    :selected="tab.current"
                  >
                    {{ tab.name }}
                  </option>
                </select>
              </div>
              <div class="hidden lg:block">
                <div class="border-b border-gray-200">
                  <nav class="-mb-px flex space-x-8">
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
                    </a>
                  </nav>
                </div>
              </div>

              <div class="mt-6 sm:mt-5">
                <div
                  class="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:pt-5"
                >
                  <div class="md:pr-20 sm:col-span-2">
                    <h2
                      class="block text-sm font-medium text-gray-700 sm:mt-px"
                    >
                      Company Logo
                    </h2>
                    <p class="text-sm text-gray-500">
                      We accept files in PNG or JPG format, with a maximum size
                      of 5 MB.
                    </p>
                    <button
                      type="button"
                      class="
                        bg-white
                        rounded-md
                        font-medium
                        text-purple-600
                        hover:text-purple-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-purple-500
                      "
                    >
                      Change my picture
                    </button>
                  </div>

                  <div class="mt-1 sm:mt-0 sm:col-span-3 md:pr-6">
                    <img src="/images/no-logo.svg" alt="Upload logo" />
                  </div>
                </div>
                <div
                  class="
                    sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:pt-5
                    mt-8
                  "
                >
                  <div class="md:pr-20 sm:col-span-2">
                    <h2
                      class="block text-sm font-medium text-gray-700 sm:mt-px"
                    >
                      Company name
                    </h2>
                    <p class="text-sm text-gray-500">
                      Your companies name as it is registered at the CAC
                    </p>
                  </div>

                  <div class="mt-1 sm:mt-0 sm:col-span-3 md:pr-4">
                    <div class="col-span-12 sm:col-span-6">
                      <label
                        for="company_name"
                        class="block text-sm font-medium text-gray-700"
                        >Company name</label
                      >
                      <input
                        id="company_name"
                        type="text"
                        name="company_name"
                        class="
                          mt-1
                          block
                          w-full
                          border border-gray-300
                          rounded-md
                          shadow-sm
                          py-2
                          px-3
                          focus:outline-none
                          focus:ring-light-blue-500
                          focus:border-light-blue-500
                          sm:text-sm
                        "
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="
                    sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:pt-5
                    mt-4
                  "
                >
                  <div class="md:pr-20 sm:col-span-2">
                    <h2
                      class="block text-sm font-medium text-gray-700 sm:mt-px"
                    >
                      Address
                    </h2>
                    <p class="text-sm text-gray-500">
                      Your companies head office address
                    </p>
                  </div>

                  <div class="mt-1 sm:mt-0 sm:col-span-3 md:pr-4">
                    <div
                      class="
                        mt-6
                        grid grid-cols-1
                        gap-y-6 gap-x-4
                        sm:grid-cols-6
                      "
                    >
                      <div class="sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <div class="mt-1">
                          <input
                            id="country"
                            type="text"
                            name="first_name"
                            class="
                              mt-1
                              block
                              w-full
                              border border-gray-300
                              rounded-md
                              shadow-sm
                              py-2
                              px-3
                              focus:outline-none
                              focus:ring-light-blue-500
                              focus:border-light-blue-500
                              sm:text-sm
                            "
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="number_of_branches"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Number of branches
                        </label>
                        <div class="mt-1">
                          <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            autocomplete="given-name"
                            class="
                              mt-1
                              block
                              w-full
                              border border-gray-300
                              rounded-md
                              shadow-sm
                              py-2
                              px-3
                              focus:outline-none
                              focus:ring-light-blue-500
                              focus:border-light-blue-500
                              sm:text-sm
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 mt-4">
                      <label
                        for="head_office"
                        class="block text-sm font-medium text-gray-700"
                        >Head office address</label
                      >
                      <input
                        id="head_office"
                        type="text"
                        name="head_office"
                        autocomplete="given-name"
                        class="
                          mt-1
                          block
                          w-full
                          border border-gray-300
                          rounded-md
                          shadow-sm
                          py-2
                          px-3
                          focus:outline-none
                          focus:ring-light-blue-500
                          focus:border-light-blue-500
                          sm:text-sm
                        "
                      />
                    </div>
                    <div class="mt-10">
                      <button
                        type="button"
                        class="
                          inline-flex
                          items-center
                          px-4
                          py-2
                          border border-transparent
                          text-base
                          font-medium
                          rounded-md
                          shadow-sm
                          text-white
                          bg-indigo-600
                          hover:bg-indigo-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-indigo-500
                        "
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
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
import Navbar from '@/components/shared/navbar.vue'
const tabs = [
  { name: 'Company Profile', href: '#', current: true },
  { name: 'Security', href: '#', current: false },
  { name: 'User Management', href: '#', current: false },
]
export default {
  components: {
    Navbar,
  },
  layout: 'authenticated',
  data() {
    return {
      tabs,
    }
  },
}
</script>
