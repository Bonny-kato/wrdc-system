import BaseLayout from "../../../Layouts/BaseLayout";
import CitizenCard from "./citizen-card";
import CitizenDetails from "./citizen-details";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import BarChart from "../../../charts/bar";
import {useGlobalContext} from "../../../context/global-context";
import {useEffect, useState} from "react";

const Citizens = () =>{
    const [currentCitizen, setCurrentCitizen] = useState();
    const {statistics, citizens} = useGlobalContext();

    useEffect(() =>{
        setCurrentCitizen(citizens[0])
    },[citizens])

    return (
        <BaseLayout>
            <div className={'space-y-10 py-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div className={' font-semibold text-lg'}>
                        Citizens
                    </div>

                    <div>
                        <Link to={'/citizen-registration'} className={"flex items-center text-sm border-[1.5px] border-blue-600 rounded-md bg-blue-600 text-white space-x-2 px-4 py-2"}>
                            <FontAwesomeIcon icon={faPlus} className={'h-5  w-5'}/>
                            <p className={'tracking-wider'}>Add Citizen</p>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className={'h-72 bg-white/5 rounded-xl overflow-hidden'}>
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
                                statistics.children,
                            ]}
                        />
                    </div>
                </div>

                <div className={'grid grid-cols-3 gap-x-10'}>
                    <div className={'col-span-2'}>
                        <div className={'  grid gap-8 grid-cols-4  '}>
                            {citizens.map((citizen, idx) => (
                                <CitizenCard citizen={citizen} setCurrentCitizen={setCurrentCitizen} />
                            ))}
                        </div>
                    </div>
                    {currentCitizen && <CitizenDetails currentCitizen={currentCitizen}/>}
                </div>
            </div>
        </BaseLayout>
    )
}
export default Citizens