interface ITableEvent {
    actor1: string;
    admin1: string;
    admin2: string;
    admin3: string;
    assoc_actor_1: string;
    civilian_targeting: string;
    country: string;
    disorder_type: string;
    event_date: string;
    event_id_cnty: string;
    event_type: string;
    fatalities: string;
    geo_precision: string;
    inter1: string;
    interaction: string;
    iso: string;
    latitude: string;
    location: string;
    longitude: string;
    notes: string;
    region: string;
    source: string;
    source_scale: string;
    sub_event_type: string;
    tags: string;
    time_precision: string;
    timestamp: string;
    undefined: string;
    year: string;
}

const EXPLOSIONS_TERMS = [
    "Explosions/Remote violence",
];
const BATTLES_TERMS = [
    "Battles",
    "Violence against civilians",
];
const RIOTS_TERMS = [
    "Riots",
];
const STRATEGIC_DEVELOPMENTS_TERMS = [
    "Strategic developments",
];
const colorFromEvent = (event: ITableEvent) => {
    // If no precis event type can be found, the event is gray
    if (
        !event.event_type ||
        event.event_type === "" ||
        event.event_type === "Unknown"
    ) {
        return "gray";
    }
    // Explosions event
    if (EXPLOSIONS_TERMS.some(term => event.event_type.includes(term))) {
        return "red";
    }
    // Battles event
    if (BATTLES_TERMS.some(term => event.event_type.includes(term))) {
        return "orange";
    }
    // Riots event
    if (RIOTS_TERMS.some(term => event.event_type.includes(term))) {
        return "yellow";
    }
    // Strategic developments event
    if (STRATEGIC_DEVELOPMENTS_TERMS.some(term => event.event_type.includes(term))) {
        return "brown";
    }
    // Other event (Protestations)
    return "gray";
}

export const useMapEvents = async (leafletMap: any) => {
    /**
     * Load the CSV file containing the events data
     */
    const response = await fetch(
        "/data/2023-10-01-2024-05-17-Middle_East-Israel-Palestine.csv"
    );

    /**
     * Parse the CSV file
     */
    // Read CSV file
    const data = await response.text();
    // Parse header
    const header = data.split('\n')[0].split(',');
    // Parse CSV data
    const table = data.split('\n').slice(1).map(row => row.split(','));
    // Create typed table
    const tableEvent: ITableEvent[] = table.map(row => {
        return row.reduce((acc, value, index) => {
            acc[header[index]] = value;
            return acc;
        }, {} as ITableEvent);
    });

    /**
     * Display data
     */
    // Create a layer group
    const layerGroup = L.layerGroup();
    // Add layer group to map
    leafletMap.addLayer(layerGroup);

    // Create markers
    tableEvent.forEach((event) => {
        L.circleMarker([
            parseFloat(event.latitude) || 0,
            parseFloat(event.longitude) || 0
        ], {
            radius: 5,
            color: colorFromEvent(event),
            fillColor: "transparent",
        })
            .addTo(layerGroup)
            .bindPopup(event.fatalities);
    });

    // Return layer group
    return layerGroup;
}
