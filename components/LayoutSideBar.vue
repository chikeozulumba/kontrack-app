<template>
  <aside :class="[customClass || 'bg-custom-dark md:w-72 min-w-min']">
    <div class="sticky top-0">
      <div class="logo-wrapper flex items-center border-b border-gray-600 pl-8">
        <lazy-logo custom-class="hidden md:block" />
        <lazy-icon-only-logo custom-class="md:hidden" />
      </div>
      <ul id="sidebar" class="mt-16">
        <li>
          <nuxt-link
            class="
              flex
              pl-8
              hover:bg-custom-dark-lighter-2
              py-6
              hover:border-l-4
              text-custom-dark-lighter
              hover:text-white
              font-firma-thin
            "
            to="/"
          >
            <span class="mr-9">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8572 1.33337H13.035C13.936 1.33337 14.6669 2.07064 14.6669 2.98016V5.17611C14.6669 6.08494 13.936 6.8229 13.035 6.8229H10.8572C9.95553 6.8229 9.22461 6.08494 9.22461 5.17611V2.98016C9.22461 2.07064 9.95553 1.33337 10.8572 1.33337Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.96611 1.33337H5.14316C6.04485 1.33337 6.77577 2.07064 6.77577 2.98016V5.17611C6.77577 6.08494 6.04485 6.8229 5.14316 6.8229H2.96611C2.06442 6.8229 1.3335 6.08494 1.3335 5.17611V2.98016C1.3335 2.07064 2.06442 1.33337 2.96611 1.33337Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.96611 9.17725H5.14316C6.04485 9.17725 6.77577 9.91451 6.77577 10.8247V13.02C6.77577 13.9295 6.04485 14.6668 5.14316 14.6668H2.96611C2.06442 14.6668 1.3335 13.9295 1.3335 13.02V10.8247C1.3335 9.91451 2.06442 9.17725 2.96611 9.17725Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8572 9.17725H13.035C13.936 9.17725 14.6669 9.91451 14.6669 10.8247V13.02C14.6669 13.9295 13.936 14.6668 13.035 14.6668H10.8572C9.95553 14.6668 9.22461 13.9295 9.22461 13.02V10.8247C9.22461 9.91451 9.95553 9.17725 10.8572 9.17725Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="hidden md:block">Overview</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="
              flex
              pl-8
              hover:bg-custom-dark-lighter-2
              py-6
              hover:border-l-4
              text-custom-dark-lighter
              hover:text-white
              font-firma-thin
            "
            to="/portfolio"
          >
            <span class="mr-9">
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.869141 9.31799C0.869141 9.31799 0.963807 10.4767 0.985807 10.842C1.01514 11.332 1.20447 11.8793 1.52047 12.2593C1.96647 12.798 2.49181 12.988 3.19314 12.9893C4.01781 12.9907 10.0145 12.9907 10.8391 12.9893C11.5405 12.988 12.0658 12.798 12.5118 12.2593C12.8278 11.8793 13.0171 11.332 13.0471 10.842C13.0685 10.4767 13.1631 9.31799 13.1631 9.31799"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66357 2.55307V2.30574C4.66357 1.49241 5.32224 0.83374 6.13557 0.83374H7.85691C8.66957 0.83374 9.32891 1.49241 9.32891 2.30574L9.32957 2.55307"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99642 10.1189V9.25623"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.833008 4.59287V6.9042C2.11167 7.74753 3.64367 8.3382 5.32501 8.5722C5.52634 7.8382 6.18834 7.3002 6.99301 7.3002C7.78501 7.3002 8.46034 7.8382 8.64834 8.57887C10.3363 8.34487 11.8743 7.7542 13.1597 6.9042V4.59287C13.1597 3.46353 12.251 2.5542 11.1217 2.5542H2.87767C1.74834 2.5542 0.833008 3.46353 0.833008 4.59287Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="hidden md:block">Portfolio</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="
              flex
              pl-8
              hover:bg-custom-dark-lighter-2
              py-6
              hover:border-l-4
              text-custom-dark-lighter
              hover:text-white
              font-firma-thin
            "
            to="/loans"
          >
            <span class="mr-9">
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.869141 9.31799C0.869141 9.31799 0.963807 10.4767 0.985807 10.842C1.01514 11.332 1.20447 11.8793 1.52047 12.2593C1.96647 12.798 2.49181 12.988 3.19314 12.9893C4.01781 12.9907 10.0145 12.9907 10.8391 12.9893C11.5405 12.988 12.0658 12.798 12.5118 12.2593C12.8278 11.8793 13.0171 11.332 13.0471 10.842C13.0685 10.4767 13.1631 9.31799 13.1631 9.31799"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66357 2.55307V2.30574C4.66357 1.49241 5.32224 0.83374 6.13557 0.83374H7.85691C8.66957 0.83374 9.32891 1.49241 9.32891 2.30574L9.32957 2.55307"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99642 10.1189V9.25623"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.833008 4.59287V6.9042C2.11167 7.74753 3.64367 8.3382 5.32501 8.5722C5.52634 7.8382 6.18834 7.3002 6.99301 7.3002C7.78501 7.3002 8.46034 7.8382 8.64834 8.57887C10.3363 8.34487 11.8743 7.7542 13.1597 6.9042V4.59287C13.1597 3.46353 12.251 2.5542 11.1217 2.5542H2.87767C1.74834 2.5542 0.833008 3.46353 0.833008 4.59287Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="hidden md:block">Loans</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="
              flex
              pl-8
              hover:bg-custom-dark-lighter-2
              py-6
              hover:border-l-4
              text-custom-dark-lighter
              hover:text-white
              font-firma-thin
            "
            to="/settings"
          >
            <span class="mr-9">
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8709 4.08237L12.456 3.36231C12.1049 2.75303 11.327 2.54284 10.7169 2.89244V2.89244C10.4264 3.06352 10.0799 3.11206 9.75364 3.02735C9.42739 2.94264 9.14824 2.73164 8.97773 2.44087C8.86804 2.25606 8.8091 2.04556 8.80687 1.83065V1.83065C8.81677 1.48611 8.68678 1.15223 8.44652 0.905072C8.20626 0.657917 7.8762 0.518535 7.53151 0.518677H6.6955C6.35782 0.518673 6.03405 0.653236 5.79584 0.892589C5.55763 1.13194 5.42462 1.45635 5.42624 1.79404V1.79404C5.41624 2.49124 4.84816 3.05117 4.15088 3.05109C3.93598 3.04886 3.72548 2.98992 3.54066 2.88023V2.88023C2.93055 2.53064 2.15258 2.74082 1.80153 3.3501L1.35607 4.08237C1.00544 4.69089 1.21277 5.46836 1.81984 5.8215V5.8215C2.21444 6.04932 2.45752 6.47035 2.45752 6.926C2.45752 7.38165 2.21444 7.80268 1.81984 8.0305V8.0305C1.21354 8.38125 1.00599 9.15684 1.35607 9.76353V9.76353L1.77712 10.4897C1.9416 10.7865 2.21757 11.0055 2.54397 11.0983C2.87036 11.191 3.22026 11.1499 3.51625 10.984V10.984C3.80722 10.8142 4.15396 10.7677 4.4794 10.8548C4.80483 10.9418 5.08199 11.1553 5.24928 11.4477C5.35897 11.6326 5.41791 11.8431 5.42014 12.058V12.058C5.42014 12.7623 5.99114 13.3333 6.6955 13.3333H7.53151C8.23349 13.3333 8.80351 12.766 8.80687 12.0641V12.0641C8.80524 11.7253 8.93908 11.4 9.17861 11.1604C9.41815 10.9209 9.74349 10.7871 10.0822 10.7887C10.2966 10.7944 10.5063 10.8531 10.6925 10.9596V10.9596C11.301 11.3102 12.0784 11.1029 12.4316 10.4958V10.4958L12.8709 9.76353C13.041 9.47162 13.0877 9.12397 13.0006 8.79754C12.9136 8.47112 12.7 8.19286 12.4072 8.0244V8.0244C12.1143 7.85593 11.9008 7.57768 11.8137 7.25125C11.7267 6.92483 11.7733 6.57717 11.9434 6.28527C12.054 6.09218 12.2141 5.93209 12.4072 5.8215V5.8215C13.0106 5.46855 13.2174 4.69562 12.8709 4.08847V4.08847V4.08237Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="7.11681"
                  cy="6.92589"
                  rx="1.75744"
                  ry="1.75744"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="hidden md:block">Settings</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'LayoutSideBarComponent',
  props: {
    customClass: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style scoped>
aside.open {
  max-width: 255px;
  width: 100%;
  min-height: 100vh;
  height: auto;
}

aside.closed {
  max-width: 255px;
  width: 100%;
  min-height: 100vh;
  height: auto;
}

.logo-wrapper {
  height: 68px;
}
</style>
