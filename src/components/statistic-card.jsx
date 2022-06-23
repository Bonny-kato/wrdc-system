import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

const StatisticCard = ({title, value=1000}) =>{
    return (
        <div className={'bg-white/5 px-5 shadow rounded-xl flex justify-between items-center p-3'}>
            <div>
                <div className={'h-12 w-12 bg-accent3 rounded-full flex justify-center items-center'}>
                    <FontAwesomeIcon icon={faUsers} className={'h-6 w-6'} />
                </div>
            </div>
            <div className={'space-y-1'}>
                <p className={'text-3xl font-bold'}>{value}</p>
                <p className={'text-xs uppercase opacity-60 tracking-wide'}>total {title}</p>
            </div>
        </div>
    )
}
export default StatisticCard