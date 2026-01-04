<script setup>

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 100)
})


const titles = [
  "Software Engineer.",
  "Web Developer.",
  "Tech Enthusiast.",
  "Open Source Contributor.",
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
  await sleep(2000)

  for (let i = 0; i <= 4; i++) {
      hello.value = intro.slice(0, i)
      await sleep(200)
  }

  await sleep(800)

  for (let i = 4; i <= intro.length; i++) {
      hello.value = intro.slice(0, i)
      await sleep(140)
  }

  await sleep(1000)
  while (index < titles.length) {
    const current = titles[index]

    // Type in
    for (let i = 0; i <= current.length; i++) {
      title.value = current.slice(0, i)
      await sleep(150)
    }

    await sleep(3000) // pause after full title
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

<div 
    class="flex flex-col gap-10"
    :class="['transition-opacity duration-3000', loaded ? 'opacity-100' : 'opacity-0']"
    >
  <section 
    class="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 text-center sm:text-left"

  >


    <div class="sm:flex-1 sm:order-1 order-2">
      <p class="text-[2.8rem] 2xl:text-[3.5rem] px-3 sm:px-5">
        {{ hello }}
      </p>
    </div>

    <div class="flex justify-center sm:justify-center sm:flex-1 order-1 sm:order-2">
      <img 
        class="rounded-b-full w-80 h-80 object-cover" 
        src="/main.png" 
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
              <a href="https://github.com/AdrDube">
                <Icon name="mdi:github" size="25px" />
              </a>

              <a href="https://www.linkedin.com/in/adrieltdube/">
                <Icon name="mingcute:linkedin-line" size="25px" />
              </a>

              <a href="mailto:adrtdube@gmail.com">
                <Icon name="lets-icons:e-mail" size="25px" />
              </a>
          </div>

        <div class="flex gap-5">
          <a href="https://jumpshare.com/share/8cq2n8G33CWuhaHTFEyQ">
            <button class="outline flex border-2 rounded-2xl p-2 items-center relative hover:scale-110 transition duration-600 ease-in-out">
              Click here for resume
            </button>
          </a>

          <a href="https://calendar.app.google/Np9dHHWUCRPC2uVS8">
            <button class="outline flex border-2 rounded-2xl p-2 items-center relative hover:scale-110 transition duration-600 ease-in-out">
              Schedule a meeting
            </button>
          </a>

        </div>

       
  </div>

    <section class="flex flex-col items-center gap-10">

      <div class="flex flex-col sm:flex-row justify-center items-center gap-10 p-2">
            <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl w-4/5 sm:w-80 px-3 py-2 h-50 hover:scale-107 transition duration-800 ease-in-out">
                        <Icon class="self-center" name="arcticons:autotools" size="80"/>
                        <h3 class="t-semibold">Experience</h3>
                        <p class="text-xl">2+ years Software Development</p>
                        <p class="text-xl">Internship Experience</p>
                        <p class="text-xl">1 Capstone Project</p>
            </div>
            <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl w-4/5 sm:w-80 px-3 py-2 h-50 hover:scale-107 transition duration-800 ease-in-out">
                        <Icon class="self-center" name="arcticons:folder-school" size="80"/>
                        <h3 class="t-semibold">Education</h3>
                        <p class="text-xl">B.Sc Bachelors Degree (2027) <br>Computer Science & Cloud Computing</p>
            </div>
       </div>
    </section>
     


  <div class="flex flex-col gap-10 items-center w-full">
    <h3 class="text-5xl">My Projects</h3>
    <a href="/projects" >
      <Carousel />
    </a>
  </div>


  <div id="stack" class="flex flex-col items-center w-full ">
    <div class="flex flex-wrap items-center gap-x-6">
             
              <a href="https://www.python.org/">
               <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="gravity-ui:logo-python" size="65"/>
              </a>

              <a href="https://developer.apple.com/swift/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="mdi:language-swift" size="65" />
              </a>

              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="ph:file-html-thin" size="65"/>
              </a>

              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="ph:file-css-thin" size="65" />
              </a>

              <a href="https://tailwindcss.com/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="lineicons:tailwindcss" size="65" />
              </a>

              <a href="https://aws.amazon.com/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="fa6-brands:aws" size="60"/>
              </a>

              <a href="https://www.postgresql.org/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="simple-icons:postgresql" size="65"/>
              </a>

              <a href="https://www.mongodb.com/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="devicon-plain:mongodb-wordmark" size="65" />
              </a>

              <a href="https://www.mysql.com/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="lineicons:mysql" size="65" />
              </a>

              <a href="https://vuejs.org/">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="devicon-plain:vuejs-wordmark" size="65"/>
              </a>

              <a href="https://nuxt.com">
                <Icon class="hover:scale-110 transition duration-700 ease-in-out" name="devicon-plain:nuxtjs-wordmark" size="120"/>
              </a>
    </div>
  </div>

 
  <section class="flex flex-col items-center gap-10">

       <p class="text-5xl">Experiences</p>

       <div class="relative sm:h-40 h-80 w-full px-6">
           <div class="flex items-center sm:absolute sm:lg:left-1/2 sm:ml-15 lg:ml-0 transform sm:-translate-x-1/2 ">
              <CoinImages class="w-full flex justify-center" />
           </div>

            <div class="flex flex-col items-end py-5  text-right">
              <a href="https://nbpa.com/">
                <p class="t-light hover:scale-107 transition duration-800 ease-in-out">
                  2025 — <span class= "text-4xl dark:text-red-50 text-red-100  font-semibold underline">NBPA</span>
                </p>
              </a>

               <a href="">
                  <p class="t-light hover:scale-107 transition duration-800 ease-in-out">
                    2024 — <span class=" dark:text-purple-100 text-purple-200  text-4xl font-semibold underline">CIA Capstone</span>
                  </p>  
              </a>
              <a href="https://www.gram.edu/academics/universitycollege/retention/index.php">
                  <p class="t-light hover:scale-107 transition duration-800 ease-in-out">
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

