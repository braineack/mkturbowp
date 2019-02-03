<template>
    <TopNav :tagline="tagline" />
</template>

<script>
import TopNav from 'components/Global/TopNav'

export default {
  components: {
    TopNav
  },
  data: () => ({
    tagline: 'Make your miata go from Meow to RAWR!'
  })
}
</script>
