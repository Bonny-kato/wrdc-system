const DetailsArea = (props) => {
    console.log(props)
    return (
        <section className={'details-area'}>
            {props.props.children}
        </section>
    )
}
export default DetailsArea;