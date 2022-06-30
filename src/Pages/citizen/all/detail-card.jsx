import Avatar from "../../../components/avatar";

const DetailCard = ({title, value, iconName}) =>{
    return (
        <div className={'flex items-center space-x-3 bg-skin-secondary shadow-base overflow-hidden rounded-lg px-2 py-4'}>
            <div>
                <Avatar iconName={iconName} />
            </div>
            <div className={'text-sm space-y-1'}>
                <p className={'capitalize'}>{title}</p>
                <p className={'font-medium  text-xs capitalize'}>{value}</p>
            </div>
        </div>
    )
}
export default DetailCard;