import BaseLayout from "../../../Layouts/BaseLayout";
import CitizenCard from "./citizen-card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import BarChart from "../../../charts/bar";
import {useGlobalContext} from "../../../context/global-context";
import ExportJsonToExcel from "../../../forms/citizen-reg-form";
import PieChart from "../../../charts/pie-chart";
import {groupByLetter, parseCitizensData} from "../../../utils";
import SpinLoader from "../../../components/SpinLoader";
import {useAuth} from "../../../provider/auth";

const Citizens = () => {
    const {citizensGroups, citizens, isLoading, isFetching} = useGlobalContext();
    const { authUser } = useAuth();
    const userType = authUser.type;
    const citizenData = parseCitizensData(citizens)

    console.log("TYPE Type:: ", userType)

    const {male, female} = citizensGroups;
    const statistics = {
        all: citizensGroups?.children.length + citizensGroups?.youth.length + citizensGroups?.elders.length,
        youth: citizensGroups?.youth.length,
        elders: citizensGroups?.elders.length,
        children: citizensGroups?.children.length,
        gender: [male.length, female.length]
    }

    const groupedCtzByLetter = groupByLetter(citizens)


    if (isLoading || isFetching) {
        return (
            <BaseLayout>
                <div className={'flex h-[90%] justify-center text-skin-base items-center'}>
                    <div className={'flex flex-col items-center space-y-5'}>
                        <SpinLoader size={'large'}/>
                        <p className={'text-sm tracking-wider'}>Loading Citizens Data
                        </p>
                    </div>
                </div>
            </BaseLayout>
        )
    }

    return (
        <BaseLayout>
            <div className={'space-y-10 py-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div
                        className={`text-skin-base font-semibold text-lg`}>
                        <p> Citizens Statistics</p>

                    </div>


                    <div className={'flex items-center space-x-3'}>

                        {userType.toLowerCase() === "messenger" && (
                            <Link to={'/citizen-registration'}
                                  className={`px-2  text-white space-x-2 py-2 text-xs 
                              uppercase border-[1px] border-accent4 group flex tracking-wider
                               bg-accent4 hover:text-white transition-all duration-300 cursor-pointer 
                               rounded  justify-center items-center`}>
                                <FontAwesomeIcon icon={faPlus} className={'h-4  w-4'}/>
                                <p className={'tracking-wider'}>Add Citizen</p>
                            </Link>
                        )}

                        {citizens && <ExportJsonToExcel jsonData={citizenData} filename={'citizens.csv'}/>}

                    </div>
                </div>

                <div className={'grid grid-cols-3 gap-4 w-full '}>
                    <div className={`h-80 col-span-2 p-3 bg-skin-secondary shadow-base rounded-xl`}>
                        <BarChart
                            labels={[
                                "All citizen",
                                "Children",
                                "Youth",
                                "Elder",
                            ]}
                            data={[
                                statistics.all,
                                statistics.children,
                                statistics.youth,
                                statistics.elders,
                            ]}
                        />
                    </div>
                    <div className={'h-80 bg-skin-secondary p-4 shadow-base rounded-xl'}>
                        <PieChart labels={['Male', 'Female']} data={statistics.gender}/>
                    </div>
                </div>



                <div className={'space-y-10'}>

                    {groupedCtzByLetter.map((alphabet, idx) => (alphabet.people.length ?
                            <div key={idx} className={'space-y-3'}>
                                <p className={'text-xl font-bold text-skin-base'}>#{alphabet.letter}</p>
                                <div className={'  grid gap-8 grid-cols-6  '}>
                                    {alphabet.people.length ? alphabet.people.map((citizen, idx) => (
                                        <CitizenCard citizen={citizen}/>
                                    )) : ''}
                                </div>
                            </div> : ''
                    ))}
                </div>

            </div>
        </BaseLayout>
    )
}
export default Citizens