<template>
  <div class="pb-8">
    <div class="relative">
      <div class="absolute inset-0 h-1/2 bg-green-400"></div>
      <div class="relative font-ubuntu">
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <dl class="rounded-lg bg-white sm:grid sm:grid-cols-5">
              <div
                class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
              >
                <dt
                  class="order-2 mt-2 text-md leading-6 font-medium text-gray-700"
                  id="item-1"
                >Words</dt>
                <dd
                  class="order-1 text-4xl leading-none font-semibold font-ubuntu-b text-green-600"
                  aria-describedby="item-1"
                >2.43M</dd>
              </div>
              <div
                class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <dt class="order-2 mt-2 text-md leading-6 font-medium text-gray-700">Updated</dt>
                <dd
                  class="order-1 text-4xl leading-none font-semibold font-ubuntu-b text-green-600"
                >24/7</dd>
              </div>
              
              <div
                class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
              >
                <dt class="order-2 mt-2 text-md leading-6 font-medium text-gray-700">Abbreviations</dt>
                <dd
                  class="order-1 text-4xl leading-none font-semibold font-ubuntu-b text-green-600"
                >100M</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-1 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-indigo-50 rounded-t-lg px-5 py-6 sm:px-6">
          <div class="w-full">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <div class="pl-4 pt-1 md:col-span-2">
                <h3 class="font-bold text-gray-800 text-xl">Welcome to Naija Lingo</h3>
                <ul
                  class="list-none sm:list-disc md:list-decimal lg:list-disc xl:list-none mt-2 text-gray-800"
                >
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
                  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
                  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
                </ul>
              </div>
              <div class="md:-mt-16 z-10">
                <img class="h-72 block mx-auto" src="/images/dashboard-avatar.png" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="-mt-20 grid grid-cols-1 rounded-b-lg bg-indigo-50 overflow-hidden md:grid-cols-3"
        >
          <div class="border-t border-gray-200 bg-yellow-50">
            <div class="px-4 py-5 sm:px-6 sm:py-4">
              <dl>
                <dt class="text-sm leading-6 font-normal text-gray-900">Active Users</dt>
                <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-900">
                    71,897
                    <span
                      class="ml-2 text-sm leading-5 font-medium text-gray-500"
                    >in the last 24 hours</span>
                  </div>
                  <div
                    class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                  >
                    <svg
                      class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Increased by</span>
                    12%
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="border-t border-gray-200 bg-white md:border-l md:border-r rounded-tr-lg">
            <div class="px-4 py-5 sm:px-6 sm:py-4">
              <dl>
                <dt class="text-sm leading-6 font-normal text-gray-900">Frequency of data update</dt>
                <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div class="flex items-baseline text-2xl leading-8 font-semibold text-indigo-900">
                    58.16%
                    <span class="ml-2 text-sm leading-5 font-medium text-gray-500">from 56.14%</span>
                  </div>
                  <div
                    class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                  >
                    <svg
                      class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Increased by</span>
                    2.02%
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

