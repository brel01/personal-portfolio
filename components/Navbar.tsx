'use client'
import { useState, useRef, useEffect } from "react";
import { poppinsSemiBold } from "@/helpers/exportFonts";
import {Facebook, InstagramIcon, Linkedin, Menu, TwitterIcon, X} from "lucide-react";

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
        <nav className="w-full px-0 py-3">
            <div className="flex items-center justify-between">
                {/* Logo or Title */}
                <a href={`./`} className={`font-bold text-lg ${poppinsSemiBold.className}`}>
                    The Kanyinsola Diyan
                </a>

                {/* Desktop Navbar */}
                <div className="hidden items-center justify-between gap-5 md:flex">
                    <a href={`#about`} className={`cursor-pointer hover:underline`}>About</a>
                    <a href={`#projects`} className={`cursor-pointer hover:underline`}>Projects</a>
                    <a href={`#engagements`} className={`cursor-pointer hover:underline`}>Engagements</a>
                    <a href={`#collaborations`} className={`cursor-pointer hover:underline`}>Collaborations</a>
                    <a href={`#contact`} className={`cursor-pointer hover:underline`}>Contact</a>
                </div>


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
                    <a href={`./`}
                       className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`} onClick={() => {setIsMenuOpen(false)}}>Home</a>
                    <a href={`#about`}
                       className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`} onClick={() => {setIsMenuOpen(false)}}>About</a>
                    <a href={`#projects`}
                       className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`} onClick={() => {setIsMenuOpen(false)}}>Projects</a>
                    <a href={`#engagements`}
                       className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`} onClick={() => {setIsMenuOpen(false)}}>Engagements</a>
                    <a href={`#collaborations`}
                       className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`} onClick={() => {setIsMenuOpen(false)}}>Collaborations</a>
                    <a href={`#contact`}
                       className={`border-b-[1px] border-b-[#474306] border-dashed py-2 cursor-pointer`} onClick={() => {setIsMenuOpen(false)}}>Contact</a>

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
