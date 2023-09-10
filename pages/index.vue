<script setup>
if (process.client) {
  const storage = localStorage;
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      if (matches) {
        storage.theme = "dark";
        useHead({
          htmlAttrs: {
            "data-theme": "black",
          },
        });
        console.log("GO DARK");
      } else {
        storage.theme = "light";
        useHead({
          htmlAttrs: {
            "data-theme": "light",
          },
        });
        console.log("GO LIGHT");
      }
    });
}

useHead({
  title: "LeonardoGPT",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  htmlAttrs: {
    lang: "en",
  },
  script: [
    `if (!localStorage.getItem("theme")) { localStorage.setItem("theme", window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light") }`,
    'if (localStorage.getItem("theme") === "dark") { document.documentElement.setAttribute("data-theme", "black"); } else { document.documentElement.setAttribute("data-theme", "light"); }',
  ],
  meta: [
    { name: "description", content: "Leonardo GPT - a perfect friendship" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>

<template>
  <GenerationForm class="mt-4 md:mt-16 lg:mt-16" />
  <GenerationsGrid />
</template>
