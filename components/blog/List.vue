<script lang="ts" setup>
import { formatDistanceToNow } from 'date-fns'
import type { Blog } from './data/blogs'
import { cn } from '@/lib/utils'

interface BlogListProps {
  items: Blog[]
}

defineProps<BlogListProps>()
const selectedBlog = defineModel<string>('selectedBlog', { required: false })

function getBadgeVariantFromLabel(label: string) {
  if (['work'].includes(label.toLowerCase()))
    return 'default'

  if (['personal'].includes(label.toLowerCase()))
    return 'outline'

  return 'secondary'
}
</script>

<template>
  <ScrollArea class="h-[calc(100dvh-72px-56px-3rem-53px)] flex">
    <div class="flex flex-1 flex-col gap-2 p-4 pt-0">
      <TransitionGroup name="list" appear>
        <button
          v-for="item of items"
          :key="item.id"
          :class="cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
            selectedBlog === item.id && 'bg-muted',
          )"
          @click="selectedBlog = item.id"
        >
          <div class="w-full flex flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ item.name }}
                </div>
              </div>
              <div
                :class="cn(
                  'ml-auto text-xs',
                  selectedBlog === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )"
              >
                {{ formatDistanceToNow(new Date(item.date), { addSuffix: true }) }}
              </div>
            </div>

            <div class="text-xs font-medium">
              {{ item.title }}
            </div>
          </div>
          <div class="line-clamp-2 text-xs text-muted-foreground">
            {{ item.excerpt }}
          </div>
          <div class="flex items-center gap-2">
            <Badge v-for="label of item.labels" :key="label" :variant="getBadgeVariantFromLabel(label)">
              {{ label }}
            </Badge>
          </div>
        </button>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}
</style>
