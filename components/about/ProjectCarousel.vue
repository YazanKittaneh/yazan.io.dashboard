<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CalendarIcon from '@radix-icons/vue/CalendarIcon'
import BriefcaseIcon from '@radix-icons/vue/BadgeIcon'
import type { ImageInfo, ProviderGetImage } from '@nuxt/image';
import type { PublicProps } from 'vue';
import type { AssetURLTagConfig } from 'vue/compiler-sfc';
import { projects, type DetailedProject } from '../about/data/projects';





const useIdFunction = () => useId()

export interface ProjectProps {
  projectName: string
}

const props = withDefaults(defineProps<{
  selectedProject?: string
}>(), {
  selectedProject: 'gosu'
})

const selectedProject = computed(() => {
  return projects.find(p => p.key === props.selectedProject) || projects[0]
})




const searchValue = ref('Project')
const debouncedSearch = refDebounced(searchValue, 250)

</script>

<template>
    <Card :class="cn('', $attrs.class ?? '')">
      <CardHeader>
        <CardTitle>{{ selectedProject.values.title }}</CardTitle>
        <CardDescription>{{ selectedProject.values.description }}</CardDescription>
      </CardHeader>
      <div class="gap-6 justify-center items-center p-8 rounded-lg md:grid lg:grid-cols-1 xl:grid-cols-1">

        <CardContent class="gap-4">
          <Carousel class="max-w-xs w">
            <CarouselContent>
              <CarouselItem v-for="(img, index) in selectedProject.values.images" :key="index">
                <div>
                  <Card>
                    <CardContent class="object-fill justify-center place-items-center p-6 aspect-square">
                      <nuxt-img class="object-fill rounded-md" :src="img" alt="Yazan Kittaneh Software Dev" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

            </CarouselContent>

            <CarouselPrevious class="flex" />
            <CarouselNext />
          </Carousel>

        </CardContent>

      </div>
    </Card>
</template>
