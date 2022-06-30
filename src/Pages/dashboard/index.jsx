import BaseLayout from "../../Layouts/BaseLayout";
import StatisticCard from "../../components/statistic-card";
import RecentlyActions from "./recently-actions";
import BarChart from "../../charts/bar";
import {useGlobalContext} from "../../context/global-context";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const {citizensGroups, citizens} = useGlobalContext();
    const {male, female, youth, elders, children, disability} = citizensGroups;
    const statistics = {
        all: children.length + youth.length + elders.length,
        youth: youth.length,
        elders:elders.length,
        children:children.length,
        male: male.length,
        female:female.length,
        disability:disability.length
    }
    return (
        <BaseLayout>
            <section>
                {/* Current Tile */}
                <div className={`text-skin-base font-semibold text-lg`}>
                    Overview
                </div>

                <div className={'space-y-8'}>
                    <div className={'grid  grid-cols-2 gap-x-8 mt-6'}>
                        <div className={`h-[18rem] p-3 bg-skin-secondary shadow-base rounded-xl`}>
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
                            <StatisticCard linkTo={'/citizens'} title={"citizens"} value={statistics.all || 0}/>
                            <StatisticCard linkTo={'/statistics/children'} title={"children"} value={statistics.children || 0}/>
                            <StatisticCard linkTo={'/statistics/youth'} title={"youth"} value={statistics.youth || 0}/>
                            <StatisticCard linkTo={'/statistics/elders'} title={"elders"} value={statistics.elders || 0}/>
                        </div>
                    </div>

                    <RecentlyActions citizens={citizens} statistics={statistics}/>
                </div>
            </section>
        </BaseLayout>
    )
}

export default Dashboard;