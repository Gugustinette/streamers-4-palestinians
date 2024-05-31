<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>

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
