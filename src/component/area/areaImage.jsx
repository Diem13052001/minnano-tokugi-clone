

function AreaImage (props) {
    
    return (
        <img src={`${props.isActive ? props.imgActive : props.img}`}></img>
    )
}
export default AreaImage