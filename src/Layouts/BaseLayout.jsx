import SideBar from "../_partials/SideBar";
import DetailsArea from "../_partials/DetailsArea";
import {useGlobalContext} from "../context/global-context";

const BaseLayout = (props) =>{
    const {currTheme} = useGlobalContext()
    return (
        <section theme={currTheme}  className={'h-screen flex outline-white'}>
            <SideBar />
            <DetailsArea props={props}/>
        </section>
    )
}
export default BaseLayout;