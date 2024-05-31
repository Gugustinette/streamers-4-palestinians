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
    { username: 'bagherajones', displayName: 'Baghera Jones' },
    { username: 'ultia', displayName: 'Ultia' },
    { username: 'drfeelgood', displayName: 'DrFeelgood' },
    { username: 'gius', displayName: 'Gius' },
    { username: 'lapi', displayName: 'Lapi' },
    { username: 'moman', displayName: 'Moman' },
    { username: 'covfefe', displayName: 'Covfefe' },
    { username: 'lexitvz', displayName: 'Lexitvz' },
    { username: 'clemovitch', displayName: 'Clemovitch' },
    { username: 'hortyunderscore', displayName: 'Hortyunderscore' },
    { username: 'mynthos', displayName: 'Mynthos' },
    { username: 'zerator', displayName: 'Zerator' },
    { username: 'antoinedaniel', displayName: 'Antoine Daniel' },
    { username: 'alphacast', displayName: 'Alphacast' },
    { username: 'bastiui', displayName: 'Bastiui' },
    { username: 'clararunaway', displayName: 'Clara Runaway' },
    { username: 'natoo', displayName: 'Natoo' },
    { username: 'nat_ali', displayName: 'Nat & Ali' },
    { username: 'avamind', displayName: 'Avamind' },
    { username: 'pierrelapin', displayName: 'Pierre Lapin' },
    { username: 'gom4rt', displayName: 'Gom4rt' },
    { username: 'pelerine', displayName: 'Pelerine' },
    { username: 'angledroit', displayName: 'Angle Droit' },
    { username: 'doigby', displayName: 'Doigby' },
    { username: 'ponce', displayName: 'Ponce' },
    { username: 'littlebigwhale', displayName: 'LittleBigWhale' },
    { username: 'onutrem', displayName: 'Onutrem' },
    { username: 'shisheyu', displayName: 'Shisheyu' },
    { username: 'lamhua', displayName: 'Lamhua' },
    { username: 'shaunz', displayName: 'Shaunz' },
    { username: 'dazjdm', displayName: 'DazJDM' },
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
