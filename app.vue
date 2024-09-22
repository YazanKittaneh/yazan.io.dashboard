<script setup lang="ts">
import { Sonner } from '@/components/ui/sonner'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : '#ffffff')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'Yazan\'s Dashboard'
const description = 'Welcome to my dashboard. Feel free to look around. It\'s an ongoing project to consolidate my work and tools.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://nuxt-shadcn-dashboard.vercel.app/social-card.png',
  twitterImage: 'https://nuxt-shadcn-dashboard.vercel.app/social-card.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout vaul-drawer-wrapper>
    <NuxtPage />
  </NuxtLayout>

  <Toaster />
  <Sonner class="pointer-events-auto" />
</template>
