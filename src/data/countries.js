 // CANADA
import canadaHero from "../assets/countries/canada/canada1.webp";
import canadaCity1 from "../assets/countries/canada/canada2.jpg";
import canadaCity2 from "../assets/countries/canada/canada3.jpg";
import canadaStudent from "../assets/countries/canada/canada4.jpg";

// UK
import ukHero from "../assets/countries/uk/uk1.jpg";
import ukCity1 from "../assets/countries/uk/uk2.jpg";
import ukCity2 from "../assets/countries/uk/uk3.jpg";
import ukStudent from "../assets/countries/uk/uk4.jpg";

// AUSTRALIA
import australiaHero from "../assets/countries/australia/Australia1.jpg";
import australiaCity1 from "../assets/countries/australia/Australia2.jpg";
import australiaCity2 from "../assets/countries/australia/Australia3.jpg";
import australiaStudent from "../assets/countries/australia/Australia4.jpg";

// USA
import usaHero from "../assets/countries/newyork/NewYork1.jpg";
import usaCity1 from "../assets/countries/newyork/NewYork2.jpg";
import usaCity2 from "../assets/countries/newyork/NewYork3.jpg";
import usaStudent from "../assets/countries/newyork/NewYork4.jpg";

// ITALY
import italyHero from "../assets/countries/italy/Italy1.jpg";
import italyCity1 from "../assets/countries/italy/Italy2.jpg";
import italyCity2 from "../assets/countries/italy/Italy3.jpg";
import italyStudent from "../assets/countries/italy/Italy4.jpg";

// KOREA
import koreaHero from "../assets/countries/korea/korea1.jpg";
import koreaCity1 from "../assets/countries/korea/korea2.jpg";
import koreaCity2 from "../assets/countries/korea/korea3.jpg";
import koreaStudent from "../assets/countries/korea/korea4.jpg";

 // JAPAN
 import japanHero from "../assets/international/Tokyo.jpg";
 import japanCity1 from "../assets/international/tokyo1.jpg";
 import japanCity2 from "../assets/international/tokyo2.jpg";
 import japanStudent from "../assets/international/tokyo3.jpg";

 // FRANCE
 import franceHero from "../assets/international/paris.jpg";
 import franceCity1 from "../assets/international/france1.jpg";
 import franceCity2 from "../assets/international/france2.jpg";
 import franceStudent from "../assets/international/france3.jpg";

 // UAE
 import uaeHero from "../assets/international/dubai.jpg";
 import uaeCity1 from "../assets/international/dubai1.jpg";
 import uaeCity2 from "../assets/international/dubai2.jpg";
 import uaeStudent from "../assets/international/dubai3.jpg";

 // GERMANY
 import germanyHero from "../assets/international/berlin.jpg";
 import germanyCity1 from "../assets/international/berlin1.jpg";
 import germanyCity2 from "../assets/international/berlin2.jpg";
 import germanyStudent from "../assets/international/berlin3.jpg";

 // SPAIN
 import spainHero from "../assets/international/spain.jpg";
 import spainCity1 from "../assets/international/spain1.jpg";
 import spainCity2 from "../assets/international/spain2.jpg";
 import spainStudent from "../assets/international/spain3.jpg";

 // SOUTH AFRICA
 import southAfricaHero from "../assets/international/capetown.jpg";
 import southAfricaCity1 from "../assets/international/capetown1.jpg"
 import southAfricaCity2 from "../assets/international/capetown2.jpg"
 import southAfricaStudent from "../assets/international/capetown3.jpg"

 // SWITZERLAND
 import switzerlandHero from "../assets/international/switzerland.jpg";
 import switzerlandCity1 from "../assets/international/switzerland1.jpg"
 import switzerlandCity2 from "../assets/international/switzerland2.jpg"
 import switzerlandStudent from "../assets/international/switzerland3.jpg"

 // SINGAPORE
 import singaporeHero from "../assets/international/singapore.jpg";
 import singaporeCity1 from "../assets/international/singapore1.jpg"
 import singaporeCity2 from "../assets/international/singapore2.jpg"
 import singaporeStudent from "../assets/international/singapore3.jpg"

export const countries = [
    {
        id: "canada",
        name: "Canada",
        code: "CA",
        currency: "CAD",
        cities: ["Toronto", "Vancouver", "Calgary"],
        homes: 1240,
        hero: canadaHero,
        gallery: [canadaCity1, canadaCity2, canadaStudent],
        description:
            "Verified apartments, student housing, executive rentals and family homes across Canada's safest cities."
    },

    {
        id: "uk",
        name: "United Kingdom",
        code: "GB",
        currency: "GBP",
        cities: ["London", "Manchester", "Birmingham"],
        homes: 980,
        hero: ukHero,
        gallery: [ukCity1, ukCity2, ukStudent],
        description:
            "Verified apartments, student housing, executive rentals and family homes."
    },

    {
        id: "usa",
        name: "United States",
        code: "US",
        currency: "USD",
        cities: ["New York", "Houston", "Chicago"],
        homes: 1870,
        hero: usaHero,
        gallery: [usaCity1, usaCity2, usaStudent],
        description:
            "Verified apartments, student housing, executive rentals and family homes."
    },

    {
        id: "australia",
        name: "Australia",
        code: "AU",
        currency: "AUD",
        cities: ["Sydney", "Melbourne", "Brisbane"],
        homes: 720,
        hero: australiaHero,
        gallery: [australiaCity1, australiaCity2, australiaStudent],
        description:
            "Verified apartments, student housing, executive rentals and family homes."
    },

    {
        id: "italy",
        name: "Italy",
        code: "IT",
        currency: "EUR",
        cities: ["Milan", "Rome", "Florence"],
        homes: 540,
        hero: italyHero,
        gallery: [italyCity1, italyCity2, italyStudent],
        description:
            "Verified apartments, student housing, executive rentals and family homes."
    },

    {
        id: "korea",
        name: "South Korea",
        code: "KR",
        currency: "KRW",
        cities: ["Seoul", "Busan", "Incheon"],
        homes: 650,
        hero: koreaHero,
        gallery: [koreaCity1, koreaCity2, koreaStudent],
        description:
            "Verified apartments, student housing, executive rentals and family homes."
    },

    {
        id: "japan",
        name: "Japan",
        code: "JP",
        currency: "JPY",
        cities: ["Tokyo", "Osaka", "Kyoto"],
        homes: 890,
        hero: japanHero,
        gallery: [japanCity1, japanCity2, japanStudent],
        description:
            "Verified apartments, student housing and executive rentals across Japan."
    },

    {
        id: "france",
        name: "France",
        code: "FR",
        currency: "EUR",
        cities: ["Paris", "Lyon", "Marseille"],
        homes: 760,
        hero: franceHero,
        gallery: [franceCity1, franceCity2, franceStudent],
        description:
            "Verified apartments and furnished rentals across France."
    },

    {
        id: "uae",
        name: "United Arab Emirates",
        code: "AE",
        currency: "AED",
        cities: ["Dubai", "Abu Dhabi", "Sharjah"],
        homes: 980,
        hero: uaeHero,
        gallery: [uaeCity1, uaeCity2, uaeStudent],
        description:
            "Luxury apartments, business residences and family homes across the UAE."
    },

    {
        id: "germany",
        name: "Germany",
        code: "DE",
        currency: "EUR",
        cities: ["Berlin", "Munich", "Hamburg"],
        homes: 810,
        hero: germanyHero,
        gallery: [germanyCity1, germanyCity2, germanyStudent],
        description:
            "Verified rentals for students, professionals and families."
    },

    {
        id: "spain",
        name: "Spain",
        code: "ES",
        currency: "EUR",
        cities: ["Barcelona", "Madrid", "Valencia"],
        homes: 690,
        hero: spainHero,
        gallery: [spainCity1, spainCity2, spainStudent],
        description:
            "Beachfront apartments, city homes and executive rentals across Spain."
    },

    {
        id: "south-africa",
        name: "South Africa",
        code: "ZA",
        currency: "ZAR",
        cities: ["Cape Town", "Johannesburg", "Durban"],
        homes: 610,
        hero: southAfricaHero,
        gallery: [southAfricaCity1, southAfricaCity2, southAfricaStudent],
        description:
            "Verified apartments and family homes in South Africa's major cities."
    },

    {
        id: "switzerland",
        name: "Switzerland",
        code: "CH",
        currency: "CHF",
        cities: ["Zurich", "Geneva", "Basel"],
        homes: 540,
        hero: switzerlandHero,
        gallery: [switzerlandCity1, switzerlandCity2, switzerlandStudent],
        description:
            "Premium verified rentals in Switzerland's safest cities."
    },

    {
        id: "singapore",
        name: "Singapore",
        code: "SG",
        currency: "SGD",
        cities: ["Marina Bay", "Orchard", "Jurong"],
        homes: 720,
        hero: singaporeHero,
        gallery: [singaporeCity1, singaporeCity2, singaporeStudent],
        description:
            "Modern furnished apartments and executive residences across Singapore."
    }
];