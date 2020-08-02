<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-if="show || state.panelMoving"
        class="absolute inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
      ></div>
      <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex pointer-events-none">
        <transition
          @before-enter="state.panelMoving = true"
          @before-leave="state.panelMoving = true"
          @after-leave="state.panelMoving = false"
          @after-enter="state.panelMoving = false"
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="show" class="w-screen max-w-md pointer-events-auto">
            <slot></slot>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: ["show"],

  setup() {
    const state = reactive({
      panelMoving: false,
    });

    return { state };
  },
});
</script>