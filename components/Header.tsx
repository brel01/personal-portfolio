
import CurveyCircle from "@/components/CurveyCircle";
import styles from '@/styles/header.module.css';
import {poppinsExtraBold} from "@/helpers/exportFonts";

export default  function Header() {

    return (
        <div className="flex flex-col justify-start items-start mt-8 w-full max-w-sm space-y-8 lg:space-y-0 lg:max-w-screen-lg lg:flex-row lg:items-end">
            <div className="space-y-6">
                <div className="flex-1 felx flex-col space-y-1 justify-start font-bold lg:space-y-1">
                    <div className={`text-lg lg:text-lg`}>Hello, I’m Kanyinsola</div>
                    <div className={`text-5xl leading-[60px] lg:text-[60px] font-bold lg:leading-[70px] ${poppinsExtraBold.className}`}>Data <br/> Analyst</div>
                    <div className={`text-lg lg:text-lg`}>Global Talent</div>
                </div>
                <div className="relative rounded-md w-fit">
                    <div className={`text-center py-2 text-gray-800 font-medium bg-primary_yellow cursor-pointer ${styles.resumeButton}`}>
                        Resume
                    </div>
                    <div className={`${styles.resumeButtonBorder} ${styles.resumeButton}`}></div>
                </div>
            </div>

            <div className="flex-1 flex justify-end items-end w-full ">
                <CurveyCircle/>
            </div>
        </div>
    )
}
