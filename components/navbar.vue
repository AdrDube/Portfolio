
<script setup>

const colorMode = useColorMode()

const toggleTheme = () => {
  console.log(colorMode.preference)
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
  }

</script>

<template>
  <div class="center fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <nav data-collapsed="false" class="relative flex gap-1.5 [&amp;>div]:min-w-0 items-center justify-between backdrop-blur-sm rounded-full px-2 sm:px-4 border shadow-lg shadow-neutral-950/5 dark:bg-slate-800" aria-label="Main" data-orientation="horizontal" dir="ltr" data-reka-navigation-menu="">
        <div>
         <ul class="isolate min-w-0 flex items-center" data-orientation="horizontal">
            <li data-menu-item="" class="min-w-0 py-2">
                <a href="/"  aria-current="page" class="group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-inverted before:inset-x-px before:inset-y-0 text-highlighted px-2 py-1">
                    <span class="iconify i-lucide:home shrink-0 size-5 text-highlighted group-data-[state=open]:text-highlighted hidden" aria-hidden="true" style=""></span>
                    <span class="truncate">Home</span>
                </a>
            </li>
            <li data-menu-item="" class="min-w-0 py-2">
                <a href="/projects"  aria-current="page" class="group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-inverted before:inset-x-px before:inset-y-0 text-highlighted px-2 py-1">
                    <span class="iconify i-lucide:home shrink-0 size-5 text-highlighted group-data-[state=open]:text-highlighted hidden" aria-hidden="true" style=""></span>
                    <span class="truncate">Projects</span>
                </a>
            </li>
            <li data-menu-item="" class="min-w-0 py-2">
                <a href="/personal" aria-current="page" class="group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-inverted before:inset-x-px before:inset-y-0 text-highlighted px-2 py-1">
                    <span class="iconify i-lucide:home shrink-0 size-5 text-highlighted group-data-[state=open]:text-highlighted hidden" aria-hidden="true" style=""></span>
                    <span class="truncate">Personal Info</span>
                </a>
            </li>
            <li data-menu-item="" class="min-w-0 py-2">
                <a href="/contact" aria-current="page" class="group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-inverted before:inset-x-px before:inset-y-0 text-highlighted px-2 py-1">
                    <span class="iconify i-lucide:home shrink-0 size-5 text-highlighted group-data-[state=open]:text-highlighted hidden" aria-hidden="true" style=""></span>
                    <span class="truncate">Contact</span>
                </a>
            </li>
         </ul>
        </div>

        <button  @click="toggleTheme" type="button" aria-label="Switch to dark mode">
            <span v-if="colorMode.preference === 'light'">
                <Icon name=line-md:sun-rising-loop />
            </span>
            <span v-else>
                <Icon name="line-md:moon-rising-alt-loop" />
            </span>

  
        </button>
    </nav>
  </div>
</template>

         
