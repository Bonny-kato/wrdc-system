import SideBar from "../_partials/SideBar";
import DetailsArea from "../_partials/DetailsArea";

const BaseLayout = (props) =>{
    return (
        <section className={'h-screen flex outline-white'}>
            <SideBar />
            <DetailsArea props={props}/>
        </section>
    )
}
export default BaseLayout;