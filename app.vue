<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Favicon
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/streamers-4-palestinians/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/streamers-4-palestinians/apple-touch-icon.png' },
  ],
})
// SEO
useSeoMeta({
  title: 'Streamers 4 Palestinians',
  description: 'Streamers 4 Palestinians est une initiative de streamers francophones pour soutenir la population palestinienne à Gaza et en Cisjordanie.',
  url: 'https://gugustinette.github.io/streamers-4-palestinians/',
})
</script>

<style>
:root {
  --color-primary: #027B3E;
  --color-secondary: #61A244;
  --color-red: #E62D25;
  --color-background: #FFFBDB;
  --color-black: #181417;
}

body {
  font-family: Rubik, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--color-background);
  color: var(--color-black);
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
