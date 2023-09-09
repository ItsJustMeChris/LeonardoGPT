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
  <GenerationForm />
  <div class="grid grid-cols-12 mt-16 mb-16">
    <div class="col-span-12">
      <div class="grid grid-cols-12 gap-4">
        <GenerationCard
          class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          v-for="generation in generations"
          :key="generation.uuid"
          :generation="generation"
        />
      </div>
    </div>
  </div>
</template>
