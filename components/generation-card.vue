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
      try {
        const { images, pending } = await this.GetImages();
        if (pending) {
          setTimeout(() => {
            this.GetImage();
          }, 1000);
        } else {
          this.images = images;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.GetImage();
  },
};
</script>
<template>
  <FlipCard :on="Math.random() < 0.1">
    <template #off>
      <div class="h-full card card-compact">
        <div v-if="!loading" class="card-body !p-0">
          <figure v-if="images[0]">
            <img
              width="512"
              height="768"
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
    </template>
    <template #on>
      <div class="h-full card card-compact bg-neutral text-neutral-content">
        <div v-if="!loading" class="card-body flex justify-center items-center">
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
    </template>
  </FlipCard>
</template>
