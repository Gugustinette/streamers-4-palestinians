const OPACITY_TRESHOLD = 10000;

export const useMapPopulatedPlaces = async (leafletMap: any) => {
  /**
   * Fetch the GeoJSON file
   */
  const response = await fetch(
    "/streamers-4-palestinians/data/hotosm_pse_populated_places_points_geojson/hotosm_pse_populated_places_points_geojson.geojson"
  );
  const geojsonPopulatedPlaces = await response.json();

  // Define style for the markers
  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#AEADF0",
    color: "AEADF0",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

  // Create a layer group
  const layerGroup = L.layerGroup();

  // Add the GeoJSON layer to the map
  L.geoJSON(geojsonPopulatedPlaces, {
    pointToLayer: function (feature, latlng) {
      // Compute the population rate
      let populationRate = parseInt(feature.properties.population) / OPACITY_TRESHOLD;
      // Ceil between 0 and 1
      populationRate = Math.min(1, Math.max(0, populationRate));
      // Return the circle marker
      return L.circleMarker(latlng, {
        ...geojsonMarkerOptions,
        weight: populationRate,
        opacity: populationRate,
        fillOpacity: populationRate
      });
    }
  }).addTo(layerGroup);

  // Return layer group
  return layerGroup;
}
