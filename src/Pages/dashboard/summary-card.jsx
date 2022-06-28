import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChildReaching,
    faPerson,
    faPersonCane,
    faPersonDress,
    faUsers,
    faWheelchair
} from "@fortawesome/free-solid-svg-icons";

const SummaryCard = ({name, total=0}) => {
    return (
        <div className={'w-20 space-y-2 flex flex-col items-center '}>
            <div className={'h-10 w-10 flex bg-accent4 border-2/60 border-accent4 justify-center rounded-full items-center text-white/80'}>
                {name === "all citizen" && <FontAwesomeIcon icon={faUsers} className={'h-6 w-6'} />}
                {name === "children" && <FontAwesomeIcon icon={faChildReaching} className={'h-6 w-6'} />}
                {name === "elders" && <FontAwesomeIcon icon={faPersonCane} className={'h-6 w-6'} />}
                {(name === "youth" || name === "male") && <FontAwesomeIcon icon={faPerson} className={'h-6 w-6'} />}
                {name === "disability" && <FontAwesomeIcon icon={faWheelchair} className={'h-6 w-6'} />}
                {name === "female" && <FontAwesomeIcon icon={faPersonDress} className={'h-6 w-6'} />}
            </div>
            <p className={'text-xs capitalize'}>{name} {total}</p>
        </div>
    )
}
export default SummaryCard;