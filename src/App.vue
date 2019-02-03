
<template>
  <b-container>
    <header>
      <TopNav :tagline="$store.state.tagline" />
    </header>
    <main>
      <b-row class="row-offcanvas row-offcanvas-left" :class="{active: isActive }">
        <b-col class="sidebar-offcanvas" cols="6" md="3">
          <SideBar :nav="$store.state.navigation" :url="url" />
        </b-col>
        <p class="float-left d-sm-block d-md-none pl-3">
          <button type="button" class="btn btn-pink btn-sm" data-toggle="offcanvas" @click="makeActive()">Toggle nav  &raquo;</button>
        </p>
        <b-col cols="12" md="9">
          <slot></slot>
        </b-col>
      </b-row>
    </main>
    <footer>
      <div><hr /><p class="mt-5">&copy; Copyright 2017-{{ year }} MK Turbo. All Rights Reserved.</p></div>
    </footer>
  </b-container>
</template>

<script>
import TopNav from './components/Global/TopNav.vue'
import SideBar from './components/Global/SideBar.vue'

export default {
  components: {
    TopNav,
    SideBar
  },
  data: function () {
    return {
      year: [],
      url: [],
      isActive: false
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.year = new Date().getFullYear()
      this.url = window.location.href.split('/').pop()
    },
    makeActive: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "./variables.styl"

html,
body
    overflow-x hidden

body
    padding-top 70px
    font-family "Work sans", Helvetica, Arial, sans-serif
    font-size 1rem
    font-weight 300
    line-height 1.4
    letter-spacing -0.02em
    color #292b2c
    background-color #fff

footer
    padding 30px 0

[v-cloak]
    display none

[pointer="true"], button
    cursor pointer

.text-gray
    color $gray !important

.jumbotron
    &.saleimage
        background url('../static/img/MKTURBO_PinkLogo150x30.png')
        color #fff
        background-size 840px
        text-shadow 3px 3px 10px #000000
        color #ffffff
        hr
            border-top 1px solid #ccc
        a
            text-shadow none

span
    &.sale
        text-decoration line-through

.modal
    display block

.modal-content, .modal-backdrop
    transition all .4s ease

.modal-backdrop
    opacity .75

.modal-enter
    opacity 0

.modal-leave-active
    opacity 0

.modal-enter .modal-content,
.modal-leave-active .modal-content
    -webkit-transform scale(1.1)
    transform scale(1.1)
    transition all .3s ease

h1.text-uppercase, h2.text-uppercase, h3.text-uppercase, h4.text-uppercase, h5.text-uppercase, h6.text-uppercase
    letter-spacing .15em

.display-1, .display-2, .display-3, .display-4
    letter-spacing -0.03em

.list-unstyled-borders
    li
        border-top 1px solid #BEC8CE
        &:last-child
            border-bottom 1px solid #BEC8CE

.extra
    font-size 85%
    letter-spacing .15em
    color #a9aebd
    text-transform uppercase

.dollar
    font-size 125%

.blockquote
    border-left .25rem solid $pink
    strong
        color $pink !important
        letter-spacing -0.04em

.blockquote-reverse
    border-right .25rem solid $pink
    border-left 0

.text-pink
    color $pink !important

a.text-pink:focus, a.text-pink:hover
    color #e82a9b !important

.btn-outline-pink
    color $pink
    background-image none
    background-color transparent
    border-color $pink
    &:hover
        color #fff
        background-color $pink
        border-color $pink

.btn-outline-pink:focus, .btn-outline-pink.focus
    -webkit-box-shadow 0 0 0 2px rgba(217, 83, 79, 0.5)
    box-shadow 0 0 0 2px rgba(217, 83, 79, 0.5)

.btn-outline-pink.disabled, .btn-outline-pink:disabled
    color $pink
    background-color transparent

.btn-outline-pink:active, .btn-outline-pink.active,
.show > .btn-outline-pink.dropdown-toggle
    color #fff
    background-color $pink
    border-color $pink

.btn-pink
    color #fff
    background-color $pink
    border-color $pink
    &:hover
        color #fff
        background-color #fd2ea9
        border-color #e82a9b

.btn-pink:focus, .btn-pink.focus
    -webkit-box-shadow 0 0 0 2px rgba(2, 117, 216, 0.5)
    box-shadow 0 0 0 2px rgba(2, 117, 216, 0.5)

.btn-pink.disabled, .btn-pink:disabled
    background-color $pink
    border-color $pink

.btn-pink:active, .btn-pink.active,
.show > .btn-pink.dropdown-toggle
    color #fff
    background-color #a20b65
    background-image none
    border-color #ecb3d5

.list-group-item-action:focus, .list-group-item-action:hover
    color #fff
    text-decoration none
    background-color #292b2c
    -webkit-transition all 0.25s ease-in-out
    -o-transition all 0.25s ease-in-out
    transition all 0.25s ease-in-out

.list-group-item
    &.active
        z-index 2
        color #fff
        background-color $pink
        border-color #ecb3d5

[id^=carousel-selector-]
    cursor pointer

div
    &.carousel-caption
        text-shadow 2px 2px 5px #000000
        background rgba(0,0,0,0.5)
        p
            text-shadow 1px 1px 1px #000000

</style>
