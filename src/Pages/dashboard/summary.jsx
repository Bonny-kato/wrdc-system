import SummaryCard from "./summary-card";
import {formatDate, getAge} from "../../utils";
import ExportToXLSX from "../../components/export-to-xlxs";
import {useGlobalContext} from "../../context/global-context";

const Summary = ({statistics, citizens}) => {

    const {isLoading} = useGlobalContext();
    const citizenData = citizens.map((citizen) => {
        const houseInfo = citizen.house;
        const {_id, dob,  house, updatedAt, __v, createdAt, ...rest} = citizen
        return {
            ...rest,
            birthDate:formatDate(dob),
            age:getAge(dob),
            registrationDate: formatDate(createdAt),
            houseNumber: houseInfo.identificationNumber,
            owner: houseInfo.owner.fullName,
            ownerEmail: houseInfo.owner.email,
            ownerPhoneNumber: houseInfo.owner.phoneNumber,
            ownerGender: houseInfo.owner.gender,
            houseRegistrationDate: formatDate(houseInfo.createdAt)
        }
    })
    return (
        <div className={`h-[18rem] space-y-10 bg-skin-secondary text-skin-base shadow-base p-3  rounded-xl`}>
            <div className={`text-skin-base font-semibold text-lg flex justify-between`}>
                <p>Summary</p>
                {!isLoading && <ExportToXLSX citizens={citizenData} fileName={'citizens-report'}/>}
            </div>
            <div className={'grid grid-cols-4 gap-y-10 bg-skin-primary p-3 rounded-lg'}>
                <SummaryCard name={'all citizen'} total={statistics.all}/>
                <SummaryCard name={'children'} total={statistics.children}/>
                <SummaryCard name={'elders'} total={statistics.elders}/>
                <SummaryCard name={'youth'} total={statistics.youth}/>
                <SummaryCard name={'disabled'} total={statistics.disability}/>
                <SummaryCard name={'female'} total={statistics.female}/>
                <SummaryCard name={'male'} total={statistics.male}/>
            </div>
        </div>
    )
}
export default Summary;