<template>
  <div class="pt-20 flex flex-col gap-5" >
    <section class="flex  flex-col">
      <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">Contact Me</h1>
      <h2 class="text-center text-lg font-extralight italic">Let's talk about your ideas, projects or
        anything else</h2>


      <div class="flex gap-4 min-w-full justify-center">
        <a href="https://nuxt.com">
          <Icon name="mdi:github" size="70" />
        </a>
        <a href="https://nuxt.com">
          <Icon name="line-md:phone-call-loop" size="70" />
        </a>
        <a href="https://nuxt.com">
          <Icon name="mingcute:linkedin-line" size="70" />
        </a>
        <a href="https://nuxt.com">
          <Icon name="lets-icons:e-mail" size="70" />
        </a>
      </div>


      <div class="flex flex-col items-center p-3">
         <a href="https://calendar.app.google/Np9dHHWUCRPC2uVS8">
            <button class="rounded-3xl p-1 border-1 w-40 h-15 mr-3.5 mb-6"> Schedule a meeting</button>
        </a>

        

        <form class="flex sm:w-150 w-full flex-col gap-3">
            <div class="flex content-center items-center gap-1">
                <label class="">Name</label>
                <span class=" text-red-600">*</span>             
            </div>
            <div class="relative inline-flex items-center w-full">
              <input type="text" name="name" placeholder="johndoe@gmail.com" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>

            <div class="flex content-center items-center gap-1">
                <label class="">Email</label>
                <span class=" text-red-600">*</span>             </div>
            <div class="relative inline-flex items-center w-full">
              <input type="text" name="email" placeholder="johndoe@gmail.com" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>

            <div class="flex content-center items-center gap-1">
                <label class="">Phone</label>         
            </div>

            <div class="relative inline-flex items-center w-full">
              <input type="text" name="phone" placeholder="123 456 7890" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>

             <div class="flex content-center items-center gap-1">
                <label class="">Subject</label>
                <span class=" text-red-600">*</span>
            </div>
            <div class="relative inline-flex items-center w-full">
              <input type="text" name="subject" placeholder="Subject of your message" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>


            <div class="flex content-center items-center gap-1">
                <label class="">Message</label>
                <span class=" text-red-600">*</span>
            </div>
            <div class="relative inline-flex items-center w-full">
              <textarea type="text" name="message" placeholder="Subject of your message" class="w-full h-50 rounded-md p-2 placeholder:text-d border-1 border-gray-300" rows="5"> </textarea> 
            </div>


          <div class="flex justify-center mt-10"><button type="submit" data-state="closed" data-grace-area-trigger=""
              class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors cursor-pointer px-2.5 py-1.5 text-sm gap-1.5 w-full justify-center text-inverted bg-inverted hover:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"><!---->Send<!----></button>
          </div>
        </form>
       

      </div>
    </section>

    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">References</h1>

    <section id="References" class="flex justify-center">

    <div id="References1" class="m-4 w-70 sm:w-75 hover:scale-110">
      <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl">
        <div class="flex flex-col p-2 gap-3 border-b-amber-10 border-1 rounded-3xl">
            <h3 class="text-3xl">NBPA</h3>
            <div>
                <p class="text-bold">Dave Bokil</p>
                <p>Senior Manager at the NBPA</p>
                <a href="https://nuxt.com">
                  <Icon name="mingcute:linkedin-line" size="30" />
                </a>
                <a href="https://nuxt.com">
                  <Icon name="lets-icons:e-mail" size="30" />
                </a>
            </div>

             <div>
                <p>Kevin Cox</p>
                <p>Senior Manager at the NBPA</p>
                <a href="https://nuxt.com">
                  <Icon name="mingcute:linkedin-line" size="30" />
                </a>
                <a href="https://nuxt.com">
                  <Icon name="lets-icons:e-mail" size="30" />
                </a>
            </div>
          
  

        </div>
      </div>
    </div>

    <div id="References2" class="m-4 w-70 sm:w-75 hover:scale-110">
        <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl">
          <div class="flex flex-col p-2 gap-3 border-b-amber-10 border-1 rounded-3xl">
              <h3 class="text-3xl">NBPA</h3>
              <div>
                  <p>Dave Bokil</p>
                  <p>Senior Manager at the NBPA</p>
                  <a href="https://nuxt.com">
                    <Icon name="mingcute:linkedin-line" size="30" />
                  </a>
                  <a href="https://nuxt.com">
                    <Icon name="lets-icons:e-mail" size="30" />
                  </a>
              </div>

              <div>
                  <p>Kevin Cox</p>
                  <p>Senior Manager at the NBPA</p>
                  <a href="https://nuxt.com">
                    <Icon name="mingcute:linkedin-line" size="30" />
                  </a>
                  <a href="https://nuxt.com">
                    <Icon name="lets-icons:e-mail" size="30" />
                  </a>
              </div>
          </div>
        </div>
    </div>


    </section>

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>

