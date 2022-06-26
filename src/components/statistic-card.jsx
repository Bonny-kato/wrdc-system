import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const StatisticCard = ({title, value=1000}) =>{
    const currentTheme = useSelector(store => store.theme)
    return (
        <div className={`bg-skin-secondary test text-skin-base shadow-base px-5 rounded-xl flex justify-between items-center p-3`}>
            <div>
                <div className={`${currentTheme === 'dark' ? '' : 'bg-blue-400/30'} h-12 w-12 bg-accent3 rounded-full flex justify-center items-center`}>
                    <FontAwesomeIcon icon={faUsers} className={'h-6 w-6'} />
                </div>
            </div>
            <div className={'space-y-1'}>
                <p className={'text-4xl font-bold'}>{value}</p>
                <p className={`text-xs uppercase opacity-60 font-semibold ${currentTheme === "dark" ? "" : " text-gray-600"} tracking-wide`}>total {title}</p>
            </div>
        </div>
    )
}
export default StatisticCard