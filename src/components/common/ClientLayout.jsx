"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ClientLayout = ({ children }) => {
    const pathname = usePathname();
    const [routeKey, setRouteKey] = useState(pathname);

    useEffect(() => {
        setRouteKey(pathname);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={routeKey}
                initial={{ opacity: 0, y: 50 }} // 👈 from bottom
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} // 👈 no up motion on exit
                transition={{
                    duration: 0.6,
                    ease: [0.25, 0.8, 0.25, 1], // smooth easing
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default ClientLayout;
