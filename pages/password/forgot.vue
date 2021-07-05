<template>
  <div class="min-h-screen bg-auth flex flex-col pt-16 py-4 sm:px-6 lg:px-8">
    <div class="mb-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-8 sm:rounded-2xl sm:px-14">
        <div class="sm:mx-auto sm:w-full sm:max-w-lg mb-6">
          <h2
            class="
              mt-6
              text-2xl
              font-extrabold
              text-custom-black
              font-firma-semibold
            "
          >
            Forgot password
          </h2>
          <p class="mt-2 text-sm text-gray-600 font-firma-light">
            Enter email address below to recieve instructions on reseting your
            password
          </p>
        </div>
        <ValidationObserver ref="forgotPassword">
          <form action="/" method="POST" @submit.prevent="forgotPassword">
            <div>
              <label
                for="email"
                class="
                  block
                  text-tiny
                  font-bold
                  text-grey-300
                  font-firma-medium
                "
              >
                Email
              </label>
              <ValidationProvider v-slot="{ errors }" rules="required|email">
                <div class="relative text-gray-700 mt-1">
                  <input
                    v-model="email"
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
                      shadow-sm
                      placeholder-gray-800
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                    "
                    placeholder="Enter email address"
                    name="email"
                    type="email"
                    autocomplete="email"
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

            <div class="mt-8">
              <button
                type="submit"
                class="
                  font-firma-medium
                  w-full
                  flex
                  justify-center
                  py-4
                  px-4
                  border border-transparent
                  rounded-md
                  shadow-sm
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
              >
                Reset password
              </button>
            </div>
            <div class="text-center mb-3 mt-12 flex justify-center gap-x-2">
              <p class="font-firma-light text-sm font-small text-grey-100">
                Already have an account?
                <nuxt-link
                  to="/login"
                  class="
                    text-sm
                    font-bold
                    text-regalBlue-200
                    hover:text-regalBlue-300
                  "
                >
                  Login
                </nuxt-link>
              </p>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  layout: 'default',
  middleware: ['guest'],
  data: () => ({
    email: null,
  }),
  methods: {
    async forgotPassword() {
      try {
        const validate = await this.$refs.forgotPassword.validate()
        if (!validate) {
          return this.$toast({
            text: 'Please fill all required fields to proceed.',
            type: 'error',
          })
        }
        const {
          status,
          data: { message },
        } = await this.$axios.post('/auth/forgot', {
          email: this.email,
          reset_form_link: window.location.origin + '/password/reset',
        })

        let text = 'Password reset attempt was not successful.'
        let isSuccess = false
        if (status === 200) {
          text = message || 'Password reset attempt successful.'
          isSuccess = true
        }
        this.$toast({
          text,
          type: isSuccess ? 'info' : 'error',
          time: 4,
        })
      } catch (error) {
        if (error?.response?.status === 422) {
          this.serverErrors = error?.response?.data.error
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
  },
}
</script>
