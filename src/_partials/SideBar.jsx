import {
    AdjustmentsIcon,
    ChartBarIcon,
    ChevronDownIcon,
    MenuAlt1Icon,
    SearchIcon, UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";
import {Link} from "react-router-dom";
import {useGlobalContext} from "../context/global-context";
import {useSelector} from "react-redux";
import {useAuth} from "../provider/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export const SidebarMenu = ({isActive = false, hasSubmenu = false, children, linkTo = "/"}) => {
    const currentTheme = useSelector((state) => state.theme)

    const getActiveClass = () => {
        const currentPath = window.location.pathname;
        return currentPath === linkTo ? 'bg-blue-600 pl-2 text-white hover:bg-blue-500' :
            currentTheme === 'dark' ? 'hover:bg-accent hover:pl-2' : 'hover:bg-blue-500/20 hover:pl-2'
    }
    return (
        <Link to={linkTo}
              className={`flex items-center transition-all duration-300 ease-in-out justify-between group ${getActiveClass()} rounded-lg  py-2 cursor-pointer`}>
            <div
                className={'flex space-x-2   items-center capitalize'}>
                {children}
            </div>

            {hasSubmenu && (
                <div>
                    <ChevronDownIcon className={'h-5'}/>
                </div>
            )}
        </Link>
    )
}

export const Submenu = ({title, linkTo = "/"}) => {

    const getActiveClass = () => {
        const currentPath = window.location.pathname;
        return currentPath === linkTo ? "opacity-100 text-blue-500" : "opacity-50";
    }
    return (
        <Link to={linkTo}
              className={`w-full ${getActiveClass()}  hover:opacity-100 cursor-pointer`}>
            {title}
        </Link>
    )
}
const SideBar = () => {
    const {isOpenedSubmenu, setIsOpenedSubmenu} = useGlobalContext();
    const currentTheme = useSelector((state) => state.theme)
    const { authUser } = useAuth();

    return (
        <section className={`w-[240px] p-5 bg-skin-secondary h-full flex flex-col justify-between text-skin-base`}>
            <div className={'space-y-5'}>
                <div className={'text-xl font-semibold tracking-wider flex justify-between items-center'}>
                    <Link to={'/'}>
                        <span className={'text-blue-500'}>WDRC</span> <span>System</span>
                    </Link>
                    <div>
                        <span><MenuAlt1Icon className={'h-5 cursor-pointer rotate-180'}/></span>
                    </div>
                </div>

                {/* Search Box */}
                <div className={' mt-5 relative'}>
                    <input
                        className={`w-full rounded-full outline-none focus:border-[2px] transition-all duration-100 focus:border-blue-500 font-light text-sm pl-8 py-2 ${currentTheme === "dark" ? "bg-accent2": "bg-blue-500/20"}`}
                        type="text" placeholder={'Search..'}/>
                    <div className={'absolute top-0 left-0 flex items-center pl-2 h-full'}>
                        <SearchIcon className={'h-5'}/>
                    </div>
                </div>

                {/*    Menus List*/}
                <div className={'mt-5 space-y-4'}>
                    {/* Index */}

                    <SidebarMenu>
                        <ViewGridIcon className={'h-5'}/>
                        <span>dashboard</span>
                    </SidebarMenu>

                    {/* Statistics */}

                        <div>
                            <div onClick={()=>setIsOpenedSubmenu(!isOpenedSubmenu)}
                                className={`flex items-center transition-all ${isOpenedSubmenu && currentTheme === "dark"? "bg-accent pl-2 " : "bg-blue-500/20 pl-2 "} ${currentTheme === "dark" ? "hover:bg-accent hover:pl-2" : "hover:bg-blue-500/20 hover:pl-2"}
                                 hover:pl-2 pr-2 duration-300 ease-in-out justify-between group  rounded-lg  py-2 cursor-pointer`}>
                                <div
                                    className={'flex space-x-2   items-center capitalize'}>
                                    <ChartBarIcon className={'h-5'}/>
                                    <span>Statistics</span>
                                </div>

                                <div>
                                    <ChevronDownIcon className={`h-5 ${isOpenedSubmenu ? 'rotate-180' :''} duration-300 ease-in-out transition-transform`}/>
                                </div>
                            </div>

                            {/*  Statistics -Sub Menus  */}


                            {isOpenedSubmenu  && (
                                <div className={''}>
                                    <div className={`${currentTheme==="dark" ? "bg-accent" : "bg-blue-500/20 text-blue-600"}  flex flex-col  my-2 rounded-lg pl-6 text-sm py-2 space-y-2`}>
                                        <Submenu title={'Children'} linkTo={'/statistics/children'}/>
                                        <Submenu title={'Youth'} linkTo={'/statistics/youth'}/>
                                        <Submenu title={'Elder'} linkTo={'/statistics/elders'}/>
                                    </div>
                                </div>
                            )}
                        </div>


                    {/* Citizen */}
                    <SidebarMenu linkTo={'/citizens'}>
                        <UserGroupIcon className={'h-5'}/>
                        <span>Citizens</span>
                    </SidebarMenu>

                    {/* My Account */}
                    <div
                        className={`flex items-center justify-between ${currentTheme === "dark" ? "hover:bg-accent" : "hover:bg-blue-500/20"} group hover:rounded-lg  py-2 cursor-pointer`}>
                        <div
                            className={'flex space-x-2 group-hover:pl-2 transition-all duration-300 ease-in-out items-center capitalize'}>
                            <AdjustmentsIcon className={'h-5 rotate-90'}/>
                            <span>Preferences</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Current User */}
            <div className={'flex space-x-3'}>
                <div className={'relative h-12 w-12 bg-gray-500 flex items-center justify-center rounded-xl '}>
                    <FontAwesomeIcon icon={faUser} className={'h-8 w-8'}/>
                    <div
                        className={'h-3 w-3 bg-blue-500 absolute right-1 -top-1 rounded-full ring-4 ring-skin-secondary'}></div>
                </div>

                <div className={'leading-5'}>
                    <h1>{authUser.firstName}</h1>
                    <span className={'text-sm opacity-80 tracking-wider'}>{authUser.lastName}</span>
                </div>
            </div>

        </section>
    )
}
export default SideBar;