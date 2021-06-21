<template>
  <svg
    :class="[customClass]"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="8" fill="#3554D1" />
    <circle cx="12" cy="12" r="6" fill="white" />
  </svg>
</template>

<script>
export default {
  name: 'IconOnlyLogo',
  props: {
    customClass: {
      type: String,
      default: '',
    },
  },
}
</script>
