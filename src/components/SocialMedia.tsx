"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { socialLinks } from "@/const/socialLinks";

const SocialMedia = ({
    name,
    href,
    index,
    bg,
    ring,
}: {
    name: string;
    href: string;
    index: number;
    bg: string;
    ring: string;
}) => {
    const Icon = socialLinks[index].icon;

    return (
        <motion.li
            key={name}
            className="list-none"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring" }}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${name} profile in a new tab`}
                className={`group ${bg} border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 md:py-5 flex items-center justify-between gap-4 transition-all hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 ${ring}`}
            >
                <span className="flex items-center gap-3 md:gap-4">
                    <span className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-[#aeff62] text-black">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </span>
                    <span className="text-base md:text-lg font-medium text-black dark:text-white">
                        {name}
                    </span>
                </span>
                <FiExternalLink className="h-5 w-5 text-black/60 dark:text-white/60 transition-transform group-hover:translate-x-0.5" />
            </a>
        </motion.li>
    );
};

export default SocialMedia;
