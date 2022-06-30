import DetailCard from "../citizen/all/detail-card";
import {PencilIcon} from "@heroicons/react/outline";
import {useAuth} from "../../provider/auth";

const HouseDetails = ({selectedHouse ={}, onEdit}) => {
    const { authUser } = useAuth();
    const userType = authUser.type;
    return (
        <div className={'gid grid-cols-1 space-y-2'}>
            <div className={' rounded-xl p-1 space-y-4 overflow-y-auto bg-skin-secondary shadow-base'}>
                <div className={'flex justify-between items-center'}>
                    <p className={'pt-5 px-4 font-semibold text-lg tracking-wider'}>House Details</p>

                    {userType.toLowerCase() === "messenger" && (
                        <div className={'flex items-center space-x-3'}>
                            <PencilIcon onClick={onEdit} className={'h-5 w-5 cursor-pointer'} />
                        </div>
                    )}
                </div>

                <div className={'bg-skin-primary space-y-2 p-2 rounded-xl '}>
                    <DetailCard
                        title={'house number'}
                        value={selectedHouse.identificationNumber}
                        iconName={'house'}
                    />

                    <DetailCard
                        title={'owner'}
                        value={selectedHouse.owner.fullName}
                        iconName={'user'}
                    />

                    <DetailCard
                        title={'gender'}
                        value={selectedHouse.owner.gender.toLowerCase() === 'm' ? 'male' : 'female'}
                        iconName={'gender'}
                    />

                    {selectedHouse.owner.email &&
                        <DetailCard
                            title={'email'}
                            value={selectedHouse.owner.email}
                            iconName={'mail'}
                        />
                    }
                    <DetailCard
                        title={'phone number'}
                        value={selectedHouse.owner.phoneNumber}
                        iconName={'phone'}/>
                </div>
            </div>
        </div>
    )
}
export default HouseDetails;