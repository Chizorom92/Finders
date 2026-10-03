export const conversations = [
    {
        id: 1,
        name: "Prime Realty",
        initials: "PR",
        verified: true,
        property: "Modern 2 Bedroom Apartment",
        location: "Lekki Phase 1, Lagos",
        lastMessage: "Yes, it is still available.",
        time: "10:24 AM",
        unread: 2,
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Hello, I'm interested in the 2 bedroom apartment at Lekki Phase 1.",
                time: "10:18 AM",
            },
            {
                id: 2,
                sender: "agent",
                text: "Hello! Thanks for reaching out to Prime Realty.",
                time: "10:20 AM",
            },
            {
                id: 3,
                sender: "agent",
                text: "Yes, it is still available.",
                time: "10:24 AM",
            },
        ],
    },

    {
        id: 2,
        name: "Urban Nest Properties",
        initials: "UN",
        verified: true,
        property: "Luxury 3 Bedroom Apartment",
        location: "Ikeja GRA, Lagos",
        lastMessage: "The property can be viewed this weekend.",
        time: "Yesterday",
        unread: 1,
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Is the apartment still available for inspection?",
                time: "Yesterday",
            },
            {
                id: 2,
                sender: "agent",
                text: "Yes, the property can be viewed this weekend.",
                time: "Yesterday",
            },
        ],
    },

    {
        id: 3,
        name: "Capital Homes",
        initials: "CH",
        verified: true,
        property: "Contemporary 4 Bedroom Duplex",
        location: "Wuse 2, Abuja",
        lastMessage: "I'll confirm the inspection time shortly.",
        time: "Monday",
        unread: 0,
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Good afternoon. I would like to know more about this property.",
                time: "Monday",
            },
            {
                id: 2,
                sender: "agent",
                text: "Good afternoon. I'll confirm the inspection time shortly.",
                time: "Monday",
            },
        ],
    },

    {
        id: 4,
        name: "HomeFind NG",
        initials: "HN",
        verified: false,
        property: "Elegant 3 Bedroom Terrace",
        location: "Yaba, Lagos",
        lastMessage: "The verification is still pending.",
        time: "Sunday",
        unread: 0,
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Has the property verification been completed?",
                time: "Sunday",
            },
            {
                id: 2,
                sender: "agent",
                text: "The verification is still pending.",
                time: "Sunday",
            },
        ],
    },
];