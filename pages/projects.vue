
<script lang="ts" setup>
const languages = ref([ "All",
  "Python", "Swift", "JavaScript", "HTML", "CSS", "Tailwind",
  "AWS", "Flask", "MySQL", "MongoDB", "Swift", "Vue.js", "Nuxt.js"
]);

const project1 = ref(["Python", "HTML", "CSS", "AWS"]);
const project2 = ref(["Vue.js", "Nuxt.js", "Tailwind", "JavaScript"]);
const project3 = ref(["Swift", "AWS", "MySQL"]);
const project4 = ref(["Flask", "Python", "MongoDB"]);


const filterLang = ref("All");

const filter = (lang: string) => {
  filterLang.value = lang;
};

</script>

<template>
<h1 class="pt-15 pb-4 text-5xl">Projects</h1>
  <div class="justify-items-center">
      <div class="relative gap-15 tech-stack overflow-x-auto whitespace-nowrap w-full">
        <button   @click="filter(lang)" :key="lang" v-for="lang of languages" class="outline rounded-3xl p-1 border-1 w-40 h-15 my-6 mr-3.5 relative focus:border-3 focus:scale-110">
              <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
              <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
              {{lang}}
        </button>
      </div>

  <div class="lg:flex justify-center self-center w-full">
    <div id="left-col" class="flex flex-col gap-30 items-center justify-items-center">
      <div id="Project1" v-if="filterLang==='All' || project1.includes(filterLang)" class="m-4 md:w-2/3 w-[80%] lg:w-[75%] hover:scale-105">
        <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-110">

          <div class="overflow-hidden">
            <img
            class="h-70 w-full hover:scale-105"
            src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg"
          >
          </div>

          <div class="flex flex-col p-2 gap-3">
              <h3 class="text-3xl">Project</h3>
              <div class="flex gap-2.5 tech-stack">
                <button v-for="lang of project1" class="rounded-3xl p-1 border-1 w-25"> {{lang}} </button>
              </div>

              <p>Whats The Price, Going up</p>
              <p>Woo, woo, woo</p>
          </div>
        
        
        </div>

        <div class="flex justify-self-center gap-5 py-2">
          <button class="outline rounded-2xl hover:scale-105  w-35">
            <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
            <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
            <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
            <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

            <!-- Icon -->
            <Icon name="mdi:video-youtube" size="60" />
          </button>

          <button class="outline rounded-2xl  w-35 hover:scale-105">
              <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
              <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
              <Icon name="octicon:mark-github-16" size="50" />
          </button>
        </div>

      </div>

      <div id="Project2" v-if="filterLang==='All' || project2.includes(filterLang)"  class="m-4 md:w-2/3 w-[80%] lg:w-[75%] hover:scale-105">
        <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-110">

          <div class="overflow-hidden">
            <img
            class="h-70 w-full hover:scale-105"
            src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg"
          >
          </div>

          <div class="flex flex-col p-2 gap-3">
              <h3 class="text-3xl">Project</h3>
              <div class="flex gap-2.5 tech-stack">
                  <button v-for="lang of project2" class="rounded-3xl p-1 border-1 w-25"> {{lang}} </button>
              </div>

              <p>Whats The Price, Going up</p>
              <p>Woo, woo, woo</p>


          </div>
          
      

        
        </div>

        <div class="flex justify-self-center gap-5 py-2">
          <button class="outline rounded-2xl hover:scale-105  w-35">
            <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
            <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
            <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
            <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

            <!-- Icon -->
            <Icon name="mdi:video-youtube" size="60" />
          </button>

          <button class="outline rounded-2xl  w-35 hover:scale-105">
              <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
              <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
              <Icon name="octicon:mark-github-16" size="50" />
          </button>
        </div>

      </div>

    </div>



    <div id="right-col" class="flex flex-col gap-30 items-center justify-items-center mt-20">

      <div id="Project3" v-if="filterLang==='All' || project3.includes(filterLang)" class="m-4 md:w-2/3 w-[80%] lg:w-[75%] hover:scale-105">
          <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-110 ">

            <div class="overflow-hidden">
              <img 
                class="h-70 w-full hover:scale-105"
                src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg"
              >
            </div>

            <div class="flex flex-col p-2 gap-3">
                <h3 class="text-3xl">Project</h3>
                <div class="flex gap-2.5 tech-stack">
                   <button v-for="lang of project3" class="rounded-3xl p-1 border-1 w-25"> {{lang}} </button>
                </div>
                <p>Whats The Price, Going up</p>
                <p>Woo, woo, woo</p>
            </div>

          </div>

          <div class="flex justify-self-center gap-5 py-2">
            <button class="outline rounded-2xl w-35 hover:scale-105">
              <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
              <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

              <!-- Icon -->
              <Icon name="mdi:video-youtube" size="60" />
            </button>

            <button class="outline rounded-2xl w-35 hover:scale-105">
                <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
                <Icon name="octicon:mark-github-16" size="50" />
            </button>
      

          </div>
        </div>


      <div id="Project4" v-if="filterLang==='All' || project4.includes(filterLang)" class="m-4 md:w-2/3 w-[80%] lg:w-[75%] hover:scale-105">
          <div
          class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl overflow-hidden h-110">

            <div class="overflow-hidden">
              <img
              class="h-70 w-full hover:scale-105"
              src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg"
            >
            </div>

            <div class="flex flex-col p-2 gap-3">
                <h3 class="text-3xl">Project</h3>
                <div class="flex gap-2.5 tech-stack">
                   <button v-for="lang of project4" class="rounded-3xl p-1 border-1 w-25"> {{lang}} </button>
                </div>

                <p>Whats The Price, Going up</p>
                <p>Woo, woo, woo</p>


            </div>
            
        

          
          </div>

          <div class="flex justify-self-center gap-5 py-2">
            <button class="outline rounded-2xl hover:scale-105  w-35">
              <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
              <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>

              <!-- Icon -->
              <Icon name="mdi:video-youtube" size="60" />
            </button>

            <button class="outline rounded-2xl  w-35 hover:scale-105">
                <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
                <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
                <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
                <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
                <Icon name="octicon:mark-github-16" size="50" />
            </button>
      </div>

      </div>

    </div>

  </div>

  </div>




</template>



<style></style>