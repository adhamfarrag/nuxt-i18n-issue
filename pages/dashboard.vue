<template>
  <div class="h-screen flex items-center justify-center">
    <NuxtLink :to="localePath('/')">Homeage</NuxtLink>
  </div>
</template>

<script>
export default {
  nuxtI18n: false,
  name: 'DashboardPage',
}
</script>
