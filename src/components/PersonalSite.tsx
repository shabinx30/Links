"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const PersonalSite = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring" }}
            className="w-full"
        >
            <Link
                className="group w-full inline-flex items-center justify-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 px-5 py-4 md:py-5 text-black dark:text-[#aeff62] hover:bg-[#aeff62]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aeff62]"
                href="https://shabeensharih.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
            >
                <span className="text-base md:text-lg font-semibold">
                    Checkout My Personal Website
                </span>
                <FiExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
        </motion.div>
    );
};

export default PersonalSite;
