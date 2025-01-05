import {poppinsSemiBold} from "@/helpers/exportFonts";

export default  function Navbar() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className={`font-bold ${poppinsSemiBold.className}`}>Kanyinsola Diyan</div>
                <div className="flex items-center justify-between gap-5">
                    <div>Home</div>
                    <div>About</div>
                    <div>Work</div>
                </div>
                <div>Twitter</div>
            </div>
        </div>
    )
}