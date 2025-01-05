'use client'
import { useState, useRef, useEffect } from "react";
import { poppinsSemiBold } from "@/helpers/exportFonts";
import {Facebook, InstagramIcon, Linkedin, Menu, TwitterIcon, X, XIcon} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full px-4 py-3">
            <div className="flex items-center justify-between">
                {/* Logo or Title */}
                <div className={`font-bold text-lg ${poppinsSemiBold.className}`}>
                    Kanyinsola Diyan
                </div>

                {/* Desktop Navbar */}
                <div className="hidden items-center justify-between gap-5 md:flex">
                    <div>Home</div>
                    <div>About</div>
                    <div>Work</div>
                </div>
                <div className="hidden md:flex">Twitter</div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="flex items-center justify-center w-8 h-8 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <X /> :
                   <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    ref={menuRef} // Attach ref to the dropdown container
                    className="flex flex-col gap-3 mt-3 md:hidden"
                >
                    <a href="#about" className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`}>About</a>
                    <a href="#work" className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`}>Work</a>
                    <div className={`flex gap-3 my-2`}>
                        <a href={'#'} target={'_blank'}> <TwitterIcon/></a>
                        <a href={'#'} target={'_blank'}><Linkedin/></a>
                        <a href={'#'} target={'_blank'}><InstagramIcon/></a>
                        <a href={'#'} target={'_blank'}> <Facebook/></a>
                    </div>
                </div>
                )}
        </nav>
    );
}
