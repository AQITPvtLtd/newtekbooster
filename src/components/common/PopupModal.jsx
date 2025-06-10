"use client";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

export default function PopupModal() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(37,30,30,0.73)] px-5 lg:px-10">
            <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full">
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 text-white border-2 border-white rounded-2xl p-0.5 cursor-pointer hover:text-black z-10"
                >
                    <RxCross2 size={24} />
                </button>
                <Image
                    src="/popup/popup.jpeg"
                    alt="Popup"
                    className="rounded-lg w-full h-auto"
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
}
