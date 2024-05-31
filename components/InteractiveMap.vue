<template>
    <div>
        <LMap
            style="height: calc(100vh - 50px); width: 100%;"
            :zoom="9"
            :center="[31.5, 34.47]"
            @ready="onMapReady"
            :useGlobalLeaflet="true"
            ref="map"
        >
            <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
            />
        </LMap>
    </div>
</template>

<script setup lang="ts">
import L from 'leaflet'

const map = ref(null)

const onMapReady = async () => {
    // Events
    const eventLayer = await useMapEvents(map.value.leafletObject);
    // Populated Places
    const populatedPlacesLayer = await useMapPopulatedPlaces(map.value.leafletObject);
    // Health Facilities
    const healthFacilitiesLayer = await useMapHealthFacilities(map.value.leafletObject);
    // Create a layer control
    const control = L.control.layers({}, {
        'Évènements': eventLayer,
        'Populations': populatedPlacesLayer,
        'Infrastructures Santé': healthFacilitiesLayer
    });
    control.addTo(map.value.leafletObject);

    // useMapBuildings(map.value.leafletObject);
    // useMapRoads(map.value.leafletObject);
}
</script>
