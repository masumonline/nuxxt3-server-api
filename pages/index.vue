<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <svg
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>

        <span class="ml-3 text-xl">Space X Api</span>
      </a>
    </div>
  </header>
  <div class="container mx-auto">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="mission in missions" class="p-4 lg:w-1/3">
            <div
              class="h-full bg-gray-100 bg-opacity-75 px-8 py-10 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-base title-font font-medium text-gray-800 mb-1"
              >
                {{ mission.mission_name }}
              </h2>
              <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                <p
                  v-for="manufacturers in mission.manufacturers"
                  class="p-3 border bg-green-200"
                >
                  {{ manufacturers }}
                </p>
                <p
                  v-for="payload_id in mission.payload_ids"
                  class="p-1 text-sm"
                >
                  {{ payload_id }}
                </p>
              </h1>
              <p class="leading-relaxed mb-3">
                <a
                  :href="mission.wikipedia"
                  target="_blank"
                  class="text-blue-600"
                >
                  {{ mission.wikipedia }}
                </a>
              </p>
              <p class="leading-relaxed mb-3">
                <a
                  :href="mission.website"
                  target="_blank"
                  class="text-blue-600"
                >
                  {{ mission.website }}
                </a>
              </p>
              <a
                v-if="mission.twitter"
                :href="mission.twitter"
                target="_blank"
                class="text-blue-600"
              >
                {{ mission.twitter }}
              </a>
              <span v-else class="text-blue-600">No Twitter Link</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const mydata = await useAsyncData("json", () => $fetch("/api/fetch/json"));
const missions = mydata.data;
</script>
