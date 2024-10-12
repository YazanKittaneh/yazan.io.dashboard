<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import { ConfigProvider } from 'radix-vue'
import { cn } from '~/lib/utils'
import type { LinkProp } from '~/components/mail/Nav.vue'
import type { Job, JobType } from './data/jobs';


const useIdFunction = () => useId()

interface JobProps {
  jobs?: JobType[]
}

const selectedBlog = ref<string | undefined>()
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

</script>

<template>
    <div class="md:hidden">
        <VPImage alt="Cards" width="1280" height="1214" class="block" :image="{
            dark: '/examples/cards-dark.png',
            light: '/examples/cards-light.png',
        }" />
    </div>

    <div class="items-start justify-center gap-6 p-8 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div class="grid items-start col-span-3 gap-6 lg:col-span-1">
            <AboutHeadingCard />

            <Card :class="cn('', $attrs.class ?? '')">
                <CardHeader>
                    <CardTitle>Timeline</CardTitle>
                    <CardDescription>Follow my journey.</CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                    <div>
                        <div v-for="(job, index) in job" :key="index"
                            class="items-start grid grid-cols-[25px_minmax(0,1fr)] mb-4 last:mb-0 pb-4 last:pb-0">
                            <span class="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" />
                            <div class="space-y-1">
                                <p class="text-sm font-medium leading-none">
                                    {{ job.company }}
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    {{ job.position }}d
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    {{ job.endDate }}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        
        <!--V  Speific Projects V-->
        <div class="grid items-end col-span-2 gap-6 lg:col-span-">
            <Card :class="cn('w-[380px]', $attrs.class ?? '')">
                <CardHeader>
                    <CardTitle>Gosu.tools</CardTitle>
                    <CardDescription>Contract - Project aquired</CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                    <Carousel class="relative max-w-xs w">
                        <CarouselContent>
                            <CarouselItem v-for="(_, index) in 5" :key="index">
                                <div class="p-1">
                                    <Card>
                                        <CardContent class="flex items-center justify-center p-6 aspect-square">
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
    <div class="items-start justify-center hidden col-span-4 p-8 rounded-lg gap-9 md:grid lg:grid-cols-1 xl:grid-cols-3">
            <Card v-for="job in jobs" :key="job.company" class="mb-6">
                <CardHeader>
                    <CardTitle class="flex items-center justify-between">
                        <span>{{ job.position }}</span>
                        <Badge v-if="job.type" variant="secondary">{{ job.type }}</Badge>
                    </CardTitle>
                    <CardDescription class="flex items-center">
                        <BriefcaseIcon class="w-4 h-4 mr-2" />
                        {{ job.company }}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center mb-4 text-sm text-muted-foreground">
                        <CalendarIcon class="w-4 h-4 mr-2" />
                        {{ job.startDate }} - {{ job.endDate || 'Present' }}
                    </div>
                    <h4 class="mb-2 font-semibold">Achievements:</h4>
                    <ul class="pl-5 mb-4 list-disc">
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