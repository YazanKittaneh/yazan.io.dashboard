<script setup lang="ts">

const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()

onUnmounted(() => backgroundIsWhite(false))
</script>

<template>

</template>
