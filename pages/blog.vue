<script setup lang="ts">
import { blog, accounts } from '~/components/blog/data/blogs';

const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()
const isMobile = useIsMobile();

onUnmounted(() => backgroundIsWhite(false))
</script>

<template>
  <BlogLayout
    :accounts="accounts"
    :blogs="blog"
    :nav-collapsed-size="4",
    :default-collapsed=isMobile
  />
</template>
z