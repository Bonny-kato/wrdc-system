import {MoonIcon, SearchIcon, SunIcon} from "@heroicons/react/solid";
import {BellIcon, MailIcon, MailOpenIcon} from "@heroicons/react/outline";
import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "../Actions/actions";
import {useGlobalContext} from "../context/global-context";
import {useEffect, useState} from "react";
import log from "tailwindcss/lib/util/log";
import {Link} from "react-router-dom";

const Header = () => {
    const currTheme = useSelector((state) => state.theme)
    const dispatch = useDispatch();
    const {citizens} = useGlobalContext();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchResult, setSearchResult] = useState(citizens ? citizens : []);
    const [isFocused, setFocused] = useState(true);

    const enableLightTheme = ()  =>{
        dispatch(changeTheme('light'))
    }


    useEffect(() =>{
            if(citizens){
                setSearchResult(citizens.filter(citizen => citizen.firstName.toLowerCase().includes(searchKeyword)))
            }

    },[searchKeyword])

    const enableDarkTheme = () =>{
        dispatch(changeTheme('dark'))
    }
    return (
        <header className={`border-b ${currTheme === "dark" ? "border-accent": "border-gray-300"} px-5 py-2 flex items-center justify-between`}>
            <div>{searchKeyword}</div>
            <div className={'flex items-center space-x-2'}>

                {/* Global Search Box */}
                <div onBlur={() => setFocused(false)}  onFocus={() => setFocused(true)} className={` ${isFocused && 'ring-blue-600 ring-2'} relative ${currTheme === "dark" ? "bg-white/10 text-secondary" : "bg-gray-200 text-black/50"} relative rounded  flex items-center px-2  h-8 `}>
                    <SearchIcon className={'h-6'}/>
                    <input type="text"
                           value={searchKeyword} onChange={(e)=> setSearchKeyword(e.target.value)}
                           className={'bg-transparent tracking-wide w-[240px] placeholder-secondary outline-none h-full w-full pl-1 text-sm'}
                           placeholder={'Search Everywhere...'}/>

                    {searchKeyword && (
                    <div className={'absolute flex flex-col top-full z-50 mt-2 w-full p-1 left-0 rounded-b bg-skin-secondary shadow-base'}>

                            <>
                                {searchResult.length ?
                                    (
                                        searchResult.slice(0,5).map((citizen)=>(
                                            <Link onClick={()=>setSearchKeyword('')} to={'/citizen/' + citizen._id} className={'p-2 hover:bg-accent2 rounded-md cursor-pointer text-sm'}>{citizen.firstName}</Link>
                                        ))
                                    ): (
                                    <p className={'text-sm p-2'}>No result Found</p>
                                    )}
                            </>

                    </div>)}
                </div>


                {/* Quick Actions Buttons */}
                <div className={`text-skin-base flex space-x-2 pr-5`}>
                    {/* Email */}
                    <div
                        className={`bg-white/10 h-8 w-8 group relative   hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded  `}>
                        <div className={'absolute inset-0 flex justify-center items-center'}>
                            <MailIcon
                                className={'h-6 opacity-100 group-hover:rotate-180 group-hover:opacity-0 transition-all duration-300 group-hover:scale-105'}/>
                        </div>

                        <div className={'absolute inset-0 flex justify-center items-center'}>
                            <MailOpenIcon
                                className={'h-6 opacity-0  group-hover:opacity-100  transition-all duration-300 group-hover:scale-105'}/>
                        </div>
                    </div>

                    {/* Notification */}
                    <div
                        className={`h-8 w-8 bg-white/10 group flex  hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded  justify-center items-center`}>
                        <BellIcon
                            className={'h-6 group-hover:rotate-45 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'}/>
                    </div>

                    {/* Theme */}
                    <div
                        className={`${currTheme ==="dark" ? "bg-white/10":"bg-gray-200"} h-8 w-8 group flex hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded  justify-center items-center`}>
                        {
                            currTheme === 'dark' ? (
                                <SunIcon onClick={enableLightTheme} className={'h-6 group-hover:rotate-180 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'}/>)
                                : (<MoonIcon onClick={enableDarkTheme} className={'h-6 group-hover:rotate-180 group-hover:text-gray-700 transition-all duration-300 group-hover:scale-105'} />)
                        }

                    </div>
                </div>

                {/* Current User */}
                <div className={'relative h-8 w-8'}>
                    <img src="https://i.pinimg.com/474x/d0/5d/7d/d05d7db403f6a21226221ce0d15cf163.jpg" alt=""
                         className={'h-8 rounded-full w-8'}/>
                    <div
                        className={`h-3 w-3 ${currTheme === "dark" ? "ring-primary" : "ring-white"} bg-blue-500 absolute -right-1 top-0 rounded-full ring-2 `}></div>
                </div>
            </div>
        </header>
    )
}
export default Header;