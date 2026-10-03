import { Link } from "react-router-dom";
import { Bell, Map } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const TopNavbar = () => {
    return (
        <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
            <div className="flex h-20 items-center justify-between px-8">

                {/* Left */}
                <div className="hidden md:block">
                    <h1 className="font-serif text-3xl font-bold">
                        Welcome to Finders
                    </h1>

                    <p className="text-sm text-[var(--text-light)]">
                        Find verified homes with confidence
                    </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">

                    <Link
                        to="/propertyMap"
                        className="rounded-xl p-2 hover:bg-[var(--surface-2)]">
                        <Map size={20}/>
                    </Link>

                    <Link
                        to="/notifications"
                        className="relative rounded-xl p-2 hover:bg-[var(--surface-2)]">
                        <Bell size={20}/>

                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"/>
                    </Link>

                    <ThemeToggle/>



                </div>
            </div>
        </header>
    );
};

export default TopNavbar;