<template>
  <div class="bg-main min-h-screen text-black font-sans font-light flex flex-col">
    <nuxt class="flex-1"/>
    <app-footer/>
  </div>
</template>

<script>
  import AppFooter from '@/components/shared/AppFooter'

  export default {
    components: {
      AppFooter
    }
  }
</script>
