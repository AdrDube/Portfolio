<template>
  <div class="py-15 md:px-10">
    <section class="flex flex-col sm:relative w-full sm:h-200 md:h-180 "> 
        <div class="flex">
          <div>
                 <div class="">
                    <span class="text-xl sm:text-3xl font-serif font-extralight">Welcome to my</span>
                    <h2 class="lg:text-9xl md:text-[6rem] text-6xl">Profile Page</h2>
                </div>
                <div class="flex py-12 sm:w-1/2">
                    <p class="text-xl sm:text-2xl font-serif px-6 m-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
        
                </div>
          </div>

          <div class="sm:absolute inset-0 flex justify-end">
            <div class="flex lg:relative sm:w-1/2 lg:w-[468px] lg:h-[468px] -mask-linear-45 mask-linear-from-35% mask-linear-to-80%">
              <img 
                id = "main_image"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/opb/UODRDCE3KTLWUWUHHRETSAXL7U.jpg" 
                alt="Random Image" 
                class="w-full h-full object-cover rounded-2xl" 
              />
              <div class="absolute inset-0 bg-gradient-to-br from-black to-transparent  to-20%"> </div>
            </div>
          </div>

        </div>

        <div class="flex sm:absolute inset-0 justify-start lg:justify-center lg:pr-40 lg:pb-10 self-start sm:self-end z-10">
          <div class="flex lg:relative h-60 sm:w-1/2  lg:w-80 mask-linear-45 mask-linear-from-35% mask-linear-to-80%">
            <img class="w-full h-full object-cover rounded-2xl" src="https://thumbnails.cbsig.net/_x/w400/CBS_Production_Entertainment_VMS/2020/08/05/1772239427960/NICKELODEON_SPONGEBOBSQUAREPANTSHD_001_V1_687106_1920x1080.jpg" alt="Random Image 1">
            <div class="absolute inset-0 bg-gradient-to-br from-black to-transparent  to-20%"> </div>
          </div>
            
        </div>
    </section>

    <div class="flex justify-center">
      <h2 class="text-5xl text-pretty tracking-tight text-highlighted ">What can I do for you?</h2>
    </div>

    <div class="flex w-full flex-col md:flex-row justify-center items-center">
      <details class="rounded-lg px-3 py-1 w-full">
         <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="streamline:money-graph-analytics-business-product-graph-data-chart-analysis" size="120"/>
            <p class="text-4xl">Analytical Thinking <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>
            <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
                    <div class="flex flex-col p-2 gap-3">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </div>

                    <div class="overflow-hidden rounded-3xl">
                      <img class="h-50 w-full hover:scale-105" src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg">
                    </div>
                  
            </div>
      </details>


      <details class="rounded-lg px-3 py-1 w-full" closed>
        <summary class="flex list-none justify-center">
            <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
              <Icon name="streamline-freehand:programming-code-idea" size="120" />
                <p class="text-4xl">Consistent Innovation <Icon name="iconamoon:arrow-down-2-fill"/></p>
            </div>
        </summary>

         <div class="flex flex-col md:w-full  w-100  px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>

          <div class="overflow-hidden rounded-3xl">
            <img class="h-50 w-full hover:scale-105" src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg">
          </div>
        
        </div>
      </details>


      <details class="rounded-lg px-3 py-1 w-full" closed>
        <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="streamline:global-learning" size="120" />
              <p class="text-4xl">Something <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>


         <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>

          <div class="overflow-hidden rounded-3xl">
            <img class="h-50 w-full hover:scale-105" src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg">
          </div>
        
        </div>
      </details>
    
    </div>

    <div class="flex w-full flex-col md:flex-row justify-center md:py-8">
      <details class="rounded-lg px-3 py-1 md:w-1/3" closed>
        <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="fluent:people-team-48-regular" size="120" />
            <p class="text-4xl">Seamless Collaboration <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>

        <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>

          <div class="overflow-hidden rounded-3xl">
            <img class="h-50 w-full hover:scale-105" src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg">
          </div>
        
        </div>
      </details>


      <details class="rounded-lg px-3 py-1 md:w-1/3" closed>
        <summary class="flex list-none justify-center">
          <div class=" hover:scale-110 text-center transition duration-700 ease-in-out">
            <Icon name="et:gears" size="120" />
              <p class="text-4xl">Analytical Thinking <Icon name="iconamoon:arrow-down-2-fill"/></p>
          </div>
        </summary>

        <div class="flex flex-col md:w-full  w-100 px-6 py-4 gap-4  hover:scale-110 transition duration-700 ease-in-out justify-self-center">
          <div class="flex flex-col p-2 gap-3">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>

          <div class="overflow-hidden rounded-3xl">
            <img class="h-50 w-full hover:scale-105" src="https://canvas.hrcd.fr/articles/launch-your-porfolio.jpg">
          </div>
        
        </div>
      </details>
    </div>


   
    <section class="flex flex-col items-center">
      <h2 class="text-pretty tracking-tight text-highlighted text-left text-xl sm:text-xl lg:text-2xl font-medium">
        Frequently Asked Questions</h2>
      <div class="text-balance text-left mt-2 text-sm sm:text-xl lg:text-sm text-muted">
        Answers to common questions about my process and services
      </div>
          <details class="w-[80%] h-auto rounded-lg px-3 py-1" closed>
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">What services do you offer?</span>
                <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-4 pt-4">
              <p class=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum They should call it Roundtine.</p>
            </div>
          </details>

           <details class="w-[80%] h-auto rounded-lg px-3 py-1" closed>
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">Why is the sky blue?</span>
                <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-4 pt-4">
              <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </details>

      <details class="w-[80%] h-auto rounded-lg px-3 py-1 group" closed>
        <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
          <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
            <span>Why are you messaging me rn?</span>
            <Icon name="ei:plus" size="32" />
          </div>
        </summary>
        <div
          class="overflow-hidden max-h-0 opacity-0 px-4 transition-all duration-700 delay-700 ease-in-out group-open:max-h-[500px] group-open:opacity-100"
        >
          <p class="text-lg py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </details>

          <details class="w-[80%] h-auto rounded-lg px-3 py-1" closed>
            <summary class="list-none cursor-pointer hover:scale-105 transition duration-700 ease-in-out">
              <div class="flex justify-between items-center h-12 p-4 bg-gray-400/25 dark:bg-gray-500/15 rounded-2xl">
                <span class="">Hey now, what's wrong?</span>
                <Icon name="ei:plus" size="32" />
              </div>
            </summary>
            <div class="flex px-4 pt-4">
              <p class=" text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum They should call it Roundtine.</p>
            </div>
          </details>
    </section>

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>

