<template>
  <div>
    <div class="grid grid-cols-3 mb-4">
      <div>
        <label for="email" class="sr-only">Search</label>
        <div class="relative rounded-md shadow-sm">
          <input
            class="bg-white form-input block w-full text-xs sm:leading-5"
            placeholder="Search..."
          />
        </div>
      </div>
      <slot name="after-searchbox"></slot>
      <div class="my-auto text-right pr-4">
        <span
          v-if="z > 0"
          class="text-xs text-gray-600 align-middle inline-block"
        >Showing {{x}} to {{y}} of {{z}} records.</span>
        <span v-else class="text-xs text-gray-600 align-middle inline-block">No records to display.</span>
      </div>
      <slot name="after-meta"></slot>
    </div>
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                v-for="(heading, i) in headings"
                :key="i"
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >{{heading}}</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <slot name="body"></slot>
          </tbody>
          <tfoot>
            <tr>
              <th
                class="pb-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                colspan="4"
              >
                <nav class="flex items-center justify-between px-0">
                  <div class="w-0 flex-1 flex pl-3">
                    <a
                      @click.prevent="gotoPreviousPage"
                      class="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-xs leading-5 font-medium hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150 cursor-pointer"
                      :class="canGoBack ? 'text-gray-500' : 'text-gray-300'"
                    >
                      <svg class="mr-1 h-5 w-5" viewBox="0 0 25 25" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Previous
                    </a>
                  </div>
                  <div class="hidden md:flex">
                    <a
                      @click.prevent="gotoPage(i)"
                      v-for="i in pageButtons"
                      :key="i"
                      class="cursor-pointer pt-4 px-4 inline-flex items-center text-xs leading-5 font-medium transition ease-in-out duration-150"
                      :class="page === i ? '-mt-0.5 border-t-2 border-gray-800 text-gray-700 focus:outline-none focus:text-gray-800 focus:border-gray-700 transition ease-in-out duration-150' : '-mt-px border-t-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400'"
                    >{{i}}</a>
                  </div>
                  <div class="w-0 flex-1 flex justify-end pr-3">
                    <a
                      @click.prevent="gotoNextPage"
                      class="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-xs leading-5 font-medium hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150 cursor-pointer"
                      :class="canGoForward ? 'text-gray-500' : 'text-gray-300'"
                    >
                      Next
                      <svg class="ml-1 h-5 w-5" viewBox="0 0 25 25" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </nav>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    headings: Array,
    limit: Number,
    page: Number,
    total: Number,
    onPageChanged: Function,
  },

  setup(props) {
    const router = useRouter();
    const pageCount = computed(() =>
      Math.ceil((props.total ?? 1) / (props.limit ?? 1))
    );
    const lastPageItemCount = computed(
      () => (props.total ?? 0) % (props.limit ?? 1) || (props.limit ?? 1)
    );
    const x = computed(() => (props.limit ?? 1) * ((props.page ?? 1) - 1) + 1);
    const y = computed(() => {
      return lastPageItemCount.value + (x.value - 1);
    });
    const canGoBack = computed(() => {
      return (props.page ?? 1) > 1;
    });
    const canGoForward = computed(() => {
      return pageCount.value > 1 && pageCount.value !== (props.page ?? 1);
    });
    const pageButtons = computed(() => {
      return Array.from({ length: pageCount.value }, (_, i) => i + 1).slice(
        (props.page ?? 1) - 6,
        (props.page ?? 1) + 5
      );
    });

    function gotoPage(page: number) {
      router.replace({
        query: {
          ...router.currentRoute.value.query,
          page,
        },
      });
    }

    function gotoPreviousPage() {
      if (canGoBack.value) {
        const page = (props.page ?? 1) - 1;

        gotoPage(page);

        if (props.onPageChanged) props.onPageChanged(page);
      }
    }

    function gotoNextPage() {
      if (canGoForward.value) {
        const page = (props.page ?? 1) + 1;

        gotoPage(page);

        if (props.onPageChanged) props.onPageChanged(page);
      }
    }

    return {
      props,
      x,
      y,
      z: computed(() => props.total),
      pageCount,
      gotoPage,
      canGoBack,
      gotoPreviousPage,
      canGoForward,
      gotoNextPage,
      pageButtons,
    };
  },
});
</script>