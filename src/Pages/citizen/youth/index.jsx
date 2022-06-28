import BaseLayout from "../../../Layouts/BaseLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CitizenCard from "../all/citizen-card";
import BarChart from "../../../charts/bar";
import {useGlobalContext} from "../../../context/global-context";
import {getAge, groupByLetter} from "../../../utils";
import PieChart from "../../../charts/pie-chart";

const Youth = () => {
    const {citizensGroups} = useGlobalContext();
    const {youth} = citizensGroups;
    const groupedYouthByLetter = groupByLetter(youth)

    const statistics = {
        ageRange: [
            youth.filter(youth => getAge(youth.dob) >18 && getAge(youth.dob) < 26).length,  // 6 - 10
            youth.filter(youth => getAge(youth.dob) >= 26 && getAge(youth.dob) < 31).length,  // 6 - 10
            youth.filter(youth => getAge(youth.dob) >=31 && getAge(youth.dob) < 36).length, // 11 -17
            youth.filter(youth => getAge(youth.dob) >=36 && getAge(youth.dob) < 41).length, // 11 -17
            youth.filter(youth => getAge(youth.dob) >=41 && getAge(youth.dob) < 46).length, // 11 -17
        ],
        gender:[
            youth.filter(youth => youth.gender.toLowerCase() === "m").length,
            youth.filter(youth => youth.gender.toLowerCase() === "f").length,
        ]
    }

    return (
        <BaseLayout>
            <div className={'space-y-10 py-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div className={' font-semibold text-lg'}>
                        Youth Statistics
                    </div>

                    <div>
                        <Link to={'/citizen-registration'}
                              className={`px-2  text-white space-x-2 py-2 text-xs 
                              uppercase border-[1px] border-accent4 group flex tracking-wider
                               bg-accent4 hover:text-white transition-all duration-300 cursor-pointer 
                               rounded  justify-center items-center`}>
                            <FontAwesomeIcon icon={faPlus} className={'h-4  w-4'}/>
                            <p className={'tracking-wider'}>Add Citizen</p>
                        </Link>
                    </div>
                </div>

                <div className={'grid grid-cols-3 w-full gap-6'}>
                    <div className={'bg-skin-secondary col-span-2 p-3 shadow-base rounded-xl overflow-hidden h-80'}>
                        <BarChart
                            labels={["18 - 25", "26 - 30", "31 - 35", "40 - 45"]}
                            data={statistics.ageRange}
                        />
                    </div>

                    <div className={'h-80 bg-skin-secondary p-4 shadow-base rounded-xl'}>
                        <PieChart labels={['Male', 'Female']} data={statistics.gender}/>
                    </div>
                </div>

                <div className={'space-y-7  rounded-xl p-5'}>
                    <div className={' font-semibold text-secondary'}>
                        List View
                    </div>

                    {groupedYouthByLetter.map((alphabet, idx) => (alphabet.people.length ?
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
export default Youth