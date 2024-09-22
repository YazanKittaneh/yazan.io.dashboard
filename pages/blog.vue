<script setup lang="ts">
import { blogs, accounts } from '~/components/blog/data/blogs';

const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()

onUnmounted(() => backgroundIsWhite(false))
</script>

<template>
  <BlogLayout
    :accounts="accounts"
    :blogs="blogs"
    :nav-collapsed-size="4"
  />
</template>
