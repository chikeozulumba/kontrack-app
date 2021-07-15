<template>
  <div class="min-h-screen bg-auth flex flex-col pt-16 py-4 sm:px-6 lg:px-8">
    <div class="mb-8 sm:mx-auto sm:w-full sm:max-w-lg">
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
            Create account
          </h2>
          <p class="mt-2 text-sm text-gray-600 font-firma-light">
            Incredible job offers awaiting you.
          </p>
        </div>
        <ValidationObserver ref="register">
          <form method="POST" @submit.prevent="register">
            <div>
              <label
                for="name"
                class="
                  block
                  text-tiny
                  font-bold
                  text-grey-300
                  font-firma-medium
                "
              >
                Full name
              </label>
              <ValidationProvider v-slot="{ errors }" rules="required">
                <div class="relative text-gray-700 mt-1">
                  <input
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
                      border-2 border-grey-200
                      rounded-md
                      placeholder-gray-800
                      focus:outline-none
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
                    "
                    placeholder="Enter full name"
                    name="name"
                    type="name"
                    autocomplete="name"
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
                        d="M5 17C5 15.5855 5.5619 14.229 6.5621 13.2288C7.56229 12.2286 8.91885 11.6667 10.3333 11.6667C11.7478 11.6667 13.1044 12.2286 14.1046 13.2288C15.1048 14.229 15.6667 15.5855 15.6667 17H14.3333C14.3333 15.9391 13.9119 14.9217 13.1618 14.1716C12.4116 13.4214 11.3942 13 10.3333 13C9.27247 13 8.25505 13.4214 7.50491 14.1716C6.75476 14.9217 6.33333 15.9391 6.33333 17H5ZM10.3333 11C8.12333 11 6.33333 9.21 6.33333 7C6.33333 4.79 8.12333 3 10.3333 3C12.5433 3 14.3333 4.79 14.3333 7C14.3333 9.21 12.5433 11 10.3333 11ZM10.3333 9.66667C11.8067 9.66667 13 8.47333 13 7C13 5.52667 11.8067 4.33333 10.3333 4.33333C8.86 4.33333 7.66667 5.52667 7.66667 7C7.66667 8.47333 8.86 9.66667 10.3333 9.66667Z"
                        fill="#6D7D93"
                      />
                    </svg>
                  </div>
                </div>
                <span class="text-customRed-100 text-xs">{{ errors[0] }}</span>
              </ValidationProvider>
              <span
                v-if="serverErrors.name"
                class="text-customRed-100 text-xs"
                >{{ serverErrors.name[0] }}</span
              >
            </div>

            <div class="mt-5">
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
                      placeholder-gray-800
                      focus:outline-none
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
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
              <span
                v-if="serverErrors.email"
                class="text-customRed-100 text-xs"
                >{{ serverErrors.email[0] }}</span
              >
            </div>

            <div class="mt-5">
              <label
                for="phone"
                class="
                  block
                  text-tiny
                  font-bold
                  text-grey-300
                  font-firma-medium
                "
              >
                Phone number
              </label>
              <ValidationProvider
                v-slot="{ errors }"
                :rules="{ required: true, regex: /^\d+$/ }"
              >
                <div class="relative text-gray-700 mt-1">
                  <input
                    v-model="phone"
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
                      placeholder-gray-800
                      focus:outline-none
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
                    "
                    placeholder="Enter phone number"
                    name="phone"
                    type="tel"
                    autocomplete="phone"
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
              <span
                v-if="serverErrors.phone"
                class="text-customRed-100 text-xs"
                >{{ serverErrors.phone[0] }}</span
              >
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
                      appearance-none
                      block
                      w-full
                      py-4
                      px-4
                      pr-16
                      border border-grey-200
                      rounded-md
                      shadow-none
                      placeholder-gray-800
                      focus:outline-none
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
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
              <span
                v-if="serverErrors.password"
                class="text-customRed-100 text-xs"
                >{{ serverErrors.password[0] }}</span
              >
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
                Confirm password
              </label>
              <ValidationProvider v-slot="{ errors }" rules="required">
                <div class="relative text-gray-700 mt-1">
                  <input
                    v-model="passwordConfirmation"
                    class="
                      font-firma-light
                      text-small text-grey-300
                      pl-12
                      pr-16
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
                      focus:ring-regalRed-200
                      focus:border-regalRed-200
                    "
                    placeholder="Enter password"
                    name="passwordConfirmation"
                    :type="viewPasswordConfirmation ? 'text' : 'password'"
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
                    @click.prevent="
                      viewPasswordConfirmation = !viewPasswordConfirmation
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
                  bg-regalRed-200
                  hover:bg-regalRed-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-regalRed-200
                "
              >
                Register
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
                    text-regalRed-200
                    hover:text-regalRed-300
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
  name: 'Register',
  layout: 'default',
  middleware: ['guest'],
  data: () => ({
    password: null,
    passwordConfirmation: null,
    email: null,
    name: null,
    phone: null,
    viewPassword: false,
    viewPasswordConfirmation: false,
    serverErrors: {},
  }),
  methods: {
    async register() {
      try {
        this.serverErrors = {}
        const validate = await this.$refs.register?.validate()
        if (!validate) {
          return this.$toast({
            text: 'Please fill all required fields to proceed.',
            type: 'error',
          })
        }
        const { status } = await this.$axios.post('/auth/register', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        })

        let text = 'Registeration was not successful'
        let isRegistered = false
        if (status === 201) {
          text = 'Registeration successful'
          isRegistered = true
          this.$router.push('/login')
        }
        this.$toast({
          text,
          type: isRegistered ? 'info' : 'error',
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
          type: 'info',
          time: 4,
        })
      }
    },
  },
}
</script>
