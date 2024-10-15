<script setup lang="ts">
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-vue-next'

const downloadPDF = () => {
  // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
  const pdfUrl = 'resume.pdf'
  window.open(pdfUrl, '_blank')
}

</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="flex flex-wrap gap-2 justify-between items-center">
      <h2 class="text-3xl font-bold tracking-tight">
        Yazan's Dash
      </h2>
      <div class="flex items-center space-x-2">
        <Button @click="downloadPDF">Download Resume</Button>
      </div>
    </div>
    <main class="flex flex-col flex-1 gap-4 md:gap-8">
      <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2 md:gap-8">
        <Card>
          <CardHeader class="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle class="text-sm font-medium">
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              7 Years
            </div>
            <p class="text-xs text-muted-foreground">
              +16.6667% from last year 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle class="text-sm font-medium">
              Subscriptions
            </CardTitle>
            <Users class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              +2350
            </div>
            <p class="text-xs text-muted-foreground">
              +180.1% from last month 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle class="text-sm font-medium">
              Sales
            </CardTitle>
            <CreditCard class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              +12,234
            </div>
            <p class="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle class="text-sm font-medium">
              Active Now
            </CardTitle>
            <Activity class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              +573
            </div>
            <p class="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 md:gap-8">
        <Card class="xl:col-span-2">
          <CardHeader class="flex flex-row items-center">
            <div class="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button as-child size="sm" class="gap-1 ml-auto">
              <a href="#">
                View All
                <ArrowUpRight class="w-4 h-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead class="hidden xl:table-column">
                    Type
                  </TableHead>
                  <TableHead class="hidden xl:table-column">
                    Status
                  </TableHead>
                  <TableHead class="hidden xl:table-column">
                    Date
                  </TableHead>
                  <TableHead class="text-right">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Liam Johnson
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-23
                  </TableCell>
                  <TableCell class="text-right">
                    $250.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Olivia Smith
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Refund
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-24
                  </TableCell>
                  <TableCell class="text-right">
                    $150.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Noah Williams
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Subscription
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-25
                  </TableCell>
                  <TableCell class="text-right">
                    $350.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Emma Brown
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-26
                  </TableCell>
                  <TableCell class="text-right">
                    $450.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Liam Johnson
                    </div>
                    <div class="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-27
                  </TableCell>
                  <TableCell class="text-right">
                    $550.00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <AboutTimeline />

      </div>
    </main>
  </div>
</template>
