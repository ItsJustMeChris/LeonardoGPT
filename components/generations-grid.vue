<script>
export default {
  data() {
    return {
      generations: [],
    };
  },
  mounted() {
    const generationsStore = useGenerationsStore();
    this.generations = generationsStore.generations;
  },
};
</script>
<template>
  <div class="grid grid-cols-12 mt-4 md:mt-16 lg:mt-16 mb-16">
    <div class="grid grid-cols-12 gap-4 col-span-12">
      <GenerationCard
        class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-full"
        v-for="generation in generations"
        :key="generation.uuid"
        :generation="generation"
      />
    </div>
  </div>
</template>
