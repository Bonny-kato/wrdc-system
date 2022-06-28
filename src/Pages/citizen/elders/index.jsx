import BaseLayout from "../../../Layouts/BaseLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CitizenCard from "../all/citizen-card";
import BarChart from "../../../charts/bar";
import {useGlobalContext} from "../../../context/global-context";
import {useState, useEffect} from "react";
import {getAge, groupByLetter} from "../../../utils";
import PieChart from "../../../charts/pie-chart";

const Elders = () => {
    const [currentChildren, setCurrentChildren] = useState()
    const {citizensGroups} = useGlobalContext();
    const {elders} = citizensGroups;
    const groupedEldersByLetter = groupByLetter(elders)

    const statistics = {
        ageRange: [
            elders.filter(child => getAge(child.dob) >44 && getAge(child.dob) < 50).length,  // 6 - 10
            elders.filter(child => getAge(child.dob) >= 50 && getAge(child.dob) < 60).length,  // 6 - 10
            elders.filter(child => getAge(child.dob) >=70 && getAge(child.dob) < 80).length, // 11 -17
            elders.filter(child => getAge(child.dob) >=80 && getAge(child.dob) < 90).length, // 11 -17
            elders.filter(child => getAge(child.dob) >=90 && getAge(child.dob) < 100).length, // 11 -17
            elders.filter(child => getAge(child.dob) > 100).length,  // 6 - 10
        ],
        gender:[
            elders.filter(child => child.gender.toLowerCase() === "m").length,
            elders.filter(child => child.gender.toLowerCase() === "f").length,
        ]
    }

    console.log('statistics', statistics)

    useEffect(() => {
        setCurrentChildren(elders[0])
    }, [elders])


    return (
        <BaseLayout>
            <div className={'space-y-10 py-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div className={' font-semibold text-lg'}>
                        Elders Statistics
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
                    <div className={'bg-skin-secondary p-3 col-span-2 shadow-base rounded-xl overflow-hidden h-80'}>
                        <BarChart
                            labels={["45 - 50", "60 - 70", "80 - 89", "90 - 100", "100+"]}
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

                    {groupedEldersByLetter.map((alphabet, idx) => (alphabet.people.length ?
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
export default Elders