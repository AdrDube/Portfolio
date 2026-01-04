<script lang="ts" setup>


const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 50)
})


const languages = ref(["All",
  "Python", "Swift", "JavaScript", "HTML", "CSS", "Tailwind",
  "AWS", "Flask", "MySQL", "Swift", "Vue.js", "Nuxt.js", "UIKit", "Firebase"
]);

const project1 = ref(["Python", "Flask", "AWS", "MySQL", "HTML", "CSS", "JavaScript"]);
const project2 = ref(["Swift", "UIKit", "Firebase"]);
const project3 = ref(["Vue.js", "Nuxt.js", "HTML", "CSS", "JavaScript", "Tailwind"]);
const project4 = ref(["HTML", "CSS", "Bootstrap"]);


const filterLang = ref("All");

const filter = (lang: string) => {
  filterLang.value = lang;
};

</script>

<template>
 
  <div 
    class="justify-items-center">
    <h1 class="pt-15 pb-4 text-5xl justify-self-start">Personal Projects</h1>
    <div 
    class="relative gap-15 tech-stack overflow-x-auto whitespace-nowrap w-full no-scrollbar"
    :class="['transition-opacity duration-3000', loaded ? 'opacity-100' : 'opacity-0']"
    >
      <button @click="filter(lang)" :key="lang" v-for="lang of languages"
        class="outline rounded-3xl p-1 border-1 w-40 h-15 my-6 mr-3.5 relative focus:border-3 focus:scale-115 hover:scale-105 hover:outline transition duration-700 ease-in-out cursor-pointer">
        <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
        <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
        <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
        <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
        {{ lang }}
      </button>
    </div>

    <div 
    class="lg:flex justify-center self-center w-full gap-30"
    :class="['transition-opacity duration-5500', loaded ? 'opacity-100' : 'opacity-0']"
    >
      <div id="left-col" v-if="filterLang === 'All' || project1.includes(filterLang) || project3.includes(filterLang)" class="flex flex-col gap-30 items-center justify-items-center flex-grow">
        <div id="Project1" v-if="filterLang === 'All' || project1.includes(filterLang)"
          class="m-4 sm:w-100 w-80 hover:scale-105 transition duration-500 ease-in-out">
          <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-120">


            <div class="overflow-hidden">
              <img class="h-70 w-full hover:scale-105 rounded-xl" src="/gsureg.png">
            </div>

            <div class="flex flex-col p-2 gap-3">
              <h3 class="text-3xl">Swifty</h3>
              <div class="flex flex-wrap gap-2.5 tech-stack">
                <button v-for="lang of project1" class="rounded-3xl p-1 border-1 min-w-[80px]"> {{ lang }} </button>
              </div>

              <p>The ultimate web app designed to simplify course selection and registration at Grambling State University.</p>
            </div>
          </div>

          <div class="flex justify-self-center gap-5 pt-2">

              <a href="https://youtu.be/5m8NiNu2Mf4?si=NRAl9Wrk3Y_pPTIQ">
                <button class="cursor-pointer outline rounded-2xl hover:scale-105  w-35 h-15">
                    <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                    <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

                    <!-- Icon -->
                    <Icon name="mdi:video-youtube" size="60" />
                </button>
              
              </a>

                <a href="https://github.com/AdrDube/GSU-Registration">  
                <button class="cursor-pointer outline rounded-2xl hover:scale-105 w-35 h-15">
                    <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                    <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

                    <!-- Icon -->
                    <Icon name="octicon:mark-github-16" size="50" />
                </button>
              
              </a>
          </div>


        </div>

        <div id="Project3" v-if="filterLang === 'All' || project3.includes(filterLang)"
          class="m-4 sm:w-100 w-80 hover:scale-105 transition duration-700 ease-in-out">
          <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-120 ">

            <div class="overflow-hidden">
              <img class="h-70 w-full hover:scale-105 rounded-xl" src="/portfolio2.png">
            </div>

            <div class="flex flex-col p-2 gap-3">
              <h3 class="text-3xl">My Portfolio</h3>
              <div class="flex flex-wrap gap-2.5 tech-stack">
                <button v-for="lang of project3" class="rounded-3xl p-1 border-1 min-w-[80px]"> {{ lang }} </button>
              </div>
              <p>My current portfolio built from my experience during my time at the NBPA</p>

            </div>

          </div>

          <div class="flex justify-self-center gap-5 py-2">

    
              <a href="https://adrdube.vercel.app">
                <button class="cursor-pointer outline rounded-2xl hover:scale-105  w-35 h-15">
                    <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                    <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

                    <Icon name="streamline-plump:web"  size="60" />
                </button>
              
              </a>

            
              <a href="https://github.com/AdrDube/Portfolio">
                <button class="cursor-pointer outline rounded-2xl hover:scale-105 w-35 h-15">
                    <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                    <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

                    <!-- Icon -->
                    <Icon name="octicon:mark-github-16" size="50" />
                </button>
              
              </a>
     
          </div>
        </div>
       
      </div>


      <div v-if="filterLang === 'All' || project2.includes(filterLang) || project4.includes(filterLang)" 
      id="right-col" 
      class="flex flex-col gap-30 items-center justify-items-center flex-grow"
      :class="{
        'mt-30 lg:mt-70': filterLang === 'All' || project1.includes(filterLang) || project3.includes(filterLang)
      }"
      >

        <div id="Project2" v-if="filterLang === 'All' || project2.includes(filterLang)"
          class="m-4 sm:w-100 w-80 hover:scale-105 transition duration-500 ease-in-out">

          <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-120">

            <div class="overflow-hidden">
              <img class="h-70 w-full hover:scale-105 rounded-xl" src="/classync.png">
            </div>

            <div class="flex flex-col p-2 gap-3">
              <h3 class="text-3xl">Classync</h3>
              <div class="flex flex-wrap gap-2.5 tech-stack">
                <button v-for="lang of project2" class="rounded-3xl p-1 border-1 min-w-[80px]"> {{ lang }} </button>
              </div>

              <p>Seamless. Secure. Smart Attendance for the Modern Classroom via Nearby Interaction.</p>
            </div>
          </div>

          <div class="flex justify-self-center gap-5 py-2">
              <a href="https://drive.google.com/file/d/1SrZVmEqOnvEH3af8J0s7yjYr2p57tWI1/view?usp=share_link">
                <button class="cursor-pointer outline rounded-2xl hover:scale-105  w-35 h-15">
                    <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                    <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

                    <Icon name="mdi:video-youtube" size="60" />
                </button>
              </a>
            
              <a href="https://github.com/AdrDube/Classync">
                <button class="cursor-pointer outline rounded-2xl hover:scale-105 w-35 h-15">
                    <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                    <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                    <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

 
                    <Icon name="octicon:mark-github-16" size="50" />
                </button>
              
              </a>
          </div>

        </div>


        <div id="Project4" v-if="filterLang === 'All' || project4.includes(filterLang)"
          class="m-4 sm:w-100 w-80 hover:scale-105 transition duration-700 ease-in-out">
          <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-120">

            <div class="overflow-hidden">
              <img class="h-70 w-full hover:scale-105 rounded-xl" src="/portfolio.png">
            </div>

            <div class="flex flex-col p-2 gap-3">
              <h3 class="text-3xl">Portfolio</h3>
              <div class="flex flex-wrap gap-2.5 tech-stack">
                <button v-for="lang of project4" class="rounded-3xl p-1 border-1 min-w-[80px]"> {{ lang }} </button>
              </div>

              <p>Take a trip back through time and look at my previous portfolio website i made when starting out. </p>


            </div>




          </div>

          <div class="flex justify-self-center gap-5 py-2">
            <a href="https://adrdube.github.io">
              <button class="cursor-pointer outline rounded-2xl hover:scale-105  w-35 h-15">
                  <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                  <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                  <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                  <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

                  <!-- Icon -->
                  <Icon name="streamline-plump:web"  size="60" />
              </button>

            </a>

            <a href="https://github.com/AdrDube/AdrDube.github.io">
              <button class="cursor-pointer outline rounded-2xl  w-35 h-15 hover:scale-105">
                  <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                  <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                  <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                  <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
                  <Icon name="octicon:mark-github-16" size="50" />
              </button>

            </a>

          </div>

        </div>

      </div>

    </div>

  </div>





</template>



<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>