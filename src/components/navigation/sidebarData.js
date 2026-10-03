import {
    House,
    LayoutDashboard,
    Search,
    Map,
    Globe,
    Building2,
    Heart,
    Bookmark,
    MessageSquare,
    Bell,
    ShieldCheck,
    BadgeCheck,
    ShieldAlert,
    ScanLine,
    Flag,
    Sparkles,
    HomeIcon,
    Calculator,
    Info,
    Phone,
} from "lucide-react";

export const sidebarMenu = [
    {
        title: "DISCOVER",
        items: [
            { icon: House, label: "Home", active: true, path: "/", },
            { icon: LayoutDashboard, label: "Overview", path: "/overview", },
            { icon: Search, label: "Search Properties", path: "/search", },
            { icon: Map, label: "Interactive Map", path: "/propertyMap", },
            { icon: Globe, label: "International Rentals", path: "/international-rental", },
        ],
    },

    {
        title: "MY SPACE",
        items: [
            { icon: Building2, label: "My Properties", path: "/myProperties", },
            { icon: Heart, label: "Wishlist", path: "/wishlist", },
            { icon: MessageSquare, label: "Messages", badge: 3, path: "/messages", },
            { icon: Bell, label: "Notifications", badge: 7, path: "/notifications", },
        ],
    },

    {
        title: "SAFETY CENTER",
        items: [

            { icon: ShieldCheck, label: "Verification Request", path: "/verification-request", },
            { icon: BadgeCheck, label: "Verify Agent", path: "/verify-agent", },
            { icon: ScanLine, label: "Scan Documents", path: "/scan-documents", },
            { icon: ShieldAlert, label: "Scam Detector", path: "/scam-detector", },
            { icon: Flag, label: "Report Scam", path: "/report", },

        ],
    },

    {
        title: "AI TOOLS",
        items: [
            { icon: Sparkles, label: "Finder AI", path: "/finder-ai", },
            { icon: HomeIcon, label: "Home DNA", path: "/home-dna", },
            { icon: Calculator, label: "CostCalculator", path: "/cost-calculator", },
        ],
    },

    {
        title: "COMPANY",
        items: [
            { icon: Info, label: "About Finders", path: "/about", },
            { icon: Phone, label: "Contact", path: "/contact" },
        ],
    },
];