import { defineStore } from "pinia";

export const useGenerationsStore = defineStore({
  id: "generations",
  state: () => ({
    generations: [] as any[],
  }),
  actions: {
    push(generation: any) {
      generation.uuid = Math.random().toString(36).substring(7);
      this.generations.unshift(generation);
    },

    // addGeneration(generation) {
    //   this.generations.push(generation);
    // },
    // removeGeneration(generation: any) {
    //   this.generations = this.generations.filter(
    //     (g: any) => g.id !== generation.id
    //   );
    // },
    // async fetchById(id: string) {
    //   return this.$fetch("/api/images", {
    //     method: "GET",
    //     params: {
    //       id,
    //     },
    //   });
    // },
    // async fetchAll() {
    //   const promises = this.generations.map((g: any) => {
    //     return this.fetchById(g.id);
    //   });
    //   const images = await Promise.all(promises);
    //   return images;
    // },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
