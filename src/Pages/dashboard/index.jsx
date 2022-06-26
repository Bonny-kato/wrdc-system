import BaseLayout from "../../Layouts/BaseLayout";
import StatisticCard from "../../components/statistic-card";
import RecentlyActions from "./recently-actions";
import BarChart from "../../charts/bar";
import {useGlobalContext} from "../../context/global-context";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const {citizensGroups} = useGlobalContext();
    const statistics = {
        all: citizensGroups?.children.length + citizensGroups?.youth.length + citizensGroups?.elders.length,
        youth: citizensGroups?.youth.length,
        elders:citizensGroups?.elders.length,
        children:citizensGroups?.children.length
    }


    return (
        <BaseLayout>
            <section>
                {/* Current Tile */}
                <div className={`text-skin-base font-semibold text-lg`}>
                    Overview
                </div>

                <div className={'space-y-8'}>
                    <div className={'grid grid-cols-2 gap-x-8 mt-6'}>
                        <div className={`h-[18rem] bg-skin-secondary shadow-base rounded-xl`}>
                            <BarChart
                                labels={[
                                    "All citizen",
                                    "Children",
                                    "Youth",
                                    "Elder",
                                ]}
                                data={[
                                    statistics.all,
                                    statistics.children,
                                    statistics.youth,
                                    statistics.elders,
                                ]}
                            />
                        </div>

                        <div className={'grid grid-cols-2 gap-4'}>
                            <StatisticCard title={"Citizens"} value={statistics.all || 0}/>
                            <StatisticCard title={"Children"} value={statistics.children || 0}/>
                            <StatisticCard title={"Youth"} value={statistics.youth || 0}/>
                            <StatisticCard title={"Elders"} value={statistics.elders || 0}/>
                        </div>
                    </div>

                    <RecentlyActions/>
                </div>
            </section>
        </BaseLayout>
    )
}

export default Dashboard;