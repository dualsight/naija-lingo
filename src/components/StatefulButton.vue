<template>
  <button
    class="rounded-md shadow-sm relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium bg-white hover:opacity-75 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
    :disabled="isLoading"
  >
    <slot name="icon"></slot>
    <span v-if="isLoading">
      <slot name="loading"></slot>
    </span>
    <span v-else>
      <slot name="static"></slot>
    </span>
    <div v-if="isLoading" class="w-8"></div>
    <div v-if="isLoading" class="absolute" :class="loadingIndicatorCss">
      <svg
        class="ml-4 h-5 w-5"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#aaa"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity="0.5" cx="18" cy="18" r="18" />
            <path stroke="#fff" d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    isLoading: Boolean,
    indicatorDirection: String,
  },
  setup(props) {
    const loadingIndicatorCss = computed(() => {
      switch (props.indicatorDirection) {
        case "left":
          return "left-0 ml-4";
        case "right":
        default:
          return "right-0 mr-4";
      }
    });

    return { loadingIndicatorCss };
  },
});
</script>