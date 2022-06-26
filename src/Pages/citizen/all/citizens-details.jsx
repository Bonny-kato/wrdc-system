import BaseLayout from "../../../Layouts/BaseLayout";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getCitizenDetails} from "../../../provider/api";
import {useState} from "react";
import {formatDate, getAge} from "../../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePen} from "@fortawesome/free-solid-svg-icons";

const CitizenDetails = () =>{
    const {citizenId} = useParams()
    const [citizen, setCitizen] = useState({});
    const {isLoading, isFetching} = useQuery([`citizen-${citizenId}`, citizenId], getCitizenDetails, {
        onSuccess: (res) => {
            setCitizen(res.data)
        }
    })

    if(isLoading || isFetching) {
       return (
           <BaseLayout>
               <p>is loading</p>
           </BaseLayout>
       )
    }

    return(
        <BaseLayout>
          <div className={'space-y-10 text-skin-base'}>
              <p className={` font-semibold text-lg`}>
                  Basic Details
              </p>

              <div className={'grid grid-cols-2'}>
                 <div>
                     <Link to={'/citizen/edit/' + citizen._id} className={'h-8 w-8 bg-blue-500 flex justify-center items-center rounded-full'}>
                         <FontAwesomeIcon icon={faFilePen} className={'h-5 w-5'} />
                     </Link>
                 </div>
                 <div>
                     <p>Full Name: <span className={'pl-3'}>{citizen.firstName} {citizen.lastName}</span></p>
                     <p>Birth Date: <span className={'pl-3'}>{citizen.dob}</span> </p>
                     <p>Age: <span className={'pl-3'}>{getAge(citizen.dob)}</span> </p>
                     <p>Gender: <span className={'pl-3'}> {citizen.gender}</span></p>
                     <p>Disability: <span className={'pl-3'}>{citizen.disability}</span></p>
                     <p>Title: <span className={'pl-3'}>{citizen.title}</span></p>
                     <p>District: <span className={'pl-3'}>{citizen.district}</span></p>
                     <p>Region: <span className={'pl-3'}>{citizen.region}</span></p>
                     <p>Religion: <span className={'pl-3'}>{citizen.religion}</span></p>
                     <p>Village/Street: <span className={'pl-3'}>{citizen.street}</span></p>
                     <p>Village/Street: <span className={'pl-3'}>{citizen.maritalStatus}</span></p>
                 </div>
              </div>

              <p className={` font-semibold text-lg`}>
                  House Details
              </p>

              <div>
                  <p>owner: <span className={'pl-3'}> {citizen.house?.owner.fullName}</span></p>
                  <p>Gender: <span className={'pl-3'}> {citizen.house?.owner.gender}</span></p>
                  <p>phone Number: <span className={'pl-3'}> {citizen.house?.owner.phoneNumber}</span></p>
                  <p>Email: <span className={'pl-3'}> {citizen.house?.owner.email}</span></p>
                  <p>identificationNumber: <span className={'pl-3'}> {citizen.house?.identificationNumber}</span></p>
              </div>


          </div>
        </BaseLayout>
    )
}
export default CitizenDetails;