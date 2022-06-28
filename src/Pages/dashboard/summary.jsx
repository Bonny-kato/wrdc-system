import SummaryCard from "./summary-card";

const Summary = ({statistics}) => {
    return (
        <div className={`h-[18rem] space-y-10 bg-skin-secondary text-skin-base shadow-base p-3  rounded-xl`}>
            <div className={`text-skin-base font-semibold text-lg flex justify-between`}>
                <p>Summary</p>

            </div>
            <div className={'grid grid-cols-4 gap-y-10 bg-skin-primary p-3 rounded-lg'}>
                <SummaryCard name={'all citizen'} total={statistics.all}/>
                <SummaryCard name={'children'} total={statistics.children}/>
                <SummaryCard name={'elders'} total={statistics.elders}/>
                <SummaryCard name={'youth'} total={statistics.youth}/>
                <SummaryCard name={'disability'} total={statistics.disability}/>
                <SummaryCard name={'female'} total={statistics.female}/>
                <SummaryCard name={'male'} total={statistics.male}/>
            </div>
        </div>
    )
}
export default Summary;