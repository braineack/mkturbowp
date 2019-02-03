<template>
<b-navbar type="dark" variant="dark" fixed="top">
  <b-navbar-brand href="index.html">
    <img src="static/img/MKTURBO_PinkLogo150x30.png" class="d-inline-block align-top" alt="MKTurbo Logo"/>
    <span class="pl-3 d-none d-sm-inline">{{tagline}}</span>
  </b-navbar-brand>
</b-navbar>
</template>

<script>
export default {
  props: {
    tagline: {
      type: String,
      required: true
    }
  }
}
</script>
