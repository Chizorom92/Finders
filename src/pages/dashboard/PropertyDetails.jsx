import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopNavbar from "../../components/navigation/TopNavbar";
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    X,
    MapPin,
    BedDouble,
    Bath,
    ShieldCheck,
    School,
    Hospital,
    ShoppingCart,
    Bus,
} from "lucide-react";

import { featuredProperties } from "../../data/properties";

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const property = featuredProperties.find(
        (item) => item.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = useState(0);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    if (!property) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#F6F3ED]">
                <h2 className="text-3xl font-bold">Property Not Found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--text)] transition-colors duration-500">

            <TopNavbar />

            <div className="mx-auto max-w-7xl px-6 py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[var(--primary)] shadow-sm transition hover:shadow-md"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                {/* Main Image */}
                <img
                    src={property.images[selectedImage]}
                    alt={property.roomLabels[selectedImage]}
                    onClick={() => setIsGalleryOpen(true)}
                    className="h-[240px] w-full cursor-pointer object-cover sm:h-[340px] lg:h-[520px]"
                />

                {/* Thumbnails */}
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {property.images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                                selectedImage === index
                                    ? "border-[var(--primary)]"
                                    : "border-transparent opacity-80 hover:opacity-100"
                            }`}
                        >
                            <img
                                src={img}
                                alt={property.roomLabels[index]}
                                className="h-20 w-28 object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Property Info */}
                <div className="mt-10 grid gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="mb-3 flex items-center gap-2">
                            <ShieldCheck className="text-emerald-500" size={18} />
                            <span className="font-semibold text-emerald-500">
      Verified Property
    </span>
                        </div>

                        <h1 className="font-serif text-5xl font-bold text-[var(--text)]">
                            {property.title}
                        </h1>

                        <div className="mt-3 flex items-center gap-2 text-lg text-[var(--text-light)]">
                            <MapPin size={18} />
                            {property.location}
                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-[var(--primary)]">
                            ₦{property.price.toLocaleString()}
                        </h2>

                        {/* Features */}
                        <div className="mt-8 flex gap-8 border-y border-[var(--border)] py-6">
                            <div className="flex items-center gap-2">
                                <BedDouble className="text-[var(--primary)]" />
                                <div>
                                    <p className="text-sm text-[var(--text-light)]">Bedrooms</p>
                                    <p className="font-bold text-[var(--text)]">{property.bedrooms}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Bath className="text-[var(--primary)]" />
                                <div>
                                    <p className="text-sm text-[var(--text-light)]">Bathrooms</p>
                                    <p className="font-bold text-[var(--text)]">{property.bathrooms}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-8">
                            <h3 className="mb-3 font-serif text-2xl font-bold text-[var(--text)]">
                                About this home
                            </h3>

                            <p className="leading-8 text-[var(--text-light)]">
                                A beautifully designed modern residence located in one of the most
                                desirable neighbourhoods. This verified property features spacious
                                interiors, premium finishes, abundant natural light, and a thoughtfully
                                planned layout suitable for families and luxury living.
                            </p>
                        </div>
                    </div>

                    {/* Neighbourhood Intelligence */}
                    <div className="mt-12">
                        <h3 className="mb-6 font-serif text-3xl font-bold text-[var(--text)]">
                            Neighbourhood Intelligence
                        </h3>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {[
                                {
                                    icon: School,
                                    label: "Schools",
                                    value: property.neighborhood.schools,
                                },
                                {
                                    icon: Hospital,
                                    label: "Hospital",
                                    value: property.neighborhood.hospital,
                                },
                                {
                                    icon: ShoppingCart,
                                    label: "Supermarket",
                                    value: property.neighborhood.supermarket,
                                },
                                {
                                    icon: Bus,
                                    label: "Transport",
                                    value: property.neighborhood.transport,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-colors"
                                >
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-2)]">
                                        <item.icon className="text-[var(--primary)]" size={22} />
                                    </div>

                                    <p className="mb-1 text-sm text-[var(--text-light)]">
                                        {item.label}
                                    </p>

                                    <h4 className="font-semibold text-[var(--text)]">
                                        {item.value}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Agent Card */}
                    <div>
                        <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-md transition-colors">
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-2xl font-bold text-white">
                                    F
                                </div>

                                <div>
                                    <h4 className="font-bold text-[var(--text)]">
                                        Finders Verified Agent
                                    </h4>

                                    <p className="text-sm text-[var(--text-light)]">
                                        Responds within 15 mins
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/book-inspection/${property.id}`)}
                                className="w-full rounded-2xl bg-[var(--primary)] px-6 py-4 font-semibold text-white transition hover:brightness-110"
                            >
                                Book Inspection
                            </button>

                            <button
                                onClick={() => navigate("/contact")}
                                className="mt-3 w-full rounded-2xl border border-[var(--primary)] py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
                            >
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FULL SCREEN GALLERY */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
                    {/* Close */}
                    <button
                        onClick={() => setIsGalleryOpen(false)}
                        className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                    >
                        <X size={26} />
                    </button>

                    {/* Counter + Room Name */}
                    <div className="absolute left-6 top-6 rounded-2xl bg-white/10 px-4 py-3 text-white backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                            {selectedImage + 1} / {property.images.length}
                        </p>

                        <h3 className="mt-1 text-lg font-semibold">
                            {property.roomLabels[selectedImage]}
                        </h3>
                    </div>

                    {/* Previous */}
                    <button
                        onClick={() =>
                            setSelectedImage((prev) =>
                                prev === 0 ? property.images.length - 1 : prev - 1
                            )
                        }
                        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
                    >
                        <ChevronLeft size={30} />
                    </button>

                    {/* Next */}
                    <button
                        onClick={() =>
                            setSelectedImage((prev) =>
                                prev === property.images.length - 1 ? 0 : prev + 1
                            )
                        }
                        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
                    >
                        <ChevronRight size={30} />
                    </button>

                    {/* Main Image */}
                    <div className="flex flex-1 items-center justify-center px-4 pt-20 pb-32 sm:px-8 lg:px-12">
                        <div className="flex h-[72vh] w-full items-center justify-center">
                            <img
                                src={property.images[selectedImage]}
                                alt={property.roomLabels[selectedImage]}
                                className="max-h-full w-auto max-w-[90%] rounded-2xl object-contain shadow-2xl"
                            />
                        </div>
                    </div>


                    {/* Bottom Thumbnails */}
                    <div className="absolute bottom-4 left-0 right-0 px-3">
                        <div className="flex gap-2 overflow-x-auto rounded-2xl bg-black/55 p-3 backdrop-blur-md no-scrollbar">
                            {property.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className="shrink-0"
                                >
                                    <div
                                        className={`overflow-hidden rounded-lg border-2 ${
                                            selectedImage === index
                                                ? "border-white"
                                                : "border-transparent opacity-70"
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={property.roomLabels[index]}
                                            className="h-16 w-20 object-cover"
                                        />
                                    </div>

                                    <p className="mt-1 w-20 truncate text-center text-[10px] text-white">
                                        {property.roomLabels[index]}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* End Gallery */}
                </div>
            )}

        </div>
    );
};

export default PropertyDetails;