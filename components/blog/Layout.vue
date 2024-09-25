<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import { ConfigProvider } from 'radix-vue'
import { blog, type Blog } from './data/blogs'
import { cn } from '~/lib/utils'
import type { LinkProp } from '~/components/mail/Nav.vue'

const props = withDefaults(defineProps<BlogProps>(), {
  defaultCollapsed: false,
  defaultLayout: () => [18, 82],
})

const useIdFunction = () => useId()

interface BlogProps {
  accounts: {
    label: string
    email: string
    icon: string
  }[]
  blogs: Blog[]
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

const isCollapsed = ref(props.defaultCollapsed)
const selectedBlog = ref<string | undefined>()
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredBlogList = computed(() => {
  let output: Blog[] = []
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = props.blogs
  }
  else {
    output = props.blogs.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.title.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
        || item.labels.includes(debouncedSearch.value)
    })
  }

  return output
})

const unreadBlogList = computed(() => filteredBlogList.value.filter(item => !item.read))

const selectedBlogData = computed(() => props.blogs.find(item => item.id === selectedBlog.value))

const links: LinkProp[] = [
  {
    title: 'All',
    label: blog.length.toString(),
    icon: 'lucide:files',
    variant: 'default',
  },
  {
    title: 'Coding',
    label: '83',
    icon: 'lucide:code',
    variant: 'ghost',
  },
  {
    title: 'Real Estate',
    label: '83',
    icon: 'lucide:house',
    variant: 'ghost',
  },
  {
    title: 'Palestine',
    label: '83',
    icon: 'circle-flags:ps',
    variant: 'ghost',
  },
]


function onCollapse() {
  isCollapsed.value = true
}

function onExpand() {
  isCollapsed.value = false
}
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <TooltipProvider :delay-duration="0">
      <ResizablePanelGroup
        id="resize-panel-group-1"
        direction="horizontal"
        class="h-full max-h-[calc(100dvh-53px-3rem)] items-stretch"
      >
        <ResizablePanel
          id="resize-panel-1"
          :default-size="defaultLayout[0]"
          :collapsed-size="navCollapsedSize"
          collapsible
          :min-size="15"
          :max-size="20"
          :class="cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')"
          @expand="onExpand"
          @collapse="onCollapse"
        >
          <Separator />
          <MailNav
            :is-collapsed="isCollapsed"
            :links="links"
          />
          <Separator />
        </ResizablePanel>
        <ResizableHandle id="resize-handle-1" with-handle />
        <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
          <BlogDisplay v-if="selectedBlogData" :blog="selectedBlogData" @close="selectedBlog = ''" />
          <Tabs v-else default-value="all">
            <div class="flex items-center px-4 py-2">
              <h1 class="text-xl font-bold">
                Blog
              </h1>
              <TabsList class="ml-auto">
                <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200">
                  All Posts
                </TabsTrigger>
                <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200">
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div class="relative">
                  <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                  <Input v-model="searchValue" placeholder="Search" class="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" class="m-0">
              <BlogList v-model:selected-blog="selectedBlog" :items="filteredBlogList" />
            </TabsContent>
            <TabsContent value="unread" class="m-0">
              <BlogList v-model:selected-blog="selectedBlog" :items="unreadBlogList" />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  </ConfigProvider>
</template>
