<template>
    <main>
        <div class="streamer-selector">
            <div
                class="streamer-button"
                v-for="streamer in streamerList"
                :key="streamer"
                @click="changeStreamer(streamer)"
            >
                {{ streamer }}
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
const streamerList = [
    'ultia',
    'drfeelgood',
    'gius',
    'moman',
    'covfefe',
    'lapi',
    'bagherajones',
]

const changeStreamer = (streamer: string) => {
    actualStreamer.value = streamer
}
</script>

<style lang="scss">
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

        .streamer-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            cursor: pointer;

            &:hover {
                color: var(--color-primary);
            }
        }
    }

    iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
