import {MoonIcon, SearchIcon, SunIcon} from "@heroicons/react/solid";
import {BellIcon, MailIcon, MailOpenIcon} from "@heroicons/react/outline";
import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "../Actions/actions";

const Header = () => {
    const currTheme = useSelector((state) => state.theme)
    const dispatch = useDispatch();

    const enableLightTheme = ()  =>{
        console.log('enable light theme..')
        dispatch(changeTheme('light'))
    }

    const enableDarkTheme = () =>{
        console.log('enable dark theme..')
        dispatch(changeTheme('dark'))
    }
    return (
        <header className={'border-b border-accent px-5 py-2 flex items-center justify-between'}>
            <div></div>
            <div className={'flex items-center space-x-2'}>

                {/* Global Search Box */}
                <div className={'bg-white/10 relative rounded overflow-hidden flex items-center px-2  h-8 '}>
                    <SearchIcon className={'h-6 text-secondary'}/>
                    <input type="text"
                           className={'bg-transparent text-secondary tracking-wide w-[240px] placeholder-secondary outline-none h-full w-full pl-1 text-sm'}
                           placeholder={'Search Everywhere...'}/>
                </div>

                {/* Quick Actions Buttons */}
                <div className={'flex space-x-2 pr-5'}>
                    {/* Email */}
                    <div
                        className={'h-8 w-8 group relative  bg-white/10 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded text-secondary '}>
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
                        className={'h-8 w-8 group flex bg-white/10 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded text-secondary justify-center items-center'}>
                        <BellIcon
                            className={'h-6 group-hover:rotate-45 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'}/>
                    </div>

                    {/* Theme */}
                    <div
                        className={'h-8 w-8 group flex bg-white/10 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded text-secondary justify-center items-center'}>
                        {
                            currTheme === 'light' ? (
                                <SunIcon onClick={enableDarkTheme} className={'h-6 group-hover:rotate-180 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'}/>)
                                : (<MoonIcon onClick={enableLightTheme} className={'h-6 group-hover:rotate-180 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105'} />)
                        }

                    </div>
                </div>
                <div className={'relative h-8 w-8'}>
                    <img src="https://i.pinimg.com/474x/d0/5d/7d/d05d7db403f6a21226221ce0d15cf163.jpg" alt=""
                         className={'h-8 rounded-full w-8'}/>
                    <div
                        className={'h-3 w-3 bg-blue-500 absolute -right-1 top-0 rounded-full ring-2 ring-primary'}></div>
                </div>
            </div>
        </header>
    )
}
export default Header;