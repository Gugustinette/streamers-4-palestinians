export const useMapBuildings = async (leafletMap: any) => {
  /**
   * Fetch the GeoJSON file
   */
  const response = await fetch(
    "/data/hotosm_pse_buildings_polygons_geojson/hotosm_pse_buildings_polygons_geojson.geojson"
  );
  const geojsonBuildings = await response.json();

  // Define style for the markers
  var buildingStyle = {
    color: "#210124",
    weight: 2,
    opacity: 1
  };

  // Add the GeoJSON layer to the map
  L.geoJSON(geojsonBuildings, {
    style: (feature) => {
      return {
        ...buildingStyle,
      }
    }
  }).addTo(leafletMap);
}
