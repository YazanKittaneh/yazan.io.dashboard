<script setup lang="ts">
import { jobs, type Job } from '~/components/about/data/jobs';


const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()
onUnmounted(() => backgroundIsWhite(false))

const typedJobs: Job[] = jobs

const loadGosuImages = (): string[] => {
  const context = useAsyncData('gosuImages', () => useStorage().getItem('public/gosu'))
  console.log("context: ", context)
  return Object.keys(context).map(path => path.split('/').pop() || '')
}

const gosuImages: string[] = loadGosuImages()

</script>

<template>
    <div class="md:hidden">
        <VPImage alt="Cards" width="1280" height="1214" class="block" :image="{
            dark: '/examples/cards-dark.png',
            light: '/examples/cards-light.png',
        }" />
    </div>

    <div class="justify-center items-start gap-6 md:grid lg:grid-cols-2 xl:grid-cols-3 p-8 rounded-lg">
        <div class="items-start gap-6 grid col-span-3 lg:col-span-1">
            <AboutHeadingCard />

            <Card :class="cn('', $attrs.class ?? '')">
                <CardHeader>
                    <CardTitle>Timeline</CardTitle>
                    <CardDescription>Follow my journey.</CardDescription>
                </CardHeader>
                <CardContent class="gap-4 grid">
                    <div>
                        <div v-for="(job, index) in typedJobs" :key="index"
                            class="items-start grid grid-cols-[25px_minmax(0,1fr)] mb-4 last:mb-0 pb-4 last:pb-0">
                            <span class="flex bg-sky-500 rounded-full w-2 h-2 translate-y-1" />
                            <div class="space-y-1">
                                <p class="font-medium text-sm leading-none">
                                    {{ job.company }}
                                </p>
                                <p class="text-muted-foreground text-sm">
                                    {{ job.position }}d
                                </p>
                                <p class="text-muted-foreground text-sm">
                                    {{ job.endDate }}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <!--V  Speific Projects V-->
        <div class="items-end gap-6 grid col-span-2 lg:col-span-">
            <Card :class="cn('w-[380px]', $attrs.class ?? '')">
                <CardHeader>
                    <CardTitle>Gosu.tools</CardTitle>
                    <CardDescription>Contract - Project aquired</CardDescription>
                </CardHeader>
                <CardContent class="gap-4 grid">
                    <Carousel class="relative max-w-xs w">
                        <CarouselContent>
                            <CarouselItem v-for="(img, index) in gosuImages" :key="index">
                                <div class="p-1">
                                    <Card>
                                        <CardContent class="flex justify-center items-center p-6 aspect-square">
                                            <NuxtImg src=img></NuxtImg>
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
    <div class="justify-center items-start gap-9 hidden md:grid lg:grid-cols-1 xl:grid-cols-3 col-span-4 p-8 rounded-lg">
            <Card v-for="job in jobs" :key="job.company" class="mb-6">
                <CardHeader>
                    <CardTitle class="flex justify-between items-center">
                        <span>{{ job.position }}</span>
                        <Badge v-if="job.type" variant="secondary">{{ job.type }}</Badge>
                    </CardTitle>
                    <CardDescription class="flex items-center">
                        <BriefcaseIcon class="mr-2 w-4 h-4" />
                        {{ job.company }}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center mb-4 text-muted-foreground text-sm">
                        <CalendarIcon class="mr-2 w-4 h-4" />
                        {{ job.startDate }} - {{ job.endDate || 'Present' }}
                    </div>
                    <h4 class="mb-2 font-semibold">Achievements:</h4>
                    <ul class="mb-4 pl-5 list-disc">
                        <li v-for="(achievement, index) in job.achievements" :key="index" class="mb-1">
                            {{ achievement }}
                        </li>
                    </ul>
                    <h4 class="mb-2 font-semibold">Technologies:</h4>
                    <div class="flex flex-wrap gap-2">
                        <Badge v-for="(tech, index) in job.technologies" :key="index" variant="outline">
                            {{ tech }}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>

</template>