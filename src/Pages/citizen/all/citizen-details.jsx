import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePen, faTrashCan, faUser} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import {removeCitizen} from "../../../provider/api";
import {Link} from "react-router-dom";

const CitizenDetails = ({currentCitizen}) =>{
    const currTheme = useSelector((state) => state.theme)
    const {data, refetch} = useQuery([`remove-user-${currentCitizen.id}`, currentCitizen.id], removeCitizen, {
        enabled:false,
        onSuccess: () =>{
            console.log("deleted successfully..")
        }
    })
    const deleteCitizen = () =>{
        console.log("on delete")
        refetch();
    }
    return (
        <div className={''}>
            <div className={`${currTheme ==="dark" ? "bg-white/5 ":"bg-white "} sticky rounded-xl pb-2 top-10  space-y-2 ` }>
                <div className={'p-3 space-y-2'}>
                    <p className={'text-secondary text-sm font-bold text-sm tracking-wide uppercase'}>Citizen details</p>
                    <div className={'h-40 bg-secondary/10 rounded-xl flex justify-center items-center'}>
                        <FontAwesomeIcon icon={faUser} className={'h-20 w-20 text-gray-100/50'} />
                    </div>

                </div>

                <div className={'flex justify-center space-x-3'}>
                    <div onClick={deleteCitizen} className={'h-8 w-8 bg-blue-500 flex justify-center items-center rounded-full'}>
                        <FontAwesomeIcon icon={faTrashCan} className={'h-5 w-5'} />
                    </div>

                    <Link to={'/citizen/edit/' + currentCitizen.id} className={'h-8 w-8 bg-blue-500 flex justify-center items-center rounded-full'}>
                        <FontAwesomeIcon icon={faFilePen} className={'h-5 w-5'} />
                    </Link>
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