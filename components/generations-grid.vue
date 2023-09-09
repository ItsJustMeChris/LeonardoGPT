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
    console.log(this.generations);
  },
};
</script>
<template>
  <div class="grid grid-cols-12 mt-4 md:mt-16 lg:mt-16 mb-16">
    <div class="col-span-12">
      <div class="masonry sm:masonry-sm md:masonry-md">
        <GenerationCard
          class="break-inside mb-8"
          v-for="generation in generations"
          :key="generation.uuid"
          :generation="generation"
        />
      </div>
    </div>
  </div>
</template>
