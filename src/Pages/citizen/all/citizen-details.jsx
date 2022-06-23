import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const CitizenDetails = ({currentCitizen}) =>{
    return (
        <div className={''}>
            <div className={'bg-white/5 sticky rounded-xl pb-2 top-10  space-y-2 '}>
                <div className={'p-3 space-y-2'}>
                    <p className={'text-secondary text-sm font-bold text-sm tracking-wide uppercase'}>Citizen details</p>
                    <div className={'h-40 bg-secondary/10 rounded-xl flex justify-center items-center'}>
                        <FontAwesomeIcon icon={faUser} className={'h-20 w-20 text-gray-100/50'} />
                    </div>

                </div>
                <div className={'space-y-2 bg-secondary/10 p-3 text-secondary rounded-xl m-2 text-sm'}>
                    <p>Full Name: <span className={'pl-3'}>{currentCitizen.first_name}</span></p>
                    <p>Birth Date: <span className={'pl-3'}>{currentCitizen.birth_date}</span> </p>
                    <p>Age: <span className={'pl-3'}>{currentCitizen.age}</span> </p>
                    <p>Gender: <span className={'pl-3'}> {currentCitizen.gender}</span></p>
                    <p>Disability: <span className={'pl-3'}>{currentCitizen.disability}</span></p>
                    <p>Title: <span className={'pl-3'}>{currentCitizen.title}</span></p>
                    <p>District: <span className={'pl-3'}>{currentCitizen.district}</span></p>
                    <p>Region: <span className={'pl-3'}>{currentCitizen.region}</span></p>
                    <p>Religion: <span className={'pl-3'}>{currentCitizen.religion}</span></p>
                    <p>House Number: <span className={'pl-3'}>{currentCitizen.house_number}</span></p>
                    <p>Village/Street: <span className={'pl-3'}>{currentCitizen.street}</span></p>
                </div>
            </div>
        </div>
    )
}
export default CitizenDetails;