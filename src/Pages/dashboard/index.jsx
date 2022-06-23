import BaseLayout from "../../Layouts/BaseLayout";
import StatisticCard from "../../components/statistic-card";
import RecentlyActions from "./recently-actions";
import BarChart from "../../charts/bar";
import {useGlobalContext} from "../../context/global-context";

const Dashboard = () => {
    const {statistics} = useGlobalContext();
    return (
        <BaseLayout>
            <section>
                {/* Current Tile */}
                <div className={'text-secondary font-semibold text-lg'}>
                    Overview
                </div>

                <div className={'space-y-8'}>
                    <div className={'grid grid-cols-2 gap-x-8 mt-6'}>
                        <div className={'h-[18rem] bg-white/5 rounded-xl'}>
                            <BarChart
                                labels={[
                                    "All citizen",
                                    "Chldren",
                                    "Youth",
                                    "Elder",
                                ]}
                                data={[
                                    statistics.all,
                                    statistics.children,
                                    statistics.youth,
                                    statistics.children,
                                ]}
                            />
                        </div>

                        <div className={'grid grid-cols-2 gap-4 text-secondary'}>
                            <StatisticCard title={"Citizens"} value={statistics.all}/>
                            <StatisticCard title={"Children"} value={statistics.children}/>
                            <StatisticCard title={"Youth"} value={statistics.youth}/>
                            <StatisticCard title={"Elders"} value={statistics.elders}/>
                        </div>
                    </div>

                    <RecentlyActions/>
                </div>
            </section>
        </BaseLayout>
    )
}

export default Dashboard;