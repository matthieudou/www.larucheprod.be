<template>
  <section class="relative h-screen overflow-hidden text-white">
    <video
      class="absolute w-full h-full bg-video hidden md:block"
      autoplay
      loop
      muted>
      <source
        src="https://res.cloudinary.com/ivmovies/video/upload/v1541952812/background.webm"
        type="video/webm">
      <source
        src="https://res.cloudinary.com/ivmovies/video/upload/v1541952812/background.mp4"
        type="video/mp4">
      <source
        src="https://res.cloudinary.com/ivmovies/video/upload/v1541952812/background.ogv"
        type="video/ogg">
    </video>
    <div class="abslolute banner__background--image w-full h-full"/>
    <div class="absolute pin h-screen flex flex-col justify-between">
      <!-- LOGO -->
      <div class=" flex-1 p-8">
        <nuxt-link to="/">
          <img
            class="h-16 w-16 lg:h-24 lg:w-24"
            src="@/assets/images/shared/logo-white.png"
            alt="Logo LaRucheProd">
        </nuxt-link>
      </div>

      <!-- MAIN CONTENT -->
      <div class="flex justify-center items-center">
        <div class="max-w-lg text-center font-light">
          <!-- TITLE -->
          <h1 class="font-hairline tracking-extra leading-loose text-5xl">LaRucheProd</h1>

          <!-- DESCRIPTION -->
          <p class="leading-loose text-lg">Belgium clipmakers and photographers based in Brussels.</p>
          <p class="leading-loose text-lg">music • event</p>

          <!-- BUTTONS -->
          <div class="flex mt-8 justify-center text-sm">
            <button
              class="bg-white rounded-full p-4 text-second mx-4 font-bold flex items-center icon-animation"
              v-scroll-to="'#projects'">
              <span class="mx-2">Our work</span>
              <svg
                class="fill-current w-4 h-4 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
            </button>
            <button
              class="p-4 rounded-full border-2 border-white text-white mx-4 font-bold hover:bg-white hover:text-second hover:border-0 flex items-center icon-animation"
              v-scroll-to="'footer'">
              <span class="mx-2">Contact</span>
              <svg
                class="fill-current w-4 h-4 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- SHARING -->
      <div class="-mb-1 flex-1 bg-linear p-8 flex items-end justify-end">
        <socials/>
      </div>
    </div>
  </section>
</template>

<script>
  import Socials from '@/components/shared/Socials'

  export default {
    mounted () {
      setTimeout(() => {
        this.$el.querySelector('video').play()
      }, 500)
    },
    components: {
      Socials
    }
  }
</script>

<style lang="scss" scoped>
.banner__background--image {
  background-position: center;
  background-size: cover;
  background-image: radial-gradient(rgba(black, .4), rgba(black, 0)), url('../../assets/images/shared/background.jpg');
}

.bg-video {
  object-fit: cover;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.bg-linear {
  background-image: linear-gradient(to bottom, rgba(#EEE, 0) 30%, rgba(#EEE, 1) 100%);
}

button:focus {
  outline:0;
}

.icon-animation {
  overflow: hidden;

  &:hover {
    svg {
      animation: fadeIn .2s;
      display: block;
    }
  }

  svg {
    display: none;
  }
}

@keyframes fadeIn {
  from {
    transform: translateX(-3rem);
  }
  to {
    transform: translateX(0);
  }
}
</style>
