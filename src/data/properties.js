/* ---------- HOUSE 1 ---------- */
import h1Exterior from "../assets/houses/House1/exterior1.jpg";
import h1LivingRoom from "../assets/houses/House1/living room1.jpg";
import h1Kitchen from "../assets/houses/House1/kitchen1.jpg";
import h1Bedroom from "../assets/houses/House1/bedroom1.jpg";
import h1Bathroom from "../assets/houses/House1/bathroom1.jpg";
import h1Gymroom from "../assets/houses/House1/gymroom1.jpg";

/* ---------- HOUSE 2 ---------- */
import h2Exterior from "../assets/houses/House2/exterior2.jpg";
import h2LivingRoom from "../assets/houses/House2/living room2.jpg";
import h2Kitchen from "../assets/houses/House2/kitchen2.jpg";
import h2Bedroom from "../assets/houses/House2/bedroom2.jpg";
import h2Bathroom from "../assets/houses/House2/bathroom2.jpg";
import h2Gymroom from "../assets/houses/House2/pool2.jpg";

/* ---------- HOUSE 3 ---------- */
import h3Exterior from "../assets/houses/House3/exterior3.jpg";
import h3LivingRoom from "../assets/houses/House3/living room3.jpg";
import h3Kitchen from "../assets/houses/House3/kitchen3.jpg";
import h3Bedroom from "../assets/houses/House3/bedroom3.jpg";
import h3Bathroom from "../assets/houses/House3/bathroom3.jpg";
import h3Gymroom from "../assets/houses/House3/cinema3.jpg";

/* ---------- HOUSE 4 ---------- */
import h4Exterior from "../assets/houses/House4/exterior4.jpg";
import h4LivingRoom from "../assets/houses/House4/living room4.jpg";
import h4Kitchen from "../assets/houses/House4/kitchen4.jpg";
import h4Bedroom from "../assets/houses/House4/bedroom4.jpg";
import h4Bathroom from "../assets/houses/House4/bathroom4.jpg";
import h4Gymroom from "../assets/houses/House4/garden4.jpg";

/* ---------- HOUSE 5 ---------- */
import h5Exterior from "../assets/houses/House5/exterior5.jpg";
import h5LivingRoom from "../assets/houses/House5/living room5.jpg";
import h5Kitchen from "../assets/houses/House5/kitchen5.jpg";
import h5Bedroom from "../assets/houses/House5/bedroom5.jpg";
import h5Bathroom from "../assets/houses/House5/bathroom5.jpg";
import h5Gymroom from "../assets/houses/House5/gameroom5.jpg";

/* ---------- HOUSE 6 ---------- */
import h6Exterior from "../assets/houses/House6/exterior6.jpg";
import h6LivingRoom from "../assets/houses/House6/living room6.jpg";
import h6Kitchen from "../assets/houses/House6/kitchen6.jpg";
import h6Bedroom from "../assets/houses/House6/bedroom6.jpg";
import h6Bathroom from "../assets/houses/House6/bathroom6.jpg";
import h6Gymroom from "../assets/houses/House6/pool6.jpg";

export const featuredProperties = [
    {
        id: 1,
        title: "Modern Luxury Duplex",
        price: 120000000,
        location: "Lekki Phase 1, Lagos",
        type: "Duplex",
        bedrooms: 5,
        bathrooms: 6,
        featured: true,
        latitude: 6.4474,
        longitude: 3.4723,
        images: [
            h1Exterior,
            h1LivingRoom,
            h1Kitchen,
            h1Bedroom,
            h1Bathroom,
            h1Gymroom,
        ],

        roomLabels: [
            "Exterior",
            "Living Room",
            "Kitchen",
            "Master Bedroom",
            "Bathroom",
            "Gym Room",
        ],

        neighborhood: {
            schools: "Greenspring School • 4 mins",
            hospital: "Reddington Hospital • 7 mins",
            supermarket: "Shoprite Lekki • 5 mins",
            transport: "Lekki Bus Terminal • 2 mins",
        },
    },

    {
        id: 2,
        title: "Contemporary Villa",
        price: 95000000,
        location: "Maitama, Abuja",
        type: "Villa",
        bedrooms: 4,
        bathrooms: 5,
        featured: true,
        latitude: 9.0883,
        longitude: 7.4975,
        images: [
            h2Exterior,
            h2LivingRoom,
            h2Kitchen,
            h2Bedroom,
            h2Bathroom,
            h2Gymroom,
        ],

        roomLabels: [
            "Exterior",
            "Living Room",
            "Kitchen",
            "Master Bedroom",
            "Bathroom",
            "Pool",
        ],

        neighborhood: {
            schools: "American Intl School • 6 mins",
            hospital: "Nisa Premier Hospital • 8 mins",
            supermarket: "Grand Square • 4 mins",
            transport: "Maitama Taxi Hub • 3 mins",
        },
    },

    {
        id: 3,
        title: "Executive Bungalow",
        price: 45000000,
        location: "Enugu",
        type: "Bungalow",
        bedrooms: 3,
        bathrooms: 4,
        featured: true,
        latitude: 6.4584,
        longitude: 7.5140,
        images: [
            h3Exterior,
            h3LivingRoom,
            h3Kitchen,
            h3Bedroom,
            h3Bathroom,
            h3Gymroom,
        ],

        roomLabels: [
            "Exterior",
            "Living Room",
            "Kitchen",
            "Master Bedroom",
            "Bathroom",
            "Cinema",
        ],

        neighborhood: {
            schools: "American Intl School • 6 mins",
            hospital: "Nisa Premier Hospital • 8 mins",
            supermarket: "Grand Square • 4 mins",
            transport: "Maitama Taxi Hub • 3 mins",
        },
    },

    {
        id: 4,
        title: "Smart Family Home",
        price: 68500000,
        location: "Port Harcourt",
        type: "Apartment",
        bedrooms: 4,
        bathrooms: 4,
        featured: true,
        latitude: 4.8156,
        longitude: 7.0498,
        images: [
            h4Exterior,
            h4LivingRoom,
            h4Kitchen,
            h4Bedroom,
            h4Bathroom,
            h4Gymroom,
        ],

        roomLabels: [
            "Exterior",
            "Living Room",
            "Kitchen",
            "Master Bedroom",
            "Bathroom",
            "Garden",
        ],

        neighborhood: {
            schools: "American Intl School • 6 mins",
            hospital: "Nisa Premier Hospital • 8 mins",
            supermarket: "Grand Square • 4 mins",
            transport: "Maitama Taxi Hub • 3 mins",
        },
    },

    {
        id: 5,
        title: "Waterfront Villa",
        price: 220000000,
        location: "Banana Island, Lagos",
        type: "Villa",
        bedrooms: 6,
        bathrooms: 7,
        featured: true,
        latitude: 6.4638,
        longitude: 3.4544,
        images: [
            h5Exterior,
            h5LivingRoom,
            h5Kitchen,
            h5Bedroom,
            h5Bathroom,
            h5Gymroom,
        ],

        roomLabels: [
            "Exterior",
            "Living Room",
            "Kitchen",
            "Master Bedroom",
            "Bathroom",
            "Game Room",
        ],

        neighborhood: {
            schools: "American Intl School • 6 mins",
            hospital: "Nisa Premier Hospital • 8 mins",
            supermarket: "Grand Square • 4 mins",
            transport: "Maitama Taxi Hub • 3 mins",
        },
    },

    {
        id: 6,
        title: "Elegant Townhouse",
        price: 58000000,
        location: "Asokoro, Abuja",
        type: "house",
        bedrooms: 4,
        bathrooms: 4,
        featured: true,
        latitude: 9.0347,
        longitude: 7.5144,
        images: [
            h6Exterior,
            h6LivingRoom,
            h6Kitchen,
            h6Bedroom,
            h6Bathroom,
            h6Gymroom,
        ],

        roomLabels: [
            "Exterior",
            "Living Room",
            "Kitchen",
            "Master Bedroom",
            "Bathroom",
            "Pool",
        ],

        neighborhood: {
            schools: "American Intl School • 6 mins",
            hospital: "Nisa Premier Hospital • 8 mins",
            supermarket: "Grand Square • 4 mins",
            transport: "Maitama Taxi Hub • 3 mins",
        },
    },
];