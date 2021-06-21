<template>
  <div class="min-h-screen bg-auth flex flex-col pt-16 py-4 sm:px-6 lg:px-8">
    <div class="mb-8 sm:mx-auto sm:w-full sm:max-w-screen-sm">
      <div
        class="
          bg-white
          py-8
          sm:px-20
          px-8
          shadow
          sm:rounded-2xl
          md:max-w-629
          w-full
        "
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-screen-sm mb-6">
          <h2
            class="
              mt-6
              text-3xl
              font-extrabold
              text-custom-black
              font-firma-bold
            "
          >
            Getting started with kontrack
          </h2>
          <p
            class="mt-2 text-small text-custom-dark-lighter-3 font-firma-light"
          >
            Let’s get you all set up with leads.
          </p>
        </div>
        <div class="flex items-center justify-between border-b border-gray-200">
          <div class="flex items-center">
            <h6
              class="text-small text-custom-black font-bold font-firma-medium"
            >
              {{ view == 'step-1' ? 'About You' : 'About Company' }}
            </h6>
          </div>

          <div class="text-sm">
            <p class="text-small text-custom-dark font-firma-light">
              Step {{ view === 'step-1' ? 1 : 2 }} of 2
            </p>
          </div>
        </div>
        <form method="POST" class="mt-6">
          <keep-alive>
            <component
              :is="view"
              @viewchanged="viewChanged"
              @register="handleSubmit"
            ></component>
          </keep-alive>
          <div
            class="
              text-center
              mb-3
              mt-12
              sm:col-span-2
              flex
              gap-x-2
              justify-center
              items-center
            "
          >
            <p
              class="
                font-firma-light
                text-sm
                font-small
                text-custom-dark-lighter
              "
            >
              Already have an account?
            </p>
            <nuxt-link
              to="/login"
              class="
                text-small2
                font-bold
                text-regalBlue-200
                hover:text-regalBlue-300
              "
            >
              Login</nuxt-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Step1 from '../components/sign-up/step1'
import Step2 from '../components/sign-up/step2'
export default {
  name: 'Register',
  components: { 'step-1': Step1, 'step-2': Step2 },
  layout: 'auth',
  data() {
    return {
      view: 'step-1',
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
    }),
  },
  methods: {
    viewChanged(view) {
      this.view = view
    },
    async handleSubmit() {
      try {
        this.submitting = true
        const res = await this.$axios.post(
          process.env.AUTH_REGISTERATION_ENDPOINT,
          this.user
        )
        console.log(res)
        await this.$store.dispatch('user/clearUser')
        this.$toast.alert({
          text: 'Registration Successful',
          type: 'success',
          time: 3,
          position: 'top',
        })
        await this.$router.push('/login')
      } catch (error) {
        this.$toast({
          text:
            error?.response?.data?.message ||
            'You are not allowed to request an access due to an internal error that would be resolved soon.',
          type: 'error',
          time: 4,
        })
      }
    },
  },
}
</script>
