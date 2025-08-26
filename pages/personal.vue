<script lang="ts" setup>

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 50)
})

</script>


<template>
  <div class="py-15 md:px-10"
    :class="['transition-opacity duration-2500', loaded ? 'opacity-100' : 'opacity-0']">
    <section class="flex flex-col sm:relative w-full sm:h-220 md:h-220 "> 
        <div class="flex">
          <div>
                 <div class="">
                    <span class="text-xl sm:text-3xl font-serif font-extralight">Welcome to my</span>
                    <h2 class="lg:text-9xl md:text-[6rem] text-6xl">Profile Page</h2>
                </div>
                <div class="flex py-12 sm:w-1/2">
                    <p class="text-xl sm:text-2xl font-serif px-6 m-0">
                      I’m currently a student exploring the intersection of technology, design, and storytelling.
                      I’m drawn to projects that start with a messy whiteboard and evolve through collaboration. Whether I’m writing code, shaping interfaces, or helping define a vision, I care about clarity — not just in what we build, but how we work together.
                    </p>
        
                </div>
          </div>

          <div class="sm:absolute inset-0 flex justify-end">
            <div class="flex lg:relative sm:w-1/2 lg:w-[468px] lg:h-[600px] -mask-linear-45 mask-linear-from-35% mask-linear-to-90%">
              <!-- <img 
                id = "main_image"
                src="https://play-lh.googleusercontent.com/qwn15z9NzlVMN-x7_rqHnnqZ0jsJ4e1RomqdRQIJw39NmnbDX4S7iWMuSNPPcB_mc0Q"
                class="w-full h-full object-cover rounded-2xl" 
              /> -->
              <div class="absolute inset-0 bg-gradient-to-br from-black to-transparent  to-10%"> </div>
            </div>
          </div>

        </div>

        <div class="flex sm:absolute inset-0 justify-start lg:justify-center lg:pb-10 self-start sm:self-end z-10">
          <div class="flex lg:relative h-70 sm:w-1/2  w-100 mask-linear-45 mask-linear-from-35% mask-linear-to-80%">
            <img class="w-100 h-full object-cover rounded-2xl" src="/grampic.png" alt="Random Image 1">
            <div class="absolute inset-0 bg-gradient-to-br from-black to-transparent  to-20%"> </div>
          </div>
            
        </div>
    </section>

    <div class="flex justify-center">
      <h2 class="text-5xl text-pretty tracking-tight text-highlighted ">What can I do for you?</h2>
    </div>

    <div class="flex w-full flex-col md:flex-row justify-center items-center">
      <details class="cursor-pointer rounded-lg px-3 py-1 w-full">
         <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="streamline:money-graph-analytics-business-product-graph-data-chart-analysis" size="120"/>
            <p class="text-3xl">For Your Project <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>
            <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
                    <div class="flex flex-col p-2 gap-3">
                        <p><b>Let’s shape your ideas into something real.</b></p>
                        <p> I'll help you cut through the noise and identify the focused, achievable MVP features that actually matter. </p>
                          <p>Together, we'll map out product flows that users will love.
                          I'm here to explore every interaction, anticipate every user need
                        </p>
                        <p><i>Ready to build something extraordinary?</i></p>
                    </div>

                    <!-- <div class="overflow-hidden rounded-3xl">
                      <img class="h-50 w-full hover:scale-105" src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg">
                    </div> -->
            </div>
      </details>


      <details class="cursor-pointer rounded-lg px-3 py-1 w-full">
        <summary class="flex list-none justify-center">
            <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
              <Icon name="streamline-freehand:programming-code-idea" size="120" />
                <p class="text-3xl">For your brand <Icon name="iconamoon:arrow-down-2-fill"/></p>
            </div>
        </summary>

         <div class="flex flex-col md:w-full  w-100  px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p><b>Let’s make your story hit harder.</b></p>
                <p>I'll dig beneath the surface to find the "why" that drives your work, not just the "what."</p>
                <p>I'll bring a fresh lens to your branding, helping discover narrative that set you apart and offer feedback on how your message lands from the outside in.</p>
          </div>
        </div>

      </details>


      <details class="cursor-pointer rounded-lg px-3 py-1 w-full">
        <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="streamline:global-learning" size="120" />
              <p class="text-3xl">For your team <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>


         <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p><b>Let’s create something memorable together</b></p>
              <p>I thrive in collaborative spaces and help others do the same.</p>
              <p>I'll step in wherever I’m needed: frontend, backend architecture, research, writing. I'll be there to ensure a continued workflow and keep the vibe positive and grounded.</p>
          </div>
        </div>
      </details>
    
    </div>

    <div class="flex w-full flex-col md:flex-row justify-center md:py-8">
      <details class="cursor-pointer rounded-lg px-3 py-1 md:w-1/3">
        <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="fluent:people-team-48-regular" size="120" />
            <p class="text-3xl">For the Process<Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>

        <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p><b>I'll help turn big dreams into daily wins carve clear paths forward.</b></p>
              <p>Break down big ideas into clear, manageable steps — then execute.</p>
              <p>I believe in building smarter and not harder. I will help you find the right tools and processes to streamline your workflow.</p>
              <p><i>Let's make your vision a reality.</i></p>
          </div>
        </div>
      </details>


      <details class="cursor-pointer rounded-lg px-3 py-1 md:w-1/3">
        <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="et:gears" size="120" />
              <p class="text-3xl">For your users <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>

        <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p><b>I'l help design with a specific purpose in mind, not assumptions</b></p>
              <p>I'll ask the hard questions that expose hidden flaws and challenge surface-level thinking.</p>
              <p>I'll spot UX friction points and edge cases _before_ they become user pain to ensure our design is resilient, intuitive, and fun to use.</p>
          </div>
        </div>
      </details>
    </div>


   
    <section class="flex flex-col items-center">
      <h2 class="text-pretty tracking-tight text-highlighted text-left text-xl sm:text-xl lg:text-2xl font-medium">
        Frequently Asked Questions</h2>
      <div class="text-balance text-left mt-2 text-sm sm:text-xl lg:text-sm text-muted">
        Stepping beyond the code
      </div>
            <details class="cursor-pointer w-[80%] h-auto rounded-lg px-3 py-1" open>
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">What other work have you done outside of coding?</span>
                <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-2 pt-4 flex-col">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="w-70 h-50 flex-shrink-0 self-center">
                 <slider :images="['/video.png', '/sound.png']" />
                </div>
                <div class="flex-1">
                  <p class="text-lg italic mb-1">I've worked as a sound engineer. I was usually more on the technical side—configuring equipment, troubleshooting setups—but what really hooked me was working with artists equalizing their performances</p>
                  <p class="text-lg italic">I've also captured sports events as a videographer on the Grambling Media Team collaborating with athletic teams, coaches, and university staff to organize and plan video shoots</p>
                </div>
              </div>
            </div>
        </details>

        <details class="cursor-pointer w-[80%] h-auto rounded-lg px-3 py-1">
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">Any Leadership / Teaching Experience?</span>
                <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-2 pt-4 flex-col">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                  <p class="text-lg mb-1 italic">I tutor and work as an academic coach under the Office of Retention at Grambling State, I help students stay on track, develop study routines, and tackle subjects I've completed myself.</p>
                  <p class="text-lg italic">I've also worked as a camp counselor at Horizon Camps, I focused on camper safety and wellbeing while bringing energy, creativity to help kids of all ages enjoy their time on camp.</p>
                </div>
                <div class="w-70 h-50 flex-shrink-0 self-center ">
                 <slider :images="['/camp.png']" />
                </div>
              </div>
            </div>
        </details>

        <details class="cursor-pointer w-[80%] h-auto rounded-lg px-3 py-1">
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">What initiatives are you involved in?</span>
                  <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-2 pt-4 flex-col">
              <p class="text-lg italic">I have a few initiatives I'm passionate about:</p>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="w-70 h-50 rounded-3xl flex-shrink-0 self-center">
                  <slider :images="['/activities.png', '/SFEPD.png', '/EICOP.png']" />
                </div>

                <div class="flex-1">
                  <p class="text-lg mb-1 "><i><b class="font-semibold">SFEPD:</b></i> The Society for Financial Education & Professional Development is all about boosting financial literacy.</p>
                  <p class="text-lg mb-1"><i><b class="font-semibold">EICOP:</b></i> Focused on creating pathways for high-achieving students from HBCUs and PMIs to break into industries.</p>
                  <p class="text-lg mb-1"><i><b class="font-semibold">HBCUFirst:</b></i> This student-led community supports youth wellbeing and career readiness.</p>
                </div>
              </div>
            </div>
        </details>

<!-- 
          <details class="cursor-pointer w-[80%] h-auto rounded-lg px-3 py-1">
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">Favorite Books at the moment?</span>
                <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-2 pt-4 flex-col">
              <p class=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum They should call it Roundtine.</p>
            </div>
          </details> 
        -->


      <details class="cursor-pointer w-[80%] h-auto rounded-lg px-3 py-1 group">
        <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
          <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
            <span>Favorite sports/games?</span>
            <Icon name="ei:plus" size="32" />
          </div>
        </summary>
        <div
          class="flex px-2 pt-4 flex-col"
        >
          <p class="text-lg py-2 italic">
            I’m a big fan of basketball. I also enjoy chess, It challenges me to continuously  think several moves ahead. I served as Vice President of the Chess Club in high school and took the position of Treasure during my freshman year.
          </p>
        </div>
      </details>
    </section>

  </div>
</template>



<style></style>

