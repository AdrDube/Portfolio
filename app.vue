<template>
<section class="min-h-screen dark:bg-gray-950">
  <div class="flex flex-col min-h-screen xl:w-6xl xl:justify-self-center xl:border-x-[0.25px] px-5">
    <main
      class="flex flex-col flex-grow">
      <Navbar />
      <NuxtPage/>
    </main>
    <footer class="flex justify-between items-center w-full p-7">
      <div>
        © 2025 Adriel Dube
      </div>  

      <div class="flex space-x-1">
        <a href="https://github.com/AdrDube">
          <Icon name="mdi:github" size="25px" />
        </a>
        <a href="tel:6502483544">
          <Icon name="line-md:phone-call-loop" size="25px" />
        </a>

        <a href="https://www.linkedin.com/in/adrieltdube/">
          <Icon name="mingcute:linkedin-line" size="25px" />
        </a>

        <a href="mailto:adrtdube@gmail.com">
          <Icon name="lets-icons:e-mail" size="25px" />
        </a>
      </div>
    </footer>

  </div>
</section>
</template>

