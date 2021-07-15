<template>
  <div class="relative">
    <div class="fixed w-full z-10 text-white mb-16">
      <div class="mx-auto px-4 sm:px-6">
        <div
          class="
            flex
            justify-between
            items-center
            py-6
            md:justify-end md:space-x-10
          "
        >
          <a class="font-firma-light">Terms of use</a>
        </div>
      </div>
    </div>
    <main class="lg:relative">
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
.bg-auth {
  background-image: url('/images/auth-bg.svg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
