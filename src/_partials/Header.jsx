import {MoonIcon, SearchIcon, SunIcon} from "@heroicons/react/solid";
import {BellIcon, MailIcon, MailOpenIcon} from "@heroicons/react/outline";
import {useGlobalContext} from "../context/global-context";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../provider/auth";
import {saveValueToLocalStorage} from "../hooks/useLocalStorageState";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const {citizens, currTheme, setCurrTheme} = useGlobalContext();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchResult, setSearchResult] = useState(citizens ? citizens : []);
    const [isFocused, setFocused] = useState(true);
    const [showMenu, setShowMenu] = useState(false)
    const {signOut} = useAuth()


    useEffect(() =>{
        if(citizens){
            setSearchResult(citizens.filter(citizen =>
                citizen.firstName.toLowerCase().includes(searchKeyword) ||
                citizen.lastName.toLowerCase().includes(searchKeyword) ||
                citizen.middleName.toLowerCase().includes(searchKeyword)  ||
                (citizen.email  && citizen?.email.toLowerCase().includes(searchKeyword)) ||
                (citizen.phoneNumber  && citizen?.phoneNumber.toLowerCase().includes(searchKeyword))
            ))
        }

    },[searchKeyword])

    const enableLightTheme = ()  =>{
        setCurrTheme('light');
        saveValueToLocalStorage('theme', 'light');
    }

    const enableDarkTheme = () =>{
        setCurrTheme('dark');
        saveValueToLocalStorage('theme', 'dark');
    }

    const handleSignOut = () => {
        setShowMenu(false)
        signOut()
    }
    return (
        <header className={`border-b border-accent5 px-5 py-2 flex items-center justify-between`}>
            <div></div>
            <div className={'flex items-center space-x-2'}>

                {/* Global Search Box */}
                <div className={'relative text-skin-base'}>
                    <div className={''}>
                        <input autoFocus value={searchKeyword} onChange={(e)=> setSearchKeyword(e.target.value)}
                               className={`w-full rounded-md  outline-none focus:border-[2px] transition-all bg-search-fill duration-100 focus:border-accent4 font-light text-sm pl-8 py-2 `}
                               type="text" placeholder={'Search..'}/>
                        <div className={'absolute top-0 left-0 flex items-center pl-2 h-full'}>
                            <SearchIcon className={'h-5'}/>
                        </div>
                    </div>

                    {searchKeyword && (
                        <div className={'absolute flex flex-col top-full z-50 mt-2 w-full p-1 left-0 rounded-b bg-skin-secondary shadow-base'}>

                            <>
                                {searchResult.length ?
                                    (
                                        searchResult.slice(0,5).map((citizen)=>(
                                            <Link onClick={()=>setSearchKeyword('')} to={'/citizen/' + citizen._id} className={'p-2 hover:bg-accent4 hover:text-white rounded-md cursor-pointer text-xs'}>{citizen.firstName}</Link>
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
                    {/*<div*/}
                    {/*    className={`bg-white/10 h-8 w-8 group relative   hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded  `}>*/}
                    {/*    <div className={'absolute inset-0 flex justify-center items-center'}>*/}
                    {/*        <MailIcon*/}
                    {/*            className={'h-6 opacity-100 group-hover:rotate-180 group-hover:opacity-0 transition-all duration-300 group-hover:scale-105'}/>*/}
                    {/*    </div>*/}

                    {/*    <div className={'absolute inset-0 flex justify-center items-center'}>*/}
                    {/*        <MailOpenIcon*/}
                    {/*            className={'h-6 opacity-0  group-hover:opacity-100  transition-all duration-300 group-hover:scale-105'}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*/!* Notification *!/*/}
                    {/*<div*/}
                    {/*    className={`h-8 w-8 bg-white/10 group flex  z hover:text-white transition-all duration-300 cursor-pointer rounded  justify-center items-center`}>*/}
                    {/*    <BellIcon*/}
                    {/*        className={'h-6 group-hover:rotate-45 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'}/>*/}
                    {/*</div>*/}
                    {/* Theme */}
                    <div
                        className={` h-8 w-8 group flex bg-white/10 hover:bg-accent4 hover:text-white transition-all duration-300 cursor-pointer rounded  justify-center items-center`}>
                        {
                            currTheme === 'dark' ? (
                                    <SunIcon onClick={enableLightTheme} className={'h-6 group-hover:rotate-180 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'}/>)
                                : (<MoonIcon onClick={enableDarkTheme} className={'h-6 group-hover:rotate-180 group-hover:text-white transition-all duration-300 group-hover:scale-105'} />)
                        }

                    </div>
                </div>

                {/* Current User */}
                <div className={'relative h-8 group w-8'}>
                    <div onClick={()=>setShowMenu(!showMenu)} className={'relative cursor-pointer h-8 w-8 bg-avatar-fill flex items-center justify-center rounded-full '}>
                        <FontAwesomeIcon icon={faUser} className={'h-4 w-4 text-icon-fill'}/>
                        <div
                            className={'h-3 w-3 bg-[#349eff] absolute -right-1 top-0 rounded-full ring-4 ring-skin-secondary'}></div>
                    </div>

                    <div onBlur={()=>setShowMenu(false)} className={`absolute   origin-top-right 
                            ${showMenu ? 'scale-100 opacity-100' : 'opacity-0  scale-75'}
                                transition-all ease-in-out flex flex-col top-full w-[150px] text-skin-base right-0 rounded-xl bg-skin-secondary shadow-base p-1`}>
                        <p onClick={handleSignOut} className={'p-2 hover:bg-accent4 hover:text-white rounded-md cursor-pointer text-sm'}>Sing Out</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;