import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChildReaching, faPerson, faPersonCane, faUsers} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const StatisticCard = ({title, value=1000, linkTo='/'}) =>{
    const currentTheme = useSelector(store => store.theme)
    return (
        <Link to={linkTo}  className={`bg-skin-secondary enable-transition
         title font-poppins test text-skin-base hover:bg-accent4 hover:text-white
          enable-transition shadow-base px-5 rounded-xl flex justify-between items-center p-3`}>
            <div>
                <div className={`${currentTheme === 'dark' ? '' : 'bg-blue-400/30'} h-12 w-12 bg-accent3 rounded-full flex justify-center items-center`}>
                    {title === "citizens" && <FontAwesomeIcon icon={faUsers} className={'h-6 w-6'} />}
                    {title === "children" && <FontAwesomeIcon icon={faChildReaching} className={'h-6 w-6'} />}
                    {title === "elders" && <FontAwesomeIcon icon={faPersonCane} className={'h-6 w-6'} />}
                    {title === "youth" && <FontAwesomeIcon icon={faPerson} className={'h-6 w-6'} />}
                </div>
            </div>
            <div className={'space-y-1'}>
                <p className={'text-4xl font-bold'}>{value}</p>
                <p className={`text-xs uppercase opacity-60 font-semibold ${currentTheme === "dark" ? "" : " text-gray-600"} tracking-wide`}>total {title}</p>
            </div>
        </Link>
    )
}
export default StatisticCard