import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faCalendar, faEnvelope, faHandSparkles, faHouse, faKaaba, faLocationArrow,
    faLocationCrosshairs,
    faLocationDot,
    faPersonHalfDress, faPhone,
    faUser,
    faWheelchair
} from "@fortawesome/free-solid-svg-icons";

const Avatar = ({iconName}) => {
    const iconClass = "h-6 w-6"
    return (
        <div className={'h-12 bg-white/5 w-12 text-skin-base rounded-xl flex items-center justify-center'}>
            {iconName === "user" && <FontAwesomeIcon icon={faUser} className={iconClass}/>}
            {iconName === "calender" && <FontAwesomeIcon icon={faCalendar} className={iconClass}/>}
            {iconName === "gender" && <FontAwesomeIcon icon={faPersonHalfDress} className={iconClass}/>}
            {iconName === "wheelchair" && <FontAwesomeIcon icon={faWheelchair} className={iconClass}/>}
            {iconName === "location" && <FontAwesomeIcon icon={faLocationDot} className={iconClass}/>}
            {iconName === "street" && <FontAwesomeIcon icon={faLocationCrosshairs} className={iconClass}/>}
            {iconName === "district" && <FontAwesomeIcon icon={faLocationArrow} className={iconClass}/>}
            {iconName === "religion" && <FontAwesomeIcon icon={faKaaba} className={iconClass}/>}
            {iconName === "mail" && <FontAwesomeIcon icon={faEnvelope} className={iconClass}/>}
            {iconName === "phone" && <FontAwesomeIcon icon={faPhone} className={iconClass}/>}
            {iconName === "status" && <FontAwesomeIcon icon={faHandSparkles} className={iconClass}/>}
            {iconName === "position" && <FontAwesomeIcon icon={faBriefcase} className={iconClass}/>}
            {iconName === "house" && <FontAwesomeIcon icon={faHouse} className={iconClass}/>}
        </div>
    )
}
export default Avatar;