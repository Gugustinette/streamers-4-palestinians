<template>
    <main>
        <header>
            <NuxtImg src="/streamers-4-palestinians-logo.png" alt="Logo" />
        </header>
        <div class="content">
            <p>
                Streamers 4 Palestinians est une initiative de streamers francophones pour soutenir la population palestinienne à Gaza et en Cisjordanie.
                <br />
                Il s'agit d'une levée de fond en direct sur Twitch, menée avec <a href="https://www.medecinsdumonde.org/">Médecins du Monde</a>.
            </p>
            <p>
                Le stream commence le Vendredi 31 Mai à 20h et se termine le Mercredi 5 Juin à 00h.
            </p>
            <p>
                Pour en savoir plus : <a href="https://x.com/Baghera__Jones">le compte Twitter de Baghera</a>
            </p>
            <p>
                Ceci n'est pas un site officiel, simplement un outil pour centraliser les informations et aider à visualiser le conflit.
                Le projet est open-source, vous pouvez contribuer sur <a href="https://github.com/Gugustinette/streamers-4-palestinians">GitHub</a>.
            </p>
        </div>
    </main>
</template>

<style lang="scss">
header {
    display: grid;
    place-items: center;
    height: 500px;
    width: 100%;
    background-image: url('/streamers-4-palestinians/fond-pasteque.png');
    background-size: 10%;

    img {
        height: 180px;
    }
}

.content {
    display: flex;
    flex-direction: column;
    width: 800px;
}
</style>
