
function AreaMap (props) {

    const _onClick = () => {
        props.setActive(props.id)
    }

    return (
        <div 
        onClick={_onClick}
        className={`area__map__btn arrow ${props.className} ${props.isActive ? 'showActive' : ''}`}>
            {props.name}
        </div>
    )
}
export default AreaMap;