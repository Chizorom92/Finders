import { useNavigate } from "react-router-dom";
import SearchPropertyCard from "./SearchPropertyCard";

const PropertyGrid = ({ properties = [] }) => {
    const navigate = useNavigate();

    if (properties.length === 0) {
        return (
            <div className="flex h-72 flex-col items-center justify-center rounded-[28px] border border-dashed border-[var(--border)] bg-[var(--surface)]">
                <h3 className="font-serif text-2xl font-bold">
                    No properties found
                </h3>

                <p className="mt-2 text-[var(--text-light)]">
                    Try changing your filters.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {properties.map((property) => (
                <SearchPropertyCard
                    key={property.id}
                    property={property}
                    onClick={() => navigate(`/property/${property.id}`)}
                />
            ))}
        </div>
    );
};

export default PropertyGrid;