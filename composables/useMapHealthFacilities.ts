export const useMapHealthFacilities = async (leafletMap: any) => {
  /**
   * Fetch the GeoJSON file
   */
  const response = await fetch(
    "/steamers-4-palestinians/data/hotosm_pse_health_facilities_points_geojson/hotosm_pse_health_facilities_points_geojson.geojson"
  );
  const geojsonHealthFacilities = await response.json();

  // Define style for the markers
  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#4F9D69",
    color: "transparent",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.2
  };

  // Create a layer group
  const layerGroup = L.layerGroup();

  // Add the GeoJSON layer to the map
  L.geoJSON(geojsonHealthFacilities, {
    pointToLayer: function (feature, latlng) {
      // Compute the population rate
      // let populationRate = parseInt(feature.properties.population) / OPACITY_TRESHOLD;
      // Ceil between 0 and 1
      // populationRate = Math.min(1, Math.max(0, populationRate));
      // Return the circle marker
      return L.circleMarker(latlng, {
        ...geojsonMarkerOptions,
      });
    }
  }).addTo(layerGroup);

  // Return layer group
  return layerGroup;
}
