import {
    AdjustmentsIcon,
    ChartBarIcon,
    ChevronDownIcon,
    MenuAlt1Icon,
    SearchIcon, UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";

const
    SideBar = () => {
        return (
            <section className={'w-[240px] p-5 bg-primary h-full flex flex-col justify-between text-secondary'}>
                <div className={'space-y-5'}>
                    <div className={'text-xl font-semibold tracking-wider flex justify-between items-center'}>
                        <div>
                            <span className={'text-blue-500'}>WDRC</span> <span>System</span>
                        </div>
                        <div>
                            <span><MenuAlt1Icon className={'h-5 cursor-pointer rotate-180'}/></span>
                        </div>
                    </div>

                    {/* Search Box */}
                    <div className={' mt-5 relative'}>
                        <input
                            className={'w-full rounded-full outline-none focus:border-[2px] transition-all duration-100 focus:border-blue-500 font-light text-sm pl-8 py-2 bg-accent2'}
                            type="text" placeholder={'Search..'}/>
                        <div className={'absolute top-0 left-0 flex items-center pl-2 h-full'}>
                            <SearchIcon className={'h-5'}/>
                        </div>
                    </div>

                    {/*    Menus List*/}
                    <div className={'mt-5'}>
                        {/* Dashboard */}
                        <div
                            className={'flex items-center justify-between group hover:rounded-lg hover:bg-accent py-2 cursor-pointer'}>
                            <div
                                className={'flex space-x-2 group-hover:pl-2 transition-all duration-300 ease-in-out items-center capitalize'}>
                                <ViewGridIcon className={'h-5'}/>
                                <span>dashboard</span>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className={'space-y-2'}>
                            <div
                                className={'flex items-center justify-between group hover:rounded-lg hover:bg-accent py-2 cursor-pointer'}>
                                <div
                                    className={'flex space-x-2 group-hover:pl-2 transition-all duration-300 ease-in-out items-center capitalize'}>
                                    <ChartBarIcon className={'h-5'}/>
                                    <span>Statistics</span>
                                </div>

                                <div>
                                    <ChevronDownIcon className={'h-5'}/>
                                </div>
                            </div>

                            {/*  Statistics -Sub Menus  */}
                            <div className={''}>
                                <div className={'bg-accent  my-2 rounded-lg pl-6 text-sm py-2 space-y-2'}>
                                    <div className={'w-full opacity-50 hover:opacity-100 cursor-pointer'}>
                                        <a href="">Children</a>
                                    </div>
                                    <div className={'w-full opacity-50 hover:opacity-100 cursor-pointer'}>
                                        <a href="">Youth</a>
                                    </div>
                                    <div className={'w-full opacity-50 hover:opacity-100 cursor-pointer'}>
                                        <a href="">Elders</a>
                                    </div>
                                    <div className={'w-full opacity-50 hover:opacity-100 cursor-pointer'}>
                                        <a href="">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Citizen */}
                        <div
                            className={'flex items-center justify-between group hover:rounded-lg hover:bg-accent py-2 cursor-pointer'}>
                            <div
                                className={'flex space-x-2 group-hover:pl-2 transition-all duration-300 ease-in-out items-center capitalize'}>
                                <UserGroupIcon className={'h-5'}/>
                                <span>Citizens</span>
                            </div>
                        </div>

                        {/* My Account */}
                        <div
                            className={'flex items-center justify-between group hover:rounded-lg hover:bg-accent py-2 cursor-pointer'}>
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
                    <div className={'relative h-12 w-12'}>
                        <img src="https://i.pinimg.com/474x/d0/5d/7d/d05d7db403f6a21226221ce0d15cf163.jpg" alt=""
                             className={'h-10 rounded-lg w-10'}/>
                        <div
                            className={'h-3 w-3 bg-blue-500 absolute right-1 top-0 rounded-full ring-4 ring-primary'}></div>
                    </div>

                    <div className={'leading-5'}>
                        <h1>Black Software</h1>
                        <span className={'text-sm opacity-80 tracking-wider'}>Admin</span>
                    </div>
                </div>

            </section>
        )
    }
export default SideBar;