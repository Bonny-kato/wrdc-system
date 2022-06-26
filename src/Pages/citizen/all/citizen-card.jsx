import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CitizenCard = ({citizen, setCurrentCitizen}) =>{
    const currentTheme = useSelector((state) => state.theme)
    return (
        <Link to={'/citizen/' + citizen._id} className={'flex justify-center cursor-pointer h-40 '} onClick={()=>setCurrentCitizen(citizen)}>

            <div className={`bg-skin-secondary text-skin-base shadow-base w-full space-y-3 flex flex-col items-center justify-center  py-5 px-2 rounded-xl`}>

                <div>
                    <div className={'h-20 w-20 flex justify-center items-center rounded-full bg-secondary/20'}>
                        <FontAwesomeIcon icon={faUser} className={'h-7 w-7 '} />
                    </div>
                </div>
                <p className={' font-medium tracking-wide capitalize text-sm text-center '}>
                    {citizen.firstName}  {citizen.lastName}
                </p>
            </div>
        </Link>
    )
}
export default CitizenCard;