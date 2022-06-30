import {createContext, useContext, useEffect, useState} from "react";
import {useQuery} from "react-query";
import {fetchCitizens} from "../provider/api";
import {useSelector} from "react-redux";
import {getAge} from "../utils";
import {getValueFromLocalStorage} from "../hooks/useLocalStorageState";

export const GlobalContext = createContext(null)
const GlobalContextProvider = ({children: children_}) => {
    const [citizens, setCitizens] = useState([]);
    const [currTheme, setCurrTheme] = useState(
        getValueFromLocalStorage('theme', 'light')
    )
    const [citizensGroups, setCitizensGroups] = useState({
        elders: [],
        youth: [],
        children: [],
        male:[],
        female: [],
        disability:[]
    });
    const {data:response, isLoading, isFetching} = useQuery('citizen', fetchCitizens)
    const [isOpenedSubmenu, setIsOpenedSubmenu] = useState(false);

    // if (isLoading) {
    //     return <p>is loading</p>
    // }

    const groupCitizens = (citizenList)=>{
        const newList = citizenList.map(citizen=>{
            return {...citizen, age:getAge(citizen.dob)}
        })

        const citizensObj = {
            elders:newList.filter(citizen=>citizen.age >= 45),
            youth:newList.filter(citizen=>citizen.age >= 18 && citizen.age <= 44),
            children:newList.filter(citizen=>citizen.age < 18),
            male:newList.filter(citizen=>citizen.gender.toLowerCase() === "m"),
            female:newList.filter(citizen=>citizen.gender.toLowerCase() === "f"),
            disability:newList.filter(citizen=>citizen.disability.toLowerCase() !== "none")
        }
        setCitizensGroups(citizensObj)


    }
    useEffect(() =>{
        if(response) {
            setCitizens(response?.data)
            groupCitizens(response.data)
        }
    }, [response])


    // const youth = citizens.filter(citizen => citizen.age >= 15 && citizen.age <= 63).sort();
    // const elders = citizens.filter(citizen => citizen.age >= 64).sort();
    // const children = citizens.filter(citizen => citizen.age >= 1 && citizen.age <= 14).sort();
    //
    // const statistics = {
    //     youth: youth.length,
    //     elders: elders.length,
    //     children: children.length,
    //     all: citizens.length,
    // };


    return (
        <GlobalContext.Provider value={{
            citizens, isLoading, isOpenedSubmenu,
            isFetching,currTheme, setCurrTheme,
            setIsOpenedSubmenu,citizensGroups
        }}>
            {children_}
        </GlobalContext.Provider>
    )

}
export default GlobalContextProvider

// Helper function
export const useGlobalContext = () => useContext(GlobalContext)