<script lang="ts" setup>
import emailjs from '@emailjs/browser'

const name = ref("");
const email = ref("");
const phone = ref("");
const subject = ref("");
const val = ref("");


async function submit(e: Event) {
      try {
      const result = await emailjs.send(
        'service_3zjnncq',
        'template_3zjnncq',
        {
          user_name: name.value,
          message: `From: ${name.value} \n Email: ${email.value} \n Subject: ${subject.value} \n Phone: ${phone.value} \n Message: ${val.value}  `
        },
        'dyWC_ssN_uB_gK9jg'
      )
      
      await emailjs.send(
        'service_3zjnncq',
        'template_40xi89a',
        {
          email: email.value,
          name: name.value,
          title: subject.value
        },
        'dyWC_ssN_uB_gK9jg'
      )

    alert('Form completed successfully!')
  } catch (error) {
    alert('Failed to send message.')
  }
}

</script>


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
            <button class="outline rounded-3xl p-1 border-1 w-40 h-15 mr-3.5 mb-6 relative hover:scale-115 transition duration-800 ease-in-out">
              <span class="top lines  bg-gray-500 dark:bg-amber-50"></span>
              <span class="left lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="bottom lines bg-gray-500 dark:bg-amber-50"></span>
              <span class="right lines bg-gray-500 dark:bg-amber-50"> </span>
              Schedule a meeting
            </button>
        </a>

        

        <form @submit.prevent="submit" class="flex sm:w-150 w-full flex-col gap-3">
            <div class="flex content-center items-center gap-1">
                <label class="">Name</label>
                <span class=" text-red-600">*</span>             
            </div>
            <div class="relative inline-flex items-center w-full">
              <input required type="text" v-model="name" placeholder="johndoe@gmail.com" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>

            <div class="flex content-center items-center gap-1">
                <label class="">Email</label>
                <span class=" text-red-600">*</span>             </div>
            <div class="relative inline-flex items-center w-full">
              <input required type="email" v-model="email" placeholder="johndoe@gmail.com" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>

            <div class="flex content-center items-center gap-1">
                <label class="">Phone</label>         
            </div>
            <div class="relative inline-flex items-center w-full">
              <input type="tel" v-model="phone" placeholder="123 456 7890" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>

             <div class="flex content-center items-center gap-1">
                <label class="">Subject</label>
                <span class=" text-red-600">*</span>
            </div>
            <div class="relative inline-flex items-center w-full">
              <input required type="text" v-model="subject" placeholder="Subject of your message" class="w-full h-10 rounded-md p-2 placeholder:text-d border-1 border-gray-300">
            </div>


              <div class="flex content-center items-center gap-1">
                <label>Message</label>
                <span class="text-red-600">*</span>
              </div>

              <textarea 
                required 
                v-model="val"
                placeholder="Your message" 
                class="w-full h-50 rounded-md p-2 placeholder:text-d border-1 border-gray-300" 
                rows="5"
                autocomplete="off"
              ></textarea>

        


          <div class="flex justify-center mt-10">
            <button type="submit"
              class="rounded-md font-medium inline-flex items-center transition-colors cursor-pointer px-2.5 py-1.5 text-sm gap-1.5 w-full justify-center text-inverted bg-inverted hover:bg-inverted/90 focus-visible:outline-2">
              Send
            </button>
          </div>
        </form>
       

      </div>
    </section>

    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">References</h1>

    <section id="References" class="flex justify-center">

    
    <div id="References1" class="m-4 w-70 sm:w-75 hover:scale-110 transition duration-800 ease-in-out">
        <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl">
          <div class="flex flex-col p-2 gap-3 border-b-amber-10 border-1 rounded-3xl">
              <h3 class="text-3xl">NBPA</h3>
              <div>
                  <p>Dave Bokil</p>
                  <p>Director of Product </p>
                  <a href="https://www.linkedin.com/in/davebokil/">
                    <Icon name="mingcute:linkedin-line" size="30" />
                  </a>
                  <a href="mailto:david.bokil@nbpa.com">
                    <Icon name="lets-icons:e-mail" size="30" />
                  </a>
              </div>

              <div>
                  <p>Kevin Cox</p>
                  <p>Full-Stack Developer</p>
                  <a href="https://www.linkedin.com/in/kevincox0427/">
                    <Icon name="mingcute:linkedin-line" size="30" />
                  </a>
                  <a href="mailto:kevin.cox@nbpa.com">
                    <Icon name="lets-icons:e-mail" size="30" />
                  </a>
              </div>
          </div>
        </div>
    </div>

    <div id="References2" class="m-4 w-70 sm:w-75 hover:scale-110 transition duration-800 ease-in-out">
      <div class="flex flex-col 2 border-b-amber-10 border-1 rounded-3xl">
        <div class="flex flex-col p-2 gap-3 border-b-amber-10 border-1 rounded-3xl">
            <h3 class="text-3xl">Grambling State</h3>
            <div>
                <p class="text-bold">Ebony Peterson</p>
                <p> Retention Specialist </p>
                <a href="https://www.linkedin.com/in/pete38572/">
                  <Icon name="mingcute:linkedin-line" size="30" />
                </a>
                <a href="mailto:petersone@gram.edu">
                  <Icon name="lets-icons:e-mail" size="30" />
                </a>
            </div>

             <div>
                <p>Bassidy Dembele</p>
                <p>Associate Professor</p>
                <a href="https://www.linkedin.com/in/bassidy-dembele">
                  <Icon name="mingcute:linkedin-line" size="30" />
                </a>
                <a href="mailto:dembeleb@gram.edu">
                  <Icon name="lets-icons:e-mail" size="30" />
                </a>
            </div>
          
  

        </div>
      </div>
    </div>



    </section>

  </div>
</template>


<style></style>

