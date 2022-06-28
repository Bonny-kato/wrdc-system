import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const HouseHeader = ({setIsOpen, houseList}) => {
    return (
        <header className={' font-semibold text-lg'}>
            <div className={'flex justify-between items-center'}>
                <p>Houses</p>
                <button
                    onClick={() => setIsOpen(true)}
                    className={"flex items-center text-sm border-[1.5px] border-accent4 " +
                        "rounded-md bg-accent4 text-white space-x-2 px-4 py-2"}>
                    <FontAwesomeIcon icon={faPlus} className={'h-5  w-5'}/>
                    <p className={'tracking-wider'}>Add House</p>
                </button>
            </div>
            <p className={'text-xs uppercase tracking-wider opacity-60'}>total houses
                <span className={'font-bold'}> {houseList.length}</span></p>
        </header>
    )
}
export default HouseHeader;