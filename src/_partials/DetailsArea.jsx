import Header from "./Header";
import {useSelector} from "react-redux";

const DetailsArea = (props) => {
    const currentTheme = useSelector((state) => state.theme)
    return (
        <section className={`details-area bg-skin-primary overflow-hidden`}>
           <Header />
            <section className={'px-10 py-6 h-full overflow-y-auto'}>
                {props.props.children}
            </section>
        </section>
    )
}
export default DetailsArea;