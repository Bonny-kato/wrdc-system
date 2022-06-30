import SearchBox from "../../components/search-box";
import HouseCard from "./house-card";

const HouseList = ({handleSearch, handleSelectedHouse, isSelected, filteredHouseList}) => {
    return (
        <div className={'col-span-2 space-y-3 p-3 rounded-xl  bg-skin-secondary shadow-base'}>
            <div className={'flex justify-end'}>
                <SearchBox onChange={handleSearch} placeholder={'Search Houses...'}/>
            </div>

            <div
                className={'grid grid-cols-4 rounded-xl h-[27.5rem] overflow-y-auto scrollbar-hide p-2 bg-skin-primary gap-4'}>
                {filteredHouseList.map((house) => (
                    <HouseCard isSelected={isSelected(house)} onClick={handleSelectedHouse} house={house}/>
                ))}
            </div>
        </div>
    )
}
export default HouseList;