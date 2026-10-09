import Canadaa1 from "../assets/international/listings/Canadaa1.jpg";
import Canadaa2 from "../assets/international/listings/Canadaa2.jpg";
import Canadaa3 from "../assets/international/listings/Canadaa3.jpg";
import Canadaa4 from "../assets/international/listings/Canadaa4.jpg";

import UnitedK1 from "../assets/international/listings/UnitedK1.jpg";
import UnitedK2 from "../assets/international/listings/UnitedK2.jpg";
import UnitedK3 from "../assets/international/listings/Unitedk3.jpg";
import UnitedK4 from "../assets/international/listings/UnitedK4.jpg";

import Usa1 from "../assets/international/listings/Usa1.jpg";
import Usa2 from "../assets/international/listings/Usa2.jpg";
import Usa3 from "../assets/international/listings/Usa3.jpg";
import Usa4 from "../assets/international/listings/Usa4.jpg";

import au1 from "../assets/international/listings/au1.jpg";
import au2 from "../assets/international/listings/au2.jpg";
import au3 from "../assets/international/listings/au3.jpg";
import au4 from "../assets/international/listings/au4.jpg";

import it1 from "../assets/international/listings/it1.jpg";
import it2 from "../assets/international/listings/it2.jpg";
import it3 from "../assets/international/listings/it3.jpg";
import it4 from "../assets/international/listings/it4.jpg";

import sk1 from "../assets/international/listings/sk1.jpg";
import sk2 from "../assets/international/listings/sk2.jpg";
import sk3 from "../assets/international/listings/sk3.jpg";
import sk4 from "../assets/international/listings/sk4.jpg";

const internationalListings = {
    usa: [
        {
            id: 1,
            title: "Manhattan Sky Residence",
            city: "New York",
            price: "$2,450/mo",
            beds: 2,
            baths: 2,
            image: Usa1,
            verified: true,
        },
        {
            id: 2,
            title: "Chicago Executive Loft",
            city: "Chicago",
            price: "$1,980/mo",
            beds: 2,
            baths: 1,
            image: Usa2,
            verified: true,
        },
        {
            id: 3,
            title: "Houston Urban Living",
            city: "Houston",
            price: "$1,650/mo",
            beds: 1,
            baths: 1,
            image: Usa3,
            verified: true,
        },
        {
            id: 4,
            title: "Brooklyn Family Townhouse",
            city: "New York",
            price: "$3,200/mo",
            beds: 4,
            baths: 3,
            image: Usa4,
            verified: true,
        },
    ],

    canada: [
        {
            id: 1,
            title: "Toronto Luxury Condo",
            city: "Toronto",
            price: "CA$2,150/mo",
            beds: 2,
            baths: 2,
            image: Canadaa1,
            verified: true,
        },
        {
            id: 2,
            title: "Vancouver Harbour Apartment",
            city: "Vancouver",
            price: "CA$2,480/mo",
            beds: 2,
            baths: 2,
            image: Canadaa2,
            verified: true,
        },
        {
            id: 3,
            title: "Toronto Garden Townhouse",
            city: "Toronto",
            price: "CA$2,900/mo",
            beds: 3,
            baths: 2,
            image: Canadaa3,
            verified: true,
        },
        {
            id: 4,
            title: "Montreal Studio Suite",
            city: "Montreal",
            price: "CA$1,320/mo",
            beds: 1,
            baths: 1,
            image: Canadaa4,
            verified: true,
        },
    ],

    uk: [
        {
            id: 1,
            title: "London City Apartment",
            city: "London",
            price: "£1,950/mo",
            beds: 2,
            baths: 2,
            image: UnitedK1,
            verified: true,
        },
        {
            id: 2,
            title: "Manchester Riverside Flat",
            city: "Manchester",
            price: "£1,420/mo",
            beds: 2,
            baths: 1,
            image: UnitedK2,
            verified: true,
        },
        {
            id: 3,
            title: "Birmingham Modern Studio",
            city: "Birmingham",
            price: "£980/mo",
            beds: 1,
            baths: 1,
            image: UnitedK3,
            verified: true,
        },
        {
            id: 4,
            title: "Chelsea Brick Residence",
            city: "London",
            price: "£2,800/mo",
            beds: 3,
            baths: 2,
            image: UnitedK4,
            verified: true,
        },
    ],

    australia: [
        {
            id: 1,
            title: "Sydney Harbour View",
            city: "Sydney",
            price: "A$2,250/mo",
            beds: 2,
            baths: 2,
            image: au1,
            verified: true,
        },
        {
            id: 2,
            title: "Melbourne Skyline Condo",
            city: "Melbourne",
            price: "A$1,920/mo",
            beds: 2,
            baths: 1,
            image: au2,
            verified: true,
        },
        {
            id: 3,
            title: "Brisbane Premium Apartment",
            city: "Brisbane",
            price: "A$1,650/mo",
            beds: 1,
            baths: 1,
            image: au3,
            verified: true,
        },
        {
            id: 4,
            title: "Sydney Family Villa",
            city: "Sydney",
            price: "A$3,400/mo",
            beds: 4,
            baths: 3,
            image: au4,
            verified: true,
        },
    ],

    italy: [
        {
            id: 1,
            title: "Milan Design Apartment",
            city: "Milan",
            price: "€1,850/mo",
            beds: 2,
            baths: 2,
            image: it1,
            verified: true,
        },
        {
            id: 2,
            title: "Rome Historic Residence",
            city: "Rome",
            price: "€2,150/mo",
            beds: 3,
            baths: 2,
            image: it2,
            verified: true,
        },
        {
            id: 3,
            title: "Florence Riverside Loft",
            city: "Florence",
            price: "€1,300/mo",
            beds: 1,
            baths: 1,
            image: it3,
            verified: true,
        },
        {
            id: 4,
            title: "Milan Rooftop Penthouse",
            city: "Milan",
            price: "€2,900/mo",
            beds: 3,
            baths: 2,
            image: it4,
            verified: true,
        },
    ],

    korea: [
        {
            id: 1,
            title: "Seoul Smart Apartment",
            city: "Seoul",
            price: "₩1.8M/mo",
            beds: 2,
            baths: 1,
            image: sk1,
            verified: true,
        },
        {
            id: 2,
            title: "Gangnam Luxury Condo",
            city: "Seoul",
            price: "₩2.4M/mo",
            beds: 2,
            baths: 2,
            image: sk2,
            verified: true,
        },
        {
            id: 3,
            title: "Busan Ocean Residence",
            city: "Busan",
            price: "₩1.5M/mo",
            beds: 1,
            baths: 1,
            image: sk3,
            verified: true,
        },
        {
            id: 4,
            title: "Seoul Contemporary Studio",
            city: "Seoul",
            price: "₩1.2M/mo",
            beds: 1,
            baths: 1,
            image: sk4,
            verified: true,
        },
    ],
};

export default internationalListings;