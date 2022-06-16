<template>
  <div class="flex flex-row mx-auto my-3 space-x-3">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="mx-3 font-medium text-gray-600 hover:text-blue-600 cursor-pointer"
      >{{ locale.code }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style lang="scss" scoped></style>
