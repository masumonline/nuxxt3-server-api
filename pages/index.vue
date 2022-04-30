<template>
  <div class="container mx-auto">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="user in users" class="p-4 lg:w-1/3">
            <div
              class="h-full bg-gray-100 bg-opacity-75 px-8 py-10 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                {{ user.id }}
              </h2>
              <h1
                class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
              >
                {{ user.name }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ user.body }}
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                {{ user.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const mydata = await useAsyncData("json", () => $fetch("/api/fetch/json"));
const users = mydata.data;
</script>
