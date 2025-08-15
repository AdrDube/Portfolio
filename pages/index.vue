<script setup>

const titles = [
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Open Source Contributor",
  "Thanks for stopping by..."
]

const intro = "Hey, I'm Adriel Dube"
const hello = ref("")
const title = ref("")
let index = 0

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

onMounted(async () => {
  for (let i = 0; i <= intro.length; i++) {
      hello.value = intro.slice(0, i)
      await sleep(100)
  }

  await sleep(1000)
  while (index < titles.length) {
    const current = titles[index]

    // Type in
    for (let i = 0; i <= current.length; i++) {
      title.value = current.slice(0, i)
      await sleep(150)
    }

    await sleep(2000) // pause after full title
    index = index + 1

    if (index < titles.length){
       for (let i = current.length; i >= 0; i--) {
          title.value = current.slice(0, i)
          await sleep(100)
        }
      
        await sleep(200)
    }
   
  }
})
</script>

<template>

<div class="flex flex-col gap-10">

  <section class="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 text-center sm:text-left">


    <div class="sm:flex-1 sm:order-1 order-2">
      <p class="text-[2.8rem] 2xl:text-[3.5rem] px-3 sm:px-5">
        {{ hello }}
      </p>
    </div>

    <div class="flex justify-center sm:justify-center sm:flex-1 order-1 sm:order-2">
      <img 
        class="rounded-b-full w-80 h-80 object-cover" 
        src="https://waterlust.com/cdn/shop/collections/SB_BG_016.jpg" 
        alt="Adriel Dube">
    </div>


    <div class="sm:flex-1 sm:order-3 order-3 sm:text-right">
      <p class="text-[2.8rem] 2xl:text-[3.5rem] ">
        {{ title }}<span class="animate-pulse">|</span>
      </p>
    </div>

  </section>


  <div class="flex flex-col flex-wrap items-center">
          <button class="flex rounded-2xl p-2 items-center gap-2 relative">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p>Available For Work</p>
          </button>

          <div class="gap-x-4 inline-flex mt-4">
              <a href="https://nuxt.com">
                <Icon name="mdi:github" size="25px" />
              </a>

              <a href="https://nuxt.com">
                <Icon name="mingcute:linkedin-line" size="25px" />
              </a>

              <a href="https://nuxt.com">
                <Icon name="lets-icons:e-mail" size="25px" />
              </a>
          </div>

        <div class="flex gap-5">
          <a href="https://nuxt.com">
            <button class="outline flex border-2 rounded-2xl p-2 items-center relative hover:scale-105">
              Click here for resume
            </button>
          </a>

          <a href="https://calendar.app.google/Np9dHHWUCRPC2uVS8">
            <button class="outline flex border-2 rounded-2xl p-2 items-center relative hover:scale-105">
              Schedule a meeting
            </button>
          </a>

        </div>

       
  </div>


  <div class="flex flex-col gap-10 items-center w-full  text-5xl">
    View Projects
    <a href="/projects" >
      <Carousel />
    </a>
  </div>


  <div id="stack" class="flex flex-col items-center w-full ">
    <div class="flex flex-wrap items-center gap-x-6">
              <a href="https://nuxt.com">
               <Icon name="gravity-ui:logo-python" size="65"/>
              </a>

              <a href="https://nuxt.com">
                <Icon name="mdi:language-swift" size="65" />
              </a>

              <a href="https://nuxt.com">
                <Icon name="ph:file-html-thin" size="65"/>
              </a>

              <a href="https://nuxt.com">
               <Icon name="ph:file-css-thin" size="65" />
              </a>

              <a href="https://nuxt.com">
               <Icon name="lineicons:tailwindcss"size="65" />
              </a>

              <a href="https://nuxt.com">
                <Icon name="fa6-brands:aws" size="60"/>
              </a>

              <a href="https://nuxt.com">
                <Icon name="simple-icons:postgresql" size="65"/>
              </a>

              <a href="https://nuxt.com">
                <Icon name="devicon-plain:mongodb-wordmark" size="65" />
              </a>

              <a href="https://nuxt.com">
                <Icon name="lineicons:mysql" size="65" />
              </a>            

              <a href="https://nuxt.com">
                <Icon name="devicon-plain:vuejs-wordmark" size="65"/>
              </a>

              <a href="https://nuxt.com">
                 <Icon name="devicon-plain:nuxtjs-wordmark" size="120"/>
              </a>
    </div>
  </div>

 
  <section class="flex flex-col items-center gap-10">
      
      <p class="text-5xl">My Journey So Far</p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-10 p-2">
            <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl w-4/5 sm:w-80 px-3 py-2 h-50 hover:scale-105 transition duration-700 ease-in-out">
                        <Icon class="self-center" name="arcticons:autotools" size="80"/>
                        <h3 class="t-semibold">Experience</h3>
                        <p class="text-xl">2+ years <br> Software Development</p>
            </div>
            <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl w-4/5 sm:w-80 px-3 py-2 h-50 hover:scale-105 transition duration-700 ease-in-out">
                        <Icon class="self-center" name="arcticons:folder-school" size="80"/>
                        <h3 class="t-semibold">Education</h3>
                        <p class="text-xl">B.Sc Bachelors Degree (2027) <br>Computer Science & Cloud Computing</p>
            </div>
       </div>

       <p class="text-5xl">Experiences</p>

       <div class="relative sm:h-40 h-80 w-full px-6">
           <div class="flex items-center sm:absolute sm:lg:left-1/2 sm:ml-15 lg:ml-0 transform sm:-translate-x-1/2 ">
              <CoinImages class="w-full flex justify-center" />
           </div>

            <div class="flex flex-col items-end py-5  text-right">
              <a href="https://nbpa.com/">
                <p class="t-light">
                  2025 — <span class= "text-4xl dark:text-red-50 text-red-100  font-semibold underline">NBPA</span>
                </p>
              </a>

               <a href="">
                  <p class="t-light">
                    2024 — <span class=" dark:text-purple-100 text-purple-200  text-4xl font-semibold underline">CIA Captone</span>
                  </p>  
              </a>
              <a href="https://www.gram.edu/academics/universitycollege/retention/index.php">
                  <p class="t-light">
                    2024 — <span class="dark:text-yellow-50 text-yellow-100 text-4xl font-semibold underline">Grambling State</span>
                  </p>
              </a>
          </div>

       </div>
  </section>

 


</div>
   
</template>


<style>
</style>

