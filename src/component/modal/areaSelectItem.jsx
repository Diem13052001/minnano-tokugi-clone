import PropTypes from 'prop-types';
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
AreaSelectItem.propTypes = {
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}
export default AreaSelectItem;