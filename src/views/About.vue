<template>
  <q-page padding>
    <p>This is an about page</p>
    <router-link :to="{name: 'home'}">
      home
    </router-link>
    <rx-example></rx-example>
  </q-page>
</template>

<script>
import RxExample from '@/components/RxExample.vue';

export default {
  name: 'PageAbout',
  components: { RxExample },
};
</script>
