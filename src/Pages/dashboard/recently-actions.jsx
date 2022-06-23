import {useGlobalContext} from "../../context/global-context";

const RecentlyActions = () =>{
    const {citizens} = useGlobalContext();

    return (
        <div className={'space-y-8'}>
            <p className={'text-secondary font-semibold text-lg'}>
                Recently Action
            </p>

            <div className={'grid grid-cols-3 gap-4'}>
                <div className={''}>
                    <div className={'h-[18rem] bg-white/5 rounded-xl'}>

                    </div>
                </div>
                <div className={'h-10 col-span-2'}>
                    <div className={'h-[18rem] bg-white/5 rounded-xl overflow-hidden p-1'}>
                        <div className={'rounded-t-xl overflow-hidden'}>
                            <table className={'w-full '}>
                                <tr className="bg-accent3/50 text-secondary ">
                                    <th className="text-xs py-2 uppercase title tracking-wider font-semibold ">name</th>
                                    <th className="text-xs uppercase title tracking-wider font-semibold ">gender</th>
                                    <th className="text-xs uppercase title tracking-wider font-semibold ">age</th>
                                    <th className="text-xs uppercase title tracking-wider font-semibold ">title</th>
                                    <th className="text-xs uppercase title tracking-wider font-semibold ">house</th>
                                </tr>

                                {citizens.slice(0,5).map((citizen, idx) => (
                                    <tr key={idx} className="border-b-[1px] text-secondary border-b-secondary/10">
                                        <th className="text-xs py-4 uppercase title tracking-wider font-semibold ">
                                            {citizen.first_name } </th>
                                        <th className="text-xs uppercase title tracking-wider font-semibold ">{citizen.gender}</th>
                                        <th className="text-xs uppercase title tracking-wider font-semibold ">{citizen.age}</th>
                                        <th className="text-xs uppercase title tracking-wider font-semibold ">{citizen.title}</th>
                                        <th className="text-xs uppercase title tracking-wider font-semibold ">{citizen.house_number}</th>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecentlyActions;