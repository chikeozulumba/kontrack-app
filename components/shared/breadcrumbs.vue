<template>
  <div :class="wrapperClass">
    <p v-for="(link, i) in links" :key="i">
      <a
        :class="!link.active ? linkClass : activeLinkClass"
        @click.prevent="() => handleClicked(link)"
        >{{ link.name }}</a
      >
      <span v-if="!link.active" :class="seperatorClass">{{ seperator }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    seperator: {
      type: String,
      default: '>',
    },
    seperatorClass: {
      type: String,
      default: 'font-firma-light text-sm',
    },
    linkClass: {
      type: String,
      default:
        'font-firma-light text-sm cursor-pointer hover:underline text-gray-600',
    },
    activeLinkClass: {
      type: String,
      default: 'font-firma-medium text-sm text-regalRed-300',
    },
    wrapperClass: {
      type: String,
      default: 'flex text-gray-500 gap-x-2 lowercase opacity-90',
    },
  },
  methods: {
    handleClicked({ path, active = false, mode }) {
      if (!active && path) {
        return this.$router[mode || 'push'](path)
      }
    },
  },
}
</script>
