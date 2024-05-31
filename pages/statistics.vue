<template>
    <main>
        <h1>Statistiques</h1>

        <NuxtImg src="/the-human-toll.png" alt="The Human Toll" />
        <a href="https://data.techforpalestine.org/">The Human Toll - Graphique journalier</a>

        <p>Plus de <span>85%</span> (1,9 million de personnes) de la population à Gaza a été déplacée de force.</p>

        <p>Sources : <a href="https://techforpalestine.org/">TechForPalestine</a></p>
    </main>
</template>

<style lang="scss" scoped>
main {
    img {
        width: 80%;
    }

    p {
        padding: 20px;
        margin-top: 40px;

        span {
            font-weight: bold;
            color: var(--color-primary);
        }
    }
}
</style>
