<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CalendarIcon from '@radix-icons/vue/CalendarIcon'
import BriefcaseIcon from '@radix-icons/vue/BadgeIcon'

import { jobs, type Job } from '../about/data/jobs'

// If you need to type the jobs, you can do so here:
// import type { Job } from '@/types/resume'
// const typedJobs: Job[] = jobs
const typedJobs: Job[] = jobs;
</script>

<template>
  <Card :class="cn('', $attrs.class ?? '')">
    <div class="space-y-6">
      <CardHeader>
        <CardTitle>Yazan Kittaneh</CardTitle>
        <CardDescription>Full Stack</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div>
          <div v-for="(job, index) in typedJobs" :key="index"
            class="items-start grid grid-cols-[25px_minmax(0,1fr)] mb-4 last:mb-0 pb-4 last:pb-0">
            <span class="flex w-2 h-2 bg-sky-500 rounded-full translate-y-1" />
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
    </div>
  </Card>
</template>