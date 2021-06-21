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
            Welcome Back!
          </h2>
          <p class="mt-2 text-sm text-grey-100 font-firma-light">
            Incredible loan deals have been awaiting you.
          </p>
        </div>
        <ValidationObserver ref="login">
          <form action="/" method="POST">
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

            <div class="mt-5">
              <label
                for="password"
                class="
                  block
                  text-tiny
                  font-bold
                  text-grey-300
                  font-firma-medium
                "
              >
                Password
              </label>
              <ValidationProvider v-slot="{ errors }" rules="required">
                <div class="relative text-gray-700 mt-1">
                  <input
                    v-model="password"
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
                      placeholder-gray-800
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                    "
                    placeholder="Enter password"
                    name="password"
                    :type="viewPassword ? 'text' : 'password'"
                    autocomplete="current-password"
                  />
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      flex
                      items-center
                      pl-1
                      pr-2
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
                        d="M14.6667 8.33333H15.3333C15.5101 8.33333 15.6797 8.40357 15.8047 8.5286C15.9298 8.65362 16 8.82319 16 9V15.6667C16 15.8435 15.9298 16.013 15.8047 16.1381C15.6797 16.2631 15.5101 16.3333 15.3333 16.3333H4.66667C4.48986 16.3333 4.32029 16.2631 4.19526 16.1381C4.07024 16.013 4 15.8435 4 15.6667V9C4 8.82319 4.07024 8.65362 4.19526 8.5286C4.32029 8.40357 4.48986 8.33333 4.66667 8.33333H5.33333V7.66667C5.33333 7.05383 5.45404 6.447 5.68856 5.88081C5.92308 5.31462 6.26683 4.80018 6.70017 4.36683C7.13351 3.93349 7.64796 3.58975 8.21414 3.35523C8.78033 3.12071 9.38716 3 10 3C10.6128 3 11.2197 3.12071 11.7859 3.35523C12.352 3.58975 12.8665 3.93349 13.2998 4.36683C13.7332 4.80018 14.0769 5.31462 14.3114 5.88081C14.546 6.447 14.6667 7.05383 14.6667 7.66667V8.33333ZM5.33333 9.66667V15H14.6667V9.66667H5.33333ZM9.33333 11H10.6667V13.6667H9.33333V11ZM13.3333 8.33333V7.66667C13.3333 6.78261 12.9821 5.93477 12.357 5.30964C11.7319 4.68452 10.8841 4.33333 10 4.33333C9.11595 4.33333 8.2681 4.68452 7.64298 5.30964C7.01786 5.93477 6.66667 6.78261 6.66667 7.66667V8.33333H13.3333Z"
                        fill="#6D7D93"
                      />
                    </svg>
                  </div>
                  <button
                    class="
                      absolute
                      inset-y-0
                      right-0
                      flex
                      items-center
                      mr-4
                      cursor-pointer
                      focus:outline-none
                    "
                    @click.prevent="viewPassword = !viewPassword"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.62067 13.2303C9.32344 13.2303 9.08275 12.9901 9.08222 12.6924C9.08168 12.3951 9.32237 12.1539 9.62013 12.1534C10.8042 12.1517 11.7691 11.1868 11.7707 10.0028C11.7713 9.70553 12.012 9.46484 12.3092 9.46484C12.607 9.46538 12.8476 9.70661 12.8471 10.0038C12.8444 11.7797 11.3976 13.227 9.62121 13.2297C9.62121 13.2303 9.62067 13.2303 9.62067 13.2303Z"
                        fill="#6D7D93"
                      />
                      <path
                        d="M7.71262 12.442C7.57478 12.442 7.43693 12.3893 7.33193 12.2843C6.72186 11.6742 6.38586 10.8638 6.38586 10.0001C6.38586 8.2184 7.83485 6.76941 9.6166 6.76941C10.4803 6.76941 11.2907 7.10541 11.9007 7.71548C12.1113 7.92601 12.1113 8.26686 11.9007 8.47739C11.6902 8.68739 11.3499 8.68739 11.1394 8.47739C10.7328 8.07032 10.1917 7.84632 9.6166 7.84632C8.42877 7.84632 7.46278 8.81231 7.46278 10.0001C7.46278 10.5752 7.68677 11.1164 8.09331 11.5229C8.30385 11.7334 8.30385 12.0737 8.09331 12.2843C7.98885 12.3898 7.85047 12.442 7.71262 12.442Z"
                        fill="#6D7D93"
                      />
                      <path
                        d="M5.7438 14.3879C5.6598 14.3879 5.57473 14.3685 5.49503 14.3265C4.04605 13.5689 2.64121 12.4026 1.31984 10.86C0.893386 10.3619 0.893386 9.63874 1.31984 9.14067C3.89043 6.13823 6.68233 4.61548 9.61692 4.61548C10.9986 4.61548 12.3744 4.96548 13.7054 5.65578C13.9693 5.79254 14.0721 6.11777 13.9353 6.38162C13.7986 6.646 13.4733 6.74777 13.209 6.61154C12.033 6.00147 10.8247 5.69239 9.61692 5.69239C7.01133 5.69239 4.49458 7.08807 2.13668 9.8412C2.05914 9.93166 2.05914 10.0684 2.13668 10.1594C3.36867 11.5976 4.66581 12.6789 5.99311 13.3729C6.25641 13.5108 6.35872 13.8355 6.22087 14.0998C6.12503 14.2829 5.93764 14.3879 5.7438 14.3879Z"
                        fill="#6D7D93"
                      />
                      <path
                        d="M9.61679 15.3846C9.00564 15.3846 8.39018 15.3157 7.78711 15.18C7.49689 15.1149 7.31489 14.8268 7.38004 14.5366C7.44573 14.2463 7.73381 14.066 8.0235 14.1295C8.54903 14.248 9.08533 14.3077 9.61679 14.3077C12.2229 14.3077 14.7391 12.912 17.0965 10.1589C17.1746 10.0685 17.1746 9.93169 17.097 9.84123C16.3911 9.01685 15.6572 8.30393 14.9147 7.72079C14.681 7.53717 14.64 7.19848 14.8242 6.96479C15.0078 6.7311 15.3454 6.69018 15.5802 6.87379C16.3776 7.50056 17.1627 8.26301 17.9144 9.1407C18.3409 9.63877 18.3409 10.3619 17.9139 10.86C15.3433 13.8624 12.5514 15.3846 9.61679 15.3846Z"
                        fill="#6D7D93"
                      />
                    </svg>
                  </button>
                </div>
                <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="text-right mt-3">
              <div class="text-sm">
                <a
                  href="#"
                  class="
                    font-firma-light
                    text-sm text-regalBlue-200
                    hover:text-regalBlue-300
                  "
                >
                  Forgot your password?
                </a>
              </div>
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
                @click.prevent="login"
              >
                Login
              </button>
            </div>
            <div class="text-center mb-3 mt-12 flex justify-center gap-x-2">
              <p class="font-firma-light text-sm font-small text-grey-100">
                Not registered yet?
                <nuxt-link
                  to="/register"
                  class="
                    text-sm
                    font-bold
                    text-regalBlue-200
                    hover:text-regalBlue-300
                  "
                >
                  Request access
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
  name: 'Login',
  layout: 'default',
  data: () => ({
    password: null,
    email: null,
    viewPassword: false,
  }),
  methods: {
    async login() {
      try {
        const validate = await this.$refs.login.validate()
        if (!validate) {
          return this.$toast({
            text: 'Please fill all required fields to proceed.',
            type: 'error',
          })
        }
        const {
          data: { accessToken },
        } = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        await this.$auth.strategy.token.set(accessToken)
        const { data: user } = await this.$axios.get('/auth/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        await this.$auth.setUser(user)
        this.$router.push('/')
      } catch (error) {
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
