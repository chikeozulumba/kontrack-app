<template>
  <section
    :class="[show ? '' : 'visibility-hidden left-full']"
    class="fixed inset-0 overflow-hidden"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      :class="[show ? '' : 'visibility-hidden left-full']"
      class="absolute inset-0 overflow-hidden"
    >
      <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        :class="[
          show
            ? 'ease-in-out duration-500 opacity-100'
            : 'ease-in-out duration-500 opacity-0',
        ]"
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        id="wrapper"
        class="fixed inset-y-0 right-0 pl-10 max-w-full flex"
        :class="[show ? '' : 'visibility-hidden left-full']"
      >
        <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div
          :class="[
            show
              ? 'transform transition ease-in-out duration-500 sm:duration-700 translate-x-0'
              : 'transform transition ease-in-out duration-500 sm:duration-700 translate-x-full',
          ]"
          class="relative w-screen"
        >
          <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
          <div
            :class="[
              show
                ? 'ease-in-out duration-500 opacity-100'
                : 'ease-in-out duration-500 opacity-0',
            ]"
            class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
          >
            <button
              class="
                rounded-md
                text-gray-300
                hover:text-white
                focus:outline-none focus:ring-2 focus:ring-white
              "
              @click="() => $emit('close')"
            >
              <span class="sr-only">Close panel</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
          >
            <slot name="title" />
            <slot name="content" />
            <!-- /End replace -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SlideOverModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'scroll'
      }
    },
  },
}
</script>

<style scoped>
#wrapper {
  max-width: 600px;
  width: 100%;
}
</style>
