export const useMapRoads = async (leafletMap: any) => {
  /**
   * Fetch the GeoJSON file
   */
  const response = await fetch(
    "/data/hotosm_pse_roads_lines_geojson/hotosm_pse_roads_lines_geojson.geojson"
  );
  const geojsonRoads = await response.json();

  // Define style for the markers
  var roadStyle = {
    color: "#210124",
    weight: 2,
    opacity: 1
  };

  // Add the GeoJSON layer to the map
  L.geoJSON(geojsonRoads, {
    style: (feature) => {
      return {
        ...roadStyle,
      }
    }
  }).addTo(leafletMap);
}
