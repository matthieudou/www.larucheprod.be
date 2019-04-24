<template>
  <footer class="pt-full p-8">
    <!-- LOGO -->
    <div class="text-center">
      <nuxt-link to="/">
        <img
          class="h-16 w-16"
          src="@/assets/images/shared/logo-black.png"
          alt="Logo LaRucheProd">
      </nuxt-link>
    </div>
    <!-- INFORMATIONS -->
    <div class="flex flex-col items-center justify-center mt-8">
      <!-- <div class="mb-4 mx-2">
        <a
          href="tel:+32471637117"
          class="text-white no-underline">
          <span class="ml-2">Tel: +32 471 63 71 17</span>
        </a>
      </div> -->
      <div class="mb-4 mx-2">
        <a
          href="mailto:larucheprodcollectif@gmail.be"
          class="text-black no-underline hover:text-second transition">
          <span class="ml-2">Info / Bookings / Requests: larucheprodcollectif@gmail.be</span>
        </a>
      </div>
    </div>
    <!-- SOCIAL SHARING -->
    <div class="text-center mt-8">
      <socials/>
    </div>
  </footer>
</template>

<script>
  import Socials from '@/components/shared/Socials'

  export default {
    components: {
      Socials
    }
  }
</script>
