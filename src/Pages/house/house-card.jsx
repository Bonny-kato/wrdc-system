import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const HouseCard = ({house, onClick, isSelected=false}) =>{
    return (
        <div onClick={()=>onClick(house)} className={'flex justify-center cursor-pointer h-40 '} >

            <div className={`bg-skin-secondary ${isSelected && 'border-2 border-blue-500/30'} text-skin-base shadow-base w-full space-y-3 flex flex-col items-center justify-center  py-5 px-2 rounded-xl`}>

                <div>
                    <div className={'h-20 w-20 flex justify-center items-center rounded-full bg-secondary/20'}>
                        <FontAwesomeIcon icon={faUser} className={'h-7 w-7 '} />
                    </div>
                </div>
                <p className={' font-medium tracking-wide capitalize text-sm text-center '}>
                    {house.identificationNumber}
                </p>
            </div>
        </div>
    )
}
export default HouseCard