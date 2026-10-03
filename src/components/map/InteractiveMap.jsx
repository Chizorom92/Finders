import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Plus, Minus, LocateFixed, ShieldCheck } from "lucide-react";

const createMarker = (active = false) =>
    L.divIcon({
        className: "",
        html: `
      <div style="
        display:flex;
        align-items:center;
        justify-content:center;
        width:${active ? 42 : 34}px;
        height:${active ? 42 : 34}px;
        background:${active ? "#A14B60" : "#7C2338"};
        border-radius:50%;
        border:3px solid white;
        box-shadow:${
            active
                ? "0 0 18px rgba(161,75,96,.45)"
                : "0 6px 14px rgba(0,0,0,.25)"
        };
        font-size:${active ? 18 : 15}px;
      ">
        🏠
      </div>
    `,
        iconSize: [42, 42],
        iconAnchor: [21, 21],
    });
        // popupAnchor: [0, -28],



const FlyToLocation = ({ center }) => {
    const map = useMap();

    useEffect(() => {
        // Ensure center coordinates exist and are valid numbers
        if (!center || isNaN(center.latitude) || isNaN(center.longitude)) return;

        map.flyTo(
            [center.latitude, center.longitude],
            center.zoom,
            {
                duration: 1.5,
                animate: true
            }
        );
    }, [center, map]);

    return null;
};



    const MapControls = () => {
        const map = useMap();

        const locateMe = () => {
            if (!navigator.geolocation) return;

            navigator.geolocation.getCurrentPosition((position) => {
                map.flyTo(
                    [position.coords.latitude, position.coords.longitude],
                    15,
                    { duration: 1.5 }
                );
            });
        };

        return (
            <div className="absolute bottom-5 right-5 z-[1000]">
                <div className="flex flex-col gap-2 rounded-3xl border border-white/20 bg-[var(--surface)]/90 p-2 shadow-2xl backdrop-blur-xl">
                    <button
                        onClick={() => map.zoomIn()}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-white transition hover:scale-105"
                    >
                        <Plus size={18} />
                    </button>

                    <button
                        onClick={() => map.zoomOut()}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--text)] transition hover:bg-[var(--background)]"
                    >
                        <Minus size={18} />
                    </button>

                    <div className="my-1 h-px bg-[var(--border)]" />

                    <button
                        onClick={locateMe}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--text)] transition hover:bg-[var(--background)]"
                    >
                        <LocateFixed size={18} />
                    </button>
                </div>
            </div>
        );
    };

import { featuredProperties } from "../../data/properties";

const InteractiveMap = ({
                            properties = featuredProperties,
                            selectedProperty,
                            setSelectedProperty,
                            mapCenter,
                            setMapCenter,
                            searchMarker,
                        }) => {

    return (
        <div className="relative z-0 h-full w-full rounded-[22px] overflow-hidden">
        <MapContainer
            center={[7.3, 6.4]}
            zoom={6}
            scrollWheelZoom
            zoomControl={false}
            className="h-full w-full rounded-[22px]"
        >
            <FlyToLocation center={mapCenter} />

            <MapControls />



            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Search Result Marker */}
            {searchMarker && !isNaN(searchMarker.latitude) && !isNaN(searchMarker.longitude) && (
                <Marker
                    position={[searchMarker.latitude, searchMarker.longitude]}
                    icon={createMarker(true)}
                >
                    <Popup>
                        <div className="w-48">
                            <p className="text-xs text-gray-500">Searched location</p>
                            <h3 className="mt-1 font-semibold">{searchMarker.name}</h3>
                        </div>
                    </Popup>
                </Marker>
            )}

            {/* Property Markers */}
            {properties.map((property) => {
                // FALLBACK CHECK: Safely extract coordinates if keys vary in data
                const lat = property.latitude || property.lat;
                const lon = property.longitude || property.lng || property.long;

                // If coordinates are missing from a data entry, skip rendering it safely
                if (!lat || !lon || isNaN(lat) || isNaN(lon)) return null;

                return (
                    <Marker
                        key={property.id}
                        position={[lat, lon]}
                        icon={createMarker(selectedProperty?.id === property.id)}
                        eventHandlers={{
                            click: () => {
                                setSelectedProperty(property);

                                // Timeout prevents Leaflet's auto-pan popup from breaking our animation
                                setTimeout(() => {
                                    setMapCenter({
                                        latitude: Number(lat),
                                        longitude: Number(lon),
                                        zoom: 15,
                                    });
                                }, 100);
                            },
                        }}
                    >
                        <Popup maxWidth={280} className="finder-popup">
                            <div className="w-64 overflow-hidden rounded-xl">
                                <div className="aspect-[5/4] overflow-hidden rounded-lg">
                                    <img
                                        src={selectedProperty.image || selectedProperty.images?.[0]}
                                        alt={selectedProperty.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="pt-3">
      <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
        ✓ Verified
      </span>

                                    <h3 className="mt-2 text-base font-bold text-gray-900">
                                        {selectedProperty.title}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {selectedProperty.location}
                                    </p>

                                    <p className="mt-2 text-lg font-bold text-[#7C2338]">
                                        ₦{Number(selectedProperty.price).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
        </div>
    );
};

export default InteractiveMap;
