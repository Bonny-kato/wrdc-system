import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const CitizenCard = ({citizen, setCurrentCitizen}) =>{
    return (
        <div className={'flex justify-center cursor-pointer h-40 '} onClick={()=>setCurrentCitizen(citizen)}>
            <div className={'bg-white/5 w-full space-y-3 flex flex-col items-center justify-center  py-5 px-2 rounded-xl'}>

                <div className={'h-20 w-20 flex justify-center items-center rounded-full bg-secondary/20'}>
                    <FontAwesomeIcon icon={faUser} className={'h-7 w-7 text-gray-100'} />
                </div>
                <p className={' font-medium tracking-wide capitalize text-secondary'}>
                    {citizen.first_name}  {citizen.middle_name}
                </p>
            </div>
        </div>
    )
}
export default CitizenCard;