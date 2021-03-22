<template>
  <q-page class="flex flex-center"> {{ val }} </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const val = ref("");
    const $store = useStore();
    val.value = $store.getters["test/getMyVal"];
    return { val };
  },
});
</script>
