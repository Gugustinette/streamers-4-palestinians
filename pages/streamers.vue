<template>
    <main>
        <div class="streamer-selector">
            <div
                class="streamer-button"
                v-for="streamer in streamerList"
                :key="streamer.username"
                @click="changeStreamer(streamer.username)"
            >
                {{ streamer.displayName }}
            </div>
        </div>
        <iframe
            :src="`https://player.twitch.tv/?channel=${actualStreamer}&parent=gugustinette.github.io`"
            parent="gugustinette.github.io"
            height="720"
            width="1280"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
        />
    </main>
</template>

<script setup lang="ts">
const actualStreamer = ref('bagherajones')

// Rewrite streamer list as objects with beautified names { username: 'streamer', displayName: 'Streamer' }
const streamerList = [
    { username: 'alphacast', displayName: 'Alphacast' },
    { username: 'angledroit', displayName: 'Angle Droit' },
    { username: 'antoinedaniel', displayName: 'Antoine Daniel' },
    { username: 'avamind', displayName: 'Avamind' },
    { username: 'bagherajones', displayName: 'Baghera Jones' },
    { username: 'bastiui', displayName: 'Bastiui' },
    { username: 'clararunaway', displayName: 'Clara Runaway' },
    { username: 'clemovitch', displayName: 'Clemovitch' },
    { username: 'covfefe', displayName: 'Covfefe' },
    { username: 'dazjdm', displayName: 'DazJDM' },
    { username: 'doigby', displayName: 'Doigby' },
    { username: 'drfeelgood', displayName: 'DrFeelgood' },
    { username: 'gius', displayName: 'Gius' },
    { username: 'gom4rt', displayName: 'Gom4rt' },
    { username: 'hortyunderscore', displayName: 'Hortyunderscore' },
    { username: 'lamhua', displayName: 'Lamhua' },
    { username: 'lapi', displayName: 'Lapi' },
    { username: 'lexitvz', displayName: 'Lexitvz' },
    { username: 'littlebigwhale', displayName: 'LittleBigWhale' },
    { username: 'moman', displayName: 'Moman' },
    { username: 'mynthos', displayName: 'Mynthos' },
    { username: 'natoo', displayName: 'Natoo' },
    { username: 'nat_ali', displayName: 'Natali' },
    { username: 'onutrem', displayName: 'Onutrem' },
    { username: 'pelerine', displayName: 'Pelerine' },
    { username: 'pierrelapin', displayName: 'Pierre Lapin' },
    { username: 'ponce', displayName: 'Ponce' },
    { username: 'shaunz', displayName: 'Shaunz' },
    { username: 'shisheyu', displayName: 'Shisheyu' },
    { username: 'ultia', displayName: 'Ultia' },
    { username: 'zerator', displayName: 'Zerator' },
]

const changeStreamer = (streamer: string) => {
    actualStreamer.value = streamer
}
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: calc(100vh - 50px);

    .streamer-selector {
        display: flex;
        flex-direction: column;
        height: 100%;
        row-gap: 10px;
        padding: 0 10px;
        overflow-y: auto;

        .streamer-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            min-height: 50px;
            cursor: pointer;

            &:hover {
                color: var(--color-primary);
            }
        }

        /* Hide Scrollbar */
        ::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
