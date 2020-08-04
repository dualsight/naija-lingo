import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      showMenu: false
    })

    function toggleMenu() {
      state.showMenu = !state.showMenu
    }
    return { state, toggleMenu }
  }

})