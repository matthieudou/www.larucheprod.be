<template>
  <section id="projects">
    <!-- CONTAINER -->
    <div class="flex flex-wrap">
      <!-- PROJECTS -->
      <nuxt-link
        class="w-full md:w-1/2 lg:w-1/3 px-2 pb-2 md:pb-4"
        :to="`/projects/${project.slug}`"
        v-for="project in projects"
        :key="project.slug"
      >
        <div
          class="square relative cursor-pointer"
          :style="`background-image: url(${imageUrlFor(project.thumbnail).width(600)})`"
        >
          <div class="absolute pin flex items-center justify-center content p-4">
            <h2 class="bg-main text-black py-2 px-4 rounded-full font-light text-base">{{ project.title }}</h2>
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  import imageUrlBuilder from '@sanity/image-url'

  export default {
    props: {
      projects: {
        default: () => ([]),
        type: Array
      }
    },

    methods: {
      imageUrlFor (source) {
        return imageUrlBuilder(this.$sanity).image(source)
      }
    }
  }
</script>

<style lang="scss" scoped>
.square {
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
}

.content {
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0));
  transition: all .2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, .4);
  }

  & h2 {
    text-align: center;
    transform: translateY(20px);
    opacity: 0;
    transition: all .2s ease-in-out;
  }

  &:hover h2 {
    text-align: center;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
