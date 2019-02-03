<template>
<b-list-group>
  <b-list-group-item v-for="item in nav" class="border-0 rounded my-1" :key="item.key" :active="item.url == url ? true : false" :href="item.url">{{item.link}}</b-list-group-item>
</b-list-group>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
@media screen and (max-width: 767px)
    .row-offcanvas
        position relative
        -webkit-transition all .25s ease-out
        -o-transition all .25s ease-out
        transition all .25s ease-out
    .row-offcanvas-right
        right 0
        &.active
            right 50%
    .row-offcanvas-left
        left 0
        &.active
            left 50%
    .sidebar-offcanvas
        position absolute
        top 0
        width 50%

.row-offcanvas-right
    @media screen and (max-width: 767px)
        .sidebar-offcanvas
            right -100%
    &.active
        @media screen and (max-width: 767px)
            .sidebar-offcanvas
                right -50%

.row-offcanvas-left
    @media screen and (max-width: 767px)
        .sidebar-offcanvas
            left -100%
    &.active
        @media screen and (max-width: 767px)
            .sidebar-offcanvas
                left -50%
</style>
