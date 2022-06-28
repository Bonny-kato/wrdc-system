import BaseLayout from "../../../Layouts/BaseLayout";
import {Link, Navigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getCitizenDetails, removeCitizen} from "../../../provider/api";
import {useRef, useState} from "react";
import {formatDate} from "../../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faHouse, faTrash} from "@fortawesome/free-solid-svg-icons";
import SpinLoader from "../../../components/SpinLoader";
import DetailCard from "./detail-card";
import {BellIcon, PencilIcon} from "@heroicons/react/outline";
import Modal from "../../../components/Modal";
import LoadingPlaceholder from "../../../components/loading-placeholder";


const CitizenDetails = () => {
    const {citizenId} = useParams()
    const citizenRef = useRef(null);
    const [citizen, setCitizen] = useState({});
    const {isLoading, isFetching} = useQuery([`citizen-${citizenId}`, citizenId], getCitizenDetails, {
        onSuccess: (res) => {
            setCitizen(res.data)
        }
    })

    const {isLoading:isRemoving, refetch:revomeCitizen} = useQuery([`remove-citizen-${citizenId}`, citizenId], removeCitizen, {
        enabled:false,
        onSuccess:()=>{
            citizenRef.current && citizenRef.current.click();
        }
    })


    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    if (isLoading || isFetching) {
        return (
            <LoadingPlaceholder />
        )
    }

    return (
        <BaseLayout>

            <div className={'space-y-10 pb-32 text-skin-base  '}>
                {/* modal */}
                <Modal isOpen={showConfirmDialog} onClose={()=>setShowConfirmDialog(false)}>
                    <div className={' rounded-3xl bg-skin-secondary flex justify-center shadow-base py-10 w-[26%]'}>
                        <div className={'flex flex-col items-center space-y-5'}>
                            <div className={'h-16 w-16 rounded-full border-red-500 border-2 flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faTrash} className={'h-8 w-8 text-red-500'} />
                            </div>
                            <div className={'px-10 text-skin-base text-center'}>
                                <p>Are you sure you want to remove this citizen ?</p>
                            </div>

                            <div className={'space-x-8 flex justify-center pt-5'}>
                                <button onClick={()=>setShowConfirmDialog(false)} style={{appearance:'none'}}
                                        className={`px-4 w-24 ${isRemoving ? 'pointer-events-none' : 'pointer-events-auto'}
                                     focus:ring-2  text-sm text-skin-base border-[1px] border-blue-500
                                         py-2 rounded`}>
                                    No
                                </button>
                                <button onClick={revomeCitizen}  style={{appearance:'none'}} className={'px-4  min-w-[96px] focus:ring-2 ' +
                                    'focus:ring-red-500/50 border-[1px] border-red-500 hover:bg-red-600' +
                                    ' hover:border-red-600  text-sm text-white bg-red-500 py-2 rounded'}>
                                    {!isRemoving && <p>Yes</p>}
                                    {isRemoving && (
                                        <div className={'flex items-center space-x-3'}>
                                            <SpinLoader size={'small'} color={'#fff'}/>
                                            <p>Removing</p>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Link ref={citizenRef} to={'/citizens'} />
                <div className={'font-semibold  flex items-center  justify-between text-xl'}>
                    <p>Citizen Details</p>
                    <div className={'flex items-center space-x-3'}>
                        {/* update citizen button */}
                        <button onClick={()=>setShowConfirmDialog(true)}
                              className={`px-2 w-24 text-red-500 space-x-2 py-2 text-xs uppercase border-[1px] 
                          border-red-500 group flex tracking-wider hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer rounded  justify-center items-center`}>
                            <FontAwesomeIcon icon={faTrash}
                                             className={'h-4 transition-all duration-300 group-hover:scale-105'}/>

                            <p>delete</p>
                        </button>

                        {/* delete citizen button */}
                        <Link to={'/citizen/edit/' + citizen._id}
                              className={`px-2 w-24  space-x-2 py-2 text-xs uppercase border-[1px] 
                          border-blue-500 group flex tracking-wider bg-blue-500 text-white transition-all duration-300 cursor-pointer rounded  justify-center items-center`}>
                            <PencilIcon
                                className={'h-4 transition-all duration-300 group-hover:scale-105'}/>

                            <p>edit</p>
                        </Link>
                    </div>
                </div>
                <div className={'border-[1px] border-accent5 p-6 rounded-md py-10 relative'}>
                    <div className={'absolute flex items-center space-x-2 -top-3 bg-skin-primary px-3'}>
                        <FontAwesomeIcon icon={faAddressCard} className={'h-5 w-5'}/>
                        <p>Basic Details</p>
                    </div>

                    <div className={'grid grid-cols-4 gap-4'}>
                        <DetailCard
                            title={'full name'} iconName={'user'}
                            value={`${citizen.firstName} ${citizen.lastName} ${citizen.middleName}`}
                        />

                        <DetailCard
                            title={'birth of date'} iconName={'calender'}
                            value={formatDate(citizen.dob)}
                        />
                        <DetailCard
                            title={'gender'} iconName={'gender'}
                            value={citizen.gender.toLowerCase() === 'm' ? 'male' : 'female'}/>
                        <DetailCard
                            title={'disability'} iconName={'wheelchair'}
                            value={citizen.disability}/>
                        <DetailCard title={'position'} iconName={'position'} value={citizen.title}/>
                        <DetailCard title={'region'} iconName={'location'} value={citizen.region}/>
                        <DetailCard title={'district'} iconName={'district'} value={citizen.district}/>
                        <DetailCard title={'street'} iconName={'street'} value={citizen.street}/>
                        <DetailCard title={'religion'} iconName={'religion'} value={citizen.religion}/>
                        {citizen.email && <DetailCard title={'email'} iconName={'mail'} value={citizen.email}/>}
                        {citizen.phoneNumber &&
                            <DetailCard title={'phone number'} iconName={'phone'} value={citizen.phoneNumber}/>}
                        {citizen.maritalStatus &&
                            <DetailCard
                                title={'marial status'}
                                iconName={'status'}
                                value={citizen.maritalStatus}/>}

                    </div>

                </div>

                <div className={'border-[1px] border-accent5 p-6 rounded-md py-10 relative'}>
                    <div className={'absolute flex items-center space-x-2 -top-3 bg-skin-primary px-3'}>
                        <FontAwesomeIcon icon={faHouse} className={'h-5 w-5'}/>
                        <p>House Details </p>
                    </div>

                    <div className={'grid grid-cols-4 gap-4'}>
                        <DetailCard iconName={'user'} title={'owner'} value={citizen.house?.owner.fullName}/>
                        <DetailCard
                            title={'gender'} iconName={'gender'}
                            value={citizen.house?.owner.gender.toLowerCase() === 'm' ? 'male' : 'female'}/>
                        <DetailCard iconName={'mail'} title={'email'} value={citizen.house?.owner.email}/>
                        <DetailCard  iconName={'phone'} title={'phone number'} value={citizen.house?.owner.phoneNumber}/>
                        <DetailCard iconName={'house'} title={'house number'} value={citizen.house?.identificationNumber}/>
                    </div>
                </div>


            </div>
        </BaseLayout>
    )
}
export default CitizenDetails;