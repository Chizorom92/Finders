import { useMemo, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import SearchHeader from "../../components/search/SearchHeader";
import FilterSidebar from "../../components/search/FilterSidebar";
import ResultsHeader from "../../components/search/ResultsHeader";
import PropertyGrid from "../../components/search/PropertyGrid";

import { featuredProperties } from "../../data/properties";

const Search = () => {
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("Any");
    const [bedrooms, setBedrooms] = useState("Any");
    const [searchQuery, setSearchQuery] = useState("");

// NEW
    const [maxPrice, setMaxPrice] = useState(1000000000);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState("recommended");

    const filteredProperties = useMemo(() => {
        const filtered = featuredProperties.filter((property) => {
            const query = searchQuery.toLowerCase();

            const matchSearch =
                query === "" ||
                property.title.toLowerCase().includes(query) ||
                property.location.toLowerCase().includes(query);

            const matchLocation =
                location === "" ||
                property.location.toLowerCase().includes(location.toLowerCase());

            const matchType =
                propertyType === "Any" ||
                property.type === propertyType;

            const matchBedroom =
                bedrooms === "Any" ||
                String(property.bedrooms) === bedrooms;

            const matchPrice = property.price <= maxPrice;

            return (
                matchSearch &&
                matchLocation &&
                matchType &&
                matchBedroom &&
                matchPrice
            );
        });

        switch (sortBy) {
            case "low":
                return [...filtered].sort((a, b) => a.price - b.price);

            case "high":
                return [...filtered].sort((a, b) => b.price - a.price);

            default:
                return filtered;
        }
    }, [location, propertyType, bedrooms, maxPrice, sortBy]);


    return (
        <DashboardLayout>
            <div className="p-4 md:p-6 lg:p-8">
                <SearchHeader
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />

                <div className="mt-6 grid gap-8 lg:grid-cols-12">
                    <aside className="hidden lg:block lg:col-span-3">
                        <FilterSidebar
                            location={location}
                            setLocation={setLocation}
                            propertyType={propertyType}
                            setPropertyType={setPropertyType}
                            bedrooms={bedrooms}
                            setBedrooms={setBedrooms}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                        />
                    </aside>

                    {/* Mobile Filter Drawer */}
                    {showFilters && (
                        <div className="fixed inset-0 z-50 lg:hidden">
                            <div
                                className="absolute inset-0 bg-black/40"
                                onClick={() => setShowFilters(false)}
                            />

                            <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-[32px] bg-[var(--background)] p-5">
                                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gray-300" />

                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="font-serif text-2xl font-bold">Filters</h2>

                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="rounded-full bg-[var(--surface-2)] px-3 py-1"
                                    >
                                        ✕
                                    </button>
                                </div>



                                <FilterSidebar
                                    location={location}
                                    setLocation={setLocation}
                                    propertyType={propertyType}
                                    setPropertyType={setPropertyType}
                                    bedrooms={bedrooms}
                                    setBedrooms={setBedrooms}
                                    maxPrice={maxPrice}
                                    setMaxPrice={setMaxPrice}
                                />
                            </div>
                        </div>
                    )}

                    <main className="lg:col-span-9">
                        <ResultsHeader
                            count={filteredProperties.length}
                            total={featuredProperties.length}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            onOpenFilters={() => setShowFilters(true)}
                            onClear={() => {
                                setSearchQuery("");
                                setLocation("");
                                setPropertyType("Any");
                                setBedrooms("Any");
                                setMaxPrice(1000000000);
                                setSortBy("recommended");
                            }}

                        />

                        <div className="mt-5">
                            <PropertyGrid properties={filteredProperties} />
                        </div>
                    </main>
                </div>
            </div>
        </DashboardLayout>

    );
};

export default Search;