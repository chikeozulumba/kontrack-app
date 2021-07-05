<template>
  <div class="col-span-3 grid h-fit">
    <header class="grid justify-between">
      <legend class="font-firma-semibold md:text-xl text-xl">
        Your Notifications
      </legend>
    </header>

    <section class="grid grid-cols-12 gap-8 md:mt-8">
      <div class="col-span-12">
        <div class="rounded-full w-fit relative">
          <img
            ref="avatar"
            class="h-36 w-36 rounded-full"
            src="/images/avatar-default.svg"
          />
          <label
            class="
              absolute
              z-10
              w-36
              h-36
              rounded-full
              bg-blue-50
              opacity-0
              flex
              items-center
              justify-center
              top-0
              cursor-pointer
            "
            for="avatar"
            @mouseenter.prevent="modifyAvatar"
            @mouseleave.prevent="($evt) => modifyAvatar($evt, 'leave')"
          >
            <span
              class="
                uppercase
                text-xs
                cursor-pointer
                text-center text-custom-blue-3
              "
              >Change profile picture</span
            >
          </label>
          <input
            id="avatar"
            type="file"
            class="hidden"
            name="avatar"
            accept="image/*"
            @change.prevent="handleImageUpload"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfilePageBio',
  methods: {
    handleImageUpload($evt) {
      const tgt = $evt.target
      const files = tgt.files

      if (FileReader && files && files.length > 0) {
        const fr = new FileReader()
        fr.onload = () => {
          this.$refs.avatar.style.objectFit = 'cover'
          this.$refs.avatar.style.backgroundSize = 'cover'
          this.$refs.avatar.src = fr.result
          const navAvatar = document.getElementById('nav-avatar')
          if (navAvatar) {
            navAvatar.style = 'cover'
            navAvatar.backgroundSize = 'cover'
            navAvatar.src = fr.result
          }
          this.avatar = files[0]
          this.$toast({
            text: 'Profile picture changed',
            time: 3,
            position: 'bottom',
            type: 'success',
          })
        }
        fr.readAsDataURL(files[0])
      }
    },
    modifyAvatar(e, mode = 'enter') {
      if (mode === 'enter') {
        e.target.style.opacity = '0.8'
      }
      if (mode === 'leave') {
        e.target.style.opacity = '0'
      }
    },
  },
}
</script>
