import {createContext, useContext, useEffect, useState} from "react";
import {useQuery} from "react-query";
import {fetchCitizens} from "../provider/api";

export const GlobalContext = createContext(null)
const GlobalContextProvider = ({children: children_}) => {
    const {data: citizens, isLoading} = useQuery('citizen', fetchCitizens)
    const [isOpenedSubmenu, setIsOpenedSubmenu] = useState(false);

    if (isLoading) {
        return <p>is loading</p>
    }


    const youth = citizens.filter(citizen => citizen.age >= 15 && citizen.age <= 63);
    const elders = citizens.filter(citizen => citizen.age >= 64);
    const children = citizens.filter(citizen => citizen.age >= 1 && citizen.age <= 14)

    const statistics = {
        youth: youth.length,
        elders: elders.length,
        children: children.length,
        all: citizens.length,
    };


    console.log("Data", citizens)

    return (
        <GlobalContext.Provider value={{
            citizens, isLoading,
            youth, elders, children,
            statistics, isOpenedSubmenu,
            setIsOpenedSubmenu
        }}>
            {children_}
        </GlobalContext.Provider>
    )

}
export default GlobalContextProvider

// Helper function
export const useGlobalContext = () => useContext(GlobalContext)