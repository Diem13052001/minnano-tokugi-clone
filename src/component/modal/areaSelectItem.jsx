
function AreaSelectItem (props) {
    const {text, img} = props;
    return (
        <dl>
            <dt>
                <img src={img}></img>
            </dt>
            <dd>{text}</dd>
        </dl>
    )
}
export default AreaSelectItem;