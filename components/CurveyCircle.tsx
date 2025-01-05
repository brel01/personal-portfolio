
import styles from '@/styles/header.module.css';
import Image from "next/image";
import profileImage from '@/assets/images/profile.jpg';

const CurvyCircle = () => {
    return (
        <div className={`relative`}>
            <Image
                src={profileImage}
                alt="Person's Image"
                className={styles.tiltedCircle}
            />
            <div className={`${styles.tiltedCircle} ${styles.tiltedCircleBorder}`}></div>
            <div className={`${styles.tiltedCircleSlash}`}>
                <svg width="104" height="19" viewBox="0 0 104 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.2021" width="5" height="30" transform="rotate(24 12.2021 0)" fill="#474306"/>
                    <rect x="33.9719" width="5" height="30" transform="rotate(24 33.9719 0)" fill="#474306"/>
                    <rect x="55.7418" width="5" height="30" transform="rotate(24 55.7418 0)" fill="#474306"/>
                    <rect x="77.5116" width="5" height="30" transform="rotate(24 77.5116 0)" fill="#474306"/>
                    <rect x="99.2813" width="5" height="30" transform="rotate(24 99.2813 0)" fill="#474306"/>
                </svg>
            </div>
            <div className={`${styles.tiltedCirclePlus}`}>
                <svg width="50" height="32" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" y="16" width="6" height="24" rx="3" fill="#474306"/>
                    <rect y="31" width="6" height="24" rx="3" transform="rotate(-90 0 31)" fill="#474306"/>
                    <rect x="35" y="32" width="6" height="24" rx="3" fill="#474306"/>
                    <rect x="26" y="47" width="6" height="24" rx="3" transform="rotate(-90 26 47)" fill="#474306"/>
                    <rect x="35" width="6" height="24" rx="3" fill="#474306"/>
                    <rect x="26" y="15" width="6" height="24" rx="3" transform="rotate(-90 26 15)" fill="#474306"/>
                </svg>
            </div>
        </div>
    )
};

export default CurvyCircle;
