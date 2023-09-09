<script>
export default {
  data() {
    return {
      form: {
        prompt: "",
      },
      loading: false,
    };
  },
  methods: {
    async submit() {
      try {
        this.loading = true;
        const data = await $fetch("/api/generate", {
          method: "POST",
          body: JSON.stringify({
            prompt: this.form.prompt,
          }),
        });

        const generationsStore = useGenerationsStore();
        generationsStore.push(data);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-12">
    <form
      @submit.prevent="submit"
      class="col-span-12 flex justify-center items-center align-middle"
    >
      <div class="form-control w-full md:w-2/3 lg:w-1/2">
        <div class="input-group w-full">
          <input
            v-model="form.prompt"
            type="text"
            placeholder="Enter a prompt..."
            class="input input-bordered w-full"
          />
          <button :disabled="loading" class="btn" type="submit">
            <span v-if="loading" class="loading loading-dots loading-md"></span>
            <span class="bg-inherit" v-else>Generate</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
