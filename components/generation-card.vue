<script>
export default {
  props: {
    generation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      images: [],
      loading: true,
    };
  },
  methods: {
    async GetImages() {
      return $fetch("/api/images", {
        method: "GET",
        query: {
          id: this.generation.id,
        },
      });
    },
    async GetImage() {
      const { images, pending } = await this.GetImages();
      if (pending) {
        setTimeout(() => {
          this.GetImage();
        }, 1000);
      } else {
        this.images = images;
        this.loading = false;
      }
    },
  },
  async created() {
    await this.GetImage();
  },
};
</script>
<template>
  <label class="swap swap-flip text-9xl">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" />

    <div class="swap-off">
      <div class="card card-compact bg-neutral">
        <div v-if="!loading" class="card-body !p-0">
          <figure v-if="images[0]">
            <img
              class="rounded-2xl"
              :src="images[0].url"
              :alt="generation.request"
            />
          </figure>

          <div v-else class="flex flex-col w-full border-opacity-50">
            <div>
              <p>{{ generation.request }}</p>
            </div>
            <div class="divider">Improved</div>
            <div>
              <p>{{ generation.prompt }}</p>
            </div>
          </div>
        </div>
        <div v-else class="card-body flex justify-center items-center">
          <span class="loading loading-ring loading-lg"></span>
        </div>
      </div>
    </div>
    <div class="swap-on">
      <div class="card card-compact bg-neutral">
        <div v-if="!loading" class="card-body">
          <div class="flex flex-col w-full border-opacity-50">
            <div>
              <p>{{ generation.request }}</p>
            </div>
            <div class="divider">Improved</div>
            <div>
              <p>{{ generation.prompt }}</p>
            </div>
          </div>
        </div>
        <div v-else class="card-body flex justify-center items-center">
          <span class="loading loading-ring loading-lg"></span>
        </div>
      </div>
    </div>
  </label>
</template>
