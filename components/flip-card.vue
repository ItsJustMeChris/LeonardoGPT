<script>
export default {
  props: {
    on: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<template>
  <label class="swap swap-flip text-9xl">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" />

    <div class="swap-off h-full">
      <slot name="off" v-if="!on"></slot>
      <slot v-else name="on"></slot>
    </div>
    <div class="swap-on h-full">
      <slot v-if="!on" name="on"></slot>
      <slot name="off" v-else></slot>
    </div>
  </label>
</template>
