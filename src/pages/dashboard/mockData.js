export const dashboardStats = {
    properties: 8,
    wishlist: 12,
    messages: 3,
};

export const recentActivity = [
    {
        id: 1,
        type: "verification",
        title: "Property verification completed",
        time: "2 hours ago",
    },
    {
        id: 2,
        type: "message",
        title: "New message from Prime Realty",
        time: "5 hours ago",
    },
    {
        id: 3,
        type: "wishlist",
        title: "Property added to wishlist",
        time: "Yesterday",
    },
];

export const notifications = [
    {
        id: 1,
        type: "verification",
        text: "Your property verification has been completed.",
        time: "2 hours ago",
        read: false,
    },
    {
        id: 2,
        type: "message",
        text: "Prime Realty sent you a new message.",
        time: "5 hours ago",
        read: false,
    },
    {
        id: 3,
        type: "price",
        text: "A saved property has changed its price.",
        time: "Yesterday",
        read: true,
    },
];