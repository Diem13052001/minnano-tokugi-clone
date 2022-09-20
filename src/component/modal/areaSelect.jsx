import PropTypes from 'prop-types';
import { itemAreaTypes } from '../area/area'
import AreaSelectItem from "./areaSelectItem";

function AreaSelect (props) {
    return (
        <div className={`area__select ${props.isActive ? 'active' : ''}`} id={props.className}>
            <div className="area__select__title">{props.name}</div>
            <div className="area__select__contents">
                <AreaSelectItem text={props.text1} img="https://minnano-tokugi.com/file/box/minnanotokugi/img/area_icon_1.png"/>
                <AreaSelectItem text={props.text2} img="https://minnano-tokugi.com/file/box/minnanotokugi/img/area_icon_2.png"/>
                <AreaSelectItem text={props.text3} img="https://minnano-tokugi.com/file/box/minnanotokugi/img/area_icon_3.png"/>
                <AreaSelectItem text={props.text4} img="https://minnano-tokugi.com/file/box/minnanotokugi/img/area_icon_4.png"/>
            </div>
        </div>
    )
}
// AreaSelect.propTypes = itemAreaTypes
AreaSelect.defaultProps = {
    isActive: false
};
export default AreaSelect