import DashboardLayout from "../../layouts/DashboardLayout";
import { featuredProperties } from "../../data/properties";
import { useState } from "react";
import InteractiveMap from "../../components/map/InteractiveMap.jsx";
import { useNavigate } from "react-router-dom";
import {
    Search,
    BedDouble,
    Bath,
    MapPin,
    ShieldCheck,
} from "lucide-react";


const PropertyMap = () => {
    const [selectedProperty, setSelectedProperty] = useState(featuredProperties[0]);
    const navigate = useNavigate();
    const [mapSearch, setMapSearch] = useState("");
    const searchedProperty = featuredProperties.find((property) =>
        property.location.toLowerCase().includes(mapSearch.toLowerCase()) ||
        property.title.toLowerCase().includes(mapSearch.toLowerCase())
    );
    const [mapCenter, setMapCenter] = useState({
        latitude: 9.082,
        longitude: 8.67753,
        zoom: 6,
    });
    const [searchMarker, setSearchMarker] = useState(null);

    const searchLocation = async () => {
        if (!mapSearch.trim()) return;

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    mapSearch
                )}`
            );

            const data = await response.json();

            if (!data.length) return;

            const result = data[0];

            setMapCenter({
                latitude: Number(result.lat),
                longitude: Number(result.lon),
                zoom: 14,
            });

            setSearchMarker({
                latitude: Number(result.lat),
                longitude: Number(result.lon),
                name: result.display.name,
            });

            const match = featuredProperties.find(
                (property) =>
                    property.location
                        .toLowerCase()
                        .includes(mapSearch.toLowerCase()) ||
                    property.title
                        .toLowerCase()
                        .includes(mapSearch.toLowerCase())
            );

            if (match) {
                setSelectedProperty(match);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const openDirections = (mode = "driving") => {
        const { latitude, longitude } = selectedProperty;

        const travelMode =
            mode === "walk"
                ? "walking"
                : mode === "bike"
                    ? "bicycling"
                    : "driving";

        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=${travelMode}`;

        window.open(url, "_blank");
    };

    return (
        <DashboardLayout>
            <div className="p-4 md:p-6 lg:p-8">
                <div className="mb-6 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                        Finders Map
                    </p>

                    <h1 className="mt-2 font-serif text-4xl font-bold">
                        Explore Properties on the Map
                    </h1>

                    <p className="mt-3 text-[var(--text-light)]">
                        Discover verified homes across Nigeria using interactive location pins.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-12">

                    {/* MAP COLUMN */}
                    <div className="relative lg:col-span-8">

                        {/* Search bar */}
                        <div className="absolute left-6 right-6 top-6 z-[1000]">
                            <div className="flex items-center gap-3 rounded-3xl border border-white/20 bg-[var(--surface)]/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
                                <Search className="text-[var(--primary)]" size={20} />

                                <input
                                    value={mapSearch}
                                    onChange={(e) => setMapSearch(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && searchLocation()}
                                    placeholder="Search city, estate or neighbourhood..."
                                    className="w-full bg-transparent text-[var(--text)] placeholder:text-[var(--text-light)] outline-none"
                                />

                                <button
                                    onClick={searchLocation}
                                    className="rounded-2xl bg-[var(--primary)] px-5 py-2 font-semibold text-white transition hover:scale-105"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Single map */}
                        <div className="h-[560px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm">
                            <InteractiveMap
                                properties={featuredProperties}
                                selectedProperty={selectedProperty}
                                setSelectedProperty={setSelectedProperty}
                                mapCenter={mapCenter}
                                setMapCenter={setMapCenter}
                                searchMarker={searchMarker}
                            />
                        </div>

                    </div>

                    {/* Side Panel */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                                Selected Property
                            </p>

                            <h2 className="mt-1 font-serif text-2xl font-bold">
                                Live Preview
                            </h2>

                            {/* Image */}
                            <div className="mt-5 overflow-hidden rounded-2xl">
                                <img
                                    src={selectedProperty.image || selectedProperty.images?.[0]}
                                    alt={selectedProperty.title}
                                    className="h-56 w-full object-cover"
                                />
                            </div>

                            {/* Verified */}
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E8F8EF] px-3 py-1 text-xs font-semibold text-[#166534]">
                                <ShieldCheck size={14} />
                                Verified Property
                            </div>

                            {/* Info */}
                            <h3 className="mt-4 font-serif text-2xl font-bold">
                                {selectedProperty.title}
                            </h3>

                            <div className="mt-2 flex items-center gap-1 text-sm text-[var(--text-light)]">
                                <MapPin size={15} />
                                {selectedProperty.location}
                            </div>

                            <h2 className="mt-4 text-3xl font-bold text-[var(--primary)]">
                                {selectedProperty.priceLabel}
                            </h2>

                            {/* Specs */}
                            <div className="mt-5 flex gap-3">
                                <div className="flex items-center gap-2 rounded-xl bg-[var(--surface-2)] px-3 py-2">
                                    <BedDouble size={16} />
                                    <span>{selectedProperty.bedrooms}</span>
                                </div>

                                <div className="flex items-center gap-2 rounded-xl bg-[var(--surface-2)] px-3 py-2">
                                    <Bath size={16} />
                                    <span>{selectedProperty.bathrooms}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="mt-6 space-y-3">
                                <button
                                    onClick={() => navigate(`/property/${selectedProperty.id}`)}
                                    className="w-full rounded-2xl bg-[var(--primary)] py-3 font-semibold text-white transition hover:opacity-90"
                                >
                                    View Property
                                </button>

                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        onClick={() => openDirections("drive")}
                                        className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-2 text-sm font-medium hover:bg-[var(--primary)] hover:text-white"
                                    >
                                        🚗 Drive
                                    </button>

                                    <button
                                        onClick={() => openDirections("walk")}
                                        className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-2 text-sm font-medium hover:bg-[var(--primary)] hover:text-white"
                                    >
                                        🚶 Walk
                                    </button>

                                    <button
                                        onClick={() => openDirections("bike")}
                                        className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-2 text-sm font-medium hover:bg-[var(--primary)] hover:text-white"
                                    >
                                        🚲 Bike
                                    </button>
                                </div>
                            </div>

                            {/* Nearby Homes */}
                            <div className="mt-6 border-t border-[var(--border)] pt-5">
                                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--text-light)]">
                                    Nearby Homes
                                </p>

                                <div className="space-y-2">
                                    {featuredProperties.map((property) => (
                                        <button
                                            key={property.id}
                                            onClick={() => {
                                                setSelectedProperty(property);

                                                setMapCenter({
                                                    latitude: property.latitude,
                                                    longitude: property.longitude,
                                                    zoom: 15,
                                                });

                                                setSearchMarker({
                                                    latitude: property.latitude,
                                                    longitude: property.longitude,
                                                    name: property.title,
                                                });
                                            }}
                                            className={`flex w-full items-center gap-3 rounded-2xl border p-2.5 transition ${
                                                selectedProperty.id === property.id
                                                    ? "border-[var(--primary)] bg-[var(--surface-2)]"
                                                    : "border-transparent hover:border-[var(--border)] hover:bg-[var(--surface-2)]"
                                            }`}
                                        >
                                            <img
                                                src={property.image || property.images?.[0]}
                                                alt={property.title}
                                                className="h-14 w-16 rounded-lg object-cover"
                                            />

                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-semibold">
                                                    {property.title}
                                                </p>

                                                <p className="truncate text-xs text-[var(--text-light)]">
                                                    {property.location}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PropertyMap;