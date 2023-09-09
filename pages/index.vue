<script setup>
useHead({
  title: "LeonardoGPT",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  htmlAttrs: { lang: "en" },
  meta: [{ name: "description", content: "Leonardo GPT - Unity of Kings" }],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>

<template>
  <GenerationForm class="mt-4 md:mt-16 lg:mt-16" />
  <GenerationsGrid />
</template>
