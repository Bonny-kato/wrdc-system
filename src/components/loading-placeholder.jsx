import SpinLoader from "./SpinLoader";
import BaseLayout from "../Layouts/BaseLayout";

const LoadingPlaceholder = () => {
    return (
        <BaseLayout>
            <div className={'flex h-[90%] justify-center text-skin-base items-center'}>
                <div className={'flex flex-col items-center space-y-5'}>
                    <SpinLoader size={'large'}/>
                    <p className={'text-sm tracking-wider'}>Loading Details</p>
                </div>
            </div>
        </BaseLayout>
    )
}
export default LoadingPlaceholder;