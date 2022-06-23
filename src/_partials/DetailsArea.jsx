import Header from "./Header";

const DetailsArea = (props) => {
    console.log(props)
    return (
        <section className={'details-area bg-accent/95 overflow-hidden'}>
           <Header />
            <section className={'px-10 py-6 h-full overflow-y-auto'}>
                {props.props.children}
            </section>
        </section>
    )
}
export default DetailsArea;