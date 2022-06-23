import BaseLayout from "../../../Layouts/BaseLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CitizenCard from "../all/citizen-card";
import CitizenDetails from "../all/citizen-details";
import BarChart from "../../../charts/bar";
import {useEffect, useState} from "react";
import {useGlobalContext} from "../../../context/global-context";

const Youth = () =>{
    const [currentYouth, setCurrentYouth] = useState()
    const {youth} = useGlobalContext();

    useEffect(() =>{
        setCurrentYouth(youth[0])
    },[youth])


    return (
        <BaseLayout>
            <div className={'space-y-10 py-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div className={' font-semibold text-lg'}>
                        Children
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

                <div className={'space-y-7 bg-white/5 rounded-xl p-5'}>
                    <div className={' font-semibold text-secondary'}>
                        List View
                    </div>
                    <div className={'grid grid-cols-3 gap-x-10'}>
                        <div className={' col-span-2 grid gap-8 grid-cols-4'}>
                            {youth.map((youth, idx) => (
                                <CitizenCard citizen={youth} setCurrentCitizen={setCurrentYouth} />
                            ))}
                        </div>
                        {currentYouth && <CitizenDetails currentCitizen={currentYouth}/>}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
export default Youth;