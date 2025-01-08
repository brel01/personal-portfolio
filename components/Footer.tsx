import { poppinsSemiBold } from "@/helpers/exportFonts";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const developedYear = 2025; // Replace with your developed year

    return (
        <footer className="w-full py-4">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-2 text-center">
                <p className={`text-sm ${poppinsSemiBold.className}`}>
                    &copy; {developedYear === currentYear
                    ? currentYear
                    : `${developedYear} - ${currentYear}`}{" "}
                    <a href={`https://github.com/brel01`} target={`_blank`}>LaTunde</a>. All rights reserved.
                </p>
                <p className="text-xs">
                    Designed and developed in {developedYear}.
                </p>
            </div>
        </footer>
    );
}
