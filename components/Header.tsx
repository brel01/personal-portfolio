
import CurveyCircle from "@/components/CurveyCircle";
import styles from '@/styles/header.module.css';
import {poppinsExtraBold} from "@/helpers/exportFonts";

export default  function Header() {

    return (
        <div className="flex justify-between items-end mt-8 w-full">
            <div className="space-y-6">
                <div className="flex-1 felx flex-col gap-6 justify-start font-bold">
                    <div className="">Hello, I’m Kanyinsola</div>
                    <div className={`text-[60px] font-bold ${poppinsExtraBold.className}`}>Data Analyst</div>
                    <div>Based in Nigeria</div>

                </div>
                <div className="relative rounded-md w-fit">
                    <div className={`text-center py-2 text-gray-800 font-medium bg-primary_yellow ${styles.resumeButton}`}>
                        Resume
                    </div>
                    <div className={`${styles.resumeButtonBorder} ${styles.resumeButton}`}></div>
                </div>
            </div>

            <div className="flex-1 flex justify-end ">
                <CurveyCircle/>
            </div>
        </div>
    )
}