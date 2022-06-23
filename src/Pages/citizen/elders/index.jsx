import BaseLayout from "../../../Layouts/BaseLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CitizenCard from "../all/citizen-card";
import CitizenDetails from "../all/citizen-details";
import BarChart from "../../../charts/bar";
import {useGlobalContext} from "../../../context/global-context";
import {useState, useEffect} from "react";

const Elders = () =>{
    const  [currentElder, setCurrentElder] = useState()
    const {elders} = useGlobalContext();

    useEffect(() =>{
        setCurrentElder(elders[0])
    },[elders])

    return (
        <BaseLayout>
            <div className={'space-y-10 pt-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div className={' font-semibold text-lg'}>
                        Elders List
                    </div>

                    <div>
                        <Link to={'/citizen-registration'} className={"flex items-center text-sm border-[1.5px] border-secondary/60 rounded-md hover:bg-accent3 space-x-2 px-4 py-2"}>
                            <FontAwesomeIcon icon={faPlus} className={'h-5 w-5'}/>
                            <p>Add Citizen</p>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className={'bg-white/5 rounded-xl overflow-hidden h-72'}>
                        <BarChart
                            labels={[
                                "0-5",
                                "6-10",
                                "11-15",
                                "Elder",
                            ]}
                            data={[
                                30, 40, 50, 20, 60, 30,
                            ]}
                        />
                    </div>
                </div>

                <div className={'grid grid-cols-3 gap-x-10'}>
                    <div className={' col-span-2 grid gap-8 grid-cols-4'}>
                        {elders.map((elder, idx) => (
                            <CitizenCard citizen={elder} setCurrentCitizen={setCurrentElder} />
                        ))}
                    </div>
                    {currentElder &&  <CitizenDetails currentCitizen={currentElder} />}
                </div>
            </div>
        </BaseLayout>
    )
}
export default Elders