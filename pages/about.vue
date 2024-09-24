<script setup lang="ts">

const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()

onUnmounted(() => backgroundIsWhite(false))

const jobs = [
    {
        title: 'TechMade Co.',
        description: '2021 - Now',
    },
    {
        title: 'Subletinn',
        description: '2019 - 2021',
    },
    {
        title: 'Outcome Health',
        description: '2017 - 2019',
    },
]
</script>

<template>
    <div class="md:hidden">
        <VPImage alt="Cards" width="1280" height="1214" class="block" :image="{
            dark: '/examples/cards-dark.png',
            light: '/examples/cards-light.png',
        }" />
    </div>

    <div class="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Yazan Kittaneh</CardTitle>
                    <CardDescription>Full Stack</CardDescription>
                </CardHeader>
            </Card>
        </div>
        <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
            <Card :class="cn('w-[380px]', $attrs.class ?? '')">
                <CardHeader>
                    <CardTitle>Timeline</CardTitle>
                    <CardDescription>Follow my journey.</CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                    <div>
                        <div v-for="(job, index) in jobs" :key="index"
                            class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0">
                            <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div class="space-y-1">
                                <p class="text-sm font-medium leading-none">
                                    {{ job.title }}
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    {{ job.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div class="col-span-2 grid items-start gap-6 lg:col-span-">
            <Card :class="cn('w-[380px]', $attrs.class ?? '')">
                <CardHeader>
                    <CardTitle>Gosu.tools</CardTitle>
                    <CardDescription>Contract - Project aquired</CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                    <Carousel class="relative w max-w-xs">
                        <CarouselContent>
                            <CarouselItem v-for="(_, index) in 5" :key="index">
                                <div class="p-1">
                                    <Card>
                                        <CardContent class="flex aspect-square items-center justify-center p-6">
                                            <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </CardContent>
            </Card>
        </div>


    </div>
</template>