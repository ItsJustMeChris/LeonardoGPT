<script>
export default {
  props: {
    generation: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="card card-compact bg-neutral">
    <div class="card-body">
      <div class="flex flex-col w-full border-opacity-50">
        <div class="grid">
          <p>{{ generation.request }}</p>
        </div>
        <div class="divider">Improved</div>
        <div class="grid">
          <p>{{ generation.prompt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
