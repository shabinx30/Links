import Hero from "@/components/Hero";
import SocialMedia from "@/components/SocialMedia";
import PersonalSite from "@/components/PersonalSite";
import { socialLinks } from "@/const/socialLinks";

const page = () => {
    return (
        <main className="relative min-h-screen w-full bg-linear-to-b from-transparent to-[#f7f7f7] dark:from-[#0b0b0b83] dark:to-[#121212]">
            <div className="absolute inset-0 pointer-events-none mask-[radial-gradient(50%_50%_at_50%_0%,black,transparent_70%)]" />

            <section className="container mx-auto px-6 py-12 max-w-3xl flex flex-col items-center gap-8">
                <div className="flex flex-col items-center text-center gap-4">
                    <Hero />
                </div>

                <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {socialLinks.map(
                        ({ name, href, icon: Icon, bg, ring }, i) => (
                            <SocialMedia
                                key={name}
                                name={name}
                                href={href}
                                index={i}
                                bg={bg}
                                ring={ring}
                            />
                        )
                    )}
                </ul>

                <PersonalSite />
            </section>
        </main>
    );
};

export default page;
