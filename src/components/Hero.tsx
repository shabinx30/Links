"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdHand } from "react-icons/io";
import { BiSolidHandDown } from "react-icons/bi";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const profile = () => {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.from(nameRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.15,
        });

        gsap.from(descRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.5,
        });
    }, [nameRef.current]);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
            >
                <Image
                    className="rounded-full border-2 border-black/5 dark:border-[#aeff62]/50 shadow-sm"
                    src="/profile.jpg"
                    alt="Profile photo of Shabeen Sharih"
                    width={160}
                    height={160}
                    priority
                    sizes="(max-width: 640px) 128px, 160px"
                />
            </motion.div>
            <div className="flex flex-col items-center gap-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="overflow-hidden"
                >
                    <h1
                        ref={nameRef}
                        className="text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white"
                    >
                        Shabeen Sharih
                    </h1>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p
                        ref={descRef}
                        className="flex items-center text-xs sm:text-sm md:text-base text-black/70 dark:text-white/70"
                    >
                        Hey guys{" "}
                        <IoMdHand className="ml-1 rotate-[-35deg] text-black dark:text-[#aeff62]" />
                        , check out my other platforms below{" "}
                        <BiSolidHandDown className="ml-1 text-black dark:text-[#aeff62]" />
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default profile;
