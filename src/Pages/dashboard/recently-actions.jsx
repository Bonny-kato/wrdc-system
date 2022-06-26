import {useGlobalContext} from "../../context/global-context";
import {useSelector} from "react-redux";
import {getAge} from "../../utils";

const RecentlyActions = () =>{
    const {citizens, isLoading} = useGlobalContext();
    console.log("citizens", citizens)

    return (
        <div className={'space-y-8'}>
            <div className={`text-skin-base font-semibold text-lg`}>
                Recently Action
            </div>

            <div className={'grid grid-cols-3 gap-4'}>
                <div className={''}>
                    <div className={`h-[18rem] bg-skin-secondary shadow-base  rounded-xl`}>

                    </div>
                </div>
                <div className={'h-10 col-span-2'}>
                    <div className={`h-[18rem] bg-skin-secondary shadow-base text-skin-base rounded-xl overflow-hidden p-1`}>
                        <div className={'rounded-t-xl h-full overflow-hidden'}>
                            {isLoading ? (
                                <div className={'h-full w-full flex-col space-y-5 flex justify-center items-center text-skin-base'}>
                                    <div className={'h-12 w-12 border-2 border-blue-600 rounded-full border-t-transparent animate-spin'}></div>
                                    <p className={'text-skin-base text-sm tracking-wider'}>Loading Citizens</p>
                                </div>
                            ) : (
                                <>
                                    {citizens ? (
                                        <table className={'w-full '}>
                                            <tr>
                                                <th className="text-xs py-2 uppercase title tracking-wider font-semibold ">name</th>
                                                <th className="text-xs uppercase title tracking-wider font-semibold ">gender</th>
                                                <th className="text-xs uppercase title tracking-wider font-semibold ">age</th>
                                                <th className="text-xs uppercase title tracking-wider font-semibold ">title</th>
                                                <th className="text-xs uppercase title tracking-wider font-semibold ">house</th>
                                            </tr>

                                            {citizens.slice(0, 5)?.map((citizen, idx) => (

                                                <tr key={idx} className={`border-b-[1px]  cursor-pointer border-b-secondary/10`}>
                                                    <th className="text-xs py-4 uppercase title tracking-wider font-semibold ">
                                                        {citizen.firstName } </th>
                                                    <th className="text-xs uppercase title tracking-wider font-semibold ">{citizen.gender}</th>
                                                    <th className="text-xs uppercase title tracking-wider font-semibold ">{getAge(citizen.dob)}</th>
                                                    <th className="text-xs capitalize title tracking-wider font-semibold ">{citizen.title}</th>
                                                    <th className="text-xs uppercase title tracking-wider font-semibold ">{citizen.house.identificationNumber}</th>
                                                </tr>
                                            ))}
                                        </table>
                                    ) : (
                                        <div className={'h-full w-full flex justify-center items-center text-skin-base'}>
                                            <p className={'opacity-60 text-sm'}>Nothing to show</p>
                                        </div>
                                    )}
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecentlyActions;