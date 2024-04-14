export const counterStore = defineStore("counter", () => {
    const numb = shallowRef(0)

    function up() {
        numb.value += 1
    }

    return {
        numb,
        up
    };
});

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(counterStore, import.meta.hot))
