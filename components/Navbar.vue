<template>
    <nav>
        <NuxtLink to="/">
            <NuxtImg src="/streamers-4-palestinians-logo.png" alt="Logo" />
        </NuxtLink>
        <ul>
            <li>
                <NuxtLink to="/">Accueil</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/streamers">Streamers</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/map">Carte</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 30px;

    img {
        height: 40px;
    }

    ul {
        display: flex;
        list-style: none;
        column-gap: 30px;
    }
}
</style>
