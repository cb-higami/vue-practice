<template>
  <div>
    <nav style="width: 700px, margin:auto;, padding-top: 50px">
      <!-- <a href="/">home</a>
      <br>
      <a href="/users">users</a> -->
      <router-link to="/"
        active-class="link--active"
        exact
      >home</router-link>
      <br>
      <router-link to="/users/11"
        active-class="link--active"
        exact
      >users</router-link>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.link--active{
  font-size: 20px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active ,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>