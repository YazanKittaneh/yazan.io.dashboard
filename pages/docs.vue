<template>
    <div
      class="px-4 py-6 md:px-8"
      :class="[config.main.padded && 'container']"
    >
      <ContentRenderer
        :key="page._id"
        :value="page"
      />
    </div>
  </template>
<script setup lang="ts">
import { useConfig } from '~/composables/useConfig';



const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()

onUnmounted(() => backgroundIsWhite(false))
const config = useConfig();
const { page } = useContent()

useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
});
</script>
