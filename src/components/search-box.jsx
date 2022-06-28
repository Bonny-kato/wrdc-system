import {SearchIcon} from "@heroicons/react/solid";

const SearchBox = ({placeholder='', onChange}) => {
    return (
        <div  className={`bg-skin-primary relative  relative rounded-md  flex items-center px-2  h-10 `}>
            <SearchIcon className={'h-6 opacity-90'}/>
            <input type="text"
                   onChange={onChange}
                   className={'bg-transparent opacity-80 tracking-wide w-[240px] placeholder-secondary outline-none h-full w-full pl-1 text-sm'}
                   placeholder={placeholder}/>
        </div>
    )
}
export default SearchBox;