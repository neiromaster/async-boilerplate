<template>
  <div id="app">
    <transition
      appear
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="stylus">
.fade
  &-enter-active, &-leave-active
    transition: opacity .5s

  &-enter, &-leave-to
    opacity: 0
</style>
