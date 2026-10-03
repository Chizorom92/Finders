import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { notifications as initialNotifications } from "../pages/dashboard/mockData";

const MySpaceContext = createContext(null);

const NOTIFICATIONS_KEY = "finders_notifications";

const getStoredNotifications = () => {
    try {
        const stored = localStorage.getItem(NOTIFICATIONS_KEY);

        return stored
            ? JSON.parse(stored)
            : initialNotifications;
    } catch (error) {
        console.error("Unable to read notifications:", error);
        return initialNotifications;
    }
};

export const MySpaceProvider = ({ children }) => {
    const [notifications, setNotifications] = useState(
        getStoredNotifications
    );

    // Persist notification changes
    useEffect(() => {
        localStorage.setItem(
            NOTIFICATIONS_KEY,
            JSON.stringify(notifications)
        );
    }, [notifications]);

    const unreadNotificationCount = useMemo(
        () =>
            notifications.filter(
                (notification) => !notification.read
            ).length,
        [notifications]
    );

    const markNotificationRead = (id) => {
        setNotifications((current) =>
            current.map((notification) =>
                notification.id === id
                    ? {
                        ...notification,
                        read: true,
                    }
                    : notification
            )
        );
    };

    const markAllNotificationsRead = () => {
        setNotifications((current) =>
            current.map((notification) => ({
                ...notification,
                read: true,
            }))
        );
    };

    const removeNotification = (id) => {
        setNotifications((current) =>
            current.filter(
                (notification) => notification.id !== id
            )
        );
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    const value = {
        notifications,
        unreadNotificationCount,
        markNotificationRead,
        markAllNotificationsRead,
        removeNotification,
        clearNotifications,
    };

    return (
        <MySpaceContext.Provider value={value}>
            {children}
        </MySpaceContext.Provider>
    );
};

export const useMySpace = () => {
    const context = useContext(MySpaceContext);

    if (!context) {
        throw new Error(
            "useMySpace must be used inside MySpaceProvider"
        );
    }

    return context;
};