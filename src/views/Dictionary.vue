<script lang="ts" src="./Dictionary.ts"></script>
<template>
  <div>
    <div class="h-screen flex overflow-hidden bg-gray-100">
      <!-- Off-canvas menu for mobile -->
      <div class="md:hidden">
        <div class="fixed inset-0 flex z-40">
          <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
          -->
          <div class="fixed inset-0">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
          -->
          <div class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-500">
            <div class="absolute top-0 right-0 -mr-14 p-1">
              <button
                class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center px-4 py-6 bg-green-400">
              <img src="/@/assets/images/default-monochrome.svg" alt />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Team
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Projects
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Documents
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Reports
                </a>
              </nav>
            </div>
          </div>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col h-0 flex-1">
            <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-800">
              <img src="/@/assets/images/default-monochrome-white.svg" alt />
            </div>
            <div class="flex-1 flex flex-col overflow-y-auto">
              <nav class="flex-1 px-2 py-4 bg-gray-600">
                <div>
                  <label for="search_field" class="sr-only">Search</label>
                  <div class="relative text-gray-400 focus-within:text-gray-600">
                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                      </svg>
                    </div>
                    <input
                      id="search_field"
                      class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                      placeholder="Search words..."
                      type="search"
                    />
                  </div>
                </div>
                <span class="px-1 py-1 text-gray-400 font-semibold text-sm">A</span>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Aback</a>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Abacus</a>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Abaci</a>
                <span class="px-1 py-1 text-gray-400 font-semibold text-sm">B</span>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Baaed</a>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Baaing</a>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Baal</a>
                <span class="px-1 py-1 text-gray-400 font-semibold text-sm">C</span>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Cabal</a>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Cabby</a>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                >Caber</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="pt-2 pb-6 md:py-6 mt-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 class="text-2xl font-semibold text-gray-900">Abacus</h1>
              <span
                class="bg-green-400 text-green-100 text-xs font-semibold px-3 p-1 rounded-full"
              >Noun</span>
              <p class="text-sm italic font-ubuntu">/phonetic transcription/</p>

              <div class="bg-white rounded p-3 font-ubuntu w-3/4 mt-6">
                <span class="font-semibold text-green-400">Definition:</span>
                <p class="text-gray-700">
                  The abacus (plural abaci or abacuses), also called a counting frame,
                  is a calculating tool that was in use in the ancient Near East, Europe,
                  China, and Russia, centuries before the adoption of the written Arabic numeral system.
                </p>
              </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <span class="font-semibold text-green-400">Examples:</span>
                <div class="rounded-lg bg-gray-200 w-3/4 flex flex-row text-base p-4 mt-2">
                  <span class="text-gray-500 font-ubuntu">1.</span>
                  <div>
                    <span class="text-gray-600 ml-2 font-ubuntu">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                    </span>
                  </div>
                </div>
                <div class="rounded-lg bg-gray-200 w-3/4 flex flex-row text-base p-4 mt-2">
                  <span class="text-gray-500 font-ubuntu">2.</span>
                  <div>
                    <span class="text-gray-600 ml-2 font-ubuntu">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                    </span>
                  </div>
                </div>
                <div class="rounded-lg bg-gray-200 w-3/4 flex flex-row text-base p-4 mt-2">
                  <span class="text-gray-500 font-ubuntu">3.</span>
                  <div>
                    <span class="text-gray-600 ml-2 font-ubuntu">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                    </span>
                  </div>
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>