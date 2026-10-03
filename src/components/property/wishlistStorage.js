const STORAGE_KEY = "finders_wishlist";

export const getWishlist = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Unable to read wishlist:", error);
        return [];
    }
};

export const isInWishlist = (propertyId) => {
    return getWishlist().includes(propertyId);
};

export const toggleWishlist = (propertyId) => {
    const currentWishlist = getWishlist();

    const exists = currentWishlist.includes(propertyId);

    const updatedWishlist = exists
        ? currentWishlist.filter((id) => id !== propertyId)
        : [...currentWishlist, propertyId];

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedWishlist)
    );

    return updatedWishlist;
};

export const clearWishlist = () => {
    localStorage.removeItem(STORAGE_KEY);
};