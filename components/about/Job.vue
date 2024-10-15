

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import  CalendarIcon from '@radix-icons/vue/CalendarIcon'
import  BriefcaseIcon from '@radix-icons/vue/BadgeIcon'

import { jobs } from '../about/data/jobs'

// If you need to type the jobs, you can do so here:
// import type { Job } from '@/types/resume'
// const typedJobs: Job[] = jobs
</script>

<!-- JobList.vue -->
<template>
  <div class="space-y-6">
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
        <div class="flex items-center mb-4 text-sm text-muted-foreground">
          <CalendarIcon class="mr-2 w-4 h-4" />
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