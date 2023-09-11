<script>
export default {
  data() {
    return {
      form: {
        prompt: "",
        model: "ABSOLUTE_REALITY",
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
          body: {
            prompt: this.form.prompt,
            model: this.form.model,
          },
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
  <div class="grid grid-cols-12 gap-4">
    <form
      @submit.prevent="submit"
      class="col-span-12 flex justify-center items-center align-middle grid grid-cols-12 gap-4"
    >
      <div class="form-control col-span-12 md:col-span-4 lg:col-span-2">
        <select v-model="form.model" class="select select-bordered w-full">
          <option value="ABSOLUTE_REALITY">Absolute Reality</option>
          <option value="DREAM_SHAPER">Dream Shaper</option>
        </select>
      </div>
      <div class="form-control col-span-12 md:col-span-8 lg:col-span-10">
        <div class="input-group w-full">
          <input
            v-model="form.prompt"
            type="text"
            placeholder="Enter a prompt..."
            class="input input-bordered w-full"
          />
          <button :disabled="loading" class="btn" type="submit">
            <span v-if="loading" class="loading loading-dots loading-md"></span>
            <span class="bg-inherit uppercase" v-else>Generate</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
