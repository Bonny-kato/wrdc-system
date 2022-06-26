import BaseLayout from "../../../Layouts/BaseLayout";
import CitizenCard from "./citizen-card";
import CitizenDetails from "./citizen-details";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import BarChart from "../../../charts/bar";
import {useGlobalContext} from "../../../context/global-context";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ExportJsonToExcel from "../../../forms/citizen-reg-form";

const Citizens = () => {
    const [currentCitizen, setCurrentCitizen] = useState();
    const {citizensGroups, citizens} = useGlobalContext();
    const statistics = {
        all: citizensGroups?.children.length + citizensGroups?.youth.length + citizensGroups?.elders.length,
        youth: citizensGroups?.youth.length,
        elders: citizensGroups?.elders.length,
        children: citizensGroups?.children.length
    }
    const currentTheme = useSelector(store => store.theme)
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const groupedByLetter = alphabets.map(letter => {

        return {
            letter,
            people: citizens.filter(citizen => citizen.firstName.toLowerCase().startsWith(letter.toLowerCase()))
        }
    })


    useEffect(() => {
        setCurrentCitizen(citizens.sort()[0])
    }, [citizens])

    return (
        <BaseLayout>
            <div className={'space-y-10 py-8 '}>
                <div className={'text-secondary flex justify-between items-center'}>
                    <div
                        className={`${currentTheme === "dark" ? "text-secondary " : "text-gray-600"} font-semibold text-lg`}>
                        Citizens Statistics
                    </div>


                    <div className={'flex items-center space-x-3'}>
                        <Link to={'/citizen-registration'}
                              className={"flex items-center text-sm border-[1.5px] border-blue-600 rounded-md bg-blue-600 text-white space-x-2 px-4 py-2"}>
                            <FontAwesomeIcon icon={faPlus} className={'h-5  w-5'}/>
                            <p className={'tracking-wider'}>Add Citizen</p>
                        </Link>
                        {citizens && <ExportJsonToExcel jsonData={citizens} filename={'citizens.csv'}/>}

                    </div>
                </div>

                <div>
                    <div className={`h-80 bg-skin-secondary shadow-base rounded-xl`}>
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
                </div>


                <div className={'space-y-10'}>

                    {groupedByLetter.map((alphabet, idx) => (alphabet.people.length ?
                            <div key={idx} className={'space-y-3'}>
                                <p className={'text-xl font-bold text-skin-base'}>#{alphabet.letter}</p>
                                <div className={'  grid gap-8 grid-cols-6  '}>
                                    {alphabet.people.length ? alphabet.people.map((citizen, idx) => (
                                        <CitizenCard citizen={citizen} setCurrentCitizen={setCurrentCitizen}/>
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