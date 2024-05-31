<template>
    <div>
        <div class="info-panel">
            <p>Cette carte peut afficher plusieurs types d'informations :</p>
            <ul>
                <li>Des évènements</li>
                <ul>
                    <li>🔴 Explosions</li>
                    <li>🟠 Guerres / Violences</li>
                    <li>🟡 Émeutes</li>
                    <li>🟤 Développements stratégiques</li>
                    <li>○ Protestations</li>
                </ul>
                <li>🟣 Les populations</li>
                <li>🟢 Les infrastructures santés</li>
            </ul>
        </div>
        <InteractiveMap />
    </div>
</template>

<style lang="scss">
.info-panel {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background-color: var(--color-background);
    color: var(--color-primary);
    border-radius: 10px;
    padding: 10px;
    border: solid 1px var(--color-primary);
}
</style>